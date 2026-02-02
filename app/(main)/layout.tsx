import { Header } from '@/components/shared/header'

export default function MainLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className='flex-1 px-4 md:px-8 py-6 h-full'>
				<div className='max-w-7xl mx-auto w-full'>{children}</div>
			</main>
		</>
	)
}
