'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FiArrowUpRight } from 'react-icons/fi'

const IMG_PADDING = 0

export const TextParallaxContent = ({
	imgUrl,
	content,
	children,
}: {
	imgUrl: string
	content: React.ReactNode
	children: React.ReactNode
}) => {
	return (
		<div
			style={{
				paddingLeft: IMG_PADDING,
				paddingRight: IMG_PADDING,
			}}
		>
			<div className='relative h-[150vh]'>
				<StickyImage imgUrl={imgUrl} />
				<OverlayCopy content={content} />
			</div>
			{children}
		</div>
	)
}

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['end end', 'end start'],
	})

	const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85])
	const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

	return (
		<motion.div
			style={{
				backgroundImage: `url(${imgUrl})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: `calc(100vh - ${IMG_PADDING * 2}px)`,
				top: IMG_PADDING,
				scale,
			}}
			ref={targetRef}
			className='sticky z-0 overflow-hidden'
		>
			<motion.div
				className='absolute inset-0 bg-neutral-950/70'
				style={{
					opacity,
				}}
			/>
		</motion.div>
	)
}

const OverlayCopy = ({ content }: { content: React.ReactNode }) => {
	const targetRef = useRef(null)
	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ['start end', 'end start'],
	})

	const y = useTransform(scrollYProgress, [0, 1], [250, -250])
	const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0])

	return (
		<motion.div
			style={{
				y,
				opacity,
			}}
			ref={targetRef}
			className='absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white'
		>
			{content}
		</motion.div>
	)
}

const ExampleContent = () => (
	<div className='mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12'>
		
	</div>
)
