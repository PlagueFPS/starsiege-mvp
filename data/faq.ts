import { payloadInstance } from "@/lib/payload"
import { unstable_cache } from "next/cache"
import { cache } from "react"

export const getFAQs = cache(async () => {
  return await getCachedFAQs()
})

const getCachedFAQs = unstable_cache(async () => {
  const payload = await payloadInstance()
  const docs = await payload.find({
    collection: 'faq',
  })
  
  return docs.docs.map(faq => ({
    id: faq.id,
    title: faq.title,
    content: faq.content,
  }))
}, [], { tags: ['faqs']})