import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const NeuralReactionModule: GameModule = {
	meta: {
		slug: 'neural-reaction',
		title: 'Neural Reaction',
		thumbnail: '/games/neural-reaction.png',
		category: 'Training',
		price: 'Free',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
