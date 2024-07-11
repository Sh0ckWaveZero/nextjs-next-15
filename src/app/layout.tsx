import type { Metadata } from 'next'
import { Prompt } from 'next/font/google'
import './globals.css'

const prompt = Prompt({
  subsets: ['thai', 'latin-ext', 'latin'],
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Jobs Analytics',
  description: 'Jobs Analytics is a platform for job seekers and employers',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={prompt.className}>{children}</body>
    </html>
  )
}
