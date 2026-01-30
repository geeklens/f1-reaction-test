'use client'

import { useEffect } from 'react'

export const init = () => {
	console.log('Neural Reaction: Static Init')
}

export const destroy = () => {
	console.log('Neural Reaction: Static Destroy')
}

export default function NeuralReaction() {
	useEffect(() => {
		init()
		return () => destroy()
	}, [])

	return (
		<div className='flex flex-col items-center justify-center min-h-[400px] border-2 border-dashed border-primary/20 rounded-[32px] bg-secondary/5'>
			<h2 className='text-3xl font-black italic uppercase'>Neural Reaction</h2>
			<p className='text-muted-foreground'>Game Content Goes Here</p>
			<div className='mt-8 p-10 bg-primary/10 rounded-full animate-pulse'>
				<div className='w-20 h-20 bg-primary rounded-full' />
			</div>
		</div>
	)
}
