'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

export type Testimonial = {
	text: string
	image: string
	name: string
	role: string
}

export const TestimonialsColumn = (props: {
	className?: string
  index?: number
	testimonials: Testimonial[]
}) => {
	const [isMobile, setIsMobile] = React.useState(false)
	const [resizeKey, setResizeKey] = React.useState(0)
	const resizeTimer = React.useRef<number | null>(null)

	React.useEffect(() => {
		const mq = window.matchMedia('(max-width: 640px)')
		const update = () => setIsMobile(mq.matches)
		update()

		const handleResize = () => {
			update()
			if (resizeTimer.current) window.clearTimeout(resizeTimer.current)
			resizeTimer.current = window.setTimeout(() => {
				setResizeKey(k => k + 1)
				resizeTimer.current = null
			}, 150)
		}

		if (mq.addEventListener) mq.addEventListener('change', update)
		else mq.addListener(update)
		window.addEventListener('resize', handleResize)

		return () => {
			if (mq.removeEventListener) mq.removeEventListener('change', update)
			else mq.removeListener(update)
			window.removeEventListener('resize', handleResize)
			if (resizeTimer.current) window.clearTimeout(resizeTimer.current)
		}
	}, [])

	return (
		<div className={props.className}>
			<div className='relative overflow-hidden'>
				<motion.div
					key={resizeKey}
					animate={{
						x: isMobile ? '-50%' : undefined,
						y: isMobile ? undefined : '-50%',
					}}
					transition={{
						duration: isMobile ? 3 : 20,
						repeat: Infinity,
						ease: 'linear',
						repeatType: 'mirror',
					}}
					className={
						'relative z-0 flex ' +
						(isMobile ? 'flex-row' : 'flex-col') +
						' gap-6 pb-6 bg-background'
					}
				>
					{[
						...new Array(2).fill(0).map((_, index) => (
							<React.Fragment key={index}>
								{props.testimonials.map(({ text, image, name, role }, i) => (
									<div
										className='p-10 rounded-3xl border border-gray-200 shadow-lg shadow-primary/10 w-full max-w-xs sm:max-w-xs max-sm:min-w-96'
										key={i}
									>
										<div>{text}</div>
										<div className='flex items-center gap-2 mt-5'>
											<Image
												width={40}
												height={40}
												src={image}
												alt={name}
												unoptimized
												className='h-10 w-10 rounded-full'
											/>
											<div className='flex flex-col'>
												<div className='font-medium tracking-tight leading-5'>
													{name}
												</div>
												<div className='leading-5 opacity-60 tracking-tight'>
													{role}
												</div>
											</div>
										</div>
									</div>
								))}
							</React.Fragment>
						)),
					]}
				</motion.div>
			</div>
		</div>
	)
}
