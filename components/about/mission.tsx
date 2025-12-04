import { Container } from '../layout/container'

export function OurMission() {
	return (
		<section className='pt-16 pb-28 max-sm:pb-20'>
			<Container className='space-y-24'>
				<div>
					<h2 className='font-bold text-3xl mb-2.5 max-sm:text-xl'>Our Mission:</h2>
					<p className='text-sm w-2/3 max-sm:w-full max-sm:text-xs'>
						At Summit Health, our mission is to provide the newest and most
						innovative therapies available to enhance physical and mental
						wellness through our innovative telemedicine platform. With our
						proactive approach to healthcare, we focus on educating our patients
						and optimizing every dimension of health. We believe that patients
						everywhere should have access to the most groundbreaking,
						transformative treatments at an affordable price. We are committed
						to creating a new industry standard—affordable, accessible
						healthcare that empowers patients and enhances all aspects of life.
					</p>
				</div>
				<div>
					<h2 className='font-bold text-3xl mb-2.5 text-end max-sm:text-xl'>Our Vision:</h2>
					<p className='text-sm w-2/3 ml-auto max-sm:w-full text-end max-sm:text-xs'>
						With fast-approaching innovations in medical technology, we aim to
						revolutionize regenerative medicine by increasing efficiency,
						expanding access, and lowering costs. We believe in a world where
						the standard of medicine is not in “sick care”, but in promoting
						greater overall physical and mental wellness. We are committed to
						improving accessibility to the latest medical developments through
						our telehealth platform by increasing affordability, facilitating
						delivery, and educating the community.
					</p>
				</div>
			</Container>
		</section>
	)
}
