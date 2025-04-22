import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          <Link href="/">シグマの部屋</Link>
        </h1>
        
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
            about
          </Link>
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition-colors">
            blog
          </Link>
          <Link href="/works" className="text-gray-600 hover:text-gray-900 transition-colors">
            works
          </Link>
          <Link href="/Link" className="text-gray-600 hover:text-gray-900 transition-colors">
            Link
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header