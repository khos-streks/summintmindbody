'use client'

import { ContactUs } from '@/components/shared/contact'
import { Logo } from '@/components/ui/logo'
import clsx from 'clsx'
import { HeaderMenu } from './header-menu'
import { Dialog } from '@/components/ui/dialog'
import { motion } from 'framer-motion'

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

export function Header({ className }: { className?: string }) {
	return (
		<header
			className={clsx(
				'relative z-20 flex items-center justify-between p-6',
				className
			)}
		>
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
	)
}
