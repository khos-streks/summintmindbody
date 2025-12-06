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

	// Mobile detection + accordion height state
	const [isMobile, setIsMobile] = useState(false)
	const contentRef = useRef<HTMLDivElement | null>(null)
	const [maxHeight, setMaxHeight] = useState(0)

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
		// Mobile: render as a normal block in the flow instead of absolute popup
		// `max-sm:` utilities ensure this becomes inline/stacked on small screens
		'max-sm:static max-sm:w-full max-sm:rounded-none max-sm:shadow-none max-sm:py-0 max-sm:mt-2 max-sm:bg-transparent max-sm:ring-0',
		{ hidden: !open && !isMobile }
	)
	const itemClass = clsx(
		'block px-6 py-3 text-sm transition-colors',
		isDark ? 'hover:bg-white/10' : 'hover:bg-black/5',
		// Mobile adjustments: full-width tappable list items and subtle separators
		'max-sm:px-4 max-sm:py-3 max-sm:w-full max-sm:text-base max-sm:border-b max-sm:border-white/5'
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

	// Track mobile viewport (matches Tailwind `sm` breakpoint ~640px)
	useEffect(() => {
		if (typeof window === 'undefined') return
		const mq: any = window.matchMedia('(max-width: 640px)')
		const handle = (e: MediaQueryListEvent | MediaQueryList) => {
			setIsMobile('matches' in e ? e.matches : mq.matches)
		}
		handle(mq)
		if ('addEventListener' in mq) mq.addEventListener('change', handle)
		else mq.addListener(handle as any)
		return () => {
			if ('removeEventListener' in mq) mq.removeEventListener('change', handle)
			else mq.removeListener(handle as any)
		}
	}, [])

	// Update measured height for accordion animation
	useEffect(() => {
		if (!isMobile) {
			setMaxHeight(0)
			return
		}
		const el = contentRef.current
		if (!el) return
		if (open) setMaxHeight(el.scrollHeight)
		else setMaxHeight(0)
	}, [open, isMobile])

	return (
		<nav
			className={clsx(
				'flex items-center space-x-2',
				'max-sm:flex-col max-sm:items-start',
				className
			)}
		>
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

				<div
					className={dropdownClass}
					style={
						isMobile
							? {
									maxHeight: `${maxHeight}px`,
									overflow: 'hidden',
									transition: 'max-height 260ms ease',
							  }
							: undefined
					}
				>
					<div ref={contentRef} className='flex flex-col'>
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
