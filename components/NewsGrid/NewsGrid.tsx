import type { SearchParams } from 'next/dist/server/request/search-params'
import { getPaginatedNewsPosts } from '@/data/news'
import NewsCard from '../NewsCard/NewsCard'
interface Props {
  searchParams: Promise<SearchParams>
  category?: string
}

export default async function NewsGrid({ searchParams, category }: Props) {
  const { page } = await searchParams
  const { news } = await getPaginatedNewsPosts(Number(page), category)
  
  return (
    <section className='grid grid-cols-news w-4/5 mx-auto justify-center items-center gap-12 px-4 pb-4'>
      { news.map(post => (
        <NewsCard key={ post.id } post={ post } />
      ))}
    </section>
  )
}