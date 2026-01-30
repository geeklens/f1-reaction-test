'use client'

import { Bell, ChevronDown, Play, MessageSquare, Video } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export function RightSidebar() {
	return (
		<div className='w-80 h-full border-l border-slate-800 bg-slate-900 text-white p-4 flex flex-col gap-6 hidden xl:flex'>
			{/* Header Profile */}
			<div className='flex items-center justify-between mb-2'>
				<Button variant='ghost' size='icon' className='text-zinc-400'>
					<Bell className='h-5 w-5' />
				</Button>
				<div className='flex items-center gap-2 cursor-pointer hover:bg-white/10 p-2 rounded-lg transition'>
					<Avatar className='h-8 w-8'>
						<AvatarImage src='/placeholder-user.jpg' />
						<AvatarFallback>AJ</AvatarFallback>
					</Avatar>
					<span className='font-semibold text-sm'>Aaron_J</span>
					<ChevronDown className='h-4 w-4 text-zinc-400' />
				</div>
			</div>

			{/* Stream Section */}
			<div className='space-y-4'>
				<div className='flex items-center justify-between'>
					<h3 className='font-semibold text-lg'>Stream</h3>
					<ChevronDown className='h-4 w-4 text-zinc-400 cursor-pointer' />
				</div>
				<Card className='bg-slate-800 border-none overflow-hidden relative group cursor-pointer'>
					<div className='aspect-video bg-indigo-500 relative flex items-center justify-center'>
						{/* Abstract Game Art Placeholder */}
						<div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent' />
						<h4 className='z-10 text-xl font-black text-white px-2 text-center uppercase italic'>
							Grand Theft Auto
						</h4>
						<div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition'>
							<div className='bg-white/20 backdrop-blur-sm p-3 rounded-full'>
								<Play className='h-6 w-6 text-white fill-current' />
							</div>
						</div>
					</div>
				</Card>
			</div>

			{/* Friends Online */}
			<div className='space-y-4 flex-1'>
				<h3 className='font-semibold text-lg'>Friends online</h3>
				<ScrollArea className='h-[200px]'>
					<div className='space-y-3'>
						{[
							{ name: 'Mr.Salon', game: 'Playing Warcraft', status: 'online' },
							{
								name: 'Warmonder_kek',
								game: 'Playing Call of Duty',
								status: 'online',
							},
							{ name: 'Dolly_doll', game: 'Action/RPG', status: 'idle' },
							{ name: 'Celine_Dion', game: 'Action/RPG', status: 'online' },
						].map((friend, i) => (
							<div
								key={i}
								className='flex items-center justify-between group cursor-pointer'
							>
								<div className='flex items-center gap-3'>
									<div className='relative'>
										<Avatar className='h-10 w-10 border border-slate-700'>
											<AvatarFallback className='bg-slate-800'>
												{friend.name[0]}
											</AvatarFallback>
										</Avatar>
										<span className='absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-slate-900' />
									</div>
									<div className='flex flex-col'>
										<span className='text-sm font-medium group-hover:text-yellow-400 transition'>
											{friend.name}
										</span>
										<span className='text-xs text-zinc-400'>{friend.game}</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</ScrollArea>
			</div>

			{/* Groups */}
			<div className='space-y-4'>
				<h3 className='font-semibold text-lg'>Groups</h3>
				<div className='space-y-3'>
					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='h-10 w-10 rounded-lg bg-orange-600 flex items-center justify-center font-bold'>
								P
							</div>
							<div className='flex flex-col'>
								<span className='text-sm font-medium'>Playzomblesss</span>
								<span className='text-xs text-zinc-400'>
									All day, all night
								</span>
							</div>
						</div>
						<div className='flex -space-x-2'>
							<div className='h-6 w-6 rounded-full bg-slate-500 border border-slate-900' />
							<div className='h-6 w-6 rounded-full bg-slate-400 border border-slate-900' />
						</div>
					</div>

					<div className='flex items-center justify-between'>
						<div className='flex items-center gap-3'>
							<div className='h-10 w-10 rounded-lg bg-emerald-600 flex items-center justify-center font-bold'>
								G
							</div>
							<div className='flex flex-col'>
								<span className='text-sm font-medium'>Gadget zone</span>
								<span className='text-xs text-zinc-400'>We love gadgets</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
