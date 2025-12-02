import Image from 'next/image'

export function Logo({
	width = 100,
	height = 84,
	className,
	withSlogan = false,
}: {
	width?: number
	height?: number
	className?: string
	withSlogan?: boolean
}) {
	return (
		<Image
			alt='Summit'
			src={withSlogan ? '/logo-slogan.png' : '/logo.png'}
			width={width}
			height={height}
			className={className}
		/>
	)
}
