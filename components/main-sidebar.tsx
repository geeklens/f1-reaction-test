'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	Home,
	Gamepad2,
	ShoppingBag,
	Trophy,
	Settings,
	Ghost,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const routes = [
	{
		label: 'Home',
		icon: Home,
		href: '/',
		color: 'text-sky-500',
	},
	{
		label: 'Games',
		icon: Gamepad2,
		href: '/games',
		color: 'text-violet-500',
	},
	{
		label: 'Purchases',
		icon: ShoppingBag,
		href: '/purchases',
		color: 'text-pink-700',
	},
	{
		label: 'Achievements',
		icon: Trophy,
		href: '/achievements',
		color: 'text-orange-700',
	},
	{
		label: 'Settings',
		icon: Settings,
		href: '/settings',
		color: 'text-gray-500',
	},
]

export function MainSidebar() {
	const pathname = usePathname()

	return (
		<div className='space-y-4 py-4 flex flex-col h-full bg-[#050505] text-white border-r border-zinc-900 w-64'>
			<div className='px-3 py-2 flex-1'>
				<Link href='/' className='flex items-center pl-3 mb-14'>
					<div className='relative w-8 h-8 mr-4'>
						<Ghost className='w-8 h-8 text-yellow-400' />
					</div>
					<h1 className='text-2xl font-bold'>
						Game <span className='text-yellow-400'>Story</span>
					</h1>
				</Link>
				<div className='space-y-1'>
					{routes.map(route => (
						<Link
							key={route.href}
							href={route.href}
							className={cn(
								'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:bg-white/10 rounded-lg transition',
								pathname === route.href
									? 'bg-white/10 text-white'
									: 'text-zinc-400',
							)}
						>
							<div className='flex items-center flex-1'>
								<route.icon className={cn('h-5 w-5 mr-3', route.color)} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
			<div className='px-3 py-2'>{/* Bottom content if any */}</div>
		</div>
	)
}
