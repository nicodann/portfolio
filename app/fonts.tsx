import { Inter, Playfair_Display, DM_Serif_Text } from 'next/font/google'

export const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const dmSerifText = DM_Serif_Text({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dmSerifText',
})

// family=DM+Serif+Text:ital@0;1
