'use client'

import { useContext, useEffect, useRef, useState } from 'react'
import { MeshGradient } from '@paper-design/shaders-react'
import { motion } from 'framer-motion'
import { Logo } from '../ui/logo'
import clsx from 'clsx'
import { Dialog, DialogContext } from '../ui/dialog'
import { ContactUs } from '../shared/contact'

function HeaderMenu({ className }: { className?: string }) {
	const dialogContextValues = useContext(DialogContext)
	const closeDialog = dialogContextValues?.closeDialog

	return (
		<nav className={clsx('flex items-center space-x-2', className)}>
			<a
				onClick={closeDialog}
				href='/#'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Home
			</a>
			<a
				onClick={closeDialog}
				href='/#treatments'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Treatments
			</a>
			<a
				onClick={closeDialog}
				href='/#review'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Reviews
			</a>
			<a
				onClick={closeDialog}
				href='/#about'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				About us
			</a>
		</nav>
	)
}

function ContactButton({ className }: { className?: string }) {
	return (
		<ContactUs
			source='header'
			trigger={
				<div
					id='gooey-btn'
					className='relative flex items-center group'
					style={{ filter: 'url(#gooey-filter)' }}
				>
					<button
						className={clsx(
							'px-12 py-4 rounded-full bg-white text-black font-normal text-xs transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] flex items-center z-10',
							className
						)}
					>
						Contact Us
					</button>
				</div>
			}
		/>
	)
}

export function Hero() {
	const containerRef = useRef<HTMLDivElement>(null)
	const [isActive, setIsActive] = useState(false)

	useEffect(() => {
		const handleMouseEnter = () => setIsActive(true)
		const handleMouseLeave = () => setIsActive(false)

		const container = containerRef.current
		if (container) {
			container.addEventListener('mouseenter', handleMouseEnter)
			container.addEventListener('mouseleave', handleMouseLeave)
		}

		return () => {
			if (container) {
				container.removeEventListener('mouseenter', handleMouseEnter)
				container.removeEventListener('mouseleave', handleMouseLeave)
			}
		}
	}, [])

	return (
		<div
			ref={containerRef}
			className='min-h-screen bg-black relative overflow-hidden'
		>
			<svg className='absolute inset-0 w-0 h-0'>
				<defs>
					<filter
						id='glass-effect'
						x='-50%'
						y='-50%'
						width='200%'
						height='200%'
					>
						<feTurbulence baseFrequency='0.005' numOctaves='1' result='noise' />
						<feDisplacementMap in='SourceGraphic' in2='noise' scale='0.3' />
						<feColorMatrix
							type='matrix'
							values='1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0'
							result='tint'
						/>
					</filter>
					<filter
						id='gooey-filter'
						x='-50%'
						y='-50%'
						width='200%'
						height='200%'
					>
						<feGaussianBlur in='SourceGraphic' stdDeviation='4' result='blur' />
						<feColorMatrix
							in='blur'
							mode='matrix'
							values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9'
							result='gooey'
						/>
						<feComposite in='SourceGraphic' in2='gooey' operator='atop' />
					</filter>
					<filter id='logo-glow' x='-50%' y='-50%' width='200%' height='200%'>
						<feGaussianBlur stdDeviation='3' result='coloredBlur' />
						<feMerge>
							<feMergeNode in='coloredBlur' />
							<feMergeNode in='SourceGraphic' />
						</feMerge>
					</filter>
					<linearGradient
						id='logo-gradient'
						x1='0%'
						y1='0%'
						x2='100%'
						y2='100%'
					>
						<stop offset='0%' stopColor='#06b6d4' />
						<stop offset='50%' stopColor='#ffffff' />
						<stop offset='100%' stopColor='#0891b2' />
					</linearGradient>
					<linearGradient
						id='hero-gradient'
						x1='0%'
						y1='0%'
						x2='100%'
						y2='100%'
					>
						<stop offset='0%' stopColor='#ffffff' />
						<stop offset='30%' stopColor='#06b6d4' />
						<stop offset='70%' stopColor='#f97316' />
						<stop offset='100%' stopColor='#ffffff' />
					</linearGradient>
					<filter id='text-glow' x='-50%' y='-50%' width='200%' height='200%'>
						<feGaussianBlur stdDeviation='2' result='coloredBlur' />
						<feMerge>
							<feMergeNode in='coloredBlur' />
							<feMergeNode in='SourceGraphic' />
						</feMerge>
					</filter>
				</defs>
			</svg>

			<MeshGradient
				className='absolute inset-0 w-full h-full'
				colors={['#000000', '#06b6d4', '#0891b2', '#164e63', '#f97316']}
				speed={0.3}
			/>
			<MeshGradient
				className='absolute inset-0 w-full h-full opacity-60'
				colors={['#000000', '#ffffff', '#06b6d4', '#f97316']}
				speed={0.2}
			/>

			<header className='relative z-20 flex items-center justify-between p-6'>
				<motion.div
					className='flex items-center group cursor-pointer'
					whileHover={{ scale: 1.05 }}
					transition={{ type: 'spring', stiffness: 400, damping: 10 }}
				>
					<Logo />
				</motion.div>

				{/* Navigation */}
				<HeaderMenu className='max-md:hidden' />
				<ContactButton className='max-md:hidden' />

				<Dialog
					className='flex items-center flex-col gap-20'
					trigger={
						<button className='md:hidden space-y-2 h-full px-6 max-sm:px-2 max-sm:space-y-1.5 cursor-pointer'>
							<hr className='w-6 border-white border-[0.5px] bg-white' />
							<hr className='w-6 border-white border-[0.5px] bg-white' />
						</button>
					}
				>
					<HeaderMenu className='flex-col gap-20 max-sm:gap-12 max-sm:text-base [&_a]:text-black [&_a]:text-lg [&_a]:font-medium' />
					<ContactButton className='text-lg font-semibold' />
				</Dialog>
			</header>

			<main className='absolute top-1/2 left-1/2 -translate-1/2 z-20 max-w-2xl max-sm:max-w-none max-sm:w-[90%]'>
				<div className='text-center flex flex-col items-center'>
					<motion.div
						className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10'
						style={{
							filter: 'url(#glass-effect)',
						}}
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						<div className='absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent rounded-full' />
						<span className='text-white/90 text-sm max-sm:text-xs font-medium relative z-10 tracking-wide'>
							☘️ Premium Health & Wellness Care
						</span>
					</motion.div>

					<motion.h1
						className='text-6xl font-bold text-white mb-6 leading-none tracking-tight max-sm:text-3xl'
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						<span className='block font-bold text-white drop-shadow-2xl'>
							Reach Your Peak
						</span>
					</motion.h1>

					<motion.p
						className='text-white mb-8 leading-relaxed max-w-xl max-sm:text-xs'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.8 }}
					>
						Customized medical and wellness solutions designed to optimize your
						mind and body — created specifically for your unique needs.
					</motion.p>

					<ContactUs
						source='hero'
						trigger={
							<motion.div
								className='flex items-center gap-6 flex-wrap'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 1.0 }}
							>
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10'
								>
									Start your journey
								</motion.button>
							</motion.div>
						}
					/>
				</div>
			</main>
		</div>
	)
}
