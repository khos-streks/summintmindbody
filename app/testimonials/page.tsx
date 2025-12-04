import ShuffleHeroSection from '@/components/testimonials/shuffle-hero-section'
import TestimonialsColumnsSection from '@/components/testimonials/testimonials-columns-section'
import { Cta } from '@/components/shared/cta'
import { Metadata } from 'next'
import { Header } from '@/components/layout/header/header'
import Aurora from '@/components/ui/aurora'

export const metadata: Metadata = {
	title: 'Testimonials - Summit Mind & Body',
	description:
		'Read testimonials from our satisfied patients at Summit Mind & Body. Discover how our personalized health and wellness services have transformed lives.',
}

export default function TestimonialsPage() {
	return (
		<div>
			<div className='absolute -z-10 h-[40vh] w-full inset-0'>
				<Aurora
					colorStops={['#0E232D', '#0E232D', '#0E232D']}
					blend={1.5}
					amplitude={0.2}
					speed={1}
				/>
			</div>
			<Header />
			<ShuffleHeroSection />
			<TestimonialsColumnsSection />
			<Cta variant='years' className='mt-40 mb-30 max-sm:mt-14 max-sm:mb-12' />
		</div>
	)
}
