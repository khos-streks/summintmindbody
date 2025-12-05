'use client'

import { DialogContext } from '@/components/ui/dialog'
import { TREATMENTS } from '@/data/treatments.data'
import clsx from 'clsx'
import Link from 'next/link'
import { useContext, useEffect, useRef, useState } from 'react'

function slugToTitle(slug: string) {
	return slug
		.split('-')
		.map(s => s.charAt(0).toUpperCase() + s.slice(1))
		.join(' ')
}

export function HeaderMenu({
	className,
	colorScheme = 'dark',
}: {
	className?: string
	colorScheme?: 'light' | 'dark'
}) {
	const dialogContextValues = useContext(DialogContext)
	const closeDialog = dialogContextValues?.closeDialog
	const [open, setOpen] = useState(false)
	const menuRef = useRef<HTMLDivElement | null>(null)

	const isDark = colorScheme !== 'light'
	const baseLinkClass = clsx(
		'text-sm px-3 py-2 rounded-full transition-all duration-200',
		isDark
			? 'text-white/80 hover:text-white hover:bg-white/10'
			: 'text-black/80 hover:text-black hover:bg-black/5'
	)
	const buttonClass = clsx(
		baseLinkClass,
		'flex items-center space-x-2 max-sm:[&_span]:font-medium max-sm:[&_span]:text-lg'
	)
	const dropdownClass = clsx(
		'absolute right-0 mt-2 w-64 rounded-md shadow-lg py-2 z-[999999]!',
		'bg-white text-black ring-1 ring-black/5',
		{ hidden: !open }
	)
	const itemClass = clsx(
		'block px-6 py-3 text-sm transition-colors',
		isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'
	)

	useEffect(() => {
		function onDocClick(e: MouseEvent) {
			if (!menuRef.current) return
			if (menuRef.current.contains(e.target as Node)) return
			setOpen(false)
		}

		document.addEventListener('click', onDocClick)
		return () => document.removeEventListener('click', onDocClick)
	}, [])

	return (
		<nav className={clsx('flex items-center space-x-2', className)}>
			<a onClick={closeDialog} href='/#' className={baseLinkClass}>
				Home
			</a>

			<div className='relative' ref={menuRef}>
				<button
					onClick={() => setOpen(o => !o)}
					aria-haspopup='menu'
					aria-expanded={open}
					className={buttonClass}
				>
					<span>Treatments</span>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='16'
						height='16'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='opacity-80'
					>
						<polyline points='6 9 12 15 18 9' />
					</svg>
				</button>

				<div className={dropdownClass}>
					{TREATMENTS.map(t => (
						<Link
							key={t.slug}
							href={`/treatments/${t.slug}`}
							onClick={() => {
								closeDialog?.()
								setOpen(false)
							}}
							className={itemClass}
						>
							{(t as any).title ?? slugToTitle(t.slug)}
						</Link>
					))}
				</div>
			</div>

			<a onClick={closeDialog} href='/testimonials' className={baseLinkClass}>
				Reviews
			</a>
			<a onClick={closeDialog} href='/about' className={baseLinkClass}>
				About us
			</a>
		</nav>
	)
}
