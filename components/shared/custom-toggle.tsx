'use client'

import { cn } from '@/lib/utils'

interface CustomToggleProps {
	active: boolean
	onChange?: (active: boolean) => void
	className?: string
}

export function CustomToggle({
	active,
	onChange,
	className,
}: CustomToggleProps) {
	return (
		<div
			onClick={() => onChange?.(!active)}
			className={cn(
				'w-9 h-4.5 rounded-full p-0.5 transition-colors cursor-pointer',
				active ? 'bg-primary' : 'bg-secondary/40',
				className,
			)}
		>
			<div
				className={cn(
					'w-3.5 h-3.5 bg-white rounded-full transition-transform shadow-sm',
					active ? 'translate-x-[18px]' : 'translate-x-0',
				)}
			/>
		</div>
	)
}
