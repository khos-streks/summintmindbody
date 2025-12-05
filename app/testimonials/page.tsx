import ShuffleHeroSection from '@/components/testimonials/shuffle-hero-section'
import TestimonialsColumnsSection from '@/components/testimonials/testimonials-columns-section'
import { Cta } from '@/components/shared/cta'
import { Metadata } from 'next'
import { Header } from '@/components/layout/header/header'

export const metadata: Metadata = {
	title: 'Testimonials - Summit Mind & Body',
	description:
		'Read testimonials from our satisfied patients at Summit Mind & Body. Discover how our personalized health and wellness services have transformed lives.',
}

export default function TestimonialsPage() {
	return (
		<div>
			<div className='p-1.5 min-h-[calc(100vh-0.75rem)]'>
				<div className='bg-[#0E232D] min-h-[calc(100vh-0.75rem)] rounded-3xl'>
					<Header />
					<ShuffleHeroSection />
				</div>
			</div>
			<TestimonialsColumnsSection />
			<Cta variant='years' className='mt-40 mb-30 max-sm:mt-14 max-sm:mb-12' />
		</div>
	)
}
