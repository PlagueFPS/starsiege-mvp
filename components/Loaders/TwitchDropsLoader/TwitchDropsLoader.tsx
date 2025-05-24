import styles from './TwitchDropsLoader.module.css'

export default function TwitchDropsLoader() {
  return (
    <div className={ styles.container }>
      <div className={ styles.image } />
      <div className={ styles.header }>
        <div className={ styles.title } />
      </div>
      <div className={ styles.body }>
        <div className={ styles.heading } />
        <div className={ styles.notice } />
        <div className={ styles.notice } />
        <ul>
          { [...Array(6).keys()].map(i => (
            <li key={ i } />
          ))}
        </ul>
        { [...Array(7).keys()].map(i => (
          <div key={ i } className='flex flex-col gap-3'>
            <div className={ styles.subTitle } />
            <span className={ styles.content } />
          </div>
        ))}
      </div>
    </div>
  )
}
