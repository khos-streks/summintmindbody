import { NextRequest, NextResponse } from 'next/server'
import TelegramBot from 'node-telegram-bot-api'
import validator from 'validator'

type ContactData = {
	name?: string
	email?: string
	phone?: string
	source?: string
	pathname?: string
}

type ContactErrors = Partial<Record<keyof ContactData, string>>

const validateContactData = (contactData: ContactData): ContactErrors => {
	const errors: ContactErrors = {}

	// companyName
	if (!contactData.name || contactData.name.trim().length === 0) {
		errors.name = 'Company name is required!'
	}

	// email
	if (!contactData.email || contactData.email.trim().length === 0) {
		errors.email = 'Email is required!'
	} else if (!validator.isEmail(contactData.email)) {
		errors.email = 'Invalid email format!'
	}

	// phone
	if (!contactData.phone || contactData.phone.trim().length === 0) {
		errors.phone = 'Phone number is required!'
	}

	return errors
}

export async function POST(req: NextRequest) {
	if (req.method !== 'POST') {
		return NextResponse.json({ message: 'Method not allowed' }, { status: 405 })
	}

	try {
		const contactData: ContactData = await req.json()

		const token = process.env.NEXT_TELEGRAM_BOT_TOKEN!
		const chatId = process.env.NEXT_TELEGRAM_CHAT_ID!

		const bot = new TelegramBot(token)

		const validationErrors = validateContactData(contactData)
		if (Object.keys(validationErrors).length > 0) {
			return NextResponse.json({ validationErrors }, { status: 400 })
		}

		await bot.sendMessage(
			chatId,
			`Name: <b>${contactData.name}</b>\nEmail: <a target="_blank" href="mailto:${contactData.email}">${contactData.email}</a>\nPhone: <a href="tel:${contactData.phone}">${contactData.phone}</a>\nSource: ${contactData.source}\nPathname: ${contactData.pathname}`,
			{ parse_mode: 'HTML' }
		)

		return NextResponse.json({ message: 'Success' })
	} catch (err) {
		console.log(err)
		return NextResponse.json({ message: 'Something went wrong' }, { status: 500 })
	}
}
