import { Container } from '../layout/container'
import * as motion from 'framer-motion/client'
import { ContactUs } from './contact'
import clsx from 'clsx'

export function Cta({
	variant = 'default',
	className,
}: {
	variant?: 'default' | 'years'
	className?: string
}) {
	return variant === 'default' ? (
		<Container>
			<div
				className={clsx(
					'p-20 grid grid-cols-2 rounded-4xl max-sm:grid-cols-1 max-sm:p-12',
					className
				)}
				style={{
					background: `url('/cta-bg.png') no-repeat center top / cover`,
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
	) : (
		<Container>
			<div
				className={clsx(
					'p-20 max-sm:px-6 max-sm:p-12 rounded-4xl max-sm:grid-cols-1',
					className
				)}
				style={{
					background: `url('/cta-bg-years.png') no-repeat center top / cover`,
				}}
			>
				<h3 className='font-bold text-3xl max-sm:text-lg'>
					Your best years are ahead
				</h3>
				<p className='mb-6 mt-2.5'>
					We believe your best years are still to come and we’re here to help
					you experience them fully.
				</p>
				<ContactUs
					source='cta'
					trigger={
						<motion.button
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10 mt-6'
							style={{ boxShadow: '0px 0px 20px 0px #0000001A' }}
						>
							Start your journey
						</motion.button>
					}
				/>
			</div>
		</Container>
	)
}
