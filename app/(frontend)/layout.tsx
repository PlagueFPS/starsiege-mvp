import './globals.css'
import { Orbitron, Oxanium } from 'next/font/google'
import type { Metadata } from 'next'
import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
interface RootLayoutProps {
  children: React.ReactNode
}

// Header/Title font
const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
})

// main text font
const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap'
})

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_WEBSITE_URL}`),
  creator: 'Angel Pichardo',
  icons: {
    shortcut: '/images/shortcut-icon.jpg',
    apple: '/images/shortcut-icon.jpg',
    icon: '/images/shortcut-icon.jpg'
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={ `bg-primary ${orbitron.variable} ${oxanium.variable} font-oxanium` }>
      <body>
        <Navbar />
        <main className='mt-20 mb-4'>
          { children }
        </main>
        <Analytics />
        <SpeedInsights />
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
