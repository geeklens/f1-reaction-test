import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const CyberAdventureModule: GameModule = {
	meta: {
		slug: 'cyber-adventure',
		title: 'Cyber Adventure',
		thumbnail: '/games/cyber-adventure.png',
		category: 'Action',
		price: '$29.99',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
