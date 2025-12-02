import { emailService } from '@/services/email.service'
import { useMutation } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { toast } from 'sonner'

export const useContactService = ({ successCallback }: { successCallback?: () => void }) => {
	return useMutation({
		mutationKey: ['contact'],
		mutationFn: async (data: {
			email: string
			phone: string
			name: string
			source: 'header' | 'footer' | 'hero' | 'cta' | 'default'
			pathname: string
		}) => {
			const res = await emailService.sendContactEmail(data)
			if (res?.status !== 200) throw new Error(res.data.message)
			return res.data
		},
		onSuccess: () => {
			successCallback?.()
			toast.success('Email sent successfully!')
		},
		onError: (
			error: AxiosError<{
				validationErrors?: Record<string, string>
				message?: string
			}>
		) => {
			toast.error(
				Object.values(error.response?.data?.validationErrors ?? [])[0] ??
					error.response?.data?.message
			)
		}
	})
}
