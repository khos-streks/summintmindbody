import { HOME_FAQ } from '@/data/home-faq.data'
import { Container } from '../layout/container'
import { Faq } from '../shared/faq'
import { ContactUs } from '../shared/contact'
import * as motion from 'framer-motion/client'

export function TreatmentFaq({
	faq,
}: {
	faq: { question: string; answer: string; html: string }[]
}) {
	return (
		<section className='mb-20 max-sm:mb-10 mt-20 max-sm:mt-10 flex flex-col items-center'>
			<Container>
				<header className='space-y-2.5 pb-12 max-sm:pb-5'>
					<h2 className='text-center text-3xl font-bold max-sm:text-2xl'>
						FAQ
					</h2>
					<p className='text-center text-sm max-sm:text-sm'>
						Frequently Asked Questions
					</p>
				</header>
			</Container>

			<Faq faq={faq} />

			<ContactUs
				source='default'
				trigger={
					<button className='rounded-4xl bg-[#0E232D] px-9 py-4 text-sm text-white font-bold transition-colors hover:bg-neutral-700'>
						Start your journey today
					</button>
				}
			/>
		</section>
	)
}
