'use client'

import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { AppCard } from '@/components/shared/app-card'
import { GAME_METADATA } from '@/modules/games/registry'
import { useRouter } from 'next/navigation'

export default function GamesCatalog() {
	const router = useRouter()
	const games = Object.values(GAME_METADATA)
	const categories = ['All', 'Action', 'RPG', 'Strategy', 'Shooter', 'Sports']

	return (
		<div className='space-y-10'>
			{/* M3 Search Bar */}
			<section className='space-y-6'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6'>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
						Catalog
					</h2>

					<div className='flex items-center gap-3 w-full md:w-auto'>
						<div className='relative flex-1 md:w-80'>
							<Search className='absolute left-5 md:left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
							<Input
								placeholder='Search catalog...'
								className='pl-12 md:pl-14 h-14 md:h-16 bg-secondary/10 border-none rounded-[20px] md:rounded-[24px] focus-visible:ring-primary text-base md:text-lg font-medium'
							/>
						</div>
						<Button
							variant='secondary'
							className='h-14 w-14 md:h-16 md:w-16 rounded-[20px] md:rounded-[24px] bg-secondary/10 border-none hover:bg-secondary/20 shrink-0'
						>
							<Filter className='h-5 w-5 md:h-6 md:w-6' />
						</Button>
					</div>
				</div>

				{/* Unified Categories (Pills) */}
				<div className='flex gap-2 overflow-x-auto pb-2 scrollbar-hide'>
					{categories.map((cat, i) => (
						<Button
							key={cat}
							variant={i === 0 ? 'default' : 'secondary'}
							className={`rounded-full px-8 h-12 font-bold transition-all ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20'}`}
						>
							{cat}
						</Button>
					))}
				</div>
			</section>

			{/* Unified Grid (radius 32px) */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{games.map((game, i) => (
					<motion.div
						key={game.slug}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: i * 0.05 }}
					>
						<AppCard
							variant='catalog'
							title={game.title}
							category={game.category}
							price={game.price}
							isFree={game.price === 'Free'}
							onAction={() => router.push(`/game/${game.slug}`)}
						/>
					</motion.div>
				))}
			</div>
		</div>
	)
}
