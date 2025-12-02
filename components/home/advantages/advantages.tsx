import { Container } from '@/components/layout/container'

export async function Advantages() {
	return (
		<section className='pt-24 max-sm:pt-14'>
			<Container className='grid grid-cols-2 justify-between gap-10 max-sm:grid-cols-1'>
				<div
					className='relative flex flex-col items-center justify-end pb-10 px-6 h-96 rounded-4xl'
					style={{
						background:
							"url('/advantages/care.png') no-repeat center top / cover",
					}}
				>
					<h3 className='font-bold text-2xl text-center max-sm:text-lg'>
						Personalized care designed for you
					</h3>
					<p className='text-center text-sm mt-2.5 max-sm:text-xs'>
						Summit Health delivers custom-tailored medical and non-medical
						solutions based on your individual needs. Every patient receives a
						unique, targeted approach — never a one-size-fits-all plan.
					</p>
				</div>

				<div
					className='relative flex flex-col items-center justify-end pb-10 px-6 h-96 rounded-4xl'
					style={{
						background:
							"url('/advantages/years.png') no-repeat center top / cover",
					}}
				>
					<h3 className='font-bold text-center text-2xl max-sm:text-lg'>
						Your best years are still ahead
					</h3>
					<p className='text-center text-sm mt-2.5 max-sm:text-xs'>
						Our physicians and wellness specialists work closely with you to
						create a personalized program that strengthens your health, enhances
						your well-being, and ensures your best years are yet to come.
					</p>
				</div>
			</Container>
		</section>
	)
}
