import { NEWS_LIMIT } from '@/utils/constants'
import React from 'react'
import NewsCardLoader from '../NewsCard/NewsCardLoader'

export default function NewsGridLoader() {
  return (
    <section className='grid grid-cols-news w-4/5 mx-auto justify-center items-center gap-12 px-4 pb-4'>
      { [...Array.from({ length: NEWS_LIMIT }).keys()].map(i => (
        <NewsCardLoader key={ i } />
      ))}
    </section>
  )
}
