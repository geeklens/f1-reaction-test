'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Timer, Zap, RotateCcw, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNeuralReaction } from './use-neural-reaction'
import { useEffect } from 'react'

export default function NeuralReaction() {
	const {
		status,
		lightsCount,
		reactionTime,
		lastTime,
		bestTime,
		start,
		trigger,
	} = useNeuralReaction()

	// Keyboard support
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.code === 'Space') {
				e.preventDefault()
				trigger()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [trigger])

	const mockLeaderboard = [
		{ name: 'Max Verstappen', time: 168, rank: 1 },
		{ name: 'Lewis Hamilton', time: 174, rank: 2 },
		{ name: 'Charles Leclerc', time: 179, rank: 3 },
		{
			name: 'Geek Core',
			time: bestTime || '--',
			rank: bestTime ? 4 : '--',
			isUser: true,
		},
		{ name: 'Lando Norris', time: 185, rank: 5 },
	]

	return (
		<div className='space-y-8'>
			<div
				className={`relative h-[500px] w-full rounded-[32px] overflow-hidden cursor-pointer ${
					status === 'running'
						? 'bg-primary/20'
						: status === 'false-start'
							? 'bg-destructive/10'
							: 'bg-secondary/5'
				}`}
				onClick={trigger}
			>
				{/* Grid Background Effect */}
				<div className='absolute inset-0 opacity-[0.03] pointer-events-none'>
					<div
						className='h-full w-full'
						style={{
							backgroundImage:
								'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
							backgroundSize: '32px 32px',
						}}
					/>
				</div>

				<div className='relative z-10 h-full w-full flex flex-col items-center pt-20 select-none'>
					{/* F1 Lights Housing */}
					<div className='bg-zinc-900 rounded-[24px] p-6 shadow-2xl border-4 border-zinc-800 flex gap-4 md:gap-8'>
						{[0, 1, 2, 3, 4].map(idx => (
							<div key={idx} className='flex flex-col gap-3'>
								<div
									className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-zinc-800 ${
										status === 'running'
											? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.8)]'
											: lightsCount > idx
												? 'bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.8)]'
												: 'bg-zinc-950'
									}`}
								/>
								<div
									className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-zinc-800 ${
										status === 'running'
											? 'bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.8)]'
											: lightsCount > idx
												? 'bg-red-600 shadow-[0_0_30px_rgba(220,38,38,0.8)]'
												: 'bg-zinc-950'
									}`}
								/>
							</div>
						))}
					</div>

					{/* Status Message Area */}
					<div className='mt-16 w-full max-w-xl px-6 flex flex-col items-center justify-start h-48 relative'>
						<AnimatePresence mode='wait'>
							{status === 'idle' && (
								<motion.div
									key='idle'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0 }}
									className='text-center space-y-4'
								>
									<div className='p-4 rounded-3xl bg-primary/10 inline-block mb-2'>
										<Zap className='w-8 h-8 text-primary' />
									</div>
									<h3 className='text-3xl font-black italic uppercase tracking-tighter'>
										Neural Reaction
									</h3>
									<p className='text-muted-foreground font-bold uppercase tracking-widest text-[10px]'>
										Click or Press [SPACE] to start
									</p>
								</motion.div>
							)}

							{status === 'countdown' && (
								<motion.div
									key='countdown'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0 }}
									className='text-center'
								>
									<p className='text-2xl font-black italic uppercase tracking-tighter'>
										Wait for lights out...
									</p>
								</motion.div>
							)}

							{status === 'running' && (
								<div key='running' className='text-center'>
									<h2 className='text-6xl md:text-8xl font-black italic uppercase tracking-tight text-primary drop-shadow-[0_0_30px_rgba(var(--primary),0.5)]'>
										CLICK!
									</h2>
								</div>
							)}

							{status === 'finished' && (
								<motion.div
									key='finished'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0 }}
									className='text-center space-y-4'
								>
									<div className='space-y-1'>
										<p className='text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em]'>
											Reaction Time
										</p>
										<h2 className='text-6xl font-black italic uppercase tracking-tighter text-primary leading-none'>
											{reactionTime?.toFixed(0)}
											<span className='text-2xl ml-1'>ms</span>
										</h2>
									</div>

									<div className='flex justify-center'>
										<Button
											variant='secondary'
											className='m3-button-tonal gap-2 px-8 h-10 text-xs'
											onClick={e => {
												e.stopPropagation()
												start()
											}}
										>
											<RotateCcw className='w-4 h-4' />
											Restart
										</Button>
									</div>
								</motion.div>
							)}

							{status === 'false-start' && (
								<motion.div
									key='false-start'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0 }}
									className='text-center space-y-3'
								>
									<div className='p-2 rounded-2xl bg-destructive/10 inline-block mb-1 text-destructive'>
										<AlertTriangle className='w-6 h-6' />
									</div>
									<h3 className='text-2xl font-black italic uppercase tracking-tighter text-destructive'>
										Jump Start!
									</h3>
									<p className='text-muted-foreground font-bold uppercase tracking-widest text-[10px]'>
										You clicked before the lights went out
									</p>
									<Button
										variant='secondary'
										className='m3-button-tonal gap-2 px-8 h-10 text-xs'
										onClick={e => {
											e.stopPropagation()
											start()
										}}
									>
										Try Again
									</Button>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				</div>

				{/* Corner Decorative Element */}
				<div className='absolute bottom-8 right-8 flex items-center gap-3 opacity-20'>
					<Timer className='w-5 h-5 text-primary' />
					<span className='text-[10px] font-black uppercase tracking-widest'>
						Precision v4.0
					</span>
				</div>
			</div>

			{/* Stats and Leaderboard Section */}
			<div className='grid grid-cols-1 md:grid-cols-12 gap-6'>
				{/* My Stats Card */}
				<section className='md:col-span-5 bg-card rounded-[32px] p-8 border border-white/5 space-y-8'>
					<div>
						<h3 className='text-sm font-black text-primary uppercase tracking-[0.2em] mb-1'>
							Personal Stats
						</h3>
						<p className='text-muted-foreground text-[10px] uppercase font-bold tracking-widest'>
							Performance History
						</p>
					</div>

					<div className='grid grid-cols-2 gap-4'>
						<div className='bg-secondary/10 rounded-[24px] p-6 space-y-1'>
							<p className='text-[9px] font-black text-muted-foreground uppercase tracking-widest'>
								Last Attempt
							</p>
							<p className='text-2xl font-black italic uppercase'>
								{lastTime ? (
									<>
										{lastTime.toFixed(0)}
										<span className='text-xs ml-1 font-bold'>ms</span>
									</>
								) : (
									'--'
								)}
							</p>
						</div>
						<div className='bg-secondary/10 rounded-[24px] p-6 border border-primary/20 space-y-1'>
							<p className='text-[9px] font-black text-primary uppercase tracking-widest'>
								Best Time
							</p>
							<p className='text-2xl font-black italic uppercase text-primary'>
								{bestTime ? (
									<>
										{bestTime.toFixed(0)}
										<span className='text-xs ml-1 font-bold'>ms</span>
									</>
								) : (
									'--'
								)}
							</p>
						</div>
					</div>

					<div className='bg-secondary/5 rounded-[24px] p-6 flex items-center justify-between'>
						<div className='flex items-center gap-4'>
							<div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary'>
								<Zap className='w-5 h-5' />
							</div>
							<div>
								<p className='text-[9px] font-black text-muted-foreground uppercase tracking-widest'>
									Global Rank
								</p>
								<p className='text-lg font-black italic uppercase'>Top 5%</p>
							</div>
						</div>
						<div className='text-right'>
							<p className='text-[9px] font-black text-muted-foreground uppercase tracking-widest'>
								Position
							</p>
							<p className='text-lg font-black italic uppercase text-primary'>
								#1,240
							</p>
						</div>
					</div>
				</section>

				{/* Global Leaderboard Card */}
				<section className='md:col-span-7 bg-card rounded-[32px] p-8 border border-white/5 space-y-6'>
					<div className='flex items-center justify-between'>
						<div>
							<h3 className='text-sm font-black text-emerald-500 uppercase tracking-[0.2em] mb-1'>
								Hall of Fame
							</h3>
							<p className='text-muted-foreground text-[10px] uppercase font-bold tracking-widest'>
								World's Fastest Pilots
							</p>
						</div>
						<Button
							variant='ghost'
							size='sm'
							className='text-[10px] font-black tracking-widest uppercase hover:bg-emerald-500/10'
						>
							View All
						</Button>
					</div>

					<div className='space-y-2'>
						{mockLeaderboard.map((entry, i) => (
							<div
								key={i}
								className={`flex items-center justify-between p-4 rounded-[20px] transition-all ${
									entry.isUser
										? 'bg-primary/20 border border-primary/30'
										: 'bg-secondary/5 hover:bg-secondary/10'
								}`}
							>
								<div className='flex items-center gap-4'>
									<span
										className={`text-sm font-black italic w-6 ${i < 3 ? 'text-emerald-500' : 'text-muted-foreground'}`}
									>
										#{entry.rank}
									</span>
									<div className='flex flex-col'>
										<span className='text-sm font-bold uppercase tracking-tight'>
											{entry.name}
										</span>
										{entry.isUser && (
											<span className='text-[8px] font-black text-primary uppercase tracking-widest'>
												Your Profile
											</span>
										)}
									</div>
								</div>
								<div className='flex items-center gap-2'>
									<span
										className={`font-black italic ${entry.isUser ? 'text-primary text-lg' : 'text-sm'}`}
									>
										{typeof entry.time === 'number'
											? entry.time.toFixed(0)
											: entry.time}
									</span>
									<span className='text-[9px] font-bold text-muted-foreground uppercase'>
										ms
									</span>
								</div>
							</div>
						))}
					</div>
				</section>
			</div>
		</div>
	)
}
