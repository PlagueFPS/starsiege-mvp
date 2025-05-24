import styles from './FAQs.module.css'
import { Metadata } from 'next'
import FAQ from '@/components/FAQ/FAQ'
import Banner from '@/components/Banner/Banner'
import CargoImage from '@/public/images/Cargo_A001.webp'
import { Suspense } from 'react'
import FAQLoader from '@/components/Loaders/FAQLoader/FAQLoader'
import { getPage } from '@/data/pages'
import { env } from '@/env'

export const generateMetadata = async () => {
  const { title, description } = await getPage('faq')

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/faq`,
      type: 'website',
      title: title,
      description: description,
      images: [
        {
          url: `${env.NEXT_PUBLIC_WEBSITE_URL}/DeadzoneAnimaticPoster_1080`,
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

export default function FAQs() {
  return (
    <>
      <Banner image={ CargoImage } title='Frequently Asked Questions' alt='FAQ Banner' />
      <section className={ styles.container }>
        <div className={ styles.faqContainer }>
          <Suspense fallback={<FAQLoader />}>
            <FAQ />
          </Suspense>
        </div>
      </section>
    </>
  )
}