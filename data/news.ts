import 'server-only'
import { unstable_cache } from 'next/cache'
import { payloadInstance } from "@/lib/payload"
import { NEWS_LIMIT } from "@/utils/constants"
import { cache } from "react"
import { createCategoryDTO, createNewsDTO, resolveRelation } from '@/utils/payload-utils'

export const getPaginatedNewsPosts = cache(async (page?: number, category?: string) => {
  return await getCachedPaginatedNews(page, category)
})

export const getNews = cache(async () => {
  return await getCachedNews()
})

export const getNewsBySlug = cache(async (slug: string) => {
  const payload = await payloadInstance()
  const news = await payload.find({
    collection: 'newsPosts',
    where: {
      slug: {
        equals: slug
      }
    },
    limit: 1
  })

  return createNewsDTO(news.docs[0])
})

const getCachedPaginatedNews = unstable_cache(async (page?: number, category?: string) => {
  const payload = await payloadInstance()
  const news = await payload.find({
    collection: 'newsPosts',
    where: category ? {
      'category.slug': {
        equals: category
      }
    } : undefined,
    limit: NEWS_LIMIT,
    page: page ?? 1,
    sort: '-date',
    select: {
      content: false,
    },
  })

  return {
    news: news.docs.map(post => createNewsDTO(post)),
    totalPages: news.totalPages,
    currentPage: news.page ?? 1,
    prevPage: news.prevPage ?? 1,
    nextPage: news.nextPage ?? news.totalPages,
    hasNextPage: news.hasNextPage,
    hasPrevPage: news.hasPrevPage
  }
}, [], { tags: ['news', 'news-pagination']})

const getCachedNews = unstable_cache(async () => {
  const payload = await payloadInstance()
  const news = await payload.find({
    collection: 'newsPosts',
    pagination: false,
    select: { slug: true, category: true }
  })

  return news.docs.map(news => {
    const category = resolveRelation(news.category)
    return {
      slug: news.slug,
      category: createCategoryDTO(category)
    }
  })
}, [], { tags: ['news']})