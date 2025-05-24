import Banner from "@/components/Banner/Banner"
import NewsButtons from "@/components/NewsButtons/NewsButtons"
import NewsGrid from "@/components/NewsGrid/NewsGrid"
import NewsSelector from "@/components/NewsSelector/NewsSelector"
import { getCategories, getCategoryBySlug } from "@/data/categories"
import { env } from "@/env"
import { capatilize } from "@/utils/functions"
import type { Metadata } from "next"
import type { SearchParams } from "next/dist/server/request/search-params"
import { Suspense } from "react"
import ShadowControlImage from "@/public/images/ShadowControl_A001.webp"
import NewsGridLoader from "@/components/NewsGrid/NewsGridLoader"

interface NewsCategoryPageProps {
  params: Promise<{ category: string }>,
  searchParams: Promise<SearchParams>
}

export const generateStaticParams = async () => {
  const categories = await getCategories()
  return categories.map(category => ({
    category: category.slug
  }))
}

export const generateMetadata = async ({ params }: NewsCategoryPageProps): Promise<Metadata> => {
  const { category } = await params
  const { title, description } = await getCategoryBySlug(category)
  const seoTitle = `Starsiege: Deadzone | ${title} News`

  return {
    title: seoTitle,
    description: description,
    openGraph: {
      url: `${env.NEXT_PUBLIC_WEBSITE_URL}/${category}`,
      type: 'website',
      title: seoTitle,
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
      title: seoTitle,
      description: description,
      card: 'summary_large_image'
    },
  }
}

export default async function NewsCategoryPage({ params, searchParams }: NewsCategoryPageProps) {
  const { category } = await params

  return (
    <>
      <Banner 
        image={ ShadowControlImage }
        alt='News Page Banner'
        title={ `${capatilize(category)} News` }
        position='center'
      />
      <Suspense>
        <NewsSelector currentCategory={ category } />
      </Suspense>
      <Suspense fallback={<NewsGridLoader />}>
        <NewsGrid searchParams={ searchParams } category={ category } />
      </Suspense>
      <Suspense>
        <NewsButtons searchParams={ searchParams } category={ category } />
      </Suspense>
    </>
  )
}
