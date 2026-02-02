'use client'

import { Search, Filter } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { UnifiedItem } from '@/components/shared/unified-item'
import { ALL_GAMES } from '@/modules/games/registry'
import { filterGames, getUniqueCategories } from '@/modules/games/catalog-logic'
import { GameCategory } from '@/modules/games/types'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useState, useMemo } from 'react'

export default function GamesCatalog() {
	const router = useRouter()
	const [searchQuery, setSearchQuery] = useState('')
	const [selectedCategory, setSelectedCategory] = useState<
		GameCategory | 'All'
	>('All')

	// Cache the raw metadata list to avoid repeated object Object.values calls
	const allGamesMetadata = useMemo(
		() => Object.values(ALL_GAMES).map(g => g.meta),
		[],
	)

	// Pure logic: extract categories
	const allCategories = useMemo(
		() => getUniqueCategories(allGamesMetadata),
		[allGamesMetadata],
	)

	// Pure logic: filter games
	const filteredGames = useMemo(
		() => filterGames(allGamesMetadata, searchQuery, selectedCategory),
		[allGamesMetadata, searchQuery, selectedCategory],
	)

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
								value={searchQuery}
								onChange={e => setSearchQuery(e.target.value)}
								className='pl-12 md:pl-14 h-14 md:h-16 bg-secondary/10 border-none rounded-[20px] md:rounded-[24px] focus-visible:ring-primary text-base md:text-lg font-medium transition-all focus:bg-secondary/20'
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
					{allCategories.map(cat => (
						<Button
							key={cat}
							variant={selectedCategory === cat ? 'default' : 'secondary'}
							onClick={() => setSelectedCategory(cat)}
							className={cn(
								'rounded-full px-8 h-12 font-bold transition-all whitespace-nowrap',
								selectedCategory === cat
									? 'bg-primary text-primary-foreground'
									: 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20',
							)}
						>
							{cat}
						</Button>
					))}
				</div>
			</section>

			{/* Unified Grid */}
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
				{filteredGames.map((game, i) => (
					<motion.div
						key={game.slug}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: i * 0.05 }}
					>
						<UnifiedItem
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

			{filteredGames.length === 0 && (
				<div className='flex flex-col items-center justify-center py-20 bg-secondary/5 rounded-[32px] border-2 border-dashed border-border/50'>
					<p className='text-muted-foreground font-bold uppercase tracking-widest text-xs'>
						No games found matching your search
					</p>
					<Button
						variant='link'
						onClick={() => {
							setSearchQuery('')
							setSelectedCategory('All')
						}}
						className='mt-2 text-primary font-black uppercase tracking-tighter'
					>
						Reset Filters
					</Button>
				</div>
			)}
		</div>
	)
}
