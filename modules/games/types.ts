import { ComponentType } from 'react'

export type GameCategory =
	| 'Training'
	| 'Action'
	| 'FPS'
	| 'RPG'
	| 'Racing'
	| 'Strategy'
	| 'Shooter'
	| 'Sports'

/**
 * Basic metadata for any game in the catalog.
 */
export interface GameMetadata {
	slug: string
	title: string
	thumbnail: string
	category: GameCategory
	price: string
}

/**
 * Standardized result of a single game session.
 */
export interface SessionResult {
	timestamp: number
	score: number
	unit: 'ms' | 'pts' | '%'
	accuracy?: number
	isPersonalBest: boolean
}

/**
 * Strict contract for any game module in the system.
 */
export interface GameModule {
	meta: GameMetadata
	Component: ComponentType
}
