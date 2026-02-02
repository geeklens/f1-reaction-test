import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const VoidHunterModule: GameModule = {
	meta: {
		slug: 'void-hunter',
		title: 'Void Hunter',
		thumbnail: '/games/void-hunter.png',
		category: 'FPS',
		price: '$19.99',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
