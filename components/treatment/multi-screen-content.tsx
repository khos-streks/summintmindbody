import { Header } from '@/components/layout/header/header'
import { TextParallaxContent } from '@/components/ui/text-parallax-content'
import * as motion from 'framer-motion/client'
import { ContactUs } from '@/components/shared/contact'
import { ITreatment } from '@/types/treatment'
import { SecondaryScreen } from './secondary-screen'

export function MultiScreenContent({ treatment }: { treatment: ITreatment }) {
	return (
		<div>
			<TextParallaxContent
				imgUrl={treatment?.screens[0].main.image}
				content={
					<div className='relative w-full'>
						<Header className='absolute! w-full' />
						<div className='flex flex-col items-center justify-center min-h-screen px-8 text-center'>
							<motion.div
								className='inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm mb-6 relative border border-white/10'
								style={{
									filter: 'url(#glass-effect)',
								}}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.2 }}
							>
								<div className='absolute top-0 left-1 right-1 h-px bg-linear-to-r from-transparent via-cyan-400/30 to-transparent rounded-full' />
								<span className='text-white/90 text-sm max-sm:text-xs font-medium relative z-10 tracking-wide'>
									{treatment.screens[0].main.eyebrow}
								</span>
							</motion.div>
							<h1 className='text-6xl font-bold text-white mb-4 tracking-tight max-sm:text-2xl'>
								{treatment.screens[0].main.title}
							</h1>
							<p className='mb-8 max-w-2xl text-white max-sm:text-xs'>
								{treatment.screens[0].main.description}
							</p>
							<ContactUs
								source='hero'
								trigger={
									<motion.div
										className='flex items-center gap-6 flex-wrap'
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: 1.0 }}
									>
										<motion.button
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
											className='px-12 py-4 rounded-full bg-white text-black font-normal transition-all duration-300 hover:bg-white/90 cursor-pointer h-[50px] max-sm:h-10 max-sm:text-sm max-sm:px-8 flex items-center z-10'
										>
											Start your journey
										</motion.button>
									</motion.div>
								}
							/>
						</div>
					</div>
				}
			>
				<SecondaryScreen screen={treatment.screens[0].secondary} />
			</TextParallaxContent>
			{treatment.screens.slice(1).map(screen => (
				<TextParallaxContent
					key={screen.secondary.title}
					imgUrl={screen.main.image}
					content={
						<div className='relative w-full h-full flex items-center justify-center'>
							<h2 className='text-6xl font-bold text-white mb-4 tracking-tight max-sm:text-2xl text-center'>
								{screen.main.title}
							</h2>
						</div>
					}
				>
					<SecondaryScreen screen={screen.secondary} />
				</TextParallaxContent>
			))}
		</div>
	)
}
