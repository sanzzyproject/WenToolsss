import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'SANN404 FORUM | Developer Ecosystem',
  description: 'Premium Tools Hub connecting developers.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={`${inter.variable} ${playfair.variable} antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  )
}
