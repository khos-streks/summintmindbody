import { ContactUs } from '@/components/shared/contact'
import { Container } from '../../layout/container'
import { FeaturesSectionWithHoverEffects } from '../../ui/features-with-hover'
import { TREATMENTS } from './treatments.data'
import * as motion from 'framer-motion/client'

export function Treatments() {
	return (
		<section className='py-32 pb-40 max-sm:pb-20'>
			<Container>
				<h2 className='font-bold text-3xl text-center mb-5 max-sm:text-xl'>
					Accessible innovative treatment wherever you are
				</h2>
				<p className='text-sm text-center max-sm:text-xs'>
					We make modern treatments simple, convenient, and accessible. <br />{' '}
					Through our telemedicine platform, we currently serve patients in MI,
					FL, OH, NV, and CO.
				</p>

				<ContactUs
					source='default'
					trigger={
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10 mx-auto mt-6'
							style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
						>
							Start your journey
						</motion.button>
					}
				/>

				<div className='mt-10'>
					<FeaturesSectionWithHoverEffects features={TREATMENTS} />
				</div>

				<p className='mt-10 text-center text-sm max-sm:mt-4 max-sm:text-xs'>
					No traditional office visits. No hassle. Just streamlined, patient
					focused care.
				</p>
			</Container>
		</section>
	)
}
