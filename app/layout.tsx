import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
import { Gamepad2, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { HeaderTitle } from '@/components/shared/header-title'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Game Story Dashboard',
	description: 'A premium gaming dashboard',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' className='dark'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen flex flex-col`}
			>
				{/* Material 3 Header */}
				<header className='sticky top-0 z-50 w-full bg-background/80 backdrop-blur-2xl px-8'>
					<div className='max-w-7xl mx-auto h-24 flex items-center justify-between relative'>
						{/* Left: Catalog Pill */}
						<div className='flex-1 flex justify-start'>
							<Link href='/games'>
								<Button
									variant='secondary'
									className='m3-button-tonal gap-3 px-6'
								>
									<Gamepad2 className='h-5 w-5' />
									<span className='font-bold tracking-wide'>Catalog</span>
								</Button>
							</Link>
						</div>

						{/* Middle: Dynamic Page Title */}
						<HeaderTitle />

						{/* Right: Profile Avatar in a tonal circle */}
						<div className='flex-1 flex justify-end'>
							<Link href='/profile'>
								<div className='p-1 rounded-full bg-secondary hover:bg-accent transition-all cursor-pointer'>
									<Avatar className='h-11 w-11 border-none'>
										<AvatarImage src='https://github.com/shadcn.png' />
										<AvatarFallback>GK</AvatarFallback>
									</Avatar>
								</div>
							</Link>
						</div>
					</div>
				</header>

				<main className='flex-1 px-8 py-6 h-full'>
					<div className='max-w-7xl mx-auto w-full'>{children}</div>
				</main>
			</body>
		</html>
	)
}
