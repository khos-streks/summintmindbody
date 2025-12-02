import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/footer/footer'
import { Providers } from './providers'
import { Toaster } from 'sonner'

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'cyrillic'],
})

export const metadata: Metadata = {
	title: 'Summitmindbody',
	description: 'Summitmindbody',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.variable} ${montserrat.className} antialiased`}
			>
				<Providers>
					<Toaster />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
