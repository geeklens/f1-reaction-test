'use client'

import React, { ReactNode } from 'react'
import { LucideIcon, Gamepad2, Play, ChevronRight, Edit3 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

interface UnifiedItemProps {
	variant?: 'row' | 'stat' | 'card' | 'action' | 'catalog' | 'recent' | 'info'
	icon?: LucideIcon
	title?: string
	subtitle?: string
	description?: string | ReactNode
	value?: string | number
	label?: string
	rightAction?: ReactNode
	iconColor?: string
	className?: string
	iconClassName?: string
	children?: ReactNode
	onClick?: () => void
	onAction?: () => void
	active?: boolean
	category?: string
	price?: string
	isFree?: boolean
	actionLabel?: string
}

export function UnifiedItem({
	variant = 'row',
	icon: Icon = Gamepad2,
	title,
	subtitle,
	description,
	value,
	label,
	rightAction,
	iconColor = 'text-primary',
	className,
	iconClassName,
	children,
	onClick,
	onAction,
	active,
	category,
	price,
	isFree,
	actionLabel,
}: UnifiedItemProps) {
	// 1. Catalog Variant
	if (variant === 'catalog') {
		return (
			<div
				className={cn(
					'group bg-card rounded-[32px] p-6 hover:bg-secondary/10 transition-all cursor-pointer border border-white/5 hover:border-primary/10',
					className,
				)}
				onClick={onAction || onClick}
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

	// 2. Recent Variant
	if (variant === 'recent') {
		return (
			<div
				className={cn(
					'group bg-secondary/10 hover:bg-secondary/20 rounded-[24px] p-5 transition-all cursor-pointer flex items-center justify-between border border-transparent hover:border-primary/5',
					className,
				)}
				onClick={onAction || onClick}
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

	// 3. Info Variant
	if (variant === 'info') {
		const ActionIcon = actionLabel === 'Edit' ? Edit3 : ChevronRight
		return (
			<div
				className={cn(
					'flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 hover:bg-secondary/20 transition-all group border border-transparent hover:border-primary/5',
					className,
				)}
				onClick={onAction || onClick}
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

	// 4. Row Variant
	if (variant === 'row') {
		return (
			<div
				className={cn(
					'flex items-center justify-between group gap-3',
					(onClick || onAction) && 'cursor-pointer',
					className,
				)}
				onClick={onAction || onClick}
			>
				<div className='flex items-center gap-2 sm:gap-4 min-w-0 overflow-hidden'>
					<div className='hidden min-[400px]:flex p-2 sm:p-2.5 rounded-xl bg-secondary/20 text-primary group-hover:scale-110 transition-transform flex-shrink-0'>
						<Icon className='w-4 h-4' />
					</div>
					<div className='space-y-0.5 min-w-0'>
						<p className='text-[10px] sm:text-[11px] font-bold text-foreground leading-none truncate'>
							{title}
						</p>
						{(subtitle || description) && (
							<p className='text-[8px] sm:text-[9px] text-muted-foreground uppercase tracking-widest font-black leading-tight truncate'>
								{subtitle || description}
							</p>
						)}
					</div>
				</div>
				{rightAction && (
					<div className='flex-shrink-0 flex items-center'>{rightAction}</div>
				)}
			</div>
		)
	}

	// 5. Stat Variant
	if (variant === 'stat') {
		return (
			<div
				className={cn(
					'bg-secondary/5 hover:bg-secondary/10 transition-colors rounded-2xl p-3.5 flex items-center gap-3 group border border-white/5',
					className,
				)}
			>
				<div
					className={cn(
						'p-2.5 rounded-xl bg-background/50 shadow-inner group-hover:scale-105 transition-transform flex-shrink-0',
						iconColor,
					)}
				>
					<Icon className='w-5 h-5' />
				</div>
				<div className='-space-y-0.5 min-w-0'>
					<p className='text-lg font-black italic truncate'>{value}</p>
					<p className='text-[8px] font-bold uppercase text-muted-foreground tracking-tighter truncate'>
						{title}
					</p>
				</div>
			</div>
		)
	}

	// 6. Action Variant
	if (variant === 'action') {
		return (
			<button
				onClick={onAction || onClick}
				className={cn(
					'w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors text-sm font-bold italic group text-left',
					className,
				)}
			>
				<div className='flex items-center gap-3 min-w-0'>
					<Icon className='w-4 h-4 opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all flex-shrink-0' />
					<div className='flex flex-col min-w-0'>
						<span className='group-hover:translate-x-1 transition-transform'>
							{title}
						</span>
						{subtitle && (
							<span className='text-[10px] opacity-30 group-hover:opacity-60 transition-opacity uppercase tracking-widest font-black truncate'>
								{subtitle}
							</span>
						)}
					</div>
				</div>
				{rightAction}
			</button>
		)
	}

	// 7. Default Card Variant
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
					<h3 className='font-black uppercase tracking-widest text-xs truncate'>
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
						onClick={onAction || onClick}
					>
						{actionLabel}
					</Button>
				)}
				{children}
			</div>
		</section>
	)
}
