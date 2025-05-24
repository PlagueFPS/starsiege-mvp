import styles from './NewsLoader.module.css'
import { NEWS_LIMIT } from '@/utils/constants'

interface Props {
  button?: boolean
}

export default function NewsLoader({ button }: Props) {
  return (
    <>
      <div className={ styles.container }>
        {[...Array(NEWS_LIMIT).keys()].map(i => (
          <div key={ i } className={ styles.card }>
            <div className={ styles.cardFooter } />
          </div>
        )) }
      </div>
      { button && <div className={ styles.button } /> }
    </>
  )
}