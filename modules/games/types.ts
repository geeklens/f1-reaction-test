export interface GameModule {
	slug: string
	title: string
	thumbnail: string
	init?: () => void
	destroy?: () => void
}

export interface GameComponentProps {
	module: GameModule
}

export type GameComponent = React.ComponentType<GameComponentProps>
