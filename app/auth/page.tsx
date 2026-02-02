'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Lock, User, ArrowRight, Github, Chrome, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function AuthPage() {
	const [mode, setMode] = useState<'login' | 'register'>('login')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)
		// Simulate auth
		setTimeout(() => {
			setIsLoading(false)
			router.push('/')
		}, 1500)
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			className='w-full max-w-md space-y-6 sm:space-y-8 bg-card rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 border border-white/5 shadow-2xl relative overflow-hidden mx-auto'
		>
			{/* Ambient Background Effect */}
			<div className='absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none' />

			<div className='relative space-y-1 sm:space-y-2 text-center'>
				<div className='inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-primary/10 text-primary mb-2 sm:mb-4'>
					<Zap className='w-5 h-5 sm:w-6 sm:h-6 fill-current' />
				</div>
				<h1 className='text-2xl sm:text-3xl font-black italic uppercase tracking-tighter'>
					{mode === 'login' ? 'Welcome Back' : 'Join the Core'}
				</h1>
				<p className='text-[10px] sm:text-sm text-muted-foreground font-medium'>
					{mode === 'login'
						? 'Enter your credentials to continue training'
						: 'Start your journey to elite precision'}
				</p>
			</div>

			<form onSubmit={handleSubmit} className='relative space-y-4'>
				{mode === 'register' && (
					<div className='space-y-1'>
						<div className='relative group'>
							<User className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors' />
							<Input
								placeholder='USERNAME'
								className='h-12 pl-12 bg-white/[0.03] border-white/10 rounded-xl uppercase text-[10px] font-black tracking-widest focus:ring-primary'
								required
							/>
						</div>
					</div>
				)}

				<div className='space-y-1'>
					<div className='relative group'>
						<Mail className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors' />
						<Input
							type='email'
							placeholder='EMAIL ADDRESS'
							className='h-12 pl-12 bg-white/[0.03] border-white/10 rounded-xl uppercase text-[10px] font-black tracking-widest focus:ring-primary'
							required
						/>
					</div>
				</div>

				<div className='space-y-1'>
					<div className='relative group'>
						<Lock className='absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors' />
						<Input
							type='password'
							placeholder='PASSWORD'
							className='h-12 pl-12 bg-white/[0.03] border-white/10 rounded-xl uppercase text-[10px] font-black tracking-widest focus:ring-primary'
							required
						/>
					</div>
				</div>

				<Button
					type='submit'
					variant='premium'
					className='w-full h-14 mt-4 group overflow-hidden'
					disabled={isLoading}
				>
					{isLoading ? (
						<div className='w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin' />
					) : (
						<span className='flex items-center gap-2'>
							{mode === 'login' ? 'Authenticate' : 'Create Account'}
							<ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
						</span>
					)}
				</Button>
			</form>

			<div className='relative'>
				<div className='absolute inset-0 flex items-center'>
					<span className='w-full border-t border-white/5' />
				</div>
				<div className='relative flex justify-center text-[8px] font-black uppercase tracking-[0.3em]'>
					<span className='bg-card px-4 text-muted-foreground/40'>
						Or continue with
					</span>
				</div>
			</div>

			<div className='relative grid grid-cols-2 gap-4'>
				<Button
					variant='outline'
					className='h-12 rounded-xl group hover:border-primary/50 transition-colors'
				>
					<Github className='w-4 h-4 group-hover:scale-110 transition-transform' />
				</Button>
				<Button
					variant='outline'
					className='h-12 rounded-xl group hover:border-primary/50 transition-colors'
				>
					<Chrome className='w-4 h-4 group-hover:scale-110 transition-transform' />
				</Button>
			</div>

			<p className='relative text-center text-[9px] sm:text-[10px] font-black uppercase tracking-widest text-muted-foreground'>
				{mode === 'login'
					? "Don't have an account?"
					: 'Already have an account?'}{' '}
				<button
					onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
					className='text-primary hover:underline underline-offset-4'
				>
					{mode === 'login' ? 'Register Now' : 'Login Here'}
				</button>
			</p>
		</motion.div>
	)
}
