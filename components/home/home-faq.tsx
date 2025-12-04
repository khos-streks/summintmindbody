import { HOME_FAQ } from '@/data/home-faq.data'
import { Container } from '../layout/container'
import { Faq } from '../shared/faq'
import { ContactUs } from '../shared/contact'
import * as motion from 'framer-motion/client'

export function HomeFaq() {
	return (
		<section className='mb-20 max-sm:mb-10 mt-40 max-sm:mt-20'>
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

			<ContactUs
				source='default'
				trigger={
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10 mt-12 max-sm:mt-6 mx-auto'
						style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
					>
						Start your journey
					</motion.button>
				}
			/>
		</section>
	)
}
