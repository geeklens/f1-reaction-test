'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Mail,
	Phone,
	ShieldCheck,
	Camera,
	Settings as SettingsIcon,
	Download,
	ChevronDown,
	LayoutGrid,
	List,
	ArrowUpDown,
	Filter,
	History,
	Gamepad2,
	Target,
	Trophy,
	Zap,
	Palette,
	Globe,
	Bell,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function ProfilePage() {
	const stats = [
		{
			label: 'Total Games',
			value: '1,240',
			icon: Gamepad2,
			color: 'text-blue-500',
		},
		{
			label: 'Avg Accuracy',
			value: '94.2%',
			icon: Target,
			color: 'text-emerald-500',
		},
		{
			label: 'Top Score',
			value: '18,432',
			icon: Trophy,
			color: 'text-amber-500',
		},
		{
			label: 'Reaction Time',
			value: '164ms',
			icon: Zap,
			color: 'text-purple-500',
		},
	]

	const recentMatches = [
		{
			game: 'F1 Reaction',
			date: 'Feb 02, 2024',
			status: 'New Record',
			score: '158ms',
			type: 'positive',
		},
		{
			game: 'Neural Test',
			date: 'Feb 01, 2024',
			status: 'Completed',
			score: '92%',
			type: 'neutral',
		},
		{
			game: 'Aim Pro',
			date: 'Jan 31, 2024',
			status: 'Failed',
			score: 'low',
			type: 'negative',
		},
		{
			game: 'F1 Reaction',
			date: 'Jan 30, 2024',
			status: 'Completed',
			score: '182ms',
			type: 'neutral',
		},
		{
			game: 'Speed Sort',
			date: 'Jan 28, 2024',
			status: 'New Record',
			score: '840pt',
			type: 'positive',
		},
		{
			game: 'Neural Test',
			date: 'Jan 25, 2024',
			status: 'Completed',
			score: '88%',
			type: 'neutral',
		},
	]

	return (
		<div className='space-y-8 pb-20'>
			{/* TOP CARD: PLAYER DETAILS */}
			<section className='bg-card rounded-[32px] border border-white/5 p-6 md:p-8 space-y-8 shadow-2xl relative overflow-hidden'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center gap-3'>
						<div className='w-1.5 h-6 bg-primary rounded-full' />
						<h2 className='text-xl font-black italic uppercase tracking-tight'>
							Detail Player
						</h2>
					</div>
					<div className='flex items-center gap-2'>
						<Button
							variant='secondary'
							className='rounded-xl h-10 px-4 gap-2 text-xs font-bold'
						>
							This Season <ChevronDown className='w-4 h-4 opacity-50' />
						</Button>
						<Button className='m3-button-filled rounded-xl h-10 px-4 gap-2 text-xs font-bold'>
							<Download className='w-4 h-4' /> Download Stats
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center'>
					{/* Profile Info */}
					<div className='lg:col-span-12 flex flex-col md:flex-row items-center md:items-start gap-8'>
						<div className='relative group'>
							<Avatar className='w-28 h-28 md:w-32 md:h-32 border-[4px] border-secondary/50 shadow-xl'>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback className='text-3xl font-bold bg-secondary text-primary'>
									GK
								</AvatarFallback>
							</Avatar>
							<Button
								size='icon'
								className='absolute bottom-1 right-1 rounded-full h-9 w-9 bg-primary text-primary-foreground border-4 border-card transition-transform group-hover:scale-110'
							>
								<Camera className='w-4 h-4' />
							</Button>
						</div>

						<div className='flex-1 space-y-6 text-center md:text-left'>
							<div className='flex flex-col md:flex-row md:items-end gap-3'>
								<div className='space-y-1'>
									<h1 className='text-3xl md:text-4xl font-black italic uppercase tracking-tighter text-foreground'>
										Geek Core
									</h1>
								</div>
								<div className='flex flex-wrap items-center justify-center md:justify-start gap-2 mb-1.5'>
									<Badge
										variant='secondary'
										className='bg-primary/10 text-primary border-primary/20 text-[9px] font-black uppercase tracking-wider rounded-lg px-2.5 py-1'
									>
										Elite Predator
									</Badge>
									<Badge
										variant='secondary'
										className='bg-secondary/40 text-muted-foreground border-white/5 text-[9px] font-bold uppercase tracking-wider rounded-lg px-2.5 py-1'
									>
										Since Oct 2023
									</Badge>
								</div>
							</div>

							<div className='space-y-2'>
								<h3 className='text-[9px] font-black text-primary/60 uppercase tracking-[0.2em]'>
									Bio
								</h3>
								<div className='max-w-2xl'>
									<p className='text-sm font-medium leading-relaxed italic text-foreground/80 border-l-2 border-primary/20 pl-4'>
										"Precision training enthusiast. Focused on optimizing
										reaction times and tactical decision making."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Quick Stats Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
					{stats.map((stat, i) => (
						<div
							key={i}
							className='bg-secondary/10 hover:bg-secondary/20 transition-colors rounded-[24px] p-5 flex items-center gap-4 group cursor-default border border-white/5'
						>
							<div
								className={`p-3 rounded-2xl bg-background/50 ${stat.color} shadow-inner group-hover:scale-110 transition-transform`}
							>
								<stat.icon className='w-6 h-6' />
							</div>
							<div className='-space-y-1'>
								<p className='text-xl font-black italic'>{stat.value}</p>
								<p className='text-[9px] font-bold uppercase text-muted-foreground tracking-tighter'>
									{stat.label}
								</p>
							</div>
						</div>
					))}
				</div>
			</section>

			{/* BOTTOM CARD: SETTINGS & SECURITY */}
			<section className='bg-card rounded-[32px] border border-white/5 p-6 md:p-8 space-y-8 shadow-2xl'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
					<div className='flex items-center gap-3'>
						<div className='w-1.5 h-6 bg-primary rounded-full' />
						<h2 className='text-xl font-black italic uppercase tracking-tight'>
							Account Settings
						</h2>
					</div>

					<div className='flex items-center gap-2'>
						<Button
							variant='secondary'
							className='h-10 rounded-xl px-4 gap-2 text-xs font-bold border border-white/5'
						>
							<ShieldCheck className='w-4 h-4 text-primary' /> Security Status:
							Secure
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Site Preferences */}
					<div className='space-y-4'>
						<h3 className='text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-1'>
							Experience Preferences
						</h3>
						<div className='space-y-3'>
							{[
								{
									label: 'Appearance',
									value: 'Dark Mode',
									icon: Palette,
									action: 'Change',
								},
								{
									label: 'Language',
									value: 'English (US)',
									icon: Globe,
									iconColor: 'text-blue-500',
								},
								{
									label: 'Notifications',
									value: 'All Active',
									icon: Bell,
									iconColor: 'text-amber-500',
								},
							].map((s, i) => (
								<div
									key={i}
									className='flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 border border-white/5 hover:bg-secondary/20 transition-all group'
								>
									<div className='flex items-center gap-4'>
										<div
											className={`p-2.5 rounded-xl bg-background/50 ${s.iconColor || 'text-primary'}`}
										>
											<s.icon className='w-5 h-5' />
										</div>
										<div>
											<p className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
												{s.label}
											</p>
											<p className='text-sm font-black italic'>{s.value}</p>
										</div>
									</div>
									<Button
										variant='ghost'
										size='sm'
										className='text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity'
									>
										Edit
									</Button>
								</div>
							))}
						</div>
					</div>

					{/* Security & Access */}
					<div className='space-y-4'>
						<h3 className='text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-1'>
							Security & Access
						</h3>
						<div className='space-y-3'>
							{[
								{
									label: 'Email Address',
									value: 'davlat@example.com',
									icon: Mail,
								},
								{
									label: 'Phone Number',
									value: '+998 90 123 45 67',
									icon: Phone,
								},
								{
									label: 'Two-Factor',
									value: 'Enabled',
									icon: ShieldCheck,
									iconColor: 'text-emerald-500',
								},
							].map((s, i) => (
								<div
									key={i}
									className='flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 border border-white/5 hover:bg-secondary/20 transition-all group'
								>
									<div className='flex items-center gap-4'>
										<div
											className={`p-2.5 rounded-xl bg-background/50 ${s.iconColor || 'text-primary'}`}
										>
											<s.icon className='w-5 h-5' />
										</div>
										<div>
											<p className='text-[10px] font-bold text-muted-foreground uppercase tracking-wider'>
												{s.label}
											</p>
											<p className='text-sm font-black italic'>{s.value}</p>
										</div>
									</div>
									<Button
										variant='ghost'
										size='sm'
										className='text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity'
									>
										Manage
									</Button>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className='flex justify-center pt-4'>
					<Button className='m3-button-filled px-10 h-14 text-sm tracking-widest w-full sm:w-auto shadow-lg shadow-primary/20'>
						Save All Changes
					</Button>
				</div>
			</section>
		</div>
	)
}
