"use client"
import { useRouter } from "next/navigation";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { slugify } from "@/utils/payload-utils";
import { capatilize } from "@/utils/functions";

interface NewsSelectorClientProps {
  categories: {
    title: string;
    slug: string;
    description: string;
  }[]
  currentCategory?: string
}

export default function NewsSelectorClient({ categories, currentCategory }: NewsSelectorClientProps) {
  const router = useRouter()

  const onChangeHandler = (category: string) => {
    if (currentCategory === category) return
    else if (category === 'latest') return router.push('/news')
    else return router.push(`/news/${category}`)
  }
  
  return (
    <Select onValueChange={ value => onChangeHandler(slugify(value)) }>
      <SelectTrigger className='capitalize max-w-[180px] bg-primary text-secondary border-secondary font-bold'>
        <SelectValue placeholder={ currentCategory ? capatilize(currentCategory) : "Latest" } />
      </SelectTrigger>
      <SelectContent className='capitalize bg-primary border-secondary'>
        <SelectGroup>
          { [{ title: 'Latest', slug: 'latest' }, ...categories].map((option, index) => (
            <SelectItem key={ `${option.slug}_${index}` } value={ option.title } className='text-gray-100 focus:bg-secondary font-medium'>
              { option.title }
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
