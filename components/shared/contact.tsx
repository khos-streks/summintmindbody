'use client'

import { Button } from '@/components/ui/button'
import { Dialog } from '@/components/ui/dialog'
import { useContactService } from '@/hooks/useEmailService'
import { LoaderIcon } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { JSX, useState } from 'react'
import { useForm } from 'react-hook-form'

export function ContactUs({
	trigger,
	source = 'default',
}: {
	trigger: JSX.Element
	source?: 'header' | 'footer' | 'hero' | 'cta' | 'default'
}) {
	const pathname = usePathname()
	const { register, handleSubmit, reset } = useForm<{
		email: string
		phone: string
		name: string
		source: 'header' | 'footer' | 'hero' | 'cta' | 'default'
		pathname: string
	}>()

	const [showSuccess, setShowSuccess] = useState(false)

	const { mutateAsync: contactUs, isPending } = useContactService({
		successCallback: () => {
			reset()
			setShowSuccess(true)
		},
	})

	return (
		<Dialog title={'Start your personalized health journey'} trigger={trigger}>
			<div className='absolute -z-10 w-full h-full inset-0 pointer-events-none'>
				<video
					className='w-full h-full absolute inset-0 object-cover opacity-75'
					src='/contact-video-bg.mp4'
					autoPlay
					muted
					playsInline
					controls={false}
				/>
			</div>
			<p className='text-lg text-center max-sm:text-base'>
				Fill out your details to begin the intake process and complete your new
				patient documents.
			</p>
			<form
				onSubmit={handleSubmit(async data => {
					try {
						data.source = source
						data.pathname = pathname
						await contactUs(data)
					} catch {}
				})}
				className='w-[350px] flex items-center mx-auto max-lg:w-full flex-col gap-5 py-10 [&_input]:w-full [&_input]:h-[50px] [&_input]:border [&_input]:border-black/40 [&_input]:rounded-3xl [&_input]:placeholder-black/60 [&_input]:text-sm [&_input]:font-medium [&_input]:px-6 [&_input]:py-3'
			>
				<input
					{...register('name')}
					type='text'
					required
					placeholder={'Name'}
				/>
				<input
					type='email'
					{...register('email')}
					required
					placeholder={'Email'}
				/>
				<input
					type='tel'
					required
					{...register('phone')}
					placeholder={'Phone Number'}
				/>
				<Button
					disabled={isPending}
					className='mt-4 w-[200px] flex items-center gap-2 justify-center disabled:opacity-35 border-black'
				>
					{isPending && <LoaderIcon size={16} className='animate-spin' />}
					Get Started
				</Button>
				<p className='text-xs'>Your information is 100% confidential.</p>
			</form>
			{showSuccess && (
				<div
					onClick={() => setShowSuccess(false)}
					className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
				>
					<div className='bg-white rounded-3xl p-10 shadow-2xl text-center max-w-md mx-auto flex flex-col items-center'>
						<h2 className='text-2xl font-bold mb-4 text-black'>Thank you!</h2>
						<p className='text-lg text-black mb-6'>
							Your message has been sent successfully. I will contact you soon.
						</p>
						<Button className='w-full' onClick={() => setShowSuccess(false)}>
							Close
						</Button>
					</div>
				</div>
			)}
		</Dialog>
	)
}
