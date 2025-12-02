import Link from 'next/link'
import { FOOTER } from './footer.data'

export function FooterSocialList() {
	return (
		<ul className='flex items-center gap-10 max-sm:justify-center'>
			{FOOTER.social.map((social, i) => (
				<li key={i}>
					<Link
						href={social.link}
						target='_blank'
						className='flex items-center gap-2.5'
					>
						{social.icon} {social.title}
					</Link>
				</li>
			))}
		</ul>
	)
}
