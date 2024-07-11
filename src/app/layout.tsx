import type { Metadata } from 'next'
import { Noto_Sans_Thai } from 'next/font/google'
import './globals.css'

const notoSansThai = Noto_Sans_Thai({
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
      <body className={notoSansThai.className}>{children}</body>
    </html>
  )
}
