'use client'

import { useParams, useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'
import { GAME_METADATA, GAMES } from '@/modules/games/registry'
import { Button } from '@/components/ui/button'
import { ChevronLeft, Gamepad2 } from 'lucide-react'
import { Suspense, useMemo } from 'react'
import { motion } from 'framer-motion'

export default function GamePage() {
	const { slug } = useParams()
	const router = useRouter()

	const gameSlug =
		typeof slug === 'string' ? slug : Array.isArray(slug) ? slug[0] : ''
	const metadata = GAME_METADATA[gameSlug]

	const DynamicGame = useMemo(() => {
		if (GAMES[gameSlug]) {
			return dynamic(GAMES[gameSlug], {
				loading: () => (
					<div className='flex items-center justify-center min-h-[400px]'>
						<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-primary'></div>
					</div>
				),
				ssr: false,
			})
		}
		return null
	}, [gameSlug])

	if (!metadata || !DynamicGame) {
		return (
			<div className='flex flex-col items-center justify-center min-h-[60vh] space-y-4'>
				<h1 className='text-4xl font-black italic uppercase'>404</h1>
				<p className='text-muted-foreground'>Game not found</p>
				<Button onClick={() => router.push('/games')}>Back to Catalog</Button>
			</div>
		)
	}

	return (
		<div className='space-y-4 md:space-y-6 pb-10'>
			<div className='flex flex-col sm:flex-row sm:items-center gap-4 justify-between'>
				<Button
					variant='ghost'
					onClick={() => router.back()}
					className='rounded-full pl-2 pr-4 hover:bg-secondary/10 w-fit'
				>
					<ChevronLeft className='mr-1 h-5 w-5' />
					Back
				</Button>

				<div className='flex items-center gap-3'>
					<div className='w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0'>
						<Gamepad2 className='w-5 h-5 md:w-6 md:h-6' />
					</div>
					<div className='min-w-0'>
						<h1 className='text-lg md:text-xl font-black italic uppercase leading-none truncate'>
							{metadata.title}
						</h1>
						<p className='text-[9px] md:text-[10px] font-bold text-muted-foreground uppercase tracking-widest mt-1'>
							In-game session
						</p>
					</div>
				</div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className='bg-card rounded-[24px] md:rounded-[32px] p-4 md:p-6 border border-white/5 relative overflow-hidden'
			>
				<Suspense
					fallback={
						<div className='flex items-center justify-center min-h-[400px]'>
							Loading...
						</div>
					}
				>
					<DynamicGame />
				</Suspense>
			</motion.div>
		</div>
	)
}
