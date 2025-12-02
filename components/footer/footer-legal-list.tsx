import Link from 'next/link'
import { FOOTER } from './footer.data'

export function FooterLegalList() {
	return (
		<ul className='flex items-center gap-10 max-sm:justify-center'>
			{FOOTER.legal.map((legal, i) => (
				<li key={i}>
					<Link
						href={legal.link}
						target='_blank'
						className='flex items-center gap-2.5 text-sm'
					>
						{legal.title}
					</Link>
				</li>
			))}
		</ul>
	)
}
