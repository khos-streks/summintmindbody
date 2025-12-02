import clsx from 'clsx'
import Link from 'next/link'

export function FooterLinksList({
	className,
	links,
}: {
	className?: string
	links: { title: string; link: string }[]
}) {
	return (
		<ul className={clsx(className)}>
			{links.map((item, i) => (
				<li key={i} className='hover:underline underline-offset-4 text-sm'>
					<Link href={item.link}>{item.title}</Link>
				</li>
			))}
		</ul>
	)
}
