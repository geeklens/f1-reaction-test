import dynamic from 'next/dynamic'
import { GameMetadata } from './types'
import { ComponentType } from 'react'

export const GAMES: Record<string, ComponentType<any>> = {
	'neural-reaction': dynamic(() => import('./neural-reaction'), {
		ssr: false,
	}),
	'cyber-adventure': dynamic(() => import('./cyber-adventure'), {
		ssr: false,
	}),
	'void-hunter': dynamic(() => import('./void-hunter'), { ssr: false }),
	'zenith-quest': dynamic(() => import('./zenith-quest'), { ssr: false }),
	'neon-racer': dynamic(() => import('./neon-racer'), { ssr: false }),
	'tactical-mind': dynamic(() => import('./tactical-mind'), { ssr: false }),
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
