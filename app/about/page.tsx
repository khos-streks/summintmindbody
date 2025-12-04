import { Metadata } from 'next'
import { AboutHero } from '@/components/about/hero'
import { OurMission } from '@/components/about/mission'
import OurTeam from '@/components/about/team'
import { Cta } from '@/components/shared/cta'

export const metadata: Metadata = {
	title: 'About Summit Health - Summit Mind & Body',
	description:
		'Learn more about Summit Health and our commitment to personalized wellness and medical optimization.',
}

export default function AboutPage() {
	return (
		<>
			<AboutHero />
			<OurMission />
			<OurTeam />
			<Cta className='mb-40 mt-20 max-sm:mb-20 max-sm:mt-10' variant='years' />
		</>
	)
}
