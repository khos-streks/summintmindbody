import { Testimonial } from '@/components/shared/testimonials'

export const TESTIMONIALS_DATA: Record<
	string,
	{
		baseTestimonials: Testimonial[]
		duration: number
		className: string
	}
> = {
	column1: {
		baseTestimonials: [
			{
				text: 'My energy levels are back for the first time in years. Summit Health changed my daily life.',
				image: 'https://randomuser.me/api/portraits/men/1.jpg',
				name: 'Michael R.',
				role: 'Patient',
			},
			{
				text: 'I finally feel balanced. The personalized hormone program made a huge difference.',
				image: 'https://randomuser.me/api/portraits/women/1.jpg',
				name: 'Sarah L.',
				role: 'Patient',
			},
			{
				text: 'I was struggling with low motivation. After TRT, I feel strong, focused, and confident again.',
				image: 'https://randomuser.me/api/portraits/men/3.jpg',
				name: 'David K.',
				role: 'Patient',
			},
			{
				text: 'Fast, professional, and extremely convenient. Telemedicine made everything simple.',
				image: 'https://randomuser.me/api/portraits/women/2.jpg',
				name: 'Jessica P.',
				role: 'Patient',
			},
			{
				text: 'The doctors listened to my needs and created a plan that actually works for me.',
				image: 'https://randomuser.me/api/portraits/men/4.jpg',
				name: 'Brian M.',
				role: 'Patient',
			},
			{
				text: 'My skin improved dramatically. I feel younger and more confident.',
				image: 'https://randomuser.me/api/portraits/women/4.jpg',
				name: 'Emily S.',
				role: 'Patient',
			},
			{
				text: 'I lost 18 pounds in 3 months with their weight-loss program. I feel incredible.',
				image: 'https://randomuser.me/api/portraits/men/5.jpg',
				name: 'Robert T.',
				role: 'Patient',
			},
			{
				text: 'My hair is growing back stronger. Amazing results in just a few weeks.',
				image: 'https://randomuser.me/api/portraits/women/5.jpg',
				name: 'Natalie F.',
				role: 'Patient',
			},
		],
		duration: 16,
		className: 'w-96',
	},
	column2: {
		baseTestimonials: [
			{
				text: 'The sexual health treatment restored my confidence. Very grateful for the support.',
				image: 'https://randomuser.me/api/portraits/men/6.jpg',
				name: 'Daniel V.',
				role: 'Patient',
			},
			{
				text: 'My mood and sleep have improved more than I expected. Life-changing experience.',
				image: 'https://randomuser.me/api/portraits/women/6.jpg',
				name: 'Laura C.',
				role: 'Patient',
			},
			{
				text: 'Easy process from start to finish. The team genuinely cares.',
				image: 'https://randomuser.me/api/portraits/men/7.jpg',
				name: 'Chris H.',
				role: 'Patient',
			},
			{
				text: 'I feel sharper mentally and more productive at work. Highly recommend.',
				image: 'https://randomuser.me/api/portraits/women/7.jpg',
				name: 'Megan W.',
				role: 'Patient',
			},
			{
				text: 'The custom treatment plan was spot on. My labs improved within 30 days.',
				image: 'https://randomuser.me/api/portraits/men/8.jpg',
				name: 'Anthony J.',
				role: 'Patient',
			},
			{
				text: 'Summit Health helped me understand my body better. I feel empowered.',
				image: 'https://randomuser.me/api/portraits/women/8.jpg',
				name: 'Olivia G.',
				role: 'Patient',
			},
			{
				text: 'My testosterone levels are finally normal. I feel like myself again.',
				image: 'https://randomuser.me/api/portraits/men/9.jpg',
				name: 'Jason B.',
				role: 'Patient',
			},
			{
				text: 'Clear explanations, great guidance, and real results. Very satisfied.',
				image: 'https://randomuser.me/api/portraits/women/9.jpg',
				name: 'Hannah D.',
				role: 'Patient',
			},
		],
		duration: 16,
		className: 'w-96',
	},
	column3: {
		baseTestimonials: [
			{
				text: 'Prescription delivery made everything so easy. Great service.',
				image: 'https://randomuser.me/api/portraits/men/10.jpg',
				name: 'Mark E.',
				role: 'Patient',
			},
			{
				text: 'My anxiety decreased and my focus improved. Their support truly helped.',
				image: 'https://randomuser.me/api/portraits/women/10.jpg',
				name: 'Rachel K.',
				role: 'Patient',
			},
			{
				text: "Best decision I've made for my health. The changes are noticeable every day.",
				image: 'https://randomuser.me/api/portraits/men/11.jpg',
				name: 'Paul S.',
				role: 'Patient',
			},
			{
				text: "I've tried other clinics—nothing compares to the detail and care here.",
				image: 'https://randomuser.me/api/portraits/women/11.jpg',
				name: 'Victoria N.',
				role: 'Patient',
			},
			{
				text: 'My workouts and recovery improved dramatically. Performance is on another level.',
				image: 'https://randomuser.me/api/portraits/men/12.jpg',
				name: 'Ethan L.',
				role: 'Patient',
			},
			{
				text: 'Their guidance helped me get my hormones under control. I feel normal again.',
				image: 'https://randomuser.me/api/portraits/women/12.jpg',
				name: 'Samantha H.',
				role: 'Patient',
			},
			{
				text: 'Professional, honest, and extremely effective. I recommend them to everyone.',
				image: 'https://randomuser.me/api/portraits/men/13.jpg',
				name: 'Kevin D.',
				role: 'Patient',
			},
			{
				text: 'For the first time in years, I feel like the best version of myself. Thank you, Summit Health!',
				image: 'https://randomuser.me/api/portraits/women/13.jpg',
				name: 'Alyssa P.',
				role: 'Patient',
			},
		],
		duration: 16,
		className: 'w-96',
	},
}
