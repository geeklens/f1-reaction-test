'use client'

import { TrendingUp, Info, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { UnifiedItem } from '@/components/shared/unified-item'
import { useRouter } from 'next/navigation'

export default function Home() {
	const router = useRouter()
	const recentGames = [
		{ title: 'Neural Reaction', lastPlayed: '2h ago', slug: 'neural-reaction' },
		{
			title: 'Cyberpunk 2077',
			lastPlayed: 'Yesterday',
			slug: 'cyber-adventure',
		}, // Mapping to a slug we have
		{ title: 'Void Hunter', lastPlayed: '3d ago', slug: 'void-hunter' },
	]

	return (
		<div className='space-y-6 md:space-y-10 pb-10'>
			{/* M3 Welcome Section */}
			<section className='py-4 md:py-6'>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className='space-y-1 md:space-y-2'
				>
					<h2 className='text-3xl md:text-5xl font-bold tracking-tight text-foreground'>
						Hi, Geek
					</h2>
					<p className='text-muted-foreground text-base md:text-lg font-medium'>
						Ready for your next session?
					</p>
				</motion.div>
			</section>

			{/* M3 Recent Activity (Pills) */}
			<section className='space-y-4'>
				<div className='flex items-center justify-between px-2'>
					<h3 className='text-sm font-bold uppercase tracking-widest text-primary/80'>
						Recents
					</h3>
					<Link
						href='/games'
						className='text-xs font-bold text-primary flex items-center gap-1 hover:underline'
					>
						SEE ALL <ArrowRight className='w-3 h-3' />
					</Link>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{recentGames.map((game, i) => (
						<motion.div
							key={game.title}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: i * 0.05 }}
						>
							<UnifiedItem
								variant='recent'
								title={game.title}
								subtitle={game.lastPlayed.toUpperCase()}
								onAction={() => router.push(`/game/${game.slug}`)}
							/>
						</motion.div>
					))}
				</div>
			</section>

			{/* Unified Surface Sections */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
				<UnifiedItem
					title='Performance'
					icon={TrendingUp}
					actionLabel='View Analytics'
					onAction={() => {}}
					description={
						<>
							Your focus levels are{' '}
							<span className='text-primary'>12% higher</span> than last week.
						</>
					}
				/>

				<UnifiedItem title='System Status' icon={Info} onAction={() => {}}>
					<div className='space-y-4 pt-2'>
						<div className='flex items-center gap-3 p-4 rounded-2xl bg-secondary/10'>
							<div className='w-2 h-2 rounded-full bg-primary animate-pulse' />
							<p className='text-sm font-bold text-foreground/70'>
								V4.0 Precision Engine Live
							</p>
						</div>
						<div className='flex items-center gap-3 px-4'>
							<div className='w-2 h-2 rounded-full bg-muted-foreground/30' />
							<p className='text-sm font-medium text-muted-foreground italic'>
								Syncing global data...
							</p>
						</div>
					</div>
				</UnifiedItem>
			</div>
		</div>
	)
}
