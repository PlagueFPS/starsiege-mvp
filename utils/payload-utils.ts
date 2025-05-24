import type { Category, Media, NewsPost } from "@/payload-types";
import type { FieldHook } from "payload";

export const createNewsDTO = (news: NewsPost | Omit<NewsPost, "content">) => {
    const newsImage = resolveRelation(news.image)
    const newsCategory = resolveRelation(news.category)

    return {
      id: news.id,
      title: news.title,
      slug: news.slug,
      date: news.date,
      image: createMediaDTO(newsImage),
      category: createCategoryDTO(newsCategory),
      description: news.description,
      content: 'content' in news ? news.content : null
    }
}

export const createCategoryDTO = (category: Category | null) => {
  if (!category) throw Error('Expected post to have a category')
  return {
    title: category.title,
    slug: category.slug,
    description: category.description,
  }
}

export const createMediaDTO = (media: Media | null) => {
  if (!media || !media.url) throw Error('Expected post to have media or media to have a url')
  return {
    url: media.url,
    alt: media.alt,
    width: media.width,
    height: media.height,
    blurHash: media.blurHash,
  }
}

export const resolveRelation = <T>(relation: number | T) => {
  if (typeof relation === 'number') return null
  else return relation as T
}

export const slugify = (value: string) => 
  value.replace(/ /g, '-').replace(/[^\w-]+/g, '').toLowerCase()

export const formatSlug = (fallback: string): FieldHook => ({ data, operation, originalDoc, value }) => {
  if (typeof value === 'string') return slugify(value)
  if (operation === 'create') {
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]
    
    if (fallbackData && typeof fallbackData === 'string') return slugify(fallbackData)
  }

  return value
}

export const checkText = (node: Record<string, any>) => {
  return 'text' in node ? node.text as string : ''
}