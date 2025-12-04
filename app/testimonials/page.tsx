import ShuffleHeroSection from '@/components/testimonials/shuffle-hero-section'
import TestimonialsColumnsSection from '@/components/testimonials/testimonials-columns-section'
import { Cta } from '@/components/shared/cta'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Testimonials - Summit Mind & Body',
	description:
		'Read testimonials from our satisfied patients at Summit Mind & Body. Discover how our personalized health and wellness services have transformed lives.',
}

export default function TestimonialsPage() {
	return (
		<>
			<ShuffleHeroSection />
			<TestimonialsColumnsSection />
			<Cta variant='years' className='mt-40 mb-30 max-sm:mt-14 max-sm:mb-12' />
		</>
	)
}
