import { Container } from '../layout/container'
import * as motion from 'framer-motion/client'
import { ContactUs } from './contact'

export function Cta() {
	return (
		<Container>
			<div
				className='p-20 grid grid-cols-2 rounded-4xl max-sm:grid-cols-1 max-sm:p-12'
				style={{
					background: "url('/cta-bg.png') no-repeat center top / cover",
				}}
			>
				<h3 className='font-bold text-2xl max-sm:text-lg'>
					Contact us to take the first step toward optimizing your health today!
				</h3>
				<ContactUs
					source='cta'
					trigger={
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-20 py-4 rounded-full text-sm bg-white text-black transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] flex items-center z-10 font-bold ml-auto max-sm:ml-0 max-sm:mt-4 max-sm:w-min max-sm:h-10 max-sm:text-nowrap max-sm:px-8 max-sm:text-sm'
							style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
						>
							Contact us
						</motion.button>
					}
				/>
			</div>
		</Container>
	)
}
