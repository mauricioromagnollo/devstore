import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'devstore'
}

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body>{children}</body>
    </html>
  )
}
