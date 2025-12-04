'use client'

import { MEMBERS } from '@/data/team.data'
import clsx from 'clsx'
import { AnimatePresence, m, motion, useInView, Variants } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

export interface TeamMemberData {
	name: string
	image: string
	title: string
	text: string
	isReversed?: boolean
}

import { createPortal } from 'react-dom'

const Modal = ({
	isOpen,
	onClose,
	children,
}: {
	isOpen: boolean
	onClose: () => void
	children: React.ReactNode
}) => {
	const modalRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}

		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
			onClose()
		}
	}

	const modalContent = (
		<AnimatePresence>
			{isOpen && (
				<div className='fixed inset-0 z-9999 overflow-y-auto'>
					<div className='min-h-screen flex items-center justify-center px-4 py-6 md:px-0'>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={handleBackdropClick}
							className='fixed inset-0 bg-black/30 backdrop-blur-sm'
						/>
						<motion.div
							ref={modalRef}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							transition={{ type: 'spring', duration: 0.5 }}
							className='relative w-full max-w-[450px] sm:max-w-[550px] md:max-w-3xl h-[712px] mx-auto rounded-2xl bg-white shadow-2xl'
						>
							<div className='h-full overflow-y-auto'>
								<button
									onClick={onClose}
									className='absolute right-4 top-4 z-10 text-gray-400 hover:text-gray-600 transition-colors'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-6 w-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								</button>
								{children}
							</div>
						</motion.div>
					</div>
				</div>
			)}
		</AnimatePresence>
	)

	// Check if we're in a browser environment
	if (typeof window === 'undefined') return null

	return createPortal(
		modalContent,
		document.getElementById('portal-root') || document.body
	)
}

const TeamMember = ({
	index,
	isReversed = false,
	member,
}: {
	index: number
	isReversed?: boolean
	member: TeamMemberData
}) => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const ref = useRef(null)
	const isInView = useInView(ref, { once: true, margin: '-100px' })

	const textVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: { duration: 0.6, ease: 'easeOut' },
		},
	}

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.95 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: { duration: 0.8, ease: 'easeOut' },
		},
	}

	return (
		<>
			<section
				ref={ref}
				className={`max-w-7xl w-full mx-auto lg:grid-cols-[2fr_1fr] px-4 py-10 grid ${
					isReversed && 'lg:auto-cols-fr'
				} items-center justify-center gap-8 grid-cols-1 ${
					isReversed ? 'lg:flex-row-reverse' : ''
				}`}
				style={isReversed ? { direction: 'rtl' } : undefined}
			>
				<motion.div
					variants={textVariants as Variants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className={`flex flex-col gap-4 max-lg:order-2 ${
						isReversed ? 'lg:text-left' : 'lg:text-left'
					}`}
					style={isReversed ? { direction: 'ltr' } : undefined}
				>
					<span
						className={clsx(
							'text-4xl font-bold bg-black bg-clip-text text-transparent',
							{ 'text-end': isReversed }
						)}
					>
						{member.name}
					</span>
					<div className='space-y-4 flex flex-col'>
						<div className='relative'>
							<h2
								className={clsx(
									'text-lg sm:text-xl font-semibold text-gray-800 mb-4',
									{ 'text-end': isReversed }
								)}
							>
								{member.title}
							</h2>
							<div
								className={clsx('max-h-40 overflow-hidden relative', {
									'text-end': isReversed,
								})}
							>
								<p className='whitespace-pre-wrap wrap-anywhere'>
									{member.text.slice(0, 500)}
								</p>
								<div
									className='absolute bottom-0 left-0 right-0 h-20 pointer-events-none'
									style={{
										background:
											'linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 60%, #FFFFFF 100%)',
									}}
								/>
							</div>
						</div>
						<button
							onClick={() => setIsModalOpen(true)}
							className={clsx(
								'mr-auto px-30 max-sm:px-0 max-sm:w-full py-[15px] rounded-full font-bold text-[16px] leading-[19.5px] select-none transition-all duration-300 ease-in-out',
								'hover:scale-105',
								'bg-white text-black',
								{ 'ml-auto mr-0!': isReversed }
							)}
							style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
						>
							More
						</button>
					</div>
				</motion.div>{' '}
				<motion.div
					variants={imageVariants as Variants}
					initial='hidden'
					animate={isInView ? 'visible' : 'hidden'}
					className='w-full sm:max-w-[500px] lg:max-w-[640px] shrink-0'
				>
					<div className='relative z-10 flex w-full cursor-pointer items-center overflow-hidden rounded-[20px] sm:rounded-[30px] p-[1.5px]'>
						<div className='relative z-50 flex w-full rounded-2xl'>
							<img
								src={member.image}
								alt={member.name}
								className='w-full h-auto transition-opacity duration-300 rounded-2xl'
								loading='eager'
							/>
						</div>
					</div>
				</motion.div>
			</section>

			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<div className='p-4 sm:p-8 relative '>
					<div className='mb-6 sm:mb-8'>
						<h2 className='text-xl sm:text-2xl md:text-3xl font-bold bg-black bg-clip-text text-transparent mb-2'>
							{member.name}
						</h2>
						<p className='text-base sm:text-lg md:text-xl font-semibold text-gray-800'>
							{member.title}
						</p>
					</div>
					<div className='space-y-6 sm:space-y-8'>
						<p className='whitespace-pre-wrap wrap-anywhere'>{member.text}</p>
					</div>
				</div>
			</Modal>
		</>
	)
}

const OurTeam = () => {
	const headerRef = useRef<HTMLHeadingElement>(null)
	const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

	const headerVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: 'easeOut',
			},
		},
	}

	return (
		<div className='flex flex-col'>
			<motion.h1
				ref={headerRef}
				variants={headerVariants as Variants}
				initial='hidden'
				animate={isHeaderInView ? 'visible' : 'hidden'}
				className='font-bold text-3xl text-center max-sm:text-xl mb-16'
			>
				Sub-Tab for Meet the Team:
			</motion.h1>

			{MEMBERS.map((member, index) => (
				<TeamMember
					key={index}
					index={index}
					member={member}
					isReversed={index % 2 !== 0}
				/>
			))}
		</div>
	)
}

export default OurTeam
