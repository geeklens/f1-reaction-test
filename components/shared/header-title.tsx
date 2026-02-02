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
		<Link href='/'>
			<h1 className='text-base md:text-xl font-black tracking-[0.1em] md:tracking-[0.2em] text-foreground/90 uppercase whitespace-nowrap'>
				{getTitle()}
			</h1>
		</Link>
	)
}
