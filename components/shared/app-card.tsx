'use client'

import {
	LucideIcon,
	Gamepad2,
	Play,
	ArrowRight,
	ChevronRight,
	Edit3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface AppCardProps {
	variant?: 'catalog' | 'recent' | 'info' | 'section'
	title?: string
	subtitle?: string
	description?: ReactNode
	category?: string
	price?: string
	icon?: LucideIcon
	image?: string
	actionLabel?: string
	onAction?: () => void
	className?: string
	children?: ReactNode
	isFree?: boolean
	label?: string
	value?: string
	iconClassName?: string
}

export function AppCard({
	variant = 'section',
	title,
	subtitle,
	description,
	category,
	price,
	icon: Icon = Gamepad2,
	actionLabel,
	onAction,
	className,
	children,
	isFree,
	label,
	value,
	iconClassName,
}: AppCardProps) {
	if (variant === 'catalog') {
		return (
			<div
				className={cn(
					'group bg-card rounded-[32px] p-6 hover:bg-secondary/10 transition-all cursor-pointer border border-white/5 hover:border-primary/10',
					className,
				)}
				onClick={onAction}
			>
				<div className='flex items-start justify-between mb-8'>
					<div className='w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300'>
						<Icon className='w-7 h-7' />
					</div>
					{isFree && (
						<Badge className='bg-primary/10 text-primary border-none rounded-full px-4 py-1 font-black text-[9px] tracking-widest uppercase'>
							Free
						</Badge>
					)}
				</div>

				<div className='space-y-1 mb-8'>
					<p className='text-[10px] font-black text-primary/40 uppercase tracking-[0.2em]'>
						{category}
					</p>
					<h3 className='text-xl font-black italic uppercase tracking-tighter text-foreground leading-tight group-hover:text-primary transition-colors'>
						{title}
					</h3>
				</div>

				<div className='flex items-center justify-between pt-6 border-t border-muted/20'>
					<span className='font-bold text-foreground/50'>{price}</span>
					<Button
						variant='secondary'
						className='rounded-full bg-secondary/20 text-secondary-foreground hover:bg-primary hover:text-primary-foreground font-bold px-8 h-12 transition-all'
					>
						{actionLabel || 'Add'}
					</Button>
				</div>
			</div>
		)
	}

	if (variant === 'recent') {
		return (
			<div
				className={cn(
					'group bg-secondary/10 hover:bg-secondary/20 rounded-[24px] p-5 transition-all cursor-pointer flex items-center justify-between border border-transparent hover:border-primary/5',
					className,
				)}
				onClick={onAction}
			>
				<div className='flex items-center gap-4'>
					<div className='w-12 h-12 rounded-2xl bg-background flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all'>
						<Icon className='w-6 h-6' />
					</div>
					<div>
						<h4 className='font-bold text-foreground text-sm tracking-tight'>
							{title}
						</h4>
						<p className='text-[10px] text-muted-foreground font-bold uppercase tracking-widest'>
							{subtitle}
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
		)
	}

	if (variant === 'info') {
		const ActionIcon = actionLabel === 'Edit' ? Edit3 : ChevronRight
		return (
			<div
				className={cn(
					'flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 hover:bg-secondary/20 transition-all group border border-transparent hover:border-primary/5',
					className,
				)}
				onClick={onAction}
			>
				<div className='flex items-center gap-4'>
					<div
						className={cn(
							'w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary/40 group-hover:text-primary transition-all',
							iconClassName,
						)}
					>
						<Icon className='w-4 h-4' />
					</div>
					<div className='min-w-0'>
						<p className='text-[8px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1'>
							{label}
						</p>
						<p className='text-sm font-bold text-foreground truncate'>
							{value}
						</p>
					</div>
				</div>
				<Button
					variant='ghost'
					size='icon'
					className='h-8 w-8 rounded-full border border-muted-foreground/10 group-hover:border-primary'
				>
					<ActionIcon className='w-3 h-3' />
				</Button>
			</div>
		)
	}

	return (
		<section
			className={cn(
				'p-8 rounded-[32px] bg-card border border-white/5 space-y-4 relative overflow-hidden group hover:bg-secondary/10 transition-colors',
				className,
			)}
		>
			<div className='relative z-10'>
				<div className='flex items-center gap-3 text-primary mb-4'>
					<div className='p-3 rounded-2xl bg-primary/10'>
						<Icon className='w-6 h-6' />
					</div>
					<h3 className='font-black uppercase tracking-widest text-xs'>
						{title}
					</h3>
				</div>
				{description && (
					<div className='text-foreground/90 text-lg leading-relaxed font-bold'>
						{description}
					</div>
				)}
				{actionLabel && (
					<Button
						variant='link'
						className='p-0 h-auto text-primary font-bold mt-2'
						onClick={onAction}
					>
						{actionLabel}
					</Button>
				)}
				{children}
			</div>
		</section>
	)
}
