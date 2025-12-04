'use client'
import {
	Testimonial,
	TestimonialsColumn,
} from '@/components/shared/testimonials'
import { BlurFade } from '@/components/ui/blur-fade'
import { TESTIMONIALS_DATA } from '@/data/testimonials.data'
import clsx from 'clsx'
import { motion } from 'framer-motion'

export default function TestimonialsColumnsSection() {
	return (
		<section className='flex flex-col items-center mb-10 mt-20'>
			<div className='container z-10 mx-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
					viewport={{ once: true }}
					className='flex flex-col items-center justify-center max-w-[300px] md:max-w-2xl mx-auto'
				>
					<BlurFade inView>
						<h2 className='text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5'>
							Verified success stories
						</h2>
					</BlurFade>
					<p className='text-center mt-5 opacity-75'>
						Below are real experiences from patients whose lives improved
						through personalized care, hormone optimization, performance
						programs, and telemedicine support.
					</p>
				</motion.div>
				<div className='flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent),linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] [mask-composite:intersect] max-h-[740px] overflow-hidden max-sm:max-h-none max-sm:flex-col'>
					{Object.entries(TESTIMONIALS_DATA).map(([key, value], idx) => (
						<TestimonialsColumn
							key={key}
							index={idx}
							testimonials={value.baseTestimonials as Testimonial[]}
							className={clsx(' max-sm:w-full', value.className)}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
