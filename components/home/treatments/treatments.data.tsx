import { ArrowRightIcon, ClockIcon, FileTextIcon, MailIcon, UserIcon } from 'lucide-react'

export const TREATMENTS: {
	title: string
	description: string
	icon: React.ReactNode
}[] = [
	{
		title: 'Complete your intake documents',
		description: '',
		icon: <FileTextIcon />,
	},
	{
		title: 'Schedule lab work',
		description: '',
		icon: <ClockIcon />,
	},
	{
		title: 'Book physician consultations',
		description: '',
		icon: <UserIcon />,
	},
	{
		title: 'Receive prescriptions delivered directly to your home',
		description: '',
		icon: <MailIcon />,
	},
]
