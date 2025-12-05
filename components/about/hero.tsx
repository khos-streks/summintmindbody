import { Header } from '../layout/header/header'
import { ContactUs } from '../shared/contact'
import { AuroraBackground } from '../ui/animated-background'
import * as motion from 'framer-motion/client'

export function AboutHero() {
	return (
		<div className='p-1.5'>
			<AuroraBackground className='rounded-3xl min-h-[calc(100vh-0.75rem)]!'>
				<Header className='absolute! w-full' />
				<div className='flex flex-col items-center justify-center min-h-[calc(100vh-0.75rem)] px-8 text-center'>
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
							Personalized Wellness & Medical Optimization
						</span>
					</motion.div>
					<h1 className='text-6xl font-bold text-white mb-4 tracking-tight max-sm:text-2xl'>
						About Summit Health
					</h1>
					<p className='mb-8 max-w-2xl text-white max-sm:text-xs'>
						Empowering individuals to improve their health, performance, and
						well-being through personalized, science-driven treatment programs.
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
			</AuroraBackground>
		</div>
	)
}
