'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Gamepad2, Home, AlertTriangle, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div className='min-h-screen bg-background flex flex-col items-center justify-center p-4 overflow-hidden relative'>
			{/* Glitchy Background Text */}
			<div className='absolute inset-0 flex items-center justify-center opacity-[0.02] pointer-events-none select-none'>
				<h1 className='text-[30vw] font-black italic'>404</h1>
			</div>

			{/* Animated Background Orbs */}
			<div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse' />
			<div className='absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/10 rounded-full blur-[120px] animate-pulse delay-700' />

			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				className='relative z-10 flex flex-col items-center text-center space-y-8 max-w-lg'
			>
				{/* Warning Hexagon Icon */}
				<motion.div
					animate={{
						rotateY: [0, 180, 360],
						y: [0, -10, 0],
					}}
					transition={{
						duration: 4,
						repeat: Infinity,
						ease: 'easeInOut',
					}}
					className='w-20 h-20 sm:w-24 sm:h-24 bg-destructive/10 border-2 border-destructive/20 rounded-[20px] sm:rounded-[24px] flex items-center justify-center shadow-[0_0_40px_rgba(239,68,68,0.2)]'
				>
					<AlertTriangle className='w-10 h-10 sm:w-12 sm:h-12 text-destructive' />
				</motion.div>

				<div className='space-y-3 sm:space-y-4 px-4'>
					<motion.h1
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.2 }}
						className='text-5xl sm:text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-foreground'
					>
						Out of <span className='text-primary'>Bounds</span>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.4 }}
						className='text-muted-foreground text-[10px] sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] max-w-[280px] sm:max-w-none mx-auto'
					>
						Error 404: The sector you are looking for does not exist or has been
						glitched.
					</motion.p>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full pt-4 sm:pt-8'
				>
					<Link href='/' className='w-full sm:flex-1'>
						<Button
							variant='premium'
							className='w-full h-12 sm:h-14 group text-[10px] sm:text-xs'
						>
							<Home className='mr-2 w-4 h-4' />
							Respawn at Home
						</Button>
					</Link>
					<Link href='/games' className='w-full sm:flex-1'>
						<Button
							variant='tonal'
							className='w-full h-12 sm:h-14 bg-white/5 hover:bg-white/10 border border-white/10 text-[10px] sm:text-xs'
						>
							<Gamepad2 className='mr-2 w-4 h-4' />
							Game Catalog
						</Button>
					</Link>
				</motion.div>

				{/* Retro Console Loading Bar */}
				<div className='w-48 h-1 bg-white/5 rounded-full overflow-hidden mt-12'>
					<motion.div
						animate={{
							x: [-200, 200],
						}}
						transition={{
							duration: 1.5,
							repeat: Infinity,
							ease: 'linear',
						}}
						className='w-24 h-full bg-primary/40'
					/>
				</div>
				<p className='text-[8px] font-black uppercase text-muted-foreground/30 tracking-[0.4em]'>
					Re-syncing with neural cloud...
				</p>
			</motion.div>

			{/* Corner Accents */}
			<div className='absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-white/5 rounded-tl-3xl' />
			<div className='absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-white/5 rounded-br-3xl' />
		</div>
	)
}
