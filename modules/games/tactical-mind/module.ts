import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const TacticalMindModule: GameModule = {
	meta: {
		slug: 'tactical-mind',
		title: 'Tactical Mind',
		thumbnail: '/games/tactical-mind.png',
		category: 'Strategy',
		price: '$14.99',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
