'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Mail,
	Phone,
	ShieldCheck,
	Camera,
	Share2,
	Gamepad2,
	Target,
	Trophy,
	Zap,
	Palette,
	Globe,
	Bell,
	Check,
	UserCog,
	Flame,
	Moon,
	Sun,
	Monitor,
	Play,
	Wind,
	ChevronDown,
	Volume2,
	EyeOff,
} from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { useMemo, useState, useEffect } from 'react'
import { StatsModule, PlayerStats } from '@/modules/profile/stats'
import { UnifiedItem } from '@/components/shared/unified-item'
import { CustomToggle } from '@/components/shared/custom-toggle'
import { SectionHeading } from '@/components/shared/section-heading'

export default function ProfilePage() {
	// State to handle client-side stats and avoid hydration mismatch
	const [playerStats, setPlayerStats] = useState<PlayerStats>({
		totalGames: 0,
		avgAccuracy: 0,
		topScore: 0,
		bestReactionTime: null,
		rankLabel: '...',
		globalRank: 0,
		winStreak: 0,
	})

	useEffect(() => {
		setPlayerStats(StatsModule.getAggregateStats())
	}, [])

	const statsDisplay = useMemo(
		() => [
			{
				title: 'Total Games',
				value: playerStats.totalGames.toLocaleString(),
				icon: Gamepad2,
				iconColor: 'text-blue-500',
			},
			{
				title: 'Global Rank',
				value: `#${playerStats.globalRank.toLocaleString()}`,
				icon: Globe,
				iconColor: 'text-emerald-500',
			},
			{
				title: 'Top Score',
				value: playerStats.topScore.toLocaleString(),
				icon: Trophy,
				iconColor: 'text-amber-500',
			},
			{
				title: 'Win Streak',
				value: `${playerStats.winStreak} Games`,
				icon: Flame,
				iconColor: 'text-orange-500',
			},
		],
		[playerStats],
	)

	return (
		<div className='space-y-8 pb-20'>
			{/* TOP CARD: PLAYER DETAILS */}
			<section className='bg-card rounded-[32px] border border-white/5 p-6 md:p-7 space-y-6 shadow-2xl relative overflow-hidden'>
				<div className='flex items-center justify-between'>
					<SectionHeading title='Detail Player' />
					<div className='flex items-center gap-2'>
						<Button className='m3-button-filled rounded-xl h-8 px-4 gap-2 text-[10px] font-black uppercase tracking-wider'>
							<Share2 className='w-3.5 h-3.5' /> Share Profile
						</Button>
						<Button className='rounded-xl h-8 px-4 gap-2 text-[10px] font-black uppercase tracking-wider bg-violet-600 hover:bg-violet-700 text-white shadow-lg shadow-violet-500/20 transition-all active:scale-95'>
							<UserCog className='w-3.5 h-3.5' /> Edit Profile
						</Button>
					</div>
				</div>

				<div className='flex flex-col md:flex-row items-center gap-10'>
					{/* Avatar Section */}
					<div className='relative flex-shrink-0'>
						<div className='absolute -inset-2 bg-gradient-to-tr from-primary/50 to-violet-500/50 rounded-full blur-xl opacity-30' />
						<Avatar className='w-32 h-32 md:w-44 md:h-44 border-4 border-white/10 relative p-2 bg-card shadow-[0_0_50px_rgba(0,0,0,0.3)]'>
							<AvatarImage
								src='https://github.com/shadcn.png'
								className='rounded-full'
							/>
							<AvatarFallback className='text-4xl font-bold bg-secondary text-primary rounded-full'>
								GK
							</AvatarFallback>
						</Avatar>
					</div>

					{/* Text Section */}
					<div className='flex-1 space-y-6 text-center md:text-left min-w-0'>
						<div className='space-y-4'>
							{/* Badges */}
							<div className='flex flex-wrap items-center justify-center md:justify-start gap-3'>
								<div className='flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg shadow-primary/10'>
									<div className='w-1.5 h-1.5 bg-primary rounded-full animate-pulse' />
									<span className='text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] text-primary'>
										{playerStats.rankLabel}
									</span>
								</div>
								<div className='flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md'>
									<span className='text-[10px] md:text-[11px] font-bold uppercase tracking-[0.15em] text-muted-foreground/80'>
										Since Oct 2023
									</span>
								</div>
							</div>

							{/* Name */}
							<h1 className='text-3xl md:text-5xl font-black italic uppercase tracking-tighter text-foreground leading-none'>
								Geek Core
							</h1>

							{/* Bio Box */}
							<div className='space-y-3 max-w-2xl pt-2'>
								<div className='flex items-center gap-2'>
									<div className='w-1.5 h-1.5 bg-primary/40 rounded-full' />
									<h3 className='text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.4em]'>
										Bio Protocol
									</h3>
								</div>
								<div className='relative'>
									<div className='absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/40 via-primary/10 to-transparent' />
									<p className='text-sm md:text-lg font-medium leading-relaxed italic text-foreground/60 pl-8'>
										"Precision training enthusiast. Focused on optimizing
										reaction times and tactical decision making."
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Quick Stats Grid */}
				<div className='grid grid-cols-2 lg:grid-cols-4 gap-3'>
					{statsDisplay.map((stat, i) => (
						<UnifiedItem key={i} variant='stat' {...stat} />
					))}
				</div>
			</section>

			{/* BOTTOM CARD: SETTINGS & SECURITY */}
			<section className='bg-card rounded-[32px] border border-white/5 p-6 md:p-8 space-y-8 shadow-2xl'>
				<div className='flex flex-col md:flex-row md:items-center justify-between gap-4'>
					<SectionHeading title='Account Settings' />
					<div className='flex items-center gap-2'>
						<Button
							variant='secondary'
							className='h-8 rounded-xl px-3 gap-2 text-[10px] font-bold border border-white/5 bg-secondary/20'
						>
							<ShieldCheck className='w-3.5 h-3.5 text-primary' /> Security
							Status: Secure
						</Button>
					</div>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* LEFT: Experience & Appearance */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<SectionHeading
								variant='sub'
								title='Appearance'
								description='Set or customize your preferences for the system'
							/>

							<div className='space-y-6 pt-4'>
								<UnifiedItem
									variant='row'
									icon={Monitor}
									title='Appearance'
									subtitle='Interface theme'
									rightAction={
										<div className='flex items-center gap-3 bg-secondary/20 border border-white/5 rounded-xl px-4 py-2 hover:bg-secondary/30 transition-colors cursor-pointer min-w-[140px]'>
											<Moon className='w-3.5 h-3.5 text-primary' />
											<span className='text-[10px] font-black uppercase tracking-widest'>
												Dark Mode
											</span>
											<ChevronDown className='w-3 h-3 text-muted-foreground ml-auto' />
										</div>
									}
								/>

								<UnifiedItem
									variant='row'
									icon={Palette}
									title='Accent Color'
									subtitle='Personalize interface highlights'
									rightAction={
										<div className='flex gap-2.5'>
											{[
												'bg-primary',
												'bg-amber-500',
												'bg-emerald-500',
												'bg-blue-500',
												'bg-violet-500',
											].map((color, i) => (
												<div
													key={i}
													className={`w-4 h-4 rounded-full ${color} cursor-pointer hover:scale-125 transition-transform ${i === 0 ? 'ring-2 ring-white/30 ring-offset-2 ring-offset-background' : ''}`}
												/>
											))}
										</div>
									}
								/>

								<div className='space-y-4 pt-2 border-t border-white/5'>
									<UnifiedItem
										variant='row'
										icon={Volume2}
										title='Sound Effects'
										subtitle='Auditory feedback during training'
										rightAction={<CustomToggle active={true} />}
									/>
									<UnifiedItem
										variant='row'
										icon={EyeOff}
										title='Streamer Mode'
										subtitle='Hides sensitive account details'
										rightAction={<CustomToggle active={false} />}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* RIGHT: Security & Access */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<SectionHeading
								variant='sub'
								title='Security & Authentication'
								description='Manage your account access and verification methods'
							/>

							<div className='grid grid-cols-1 gap-6 pt-4'>
								{[
									{
										label: 'Email Address',
										value: 'davlat@example.com',
										icon: Mail,
										status: 'Verified',
									},
									{
										label: 'Phone Number',
										value: '+998 90 123 45 67',
										icon: Phone,
										status: 'Active',
									},
									{
										label: 'Two-Factor Auth',
										value: 'Enabled',
										icon: ShieldCheck,
										status: 'Secure',
										highlight: true,
									},
								].map((s, i) => (
									<UnifiedItem
										key={i}
										variant='row'
										icon={s.icon}
										title={s.label}
										subtitle={s.value}
										rightAction={
											<div
												className={`px-3 py-1.5 rounded-xl text-[9px] font-black uppercase tracking-widest ${s.highlight ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-lg shadow-emerald-500/5' : 'bg-secondary/20 text-muted-foreground border border-white/5 hover:bg-secondary/30 transition-colors'}`}
											>
												{s.status}
											</div>
										}
									/>
								))}

								<div className='space-y-5 pt-4 border-t border-white/5'>
									<UnifiedItem
										variant='row'
										icon={Globe}
										title='Language'
										subtitle='English (US)'
										rightAction={
											<div className='flex items-center gap-2 px-3 py-1.5 rounded-xl bg-secondary/20 text-muted-foreground border border-white/5 hover:bg-secondary/30 transition-colors cursor-pointer min-w-[100px]'>
												<span className='text-[9px] font-black uppercase tracking-widest'>
													Change
												</span>
												<ChevronDown className='w-2.5 h-2.5 ml-auto' />
											</div>
										}
									/>

									<UnifiedItem
										variant='row'
										icon={Bell}
										title='Notifications'
										subtitle='Active Alerts'
										rightAction={<CustomToggle active={true} />}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex items-center justify-between pt-12 border-t border-white/5'>
					<button className='text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest hover:text-foreground transition-colors'>
						Reset to default
					</button>
					<div className='flex items-center gap-4'>
						<Button
							variant='ghost'
							className='h-12 rounded-xl px-8 text-[10px] font-black uppercase tracking-widest'
						>
							Cancel
						</Button>
						<Button className='m3-button-filled group relative px-10 h-12 rounded-xl text-[10px] font-black uppercase tracking-widest overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20'>
							<div className='absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity' />
							<span className='relative flex items-center gap-3'>
								Save Preferences
							</span>
						</Button>
					</div>
				</div>
			</section>
		</div>
	)
}
