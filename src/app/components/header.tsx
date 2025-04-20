import Link from "next/link";

export default function Header() {
    return (
        <>
          <header className="bg-indigo-200 text-purple-800 flex justify-between items-center px-6 py-4">
            <Link href="/"><h2 className="text-xl font-bold">シグマの部屋</h2></Link>
            <div className="flex space-x-6 whitespace-nowrap">
              <Link href="/blog"><h2 className="text-purple-800 hover:underline">blog</h2></Link>
              <Link href="/works"><h2 className="text-purple-800 hover:underline">works</h2></Link>
              <Link href="/"><h2 className="text-purple-800 hover:underline">シグマの部屋</h2></Link>
            </div>
          </header>
        </>
    );
}