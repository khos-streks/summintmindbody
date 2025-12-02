import { Container } from '../../layout/container'
import { FeaturesSectionWithHoverEffects } from '../../ui/features-with-hover'
import { TREATMENTS } from './treatments.data'

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
