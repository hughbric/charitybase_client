import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className='mt-1 flex flex-col items-center'>
        <div className='mb-3 mt-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400'>
          <div>Michael Hughes</div>
          <div>{` • `}</div>
          <div>2022</div>
          <div>{` • `}</div>
          <Link href='https://github.com/hughbric'>
            <a target='_blank'>
              hughbric
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
