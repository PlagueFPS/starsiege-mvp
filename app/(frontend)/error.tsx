"use client"
import styles from './NotFound.module.css'

interface errorProps {
  error: Error,
  reset: () => void
}

export default function error({ error, reset }: errorProps) {
  return (
    <div className={ styles.container }>
      <h2 className={ styles.title }>Oh no, Something went wrong!</h2>
      <p className={ styles.text }>{ error.message }</p>
      <button className={ styles.button } onClick={ reset }>Try Again</button>
    </div>
  )
}
