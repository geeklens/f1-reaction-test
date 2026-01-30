'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Clock,
	Trophy,
	Gamepad2,
	Settings,
	Edit3,
	Phone,
	Mail,
	Lock,
	Globe,
	Palette,
	Bell,
	Fingerprint,
	Send,
	Instagram,
	ShieldCheck,
	Camera,
	ChevronRight,
} from 'lucide-react'
import { motion } from 'framer-motion'

export default function ProfilePage() {
	const securityInfo = [
		{ label: 'Email', value: 'davlat@example.com', icon: Mail },
		{ label: 'Phone', value: '+998 90 123 45 67', icon: Phone },
		{ label: 'Password', value: '••••••••••••', icon: Lock },
		{ label: '2FA Auth', value: 'Enabled', icon: Fingerprint },
	]

	const siteSettings = [
		{ label: 'Appearance', value: 'Dark Mode', icon: Palette },
		{ label: 'Language', value: 'English (US)', icon: Globe },
		{ label: 'Notifications', value: 'Active', icon: Bell },
	]

	return (
		<div className='space-y-6 pb-20'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-6 items-start'>
				{/* LEFT COLUMN: Identity + Bio + Socials */}
				<div className='lg:col-span-4 space-y-4'>
					<section className='bg-card rounded-[32px] shadow-sm border border-white/5 p-8 flex flex-col items-center lg:items-start text-center lg:text-left'>
						<div className='relative inline-block mb-6'>
							<Avatar className='w-32 h-32 border-[3px] border-secondary'>
								<AvatarImage src='https://github.com/shadcn.png' />
								<AvatarFallback className='text-3xl font-bold bg-secondary text-primary'>
									GK
								</AvatarFallback>
							</Avatar>
							<Button
								size='icon'
								className='absolute bottom-0 right-0 rounded-full h-9 w-9 bg-primary text-primary-foreground border-2 border-card'
							>
								<Camera className='w-4 h-4' />
							</Button>
						</div>

						<div className='space-y-1 mb-8 w-full'>
							<h1 className='text-3xl font-black italic uppercase tracking-tighter text-foreground leading-none'>
								Geek Core
							</h1>
							<p className='text-muted-foreground font-bold tracking-widest text-[9px] uppercase italic'>
								Davlatov J.
							</p>
						</div>

						<div className='w-full space-y-6'>
							{/* CLEAN BIO (No card background) */}
							<div className='space-y-2'>
								<h3 className='text-[9px] font-black text-primary/60 uppercase tracking-[0.2em] px-1'>
									Bio
								</h3>
								<div className='px-1'>
									<p className='text-sm font-medium leading-relaxed italic text-foreground/80 border-l-2 border-primary/20 pl-4'>
										"Precision training enthusiast. Focused on optimizing
										reaction times and tactical decision making."
									</p>
								</div>
							</div>

							{/* Social Links Side-by-Side */}
							<div className='space-y-2'>
								<h3 className='text-[9px] font-black text-primary/60 uppercase tracking-[0.2em] px-1'>
									Connect
								</h3>
								<div className='grid grid-cols-2 gap-2'>
									<a
										href='#'
										className='flex flex-col items-center justify-center gap-2 p-3 rounded-[20px] bg-secondary/15 hover:bg-secondary/30 transition-all group font-bold'
									>
										<div className='p-2 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all'>
											<Send className='w-4 h-4' />
										</div>
										<span className='text-[10px]'>Telegram</span>
									</a>
									<a
										href='#'
										className='flex flex-col items-center justify-center gap-2 p-3 rounded-[20px] bg-secondary/15 hover:bg-secondary/30 transition-all group font-bold'
									>
										<div className='p-2 rounded-xl bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all'>
											<Instagram className='w-4 h-4' />
										</div>
										<span className='text-[10px]'>Instagram</span>
									</a>
								</div>
							</div>
						</div>
					</section>

					{/* Mini Stats */}
					<div className='bg-secondary/10 rounded-[24px] p-4 grid grid-cols-3 gap-1'>
						<div className='text-center'>
							<p className='text-base font-black italic'>2.4k</p>
							<p className='text-[7px] font-bold uppercase text-muted-foreground'>
								Hrs
							</p>
						</div>
						<div className='text-center border-x border-white/5'>
							<p className='text-base font-black italic'>843</p>
							<p className='text-[7px] font-bold uppercase text-muted-foreground'>
								Pts
							</p>
						</div>
						<div className='text-center'>
							<p className='text-base font-black italic'>124</p>
							<p className='text-[7px] font-bold uppercase text-muted-foreground'>
								Lib
							</p>
						</div>
					</div>
				</div>

				{/* RIGHT COLUMN */}
				<div className='lg:col-span-8 space-y-6'>
					{/* Security Subsection */}
					<section className='bg-card rounded-[32px] p-8 border border-white/5'>
						<div className='mb-6 flex justify-between items-center px-1'>
							<div>
								<h2 className='text-2xl font-black italic uppercase tracking-tight'>
									Security
								</h2>
								<p className='text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]'>
									Protection & Identity
								</p>
							</div>
							<ShieldCheck className='w-6 h-6 text-primary/20' />
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							{securityInfo.map(info => (
								<div
									key={info.label}
									className='flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 hover:bg-secondary/20 transition-all group border border-transparent hover:border-primary/5'
								>
									<div className='flex items-center gap-4'>
										<div className='w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary/40 group-hover:text-primary transition-all'>
											<info.icon className='w-4 h-4' />
										</div>
										<div className='min-w-0'>
											<p className='text-[8px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1'>
												{info.label}
											</p>
											<p className='text-sm font-bold text-foreground truncate'>
												{info.value}
											</p>
										</div>
									</div>
									<Button
										variant='ghost'
										size='icon'
										className='h-8 w-8 rounded-full border border-muted-foreground/10 group-hover:border-primary'
									>
										<Edit3 className='w-3 h-3' />
									</Button>
								</div>
							))}
						</div>
					</section>

					{/* Site Settings Subsection (Now matching Security design) */}
					<section className='bg-card rounded-[32px] p-8 border border-white/5'>
						<div className='mb-6 flex justify-between items-center px-1'>
							<div>
								<h2 className='text-2xl font-black italic uppercase tracking-tight'>
									Settings
								</h2>
								<p className='text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]'>
									Experience Preferences
								</p>
							</div>
							<Settings className='w-6 h-6 text-primary/20' />
						</div>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
							{siteSettings.map(setting => (
								<div
									key={setting.label}
									className='flex items-center justify-between p-4 rounded-[20px] bg-secondary/10 hover:bg-secondary/20 transition-all group border border-transparent hover:border-primary/5'
								>
									<div className='flex items-center gap-4'>
										<div className='w-10 h-10 rounded-xl bg-background flex items-center justify-center text-primary/40 group-hover:text-primary transition-all'>
											<setting.icon className='w-4 h-4' />
										</div>
										<div className='min-w-0'>
											<p className='text-[8px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1'>
												{setting.label}
											</p>
											<p className='text-sm font-bold text-foreground truncate'>
												{setting.value}
											</p>
										</div>
									</div>
									<Button
										variant='ghost'
										size='icon'
										className='h-8 w-8 rounded-full border border-muted-foreground/10 group-hover:border-primary'
									>
										<ChevronRight className='w-3 h-3' />
									</Button>
								</div>
							))}
						</div>
					</section>

					<div className='flex justify-center'>
						<Button className='m3-button-filled px-10 h-14 text-sm tracking-widest w-full sm:w-auto'>
							Save changes
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}
