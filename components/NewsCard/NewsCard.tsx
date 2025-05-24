import styles from './NewsCard.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { DATE_OPTIONS } from '@/utils/constants'
import { createNewsDTO } from '@/utils/payload-utils'
interface Props {
  post: ReturnType<typeof createNewsDTO>
}

export default function NewsCard({ post }: Props) {
  const categoryClassSelector = (categoryId: string | undefined) => {
    switch(categoryId) {
      default: 
        return styles.category
      case 'community':
        return `${styles.category} ${styles.community}`
      case 'patch-notes':
        return `${styles.category} ${styles.patchNotes}`
    }
  }

  return (
    <article key={ post.id } className={ styles.container }>
      <Link href={ `/news/${post.category.slug}/${post.slug}` } className='flex flex-col flex-grow'>
        <div className={ categoryClassSelector(post.category.slug) }>
          { post.category.title }
        </div>
        <picture className='relative flex flex-grow min-h-[224px] max-h-[224px] overflow-hidden'>
          <Image 
            src={ post.image.url }
            alt={ post.image.alt ?? "" }
            fill
            sizes='367px'
            placeholder='blur'
            blurDataURL={ post.image.blurHash }
            className='object-cover' 
          />
        </picture>
        <div className={ styles.cardHeader }>
          <h2 className={ styles.title }>{ post.title }</h2>
          <p className={ styles.date }>{ new Date(post.date).toLocaleDateString(undefined, DATE_OPTIONS) }</p>
        </div>
        <div className={ styles.cardBody }>
          <p className={ styles.description }>{ post.description }</p>
        </div>
        <div className={ styles.cardFooter }></div>
      </Link>
    </article>
  )
}