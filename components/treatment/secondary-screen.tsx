import { ITreatment } from '@/types/treatment'
import { Container } from '../layout/container'
import { ContactUs } from '../shared/contact'

export function SecondaryScreen({
	screen,
}: {
	screen: { title: string; description: string; button: string }
}) {
	return (
		<Container className='grid grid-cols-[1fr_2fr] max-md:grid-cols-1 max-md:gap-4 py-20'>
			<div>
				<h2 className='text-3xl font-bold text-[#0E232D] max-sm:text-xl'>
					{screen.title}
				</h2>
			</div>
			<div>
				<p className='mb-10 text-sm text-[#0E232D] whitespace-pre-wrap'>
					{screen.description}
				</p>
				<ContactUs
					source='default'
					trigger={
						<button className='rounded-4xl bg-[#0E232D] px-9 py-4 text-sm text-white font-bold transition-colors hover:bg-neutral-700 w-1/2 max-sm:w-full'>
							{screen.button}
						</button>
					}
				/>
			</div>
		</Container>
	)
}
