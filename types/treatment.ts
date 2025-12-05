export interface ITreatment {
	slug: string
	title: string
	screens: {
		main: {
			title: string
			image: string
			eyebrow?: string
			description?: string
		}
		secondary: { title: string; description: string; button: string }
	}[]
	faq: { question: string; answer: string; html: string }[]
}
