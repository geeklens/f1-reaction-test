'use client'

import React, { useEffect, useState, useMemo } from 'react'
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
	Settings,
	Shield,
	LogOut,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { CommandRegistry, Command } from '@/modules/navigation/commands'
import { useRouter } from 'next/navigation'
import { UnifiedItem } from '@/components/shared/unified-item'

export function Header() {
	const [open, setOpen] = useState(false)
	const [searchQuery, setSearchQuery] = useState('')
	const router = useRouter()

	const trendingGames = useMemo(() => {
		return CommandRegistry.getGameCommands().slice(0, 4)
	}, [])

	const quickActions = useMemo(() => {
		return CommandRegistry.getQuickActions()
	}, [])

	const searchResults = useMemo(() => {
		return CommandRegistry.search(searchQuery)
	}, [searchQuery])

	const handleCommand = (command: Command) => {
		if (command.path) {
			router.push(command.path)
		} else if (command.onAction) {
			command.onAction()
		}
		setOpen(false)
		setSearchQuery('')
	}

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
							className='w-full max-w-none h-[100dvh] sm:h-auto sm:max-w-[600px] sm:w-[95%] p-0 bg-background/95 sm:bg-background/80 backdrop-blur-3xl border-none sm:border-white/10 rounded-none sm:rounded-[32px] gap-0 overflow-hidden shadow-none sm:shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] top-0 left-0 translate-x-0 translate-y-0 sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%] flex flex-col'
						>
							<DialogHeader className='sr-only'>
								<DialogTitle>Search Palette</DialogTitle>
								<DialogDescription>
									Search for games, stats and settings across the platform.
								</DialogDescription>
							</DialogHeader>

							<div className='p-4 sm:p-6 border-b border-white/5 flex-none'>
								<div className='relative group'>
									<Search className='absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-primary transition-transform group-focus-within:scale-110' />
									<Input
										placeholder='Search for precision tests...'
										value={searchQuery}
										onChange={e => setSearchQuery(e.target.value)}
										className='h-12 sm:h-16 pl-12 sm:pl-14 bg-white/[0.03] border-white/10 rounded-xl sm:rounded-[20px] text-base sm:text-lg font-medium focus:ring-primary focus:bg-white/[0.05] transition-all'
									/>
									<div className='absolute right-4 top-1/2 -translate-y-1/2 hidden sm:flex gap-1 opacity-50'>
										<kbd className='h-5 px-1.5 rounded bg-white/10 text-[10px] font-mono flex items-center justify-center'>
											ESC
										</kbd>
									</div>
								</div>
							</div>

							<div className='flex-1 overflow-y-auto p-3 sm:p-4 scrollbar-hide max-h-none sm:max-h-[450px]'>
								<div className='space-y-6'>
									{/* Search Results */}
									{searchResults.length > 0 && (
										<div className='space-y-2'>
											<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-primary/60'>
												Search Results
											</h4>
											<div className='space-y-1'>
												{searchResults.map(command => (
													<UnifiedItem
														key={command.id}
														variant='action'
														icon={command.icon}
														title={command.title}
														subtitle={command.subtitle}
														onClick={() => handleCommand(command)}
														rightAction={
															<span className='text-[8px] font-black opacity-30 group-hover:opacity-100 uppercase tracking-widest'>
																Launch
															</span>
														}
													/>
												))}
											</div>
										</div>
									)}

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
												<UnifiedItem
													key={item}
													variant='action'
													icon={HistoryIcon}
													title={item}
													onClick={() => {}}
												/>
											))}
										</div>
									</div>

									{/* Trending Games */}
									<div className='space-y-2'>
										<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
											Trending Now
										</h4>
										<div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 gap-2 px-2'>
											{trendingGames.map(game => (
												<UnifiedItem
													key={game.id}
													variant='row'
													icon={game.icon}
													title={game.title}
													onClick={() => handleCommand(game)}
													className='p-3 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all uppercase italic text-[9px] sm:text-[10px] font-black'
												/>
											))}
										</div>
									</div>

									{/* Quick Actions */}
									<div className='space-y-2'>
										<h4 className='px-4 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60'>
											Quick Actions
										</h4>
										<div className='space-y-1'>
											{quickActions.map(action => (
												<UnifiedItem
													key={action.id}
													variant='action'
													icon={action.icon}
													title={action.title}
													onClick={() => handleCommand(action)}
													rightAction={
														<ChevronRight className='w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity' />
													}
												/>
											))}
										</div>
									</div>
								</div>
							</div>

							<div className='p-4 bg-white/5 flex flex-none items-center justify-between text-[8px] sm:text-[10px] font-bold text-muted-foreground uppercase tracking-widest border-t border-white/5'>
								<div className='flex items-center gap-3 sm:gap-4'>
									<span className='flex items-center gap-1'>
										<kbd className='px-1 rounded bg-white/10'>↵</kbd>{' '}
										<span className='hidden xs:inline'>Select</span>
									</span>
									<span className='flex items-center gap-1'>
										<kbd className='px-1 rounded bg-white/10'>↑↓</kbd>{' '}
										<span className='hidden xs:inline'>Navigate</span>
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
