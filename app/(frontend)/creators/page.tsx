import styles from './Creators.module.css'
import { Metadata } from 'next'
import Image from 'next/image'
import StellarObservationImage from '@/public/images/StellarObservation_A001.webp'
import CreatorForm from '@/components/CreatorForm/CreatorForm'
import { getPage } from '@/data/pages'
import { env } from '@/env'
import CustomRichTextRenderer from '@/components/RichText/CustomRichTextRenderer'

export const generateMetadata = async () => {
  const { title, description } = await getPage('creator-program')

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}`,
      type: 'website',
      title: title,
      description: description,
      images: [
        {
          url: `${env.NEXT_PUBLIC_WEBSITE_URL}/DeadzoneAnimaticPoster_1080.jpg`,
          width: 1920,
          height: 1080
        }
      ]
    },
    twitter: {
      title: title,
      description: description,
      card: 'summary_large_image'
    },
  }

  return metadata
}

export default async function Creators() {
  const { content } = await getPage('creator-program', true)

  return (
    <>
      <div className={ styles.container }>
        <picture>
            <Image 
              src={ StellarObservationImage } 
              alt=''
              className={ styles.image }
              placeholder='blur'
              sizes='100vw'
              priority
            />
        </picture>
        <div className={ styles.body }>
          { content ? CustomRichTextRenderer({ children: content.root.children }) : null }
        </div>
      </div>
      <CreatorForm />
    </>
  )
}