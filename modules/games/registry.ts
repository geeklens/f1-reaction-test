import dynamic from 'next/dynamic'
import { GameModule } from './types'

export const GAMES: Record<
	string,
	() => Promise<{ default: React.ComponentType }>
> = {
	'neural-reaction': () => import('./neural-reaction'),
	'cyber-adventure': () => import('./cyber-adventure'),
	'void-hunter': () => import('./void-hunter'),
	'zenith-quest': () => import('./zenith-quest'),
	'neon-racer': () => import('./neon-racer'),
	'tactical-mind': () => import('./tactical-mind'),
}

export type GameCategory =
	| 'Training'
	| 'Action'
	| 'FPS'
	| 'RPG'
	| 'Racing'
	| 'Strategy'
	| 'Shooter'
	| 'Sports'

export interface GameMetadata {
	slug: string
	title: string
	thumbnail: string
	category: GameCategory
	price: string
}

export const GAME_METADATA: Record<string, GameMetadata> = {
	'neural-reaction': {
		slug: 'neural-reaction',
		title: 'Neural Reaction',
		thumbnail: '/games/neural-reaction.png',
		category: 'Training',
		price: 'Free',
	},
	'cyber-adventure': {
		slug: 'cyber-adventure',
		title: 'Cyber Adventure',
		thumbnail: '/games/cyber-adventure.png',
		category: 'Action',
		price: '$29.99',
	},
	'void-hunter': {
		slug: 'void-hunter',
		title: 'Void Hunter',
		thumbnail: '/games/void-hunter.png',
		category: 'FPS',
		price: '$19.99',
	},
	'zenith-quest': {
		slug: 'zenith-quest',
		title: 'Zenith Quest',
		thumbnail: '/games/zenith-quest.png',
		category: 'RPG',
		price: '$49.99',
	},
	'neon-racer': {
		slug: 'neon-racer',
		title: 'Neon Racer',
		thumbnail: '/games/neon-racer.png',
		category: 'Racing',
		price: 'Free',
	},
	'tactical-mind': {
		slug: 'tactical-mind',
		title: 'Tactical Mind',
		thumbnail: '/games/tactical-mind.png',
		category: 'Strategy',
		price: '$14.99',
	},
}
