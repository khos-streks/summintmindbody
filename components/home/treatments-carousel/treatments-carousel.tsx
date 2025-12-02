'use client'

import { useEffect, useState } from 'react'
import {
	Carousel,
	CarouselApi,
	CarouselContent,
	CarouselItem,
} from '../../ui/carousel'
import { Button } from '../../ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { SLIDES } from './carousel.data'
import { Container } from '../../layout/container'
import Link from 'next/link'

export interface Gallery4Item {
	id: string
	title: string
	description: string
	href: string
	image: string
}

export const TreatmentsCarousel = () => {
	const [carouselApi, setCarouselApi] = useState<CarouselApi>()
	const [canScrollPrev, setCanScrollPrev] = useState(false)
	const [canScrollNext, setCanScrollNext] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)

	useEffect(() => {
		if (!carouselApi) {
			return
		}
		const updateSelection = () => {
			setCanScrollPrev(carouselApi.canScrollPrev())
			setCanScrollNext(carouselApi.canScrollNext())
			setCurrentSlide(carouselApi.selectedScrollSnap())
		}
		updateSelection()
		carouselApi.on('select', updateSelection)
		return () => {
			carouselApi.off('select', updateSelection)
		}
	}, [carouselApi])

	return (
		<section className='flex flex-col gap-10 items-center py-12 my-40 max-sm:my-20 bg-[#F4F4F4]'>
			<Container>
				<div className='mb-8 max-sm:mb-0 flex flex-col items-center justify-between gap-8'>
					<div className='flex flex-col gap-4 text-center justify-center items-center px-5'>
						<h2 className='font-bold text-3xl max-sm:text-xl'>Treatment options</h2>
						<p className='text-sm max-sm:text-xs'>
							Insert image carousel here - each image clickable and leading to
							its own treatment page.
						</p>
					</div>
				</div>
			</Container>
			<div className='w-full'>
				<Carousel
					setApi={setCarouselApi}
					opts={{
						breakpoints: {
							'(max-width: 768px)': {
								dragFree: true,
							},
						},
					}}
				>
					<CarouselContent className='ml-0 2xl:ml-[max(8rem,calc(50vw-700px))] 2xl:mr-[max(0rem,calc(50vw-700px))] '>
						{SLIDES.map(item => (
							<CarouselItem
								key={item.id}
								className='max-w-[320px] lg:max-w-[360px] pl-10'
							>
								<Link className='contents' href={item.link}>
									<div className='group'>
										<div
											className='group transform-gpu relative h-full min-h-108 w-full rounded-[20px] overflow-hidden md:aspect-4/5 lg:aspect-9/16 bg-neutral-900'
											style={{ boxShadow: '0px 0px 15px 0px #00000040' }}
										>
											<Image
												src={item.background}
												alt={item.title}
												fill
												className='absolute inset-0 object-cover rounded-none  object-[0_50%] transition-transform duration-300 group-hover:scale-105 pointer-events-none opacity-90'
											/>

											<div className='bg-linear-to-t from-black via-black/80 to-transparent absolute bottom-0 w-full h-1/2' />
											<div className='absolute inset-x-0 bottom-0 flex flex-col items-start p-6 text-primary md:p-8 rounded-lg'>
												<div className='mb-2 pt-4 text-xl font-semibold md:mb-3 md:pt-4 lg:pt-4 text-white'>
													{item.title}
												</div>
												<div className='line-clamp-2 text-white'>{item.description}</div>
											</div>
										</div>
									</div>
								</Link>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
				{/* <div className='mt-8 flex justify-center gap-2'>
					{items.map((_, index) => (
						<button
							key={index}
							className={`h-2 w-2 rounded-full transition-colors ${
								currentSlide === index ? 'bg-primary' : 'bg-primary/20'
							}`}
							onClick={() => carouselApi?.scrollTo(index)}
							aria-label={`Go to slide ${index + 1}`}
						/>
					))}
				</div> */}
			</div>
			<div className='hidden shrink-0 gap-2 md:flex '>
				<Button
					variant='ghost'
					onClick={() => {
						carouselApi?.scrollPrev()
					}}
					disabled={!canScrollPrev}
					className='disabled:pointer-events-auto disabled:cursor-not-allowed cursor-pointer'
				>
					<ArrowLeft className='size-5' />
				</Button>
				<Button
					variant='ghost'
					onClick={() => {
						carouselApi?.scrollNext()
					}}
					disabled={!canScrollNext}
					className='disabled:pointer-events-auto disabled:cursor-not-allowed cursor-pointer'
				>
					<ArrowRight className='size-5' />
				</Button>
			</div>
		</section>
	)
}
