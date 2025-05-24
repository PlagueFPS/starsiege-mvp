import styles from './TwitchDrops.module.css'
import { Metadata } from 'next'
import Image from 'next/image'
import LuxEngineeringImage from '@/public/images/LuxEngineering_A001.webp'
import { getPage } from '@/data/pages'
import { env } from '@/env'
import CustomRichTextRenderer from '@/components/RichText/CustomRichTextRenderer'

export const generateMetadata = async () => {
  const { title, description } = await getPage('twitch-drops')

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

export default async function TwitchDrops() {
  const { content } = await getPage('twitch-drops', true)

  return (
    <div className={ styles.container }>
      <picture>
        <Image 
          src={ LuxEngineeringImage } 
          alt=''
          sizes='100vw'
          placeholder='blur'
          className={ styles.image }
          priority
        />
      </picture>
      <div className={ styles.body }>
        { content ? CustomRichTextRenderer({ children: content.root.children }) : null }
      </div>
    </div>
  )
}