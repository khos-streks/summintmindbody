import clsx from 'clsx'
import type { PropsWithChildren } from 'react'

export function Container({
	children,
	...props
}: PropsWithChildren<React.ComponentProps<'div'>>) {
	return (
		<div
			{...props}
			className={clsx('max-w-7xl mx-auto px-3', props.className)}
		>
			{children}
		</div>
	)
}
