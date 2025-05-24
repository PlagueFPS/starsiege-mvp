import styles from './CreatorsLoader.module.css'

export default function CreatorsLoader() {
  const inputClassSelector = (index: number) => {
    if (index === 9) return `${styles.input} ${styles.textarea}`
    else return styles.input
  }

  return (
    <div className={ styles.container }>
      <div className={ styles.image } />
      <div className={ styles.body }>
        <div className={ styles.title } />
        <span className={ styles.content } />
        <div className={ styles.subTitle } />
        <span className={ styles.content } />
        <span className={ styles.notice } />
        <div className={ styles.subTitle } />
        <ul>
          { [...Array(8).keys()].map(i => (
            <li key={ i } className={ styles.listItem } />
          ))}
        </ul>
        <div className={ styles.subTitle } />
        <span className={ styles.content } />
      </div>
      <div className={ styles.form }>
        <div className={ styles.formTitle } />
        <div className={ styles.disclaimer } />
        { [...Array(10).keys()].map((i, index) => (
          <div key={ i } className='flex flex-col gap-3'>
            <div className={ styles.label } />
            <div className={ inputClassSelector(index) } />
          </div>
        ))}
        <div className={ styles.checkbox }>
          <div />
          <span />
        </div>
        <div className={ styles.checkbox }>
          <div />
          <span />
        </div>
        <div className={ styles.button } />
      </div>
    </div>
  )
}
