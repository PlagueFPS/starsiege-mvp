import styles from '../NotFound.module.css'
import Link from 'next/link'

const NotFound = () => {
  return (
    <div className={ styles.container }>
      <h2 className={ styles.title }>Content could not be found.</h2>
      <p className={ styles.text }>We could not find the article you were looking for.</p>
      <Link href='/news' className={ styles.button }>
        Go to Latest News
      </Link>
    </div>
  )
}

export default NotFound