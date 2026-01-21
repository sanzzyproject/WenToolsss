import './globals.css'
import { Inter, JetBrains_Mono } from 'next/font/google'

// Menggunakan dua font: Inter untuk UI, JetBrains Mono untuk kesan "Coding"
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata = {
  title: 'SANN404 FORUM | Developer Ecosystem',
  description: 'The ultimate tools hub and project showcase by SANN404.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} font-sans bg-darkBg text-sannWhite antialiased`}>
        {children}
      </body>
    </html>
  )
}
