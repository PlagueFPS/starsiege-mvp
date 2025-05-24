import { getCategories } from '@/data/categories'
import NewsSelectorClient from './NewsSelector.client'

interface SelectorProps {
  currentCategory?: string
}

export default async function NewsSelector({ currentCategory }: SelectorProps) {
  const categories = await getCategories()

  return (
    <section className='relative top-0 -left-2 w-full md:max-w-[65.2%] mx-auto mt-8 z-10 h-20 p-4 animate-fadeIn font-orbitron'>
      <NewsSelectorClient categories={ categories } currentCategory={ currentCategory } />
    </section>
  )
}