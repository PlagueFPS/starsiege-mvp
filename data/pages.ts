import { payloadInstance } from "@/lib/payload"
import { cache } from "react"

export const getPage = cache(async (slug: string, content?: boolean) => {
  const payload = await payloadInstance()
  const doc = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: `starsiege-deadzone--${slug}`
      }
    },
    select: { content: content ?? false }
  })
  const page = doc.docs[0]
  return page
})