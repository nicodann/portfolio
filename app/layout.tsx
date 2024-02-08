import type { Metadata } from 'next'
// import { 
//   Inter, 
//   // Noto_Serif 
//   Playfair_Display
// } from 'next/font/google'
import './globals.css'

// const playfair = Playfair_Display({subsets: ['latin']})
// const inter = Inter({ subsets: ['latin'] })
// const noto = Noto_Serif({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Nico Dann | Full Stack Web Developer',
  description: 'Web Developer | Jazz Drummer | Music Teacher | dad - Front-end developer at Nellie Health, Diploma in Full Stack Development Boot Camp at Lighthouse Labs and Masters in Music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
