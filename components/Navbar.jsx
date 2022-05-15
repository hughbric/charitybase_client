import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='border-b border-gray-200 bg-white py-2 md:py-4'>
      <div className='container px-4 mx-auto flex items-center'>
        <div className='font-bold text-xl text-teal-600'>
          <Link href='https://charitybase.uk/'>
            <a target="_blank">
              A CharityBase Client
            </a>
          </Link>
        </div>
        <div className='ml-auto mt-0'>
          <Link href='https://github.com/hughbric/charitybase_client'>
            <a target="_blank" className='p-2 text-teal-600 text-center border border-solid border-teal-500 rounded hover:bg-teal-500 hover:text-white transition-colors duration-300'>
              View on GitHub
            </a>
          </Link>
        </div>
      </div>
    </nav>
  )
}
