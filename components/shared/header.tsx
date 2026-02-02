'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import {
	Gamepad2,
	Home,
	Search,
	History as HistoryIcon,
	Zap,
	Target,
	Trophy,
	User,
	ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'

export function Header() {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault()
				setOpen(open => !open)
			}
		}

		document.addEventListener('keydown', down)
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<header className='sticky top-0 z-50 w-full bg-background/80 backdrop-blur-2xl px-4 md:px-8'>
			<div className='max-w-7xl mx-auto h-16 md:h-24 flex justify-between items-center relative'>
				{/* Left: Navigation Actions */}
				<div className='flex items-center gap-2 md:gap-3'>
					<Link href='/'>
						<Button
							variant='secondary'
							size='icon'
							className='m3-button-tonal h-10 w-10 md:h-12 md:w-12 rounded-xl hover:bg-accent transition-all'
						>
							<Home className='h-5 w-5' />
						</Button>
					</Link>

					<Link href='/games'>
						<Button
							variant='secondary'
							className='m3-button-tonal h-10 md:h-12 gap-2 md:gap-3 px-3 md:px-6 rounded-xl transition-all'
						>
							<Gamepad2 className='h-5 w-5' />
							<span className='font-bold tracking-wide hidden md:inline uppercase text-[10px]'>
								Catalog
							</span>
						</Button>
					</Link>

					<Dialog open={open} onOpenChange={setOpen}>
						<DialogTrigger asChild>
							<Button
								variant='secondary'
								className='m3-button-tonal h-10 md:h-12 gap-2 md:gap-3 px-3 md:px-6 rounded-xl transition-all group'
							>
								<Search className='h-5 w-5' />
								<span className='font-bold tracking-wide hidden md:inline uppercase text-[10px]'>
									Search
								</span>
								<kbd className='pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 md:flex'>
									<span className='text-xs'>⌘</span>K
								</kbd>
							</Button>
						</DialogTrigger>
						<DialogContent
							showCloseButton={false}
							className='w-screen h-screen sm:h-auto sm:max-w-[600px] sm:w-full p-0 bg-background/95 sm:bg-background/80 backdrop-blur-3xl border-none sm:border-white/10 rounded-none sm:rounded-[32px] gap-0 overflow-hidden shadow-none sm:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] top-0 left-0 translate-x-0 translate-y-0 sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] flex flex-col'
						>
							<div className='p-6 border-b border-white/5 flex-none'>
								<div className='relative group'>
									<Search className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary transition-transform group-focus-within:scale-110' />
									<Input
										placeholder='Search for precision tests, stats or settings...'
										className='h-16 pl-14 bg-white/[0.03] border-white/10 rounded-[20px] text-lg font-medium focus:ring-primary focus:bg-white/[0.05] transition-all'
									/>
									<div className='absolute right-4 top-1/2 -translate-y-1/2 flex gap-1 opacity-50'>
										<kbd className='h-5 px-1.5 rounded bg-white/10 text-[10px] font-mono flex items-center justify-center'>
											ESC
										</kbd>
									</div>
								</div>
							</div>

							<div className='flex-1 overflow-y-auto p-4 scrollbar-hide sm:max-h-[450px]'>
								<div className='space-y-6'>
									{/* Recent Searches */}
									<div className='space-y-2'>
										<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
											Recent Searches
										</h4>
										<div className='space-y-1'>
											{[
												'F1 Reaction Time',
												'Neural Sorting Grid',
												'Elite Predator Stats',
											].map(item => (
												<button
													key={item}
													className='w-full flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors text-sm font-bold italic group'
												>
													<HistoryIcon className='w-4 h-4 opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all' />
													<span className='group-hover:translate-x-1 transition-transform'>
														{item}
													</span>
												</button>
											))}
										</div>
									</div>

									{/* Trending Games */}
									<div className='space-y-2'>
										<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
											Trending Now
										</h4>
										<div className='grid grid-cols-2 gap-2 px-2'>
											{[
												{
													name: 'Neural Reaction',
													icon: Zap,
													color: 'text-purple-500',
												},
												{
													name: 'Speed Sort',
													icon: Target,
													color: 'text-blue-500',
												},
												{
													name: 'Aim Precision',
													icon: Trophy,
													color: 'text-amber-500',
												},
												{
													name: 'Reaction Pro',
													icon: Gamepad2,
													color: 'text-emerald-500',
												},
											].map(game => (
												<button
													key={game.name}
													className='flex items-center gap-3 p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all text-xs font-black italic uppercase text-left group'
												>
													<div
														className={`p-2 rounded-xl bg-background/50 ${game.color} group-hover:scale-110 transition-transform`}
													>
														<game.icon className='w-4 h-4' />
													</div>
													{game.name}
												</button>
											))}
										</div>
									</div>

									{/* Quick Actions */}
									<div className='space-y-2'>
										<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
											Quick Actions
										</h4>
										<div className='space-y-1'>
											{[
												{ name: 'Go to Profile', icon: User, path: '/profile' },
												{
													name: 'View Global Leaderboard',
													icon: Trophy,
													path: '/leaderboard',
												},
											].map(action => (
												<button
													key={action.name}
													className='w-full flex items-center justify-between px-4 py-3 rounded-2xl hover:bg-white/5 transition-colors text-sm font-bold italic group'
												>
													<div className='flex items-center gap-3'>
														<action.icon className='w-4 h-4 opacity-40 group-hover:text-primary group-hover:opacity-100 transition-all' />
														<span className='group-hover:translate-x-1 transition-transform'>
															{action.name}
														</span>
													</div>
													<ChevronRight className='w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity' />
												</button>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className='p-4 bg-white/5 flex flex-none items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-t border-white/5'>
								<div className='flex items-center gap-4'>
									<span className='flex items-center gap-1'>
										<kbd className='px-1 rounded bg-white/10'>↵</kbd> Select
									</span>
									<span className='flex items-center gap-1'>
										<kbd className='px-1 rounded bg-white/10'>↑↓</kbd> Navigate
									</span>
								</div>
								<span>Antigravity Engine Search</span>
							</div>
						</DialogContent>
					</Dialog>
				</div>

				{/* Right: Profile Avatar */}
				<div className='flex justify-end items-center gap-2 md:gap-4'>
					<Link href='/profile'>
						<div className='p-1 rounded-full bg-secondary hover:bg-accent transition-all cursor-pointer'>
							<Avatar className='h-9 w-9 md:h-11 md:w-11 border-none'>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback>GK</AvatarFallback>
							</Avatar>
						</div>
					</Link>
				</div>
			</div>
		</header>
	)
}
