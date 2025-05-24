import { payloadInstance } from "@/lib/payload"
import { createCategoryDTO } from "@/utils/payload-utils"
import { unstable_cache } from "next/cache"
import { cache } from "react"

export const getCategories = cache(async () => {
  return await getCachedCategories()
})

export const getCategoryBySlug = cache(async (slug: string) => {
  const payload = await payloadInstance()
  const category = await payload.find({
    collection: 'categories',
    where: {
      slug: {
        equals: slug
      }
    },
    limit: 1,
  })
  
  return createCategoryDTO(category.docs[0])
})

const getCachedCategories = unstable_cache(async () => {
  const payload = await payloadInstance()
  const categories = await payload.find({
    collection: 'categories',
  })
  
  return categories.docs.map(category => createCategoryDTO(category))
}, [], { tags: ['categories']})