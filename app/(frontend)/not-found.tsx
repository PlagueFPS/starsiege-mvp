import Link from 'next/link'
import styles from './NotFound.module.css'

const NotFound = () => {
  return (
    <div className={ styles.container }>
      <h2 className={ styles.title }>Page could not be found.</h2>
      <p className={ styles.text }>We could not find the page you were looking for.</p>
      <Link href='/' className={ styles.button }>
        Go to Homepage
      </Link>
    </div>
  )
}

export default NotFound