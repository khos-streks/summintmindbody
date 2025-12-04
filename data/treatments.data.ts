import { ITreatment } from '@/types/treatment'

export const TREATMENTS: ITreatment[] = [
	{
		slug: 'sexual-health',
		screens: [
			{
				main: {
					image: '/treatments/sexual-health/main-1.png',
					eyebrow: 'Support for Your Sexual Well-Being',
					title: 'We Are in This Together',
					description:
						'Sexual well-being is essential to both physical and mental health. Your sexual health reflects your confidence, your vitality, and your connection to the people around you. Let us help you perform your best in every area of life with evidence-based medications that support desire, pleasure, and sexual function.',
				},
				secondary: {
					title: 'Why Sexual Health Matters',
					description:
						"Sexual function is deeply connected to emotional balance, relationship satisfaction, self-confidence, and overall well-being. Whether you're experiencing changes in desire, arousal, performance, or comfort, you are not alone—millions of men and women report similar concerns. Our goal is to provide safe, discreet, effective solutions that restore confidence and improve quality of life.",
					button: 'Start your journey today',
				},
			},
			{
				main: {
					image: '/treatments/sexual-health/main-2.png',
					title: 'You Deserve Confidence, Pleasure & Control',
				},
				secondary: {
					title: 'Important Facts You Should Know',
					description:
						'• 40–60% of women and 31% of men experience some level of sexual dysfunction.\n• 30% of men do not respond to medications like Cialis or Viagra.\n• 5% of men at age 40 have complete erectile dysfunction, increasing by 15% per decade.\n• Antidepressants are one of the top causes of sexual dysfunction.\n• Women are twice as likely as men to take antidepressants.\n• 23% of women in their 40s and 50s take antidepressant medication.\nThese numbers show how common and treatable these concerns truly are.',
					button: 'Start your journey today',
				},
			},
			{
				main: {
					image: '/treatments/sexual-health/main-3.png',
					title: 'Proven Solutions for Men and Women — 100% Online',
				},
				secondary: {
					title: 'What We Offer',
					description:
						'Access safe, discreet, and affordable treatment options designed to support sexual health for both men and women.\nOur offerings include: \n	• FDA-approved ED medications\n	• Generic therapies up to 90% cheaper than brand-name options\n	• Women’s sexual health formulas\n	• Fully online consultations and prescriptions\n	• Support, privacy, and professional care — all from the comfort of your home.',
					button: 'Start your journey today',
				},
			},
		],
		faq: [
			{
				question: 'Is sexual dysfunction common?',
				answer:
					'Yes. Nearly half of women and one-third of men report issues with desire, arousal, or performance at some point in their lives. You are not alone.',
				html: `<p>Yes. Nearly half of women and one-third of men report issues with desire, arousal, or performance at some point in their lives. You are not alone.</p>`,
			},
			{
				question: 'Do men always respond to Viagra or Cialis?',
				answer:
					'No. Around 30% of men do not respond to standard PDE5 inhibitors. Alternative or compounded options may work better.',
				html: `<p>No. Around 30% of men do not respond to standard PDE5 inhibitors. Alternative or compounded options may work better.</p>`,
			},
			{
				question: 'Are antidepressants really linked to sexual dysfunction?',
				answer:
					'Yes. Antidepressants are one of the leading causes of reduced libido, difficulty with arousal, or delayed orgasm.',
				html: `<p>Yes. Antidepressants are one of the leading causes of reduced libido, difficulty with arousal, or delayed orgasm.</p>`,
			},
			{
				question: 'Do women experience sexual dysfunction often?',
				answer:
					'Very often. Between 40–60% of women report some type of sexual health concern, particularly those in their 40s and 50s.',
				html: `<p>Very often. Between 40–60% of women report some type of sexual health concern, particularly those in their 40s and 50s.</p>`,
			},
			{
				question: 'Is the service private and online?',
				answer:
					'Yes. Consultations, evaluations, and prescriptions are handled entirely online for complete privacy.',
				html: `<p>Yes. Consultations, evaluations, and prescriptions are handled entirely online for complete privacy.</p>`,
			},
			{
				question: 'Are the medications safe?',
				answer:
					'We provide FDA-approved medications or verified compounded alternatives, prescribed by licensed medical professionals.',
				html: `<p>We provide FDA-approved medications or verified compounded alternatives, prescribed by licensed medical professionals.</p>`,
			},
			{
				question: 'Can both men and women receive treatment?',
				answer:
					'Absolutely. We offer specialized formulas and treatment plans for both men’s and women’s sexual health needs.',
				html: `<p>Absolutely. We offer specialized formulas and treatment plans for both men’s and women’s sexual health needs.</p>`,
			},
			{
				question: 'Do I need lab work?',
				answer:
					'Some treatments may require lab tests depending on symptoms and medical history. Your provider will guide you.',
				html: `<p>Some treatments may require lab tests depending on symptoms and medical history. Your provider will guide you.</p>`,
			},
			{
				question: 'How quickly can I start?',
				answer:
					'You can begin the process immediately by submitting your information and completing your online evaluation.',
				html: `<p>You can begin the process immediately by submitting your information and completing your online evaluation.</p>`,
			},
		],
	},
]
