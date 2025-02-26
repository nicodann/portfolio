import type { Metadata } from 'next'
import  './global.css'
import { playfair, inter, dmSerifText } from './fonts'

const fonts = [playfair, inter, dmSerifText]
const fontsClassName = fonts.map((font) => font.variable).join(' ');

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
      <body className={fontsClassName}>{children}</body>
    </html>
  )
}
