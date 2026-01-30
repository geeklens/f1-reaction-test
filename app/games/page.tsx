'use client'

import { Search, Filter, Gamepad2, ArrowRight } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

export default function GamesCatalog() {
	const games = [
		{ title: 'Neural Reaction', category: 'Training', price: 'Free' },
		{ title: 'Cyber Adventure', category: 'Action', price: '$29.99' },
		{ title: 'Void Hunter', category: 'FPS', price: '$19.99' },
		{ title: 'Zenith Quest', category: 'RPG', price: '$49.99' },
		{ title: 'Neon Racer', category: 'Racing', price: 'Free' },
		{ title: 'Tactical Mind', category: 'Strategy', price: '$14.99' },
	]

	const categories = ['All', 'Action', 'RPG', 'Strategy', 'Shooter', 'Sports']

	return (
		<div className='space-y-10'>
			{/* M3 Search Bar */}
			<section className='space-y-6'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-6'>
					<h2 className='text-4xl font-bold tracking-tight'>Catalog</h2>

					<div className='flex items-center gap-3 w-full md:w-auto'>
						<div className='relative flex-1 md:w-80'>
							<Search className='absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground' />
							<Input
								placeholder='Search catalog...'
								className='pl-14 h-16 bg-secondary/10 border-none rounded-[24px] focus-visible:ring-primary text-lg font-medium'
							/>
						</div>
						<Button
							variant='secondary'
							className='h-16 w-16 rounded-[24px] bg-secondary/10 border-none hover:bg-secondary/20'
						>
							<Filter className='h-6 w-6' />
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
						key={game.title}
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ delay: i * 0.05 }}
					>
						<div className='group bg-card rounded-[32px] p-6 hover:bg-secondary/10 transition-all cursor-pointer border border-white/5 hover:border-primary/10'>
							<div className='flex items-start justify-between mb-8'>
								<div className='w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
									<Gamepad2 className='w-7 h-7' />
								</div>
								{game.price === 'Free' && (
									<Badge className='bg-primary/10 text-primary border-none rounded-full px-4 py-1 font-black text-[9px] tracking-widest uppercase'>
										Free
									</Badge>
								)}
							</div>

							<div className='space-y-1 mb-8'>
								<p className='text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]'>
									{game.category}
								</p>
								<h3 className='text-xl font-black italic uppercase tracking-tighter text-foreground leading-tight group-hover:text-primary transition-colors'>
									{game.title}
								</h3>
							</div>

							<div className='flex items-center justify-between pt-6 border-t border-muted/20'>
								<span className='font-bold text-foreground/50'>
									{game.price}
								</span>
								<Button
									variant='secondary'
									className='rounded-full bg-secondary/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-bold px-8 h-12 transition-all'
								>
									Add
								</Button>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	)
}
