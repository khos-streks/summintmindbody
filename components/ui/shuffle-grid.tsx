'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { HERO_SHUFFLE_IMAGES } from '@/data/hero-shuffle.data'
import { BlurFade } from '@/components/ui/blur-fade'
import { FlowButton } from './flow-button'
import { ContactUs } from '../shared/contact'

export const ShuffleHero = () => {
	return (
		<div className='w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-8 max-w-6xl mx-auto'>
			<div>
				<span className='block mb-4 text-xs md:text-sm text-primary-foreground font-medium'>
					Better every day
				</span>
				<BlurFade inView>
					<h3 className='text-3xl tracking-tight whitespace-pre-line md:text-6xl font-semibold text-foreground'>
						Let's change it up a bit.
					</h3>
				</BlurFade>
				<p className='text-base md:text-lg text-foreground mb-8'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
					voluptas? Magni quasi et, numquam quaerat
				</p>
				<ContactUs
					source='hero'
					trigger={<FlowButton>Find a class</FlowButton>}
				/>
			</div>
			<ShuffleGrid />
		</div>
	)
}

const shuffle = (array: (typeof squareData)[0][]) => {
	let currentIndex = array.length,
		randomIndex

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex)
		currentIndex--
		;[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		]
	}

	return array
}

const squareData = [...HERO_SHUFFLE_IMAGES]

const generateSquares = () => {
	return shuffle(squareData).map(sq => (
		<motion.div
			key={sq.id}
			layout
			transition={{ duration: 1.5, type: 'spring' }}
			className='w-full h-full rounded-md overflow-hidden bg-muted'
			style={{
				backgroundImage: `url(${sq.src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}
		></motion.div>
	))
}

const ShuffleGrid = () => {
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)
	const [squares, setSquares] = useState<React.JSX.Element[]>([])

	const shuffleSquares = () => {
		setSquares(generateSquares())

		timeoutRef.current = setTimeout(shuffleSquares, 3000)
	}

	useEffect(() => {
		const initial = generateSquares()
		setSquares(initial)
		shuffleSquares()

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current)
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='grid grid-cols-4 grid-rows-4 h-[450px] gap-1'>
			{squares.map(sq => sq)}
		</div>
	)
}
