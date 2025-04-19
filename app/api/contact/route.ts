import { NextResponse } from 'next/server'

const GOOGLE_CHAT_WEBHOOK = 'https://chat.googleapis.com/v1/spaces/AAQA1iTFCBI/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=dd2JLPtINNNurU1NPtq_gEfKQrrBQ95TaMXXWpUz-qg'

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    const chatMessage = {
      text: `*新しいお問い合わせ*\n\n名前: ${name}\nメールアドレス: ${email}\n\nメッセージ:\n${message}`
    }

    const response = await fetch(GOOGLE_CHAT_WEBHOOK, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chatMessage),
    })

    if (!response.ok) {
      throw new Error('Failed to send message to Google Chat')
    }

    return NextResponse.json({ message: 'メッセージを送信しました' })
  } catch (error) {
    console.error('Error in contact API:', error)
    return NextResponse.json(
      { error: 'メッセージの送信に失敗しました' },
      { status: 500 }
    )
  }
} 