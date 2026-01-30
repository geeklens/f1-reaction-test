'use client'

import { useEffect } from 'react'

export default function NeuralReaction() {
	useEffect(() => {
		console.log('Zenith Quest initialized')
		return () => console.log('Zenith Quest destroyed')
	}, [])

	return (
		<div className='flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-primary/20 rounded-[32px] bg-secondary/5'>
			<h2 className='text-3xl font-black italic uppercase'>Zenith Quest</h2>
			<p className='text-muted-foreground'>Game Content Goes Here</p>
			<div className='mt-8 p-10 bg-primary/10 rounded-full animate-pulse'>
				<div className='w-20 h-20 bg-primary rounded-full' />
			</div>
		</div>
	)
}
