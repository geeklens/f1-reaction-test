'use client'

import { cn } from '@/lib/utils'

interface SectionHeadingProps {
	title: string
	description?: string
	variant?: 'main' | 'sub'
	className?: string
}

export function SectionHeading({
	title,
	description,
	variant = 'main',
	className,
}: SectionHeadingProps) {
	if (variant === 'sub') {
		return (
			<div className={cn('space-y-1', className)}>
				<h3 className='text-sm font-black text-foreground uppercase tracking-widest'>
					{title}
				</h3>
				{description && (
					<p className='text-[10px] text-muted-foreground uppercase tracking-wider mt-1'>
						{description}
					</p>
				)}
			</div>
		)
	}

	return (
		<div className={cn('flex items-center gap-2', className)}>
			<div className='w-1 h-1 bg-primary rounded-full' />
			<h2 className='text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground'>
				{title}
			</h2>
		</div>
	)
}
