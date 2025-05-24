import { cn } from "@/lib/utils"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface Breadcrumb {
  label: string
  href: string
  active?: boolean
}

interface Props {
  breadcrumbs: Breadcrumb[]
}

export default function Breadcrumbs({ breadcrumbs }: Props) {
  return (
    <nav aria-label="breadcrumb" className="mb-2 font-semibold">
      <ol className="flex items-center justify-center">
        { breadcrumbs.map((breadcrumb, index) => (
          <li 
            key={ breadcrumb.href } 
            aria-current={ breadcrumb.active } 
            className={cn(
              'flex justify-center items-center', 
              breadcrumb.active ? 'text-secondary' : 'text-gray-200'
            )}
          >
            <Link href={ breadcrumb.href }>
              { breadcrumb.label }
            </Link>
            { index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block text-secondary">
                <ChevronRight size={ 18 } />
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  )
}
