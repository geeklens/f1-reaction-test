import {
	Home,
	User,
	Gamepad2,
	Trophy,
	Zap,
	Target,
	History,
} from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { ALL_GAMES } from '../games/registry'

export type CommandType = 'navigation' | 'game' | 'action'

export interface Command {
	id: string
	title: string
	subtitle?: string
	icon: LucideIcon
	type: CommandType
	path?: string
	onAction?: () => void
	category?: string
}

/**
 * Centralized registry for all global commands and navigation actions.
 * Used primarily by the Cmd+K Command Palette.
 */
export const CommandRegistry = {
	/**
	 * Gets static navigation commands
	 */
	getNavigationCommands(): Command[] {
		return [
			{
				id: 'nav-home',
				title: 'Home',
				subtitle: 'Go to dashboard',
				icon: Home,
				type: 'navigation',
				path: '/',
			},
			{
				id: 'nav-catalog',
				title: 'Game Catalog',
				subtitle: 'Explore all modules',
				icon: Gamepad2,
				type: 'navigation',
				path: '/games',
			},
			{
				id: 'nav-profile',
				title: 'My Profile',
				subtitle: 'Stats and settings',
				icon: User,
				type: 'navigation',
				path: '/profile',
			},
		]
	},

	/**
	 * Gets dynamic game commands from the games registry
	 */
	getGameCommands(): Command[] {
		return Object.values(ALL_GAMES).map(game => ({
			id: `game-${game.meta.slug}`,
			title: game.meta.title,
			subtitle: `Launch ${game.meta.category} test`,
			icon: game.meta.slug === 'neural-reaction' ? Zap : Target,
			type: 'game',
			path: `/game/${game.meta.slug}`,
			category: game.meta.category,
		}))
	},

	/**
	 * Gets quick actions
	 */
	getQuickActions(): Command[] {
		return [
			{
				id: 'action-leaderboard',
				title: 'Global Leaderboard',
				subtitle: 'View world rankings',
				icon: Trophy,
				type: 'action',
				path: '/leaderboard',
			},
			{
				id: 'action-history',
				title: 'Session History',
				subtitle: 'Recent matches',
				icon: History,
				type: 'action',
				path: '/profile', // For now maps to profile
			},
		]
	},

	/**
	 * Search all available commands
	 */
	search(query: string): Command[] {
		const q = query.toLowerCase().trim()
		if (!q) return []

		const all = [
			...this.getNavigationCommands(),
			...this.getGameCommands(),
			...this.getQuickActions(),
		]

		return all
			.filter(
				c =>
					c.title.toLowerCase().includes(q) ||
					c.subtitle?.toLowerCase().includes(q) ||
					c.category?.toLowerCase().includes(q),
			)
			.slice(0, 10)
	},
}
