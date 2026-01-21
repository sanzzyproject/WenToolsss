import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SANN404 FORUM | Premium Tools Hub',
  description: 'Organize your digital workflow with SANN404 Premium Tools.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="dark">
      <body className={`${inter.className} bg-darkBg text-white antialiased`}>{children}</body>
    </html>
  )
}
