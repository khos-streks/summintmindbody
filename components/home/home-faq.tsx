import { HOME_FAQ } from '@/data/home-faq.data'
import { Container } from '../layout/container'
import { Faq } from '../shared/faq'

export function HomeFaq() {
	return (
		<section className='mb-40 max-sm:mb-20'>
			<Container>
				<header className='space-y-2.5 pb-12 max-sm:pb-5'>
					<h2 className='text-center text-3xl font-bold max-sm:text-2xl'>
						Frequently Asked Questions
					</h2>
					<p className='text-center text-sm max-sm:text-sm'>
						Clear answers to help you understand how Summit Health works and
						what to expect.
					</p>
				</header>
			</Container>
			<Faq faq={HOME_FAQ} />
		</section>
	)
}
