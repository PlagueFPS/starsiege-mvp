import styles from './Banner.module.css'
import type { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

interface Props {
  image: string | StaticImport,
  title: string,
  alt: string,
  position?: string
  opacity?: number
}

export default function Banner({ image, title, alt, position, opacity }: Props) {
  return (
    <section className={ styles.container }>
      <figure className={ styles.figure }>
        <picture>
          <Image
            src={ image }
            alt={ alt }
            sizes='100vw'
            className={ styles.image } 
            style={{ objectPosition: position ?? '', opacity: opacity ?? '' }}
            placeholder='blur'
            priority
          />
        </picture>
      </figure>
      <h2 className={ styles.title }>{ title }</h2>
    </section>
  )
}