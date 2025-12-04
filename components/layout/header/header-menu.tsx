import { DialogContext } from '@/components/ui/dialog'
import clsx from 'clsx'
import { useContext } from 'react'

export function HeaderMenu({ className }: { className?: string }) {
	const dialogContextValues = useContext(DialogContext)
	const closeDialog = dialogContextValues?.closeDialog

	return (
		<nav className={clsx('flex items-center space-x-2', className)}>
			<a
				onClick={closeDialog}
				href='/#'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Home
			</a>
			<a
				onClick={closeDialog}
				href='/treatments'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Treatments
			</a>
			<a
				onClick={closeDialog}
				href='/testimonials'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				Reviews
			</a>
			<a
				onClick={closeDialog}
				href='/about'
				className='text-white/80 hover:text-white text-sm px-3 py-2 rounded-full hover:bg-white/10 transition-all duration-200'
			>
				About us
			</a>
		</nav>
	)
}
