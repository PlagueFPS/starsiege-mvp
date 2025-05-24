import styles from './HomeLoader.module.css'

export default function HomeLoader() {
  return (
    <>
      <div className={ styles.container }>
        <div className={ styles.banner }>
          <div className={ styles.featuredVideo }>
            <div className={ styles.video } />
          </div>
          <div className={ styles.details }>
            <div className={ styles.brandmark }>
              <div className={ styles.image } />
            </div>
            <span className={ styles.description } />
            <div className={ styles.buttonContainer }>
              <div className={ styles.button } />
              <div className={ styles.button } />
            </div>
          </div>
        </div>
      </div>
      <div className={ styles.contentContainer }>
        { [...Array(4).keys()].map(i => (
          <div key={ i } className={ styles.section }>
            <div className={ styles.title } />
            <div className={ styles.content } />
            <div className={ styles.contentButton } />
          </div>
        ))}
      </div>
    </>
  )
}
