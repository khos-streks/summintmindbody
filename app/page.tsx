import { Hero } from '@/components/home/hero'
import { HomeFaq } from '@/components/home/home-faq'
import { TreatmentsCarousel } from '@/components/home/treatments-carousel/treatments-carousel'
import { Treatments } from '@/components/home/treatments/treatments'
import { Cta } from '@/components/shared/cta'
import { FaqJsonld } from '@/components/utility/faq-jsonld'
import { HOME_FAQ } from '@/data/home-faq.data'

export default function Home() {
	return (
		<>
			<FaqJsonld faq={HOME_FAQ} />
			<Hero />
			<Treatments />
			<Cta />
			<TreatmentsCarousel />
			<HomeFaq />
		</>
	)
}
