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

export interface GameModule extends GameMetadata {
	init?: () => void
	destroy?: () => void
}

export interface GameComponentProps {
	metadata: GameMetadata
}

export type GameComponent = React.ComponentType<GameComponentProps>
