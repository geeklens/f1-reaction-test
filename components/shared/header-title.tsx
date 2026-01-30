'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function HeaderTitle() {
	const pathname = usePathname()

	const getTitle = () => {
		switch (pathname) {
			case '/':
				return 'Home'
			case '/games':
				return 'Catalog'
			case '/profile':
				return 'Profile'
			default:
				return 'Game Hub'
		}
	}

	return (
		<Link href='/' className='absolute left-1/2 -translate-x-1/2 z-10'>
			<h1 className='text-lg md:text-xl font-black tracking-[0.2em] text-foreground/90 uppercase'>
				{getTitle()}
			</h1>
		</Link>
	)
}
