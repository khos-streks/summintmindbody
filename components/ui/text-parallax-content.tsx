'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const IMG_PADDING = 6

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
			<div className='relative h-screen'>
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
		offset: ['start start', 'end start'],
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
			className='sticky z-0 overflow-hidden rounded-3xl'
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
