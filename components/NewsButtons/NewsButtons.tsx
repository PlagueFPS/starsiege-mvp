import type { SearchParams } from 'next/dist/server/request/search-params'
import Link from 'next/link'
import { Button } from '../ui/button'
import { getPaginatedNewsPosts } from '@/data/news'

interface Props {
  searchParams: Promise<SearchParams>
  category?: string
}

export default async function NewsButtons({ searchParams, category }: Props) {
  const { page } = await searchParams
  const { prevPage, nextPage, hasPrevPage, hasNextPage, currentPage, totalPages } = await getPaginatedNewsPosts(Number(page), category)
  const path = category ? `/news/${category}` : '/news'

  return (
    <section className='flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center max-w-full w-full my-8 md:my-12 font-orbitron'>
      <div className='flex gap-4 md:hidden'>
        <Button
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasPrevPage } 
          disabled={ !hasPrevPage }
        >
          <Link
            href={ `${path}?page=${prevPage}` } 
            aria-label='Previous Page'
            aria-disabled={ !hasPrevPage }
            >
            Previous Page
          </Link>
        </Button>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasNextPage } 
          disabled={ !hasNextPage }
        >
          <Link 
            href={ `${path}?page=${nextPage}` }
            aria-label='Next Page'
            aria-disabled={ !hasNextPage }
          >
            Next Page
          </Link>
        </Button>
      </div>
      <div className='hidden md:flex gap-4'>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasPrevPage } 
          disabled={ !hasPrevPage }
        >
          <Link 
              href={ `${path}?page=1` }
              aria-label='First Page'
              aria-disabled={ !hasPrevPage }
            >
              First Page
            </Link>
        </Button>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasPrevPage } 
          disabled={ !hasPrevPage }
        >
          <Link 
            aria-label='Previous Page' 
            href={ `${path}?page=${prevPage}` }
            scroll={ hasPrevPage }
            aria-disabled={ !hasPrevPage }
          >
            Previous Page
          </Link>
        </Button>
      </div>
      <div className='text-white font-oxanium'>{ currentPage } of { totalPages }</div>
      <div className='flex gap-4 md:hidden'>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasPrevPage } 
          disabled={ !hasPrevPage }
        >
          <Link 
            href={ `${path}?page=1` }
            aria-label='First Page'
            aria-disabled={ !hasPrevPage } 
          >
            First Page
          </Link>
        </Button>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasNextPage } 
          disabled={ !hasNextPage }>
          <Link 
            href={ `${path}?page=${totalPages}` }
            aria-label='Last Page'
            aria-disabled={ !hasNextPage }
          >
            Last Page
          </Link>
        </Button>
      </div>
      <div className='hidden md:flex gap-4'>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasNextPage } 
          disabled={ !hasNextPage }
        >
          <Link 
              href={ `${path}?page=${nextPage}` }
              aria-label='Next Page'
              aria-disabled={ !hasNextPage }
            >
              Next Page
            </Link>
        </Button>
        <Button 
          asChild 
          className='bg-secondary text-primary hover:bg-gray-100 aria-disabled:opacity-50 aria-disabled:cursor-not-allowed aria-disabled:hover:bg-secondary transition-all' 
          aria-disabled={ !hasNextPage } 
          disabled={ !hasNextPage }
        >
          <Link 
            href={ `${path}?page=${totalPages}` }
            aria-label='Last Page' 
            aria-disabled={ !hasNextPage }
          >
            Last Page
          </Link>
        </Button>
      </div>
    </section>
  )
}
