import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const Pagination = ({ page, showNext }) => {
  const locale = useLocale()
  const currentPage = +page
  return (
    <div className="flex mt-24 justify-between font-medium text-black dark:text-gray-100">
      <Link
        href={
          currentPage - 1 === 1
            ? `${BLOG.path || '/'}`
            : `/page/${currentPage - 1}`
        }
      >
        <a>
          <button
            rel="prev"
            className={`${
              currentPage === 1 ? 'invisible' : 'block'
            } cursor-pointer`}
          >
            ← {locale.PAGINATION.PREV}
          </button>
        </a>
      </Link>
      <Link href={`/page/${currentPage + 1}`}>
        <a>
          <button
            rel="next"
            className={`${+showNext ? 'block' : 'invisible'} cursor-pointer`}
          >
            {locale.PAGINATION.NEXT} →
          </button>
        </a>
      </Link>
    </div>
  )
}

export default Pagination
