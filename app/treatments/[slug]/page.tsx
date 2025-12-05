import { MultiScreenContent } from '@/components/treatment/multi-screen-content'
import { TreatmentFaq } from '@/components/treatment/treatment-faq'
import { FaqJsonld } from '@/components/utility/faq-jsonld'
import { TREATMENTS } from '@/data/treatments.data'
import { notFound } from 'next/navigation'

export default async function TreatmentsPage({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const treatment = TREATMENTS.find(t => t.slug === slug)

	if (!treatment) notFound()

	return (
		<div>
			<FaqJsonld faq={treatment.faq} />
			<MultiScreenContent treatment={treatment} />
			<TreatmentFaq faq={treatment.faq} />
		</div>
	)
}
