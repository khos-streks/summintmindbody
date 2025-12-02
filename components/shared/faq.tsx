'use client'

import { useState } from 'react'
import { ChevronDownIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Container } from '../layout/container'

export function Faq({
	faq,
}: {
	faq: { question: string; answer: string; html: string }[]
}) {
	const [openIndex, setOpenIndex] = useState<number | null>(null)

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div className='w-full py-10'>
			<Container className='space-y-3'>
				{faq.map((item, index) => (
					<div
						key={index}
						className='transition-colors border border-black/10 rounded-lg'
					>
						<button
							onClick={() => toggle(index)}
							className='w-full py-5 px-3 flex justify-between items-center text-left font-semibold max-sm:text-sm'
						>
							{item.question}
							<ChevronDownIcon
								size={20}
								className={clsx('transition-transform duration-300', {
									'rotate-180': openIndex === index,
								})}
							/>
						</button>

						<AnimatePresence initial={false}>
							{openIndex === index && (
								<motion.div
									key='content'
									initial={{ height: 0, opacity: 0 }}
									animate={{ height: 'auto', opacity: 1 }}
									exit={{ height: 0, opacity: 0 }}
									transition={{ duration: 0.3 }}
									className='overflow-hidden px-3'
								>
									<div
										dangerouslySetInnerHTML={{ __html: item.html }}
										className='pb-4 text-sm font-light'
									/>
								</motion.div>
							)}
						</AnimatePresence>
					</div>
				))}
			</Container>
		</div>
	)
}
