import { Logo } from '@/components/ui/logo'
import { Container } from '../layout/container'
import { FOOTER } from './footer.data'
import { FooterLinksList } from './footer-links-list'
import { FooterSocialList } from './footer-social-list'
import { FooterLegalList } from './footer-legal-list'

export function Footer() {
	return (
		<footer className='px-3 pb-6'>
			<Container className='bg-[#0E232D] rounded-3xl px-16 pt-20 pb-5 text-white max-sm:px-10 max-sm:py-5'>
				<div className='grid grid-cols-4 justify-between gap-10 max-lg:grid-cols-2 max-sm:grid-cols-1'>
					<>
						<Logo
							height={42}
							width={193}
							withSlogan
							className='max-sm:w-[140px]'
						/>
					</>
					<div>
						<h3 className='font-bold text-sm mb-2.5'>
							{FOOTER.treatments.title}
						</h3>
						<FooterLinksList
							className='flex flex-col gap-2'
							links={FOOTER.treatments.items.slice(0, 4)}
						/>
					</div>
					<div>
						<FooterLinksList
							className='flex flex-col gap-2'
							links={FOOTER.treatments.items.slice(4, 7)}
						/>
					</div>
					<div>
						<h3 className='font-bold text-sm mb-2.5'>{FOOTER.company.title}</h3>
						<FooterLinksList
							className='flex flex-col gap-2'
							links={FOOTER.company.items}
						/>
					</div>
				</div>
				<hr className='mt-10 mb-5 border-none h-px w-full bg-[#E5E5E5]' />
				<div className='flex items-center justify-between gap-10 max-lg:flex-col'>
					<div className='flex items-center justify-between w-full gap-10 max-sm:gap-4 max-sm:flex-col'>
						<FooterSocialList />
						<p className='text-sm max-sm:text-xs'>
							© {new Date().getFullYear()} SummitmindBody
						</p>
						<FooterLegalList />
					</div>
				</div>
			</Container>
		</footer>
	)
}
