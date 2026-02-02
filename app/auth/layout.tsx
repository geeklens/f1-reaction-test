import Link from 'next/link'
import { Zap } from 'lucide-react'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className='min-h-screen bg-background flex flex-col'>
			<header className='p-6 flex justify-center sm:justify-start'>
				<Link href='/' className='flex items-center gap-2 group'>
					<div className='w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform'>
						<Zap className='w-5 h-5 fill-current' />
					</div>
					<span className='text-sm font-black uppercase tracking-widest italic'>
						GeekLens <span className='text-primary'>Core</span>
					</span>
				</Link>
			</header>
			<main className='flex-1 flex items-center justify-center p-4'>
				{children}
			</main>
		</div>
	)
}
