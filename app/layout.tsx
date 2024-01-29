import type { Metadata } from 'next'
import { Inter, Noto_Serif } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const noto = Noto_Serif({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Nico Dann Dev',
  description: 'Web Developer | Jazz Drummer | Music Teacher | dad - Front-end developer at Nellie Health, Diploma in Full Stack Development Boot Camp at Lighthouse Labs and Masters in Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={noto.className}>{children}</body>
    </html>
  )
}
