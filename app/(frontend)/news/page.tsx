import type { SearchParams } from 'next/dist/server/request/search-params'
import NewsButtons from '@/components/NewsButtons/NewsButtons'
import NewsGrid from '@/components/NewsGrid/NewsGrid'
import NewsSelector from '@/components/NewsSelector/NewsSelector'
import { getPage } from '@/data/pages'
import { env } from '@/env'
import { Metadata } from 'next'
import { Suspense } from 'react'
import Banner from '@/components/Banner/Banner'
import ShadowControlImage from "@/public/images/ShadowControl_A001.webp"
import NewsGridLoader from '@/components/NewsGrid/NewsGridLoader'

interface NewsProps {
  searchParams: Promise<SearchParams>
}

export const generateMetadata = async (): Promise<Metadata> => {
  const { title, description } = await getPage('news')

  return {
    title: title,
    description: description,
    openGraph: {
      url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}`,
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
}

export default function News({ searchParams }: NewsProps) {
  return (
    <>
      <Banner 
        image={ ShadowControlImage }
        alt='News Page Banner'
        title='Latest News'
        position='center'
      />
      <Suspense>
        <NewsSelector />
      </Suspense>
      <Suspense fallback={<NewsGridLoader />}>
        <NewsGrid searchParams={ searchParams }/>
      </Suspense>
      <Suspense>
        <NewsButtons searchParams={ searchParams } />
      </Suspense>
    </>
  )
}
