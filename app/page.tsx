'use client'

import {
	Clock,
	Play,
	TrendingUp,
	Info,
	Gamepad2,
	ArrowRight,
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Home() {
	const recentGames = [
		{ title: 'Neural Reaction', lastPlayed: '2h ago' },
		{ title: 'Cyberpunk 2077', lastPlayed: 'Yesterday' },
		{ title: 'Void Hunter', lastPlayed: '3d ago' },
	]

	return (
		<div className='space-y-10'>
			{/* M3 Welcome Section */}
			<section className='py-6'>
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					className='space-y-2'
				>
					<h2 className='text-4xl md:text-5xl font-bold tracking-tight text-foreground'>
						Hi, Geek
					</h2>
					<p className='text-muted-foreground text-lg font-medium'>
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
							<div className='group bg-secondary/10 hover:bg-secondary/20 rounded-[24px] p-5 transition-all cursor-pointer flex items-center justify-between border border-transparent hover:border-primary/5'>
								<div className='flex items-center gap-4'>
									<div className='w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all'>
										<Gamepad2 className='w-6 h-6' />
									</div>
									<div>
										<h4 className='font-bold text-foreground text-sm tracking-tight'>
											{game.title}
										</h4>
										<p className='text-[10px] text-muted-foreground font-bold uppercase tracking-widest'>
											{game.lastPlayed}
										</p>
									</div>
								</div>
								<Button
									size='icon'
									variant='ghost'
									className='rounded-full bg-background/50 hover:bg-primary hover:text-primary-foreground transition-all h-10 w-10'
								>
									<Play className='w-4 h-4 fill-current' />
								</Button>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			{/* Unified Surface Sections */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
				<section className='p-8 rounded-[32px] bg-card border border-white/5 space-y-4 relative overflow-hidden group hover:bg-secondary/10 transition-colors'>
					<div className='relative z-10'>
						<div className='flex items-center gap-3 text-primary mb-4'>
							<div className='p-3 rounded-2xl bg-primary/10'>
								<TrendingUp className='w-6 h-6' />
							</div>
							<h3 className='font-black uppercase tracking-widest text-xs'>
								Performance
							</h3>
						</div>
						<p className='text-foreground/90 text-lg leading-relaxed font-bold'>
							Your focus levels are{' '}
							<span className='text-primary'>12% higher</span> than last week.
						</p>
						<Button
							variant='link'
							className='p-0 h-auto text-primary font-bold mt-2'
						>
							View Analytics
						</Button>
					</div>
				</section>

				<section className='p-8 rounded-[32px] bg-card border border-white/5 space-y-4 group hover:bg-secondary/10 transition-colors'>
					<div className='flex items-center gap-3 text-primary mb-4'>
						<div className='p-3 rounded-2xl bg-primary/10'>
							<Info className='w-6 h-6' />
						</div>
						<h3 className='font-black uppercase tracking-widest text-xs'>
							System Status
						</h3>
					</div>
					<div className='space-y-4'>
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
				</section>
			</div>
		</div>
	)
}
