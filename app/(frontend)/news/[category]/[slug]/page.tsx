import styles from './NewsDetails.module.css'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import { getNews, getNewsBySlug } from "@/data/news"
import { env } from "@/env"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { DATE_OPTIONS } from '@/utils/constants'
import CustomRichTextRenderer from "@/components/RichText/CustomRichTextRenderer"

interface NewsPostPageProps {
  params: Promise<{
    category: string
    slug: string
  }>
}

export const generateStaticParams = async () => {
  const news = await getNews()
  return news.map(news => ({
    category: news.category.slug,
    slug: news.slug
  }))
}

export const generateMetadata = async ({ params }: NewsPostPageProps): Promise<Metadata> => {
  const { slug, category } = await params
  const post = await getNewsBySlug(slug)
  if (!post) notFound()
  const title = `Starsiege: Deadzone | ${post.title}`
  return {
    title,
    description: post.description,
    openGraph: {
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${category}/${slug}`,
      type: 'website',
      title,
      description: post.description,
      images: [
        {
          url: `${env.NEXT_PUBLIC_WEBSITE_URL}${post.image.url}`,
          width: `${post.image.width}`,
          height: `${post.image.height}`
        }
      ]
    },
    twitter: {
      title,
      description: post.description,
      card: 'summary_large_image'
    },
  }
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug, category } = await params
  const post = await getNewsBySlug(slug)
  if (!post) notFound()
  const { title, date, category: newsCategory, content } = post

  return (
    <div className={ styles.container }>
      <div className={ styles.header }>
        <Breadcrumbs breadcrumbs={[
          { href: `/news`, label: 'News' },
          { href: `/news/${category}`, label: newsCategory.title },
          { href: `/news/${category}/${slug}`, label: title, active: true }
        ]} />
        <h1 className={ styles.title }>{ title }</h1>
        <p className={ styles.date }>{ new Date(date).toLocaleDateString(undefined, DATE_OPTIONS)}</p>
      </div>
      <div className={ styles.body }>
        { content ? CustomRichTextRenderer({ children: content.root.children }) : null }
      </div>
    </div>
  )
}
