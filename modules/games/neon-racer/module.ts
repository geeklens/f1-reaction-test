import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const NeonRacerModule: GameModule = {
	meta: {
		slug: 'neon-racer',
		title: 'Neon Racer',
		thumbnail: '/games/neon-racer.png',
		category: 'Racing',
		price: 'Free',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
