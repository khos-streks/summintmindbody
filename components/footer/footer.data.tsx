import Image from 'next/image'

export const FOOTER = {
	treatments: {
		title: 'Treatments',
		items: [
			{ title: 'Bioidentical Hormone Replacement Therapy', link: '#' },
			{ title: 'Testosterone Replacement Therapy', link: '#' },
			{ title: 'Sexual Health', link: '#' },
			{ title: 'Skin Care', link: '#' },
			{ title: 'Hair Care', link: '#' },
			{ title: 'Fat and Weight Loss', link: '#' },
			{ title: 'Mental and Physical Performance', link: '#' },
		],
	},
	company: {
		title: 'Company',
		items: [
			{ title: 'Home', link: '#' },
			{ title: 'Treatments', link: '#' },
			{ title: 'Reviews', link: '#' },
			{ title: 'About us', link: '#' },
		],
	},
	social: [
		{
			title: 'Instagram',
			link: 'instagram.com',
			icon: (
				<Image src='/instagram.svg' width={24} height={24} alt='Instagram' />
			),
		},
		{
			title: 'Facebook',
			link: 'facebook.com',
			icon: <Image src='/facebook.svg' width={24} height={24} alt='facebook' />,
		},
	],
	legal: [
		{ title: 'Privacy Policy', link: '/privacy-policy' },
		{ title: 'Terms of Service', link: '/terms-of-service' },
	],
}
