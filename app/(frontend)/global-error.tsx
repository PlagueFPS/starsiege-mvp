"use client"
import styles from './NotFound.module.css'
import { Orbitron, Oxanium } from 'next/font/google'

interface errorProps {
  error: Error,
  reset: () => void
}

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron',
  display: 'swap'
})

const oxanium = Oxanium({
  subsets: ['latin'],
  variable: '--font-oxanium',
  display: 'swap'
})

export default function GlobalError({ error, reset }: errorProps) {
  return (
    <html lang='en' className={ `bg-primary ${orbitron.variable} ${oxanium.variable}` }>
      <body>
        <main className='mt-20 mb-4'>
          <div className={ styles.container }>
            <h2 className={ styles.title }>Oh no, Something went wrong!</h2>
            <p className={ styles.text }>{ error.message }</p>
            <button className={ styles.button } onClick={ reset }>Try Again</button>
          </div>
        </main>
      </body>
    </html>
  )
}