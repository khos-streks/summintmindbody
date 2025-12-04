import Image from 'next/image'
import { Container } from '../layout/container'
import { ContactUs } from './contact'
import * as motion from 'framer-motion/client'

export function ExtendedCta() {
	return (
		<section className='pt-40 max-sm:pt-20'>
			<Container>
				<div className='grid grid-cols-2 gap-12 max-sm:grid-cols-1 items-center'>
					<div className='h-full flex flex-col justify-center items-start'>
						<h2 className='text-3xl font-bold mb-6 max-sm:text-xl max-sm:mb-4'>
							Helping you make confident health decisions
						</h2>
						<p className='text-sm max-sm:text-xs'>
							We believe that informed patients achieve the best results. Our
							team guides and educates you at every step, so you always know why
							you're taking a treatment and how it benefits your body.
							<br />
							<br />
							<span className='font-bold'>
								With Summit Health, taking control of your health is simple,
								clear, and achievable.
							</span>
						</p>
						<ContactUs
							source='extended-cta'
							trigger={
								<motion.button
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10 mt-12 max-sm:mt-6'
									style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
								>
									Start your journey
								</motion.button>
							}
						/>
					</div>
					<div className='relative aspect-3/2'>
						<Image
							src='/extended-cta-bg.png'
							alt='Background'
							fill
							sizes='100%, 100%'
							className='rounded-xl'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
