import Link from 'next/link'

export default function Header() {
  return (
    <>
      <header className="bg-indigo-200 p-4 flex justify-between items-center">
        <Link href="/"><h1 className="text-purple-800 text-2xl font-medium">シグマの部屋</h1></Link>
        <nav className="flex gap-6 text-gray-600">
          <Link href="/" className="hover:underline text-gray-900">about</Link>
          <Link href="/blog" className="hover:underline text-gray-900">blog</Link>
          <Link href="/works" className="hover:underline text-gray-900">works</Link>
          <Link href="/link" className="hover:underline text-gray-900">Link</Link>
        </nav>
      </header>
    </>  
  );
}