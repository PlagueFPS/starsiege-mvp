import styles from './FAQPageLoader.module.css'
import BannerLoader from '../BannerLoader/BannerLoader'
import FAQLoader from '../FAQLoader/FAQLoader'

export default function FAQPageLoader() {
  return (
    <>
      <BannerLoader />
      <div className={ styles.container }>
        <div className={ styles.faqContainer }>
          <FAQLoader />
        </div>
      </div>
    </>
  )
}
