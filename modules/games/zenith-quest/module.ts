import { GameModule } from '../types'
import dynamic from 'next/dynamic'

export const ZenithQuestModule: GameModule = {
	meta: {
		slug: 'zenith-quest',
		title: 'Zenith Quest',
		thumbnail: '/games/zenith-quest.png',
		category: 'RPG',
		price: '$49.99',
	},
	Component: dynamic(() => import('./index'), {
		ssr: false,
	}),
}
