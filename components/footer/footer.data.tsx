import Image from 'next/image'

export const FOOTER = {
	treatments: {
		title: 'Treatments',
		items: [
			{
				title: 'Bioidentical Hormone Replacement Therapy',
				link: '/treatments/hormone-replacement',
			},
			{
				title: 'Testosterone Replacement Therapy',
				link: '/treatments/testosterone-replacement',
			},
			{ title: 'Sexual Health', link: '/treatments/sexual-health' },
			{ title: 'Skin Care', link: '/treatments/skin-care' },
			{ title: 'Hair Care', link: '/treatments/hair-care' },
			{ title: 'Fat and Weight Loss', link: '/treatments/fat-weight-loss' },
			{ title: 'Mental and Physical Performance', link: '/treatments/mental-physical-performance' },
		],
	},
	company: {
		title: 'Company',
		items: [
			{ title: 'Home', link: '/' },
			{ title: 'Reviews', link: '/testimonials' },
			{ title: 'About us', link: '/about' },
		],
	},
	social: [
		{
			title: 'Instagram',
			link: 'https://www.instagram.com/mysummit.health/',
			icon: (
				<Image src='/instagram.svg' width={24} height={24} alt='Instagram' />
			),
		},
		{
			title: 'Facebook',
			link: 'https://www.facebook.com/Summit.Reachyourpeak/',
			icon: <Image src='/facebook.svg' width={24} height={24} alt='facebook' />,
		},
	],
	legal: [
		{ title: 'Privacy Policy', link: '/privacy-policy' },
		{ title: 'Terms of Service', link: '/terms-of-service' },
	],
}
