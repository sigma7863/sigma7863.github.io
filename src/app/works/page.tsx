import Link from "next/link";
import Image from "next/image";

export default function Works() {
  return (
    <>
      <main className="min-h-screen bg-blue-900 text-white px-8 py-6">
        <h1 className="text-4xl font-bold mb-4">Works</h1>
        <p className="text-xl mb-1">過去に作ったやつを載せています</p>
        <p className="text-xl mb-8">大したことはしていません</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="https://example.com"
            target="_blank"
            className="bg-white text-black rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <Image src="/splatoon3-spreadsheet.png" width={40} height={40} alt="splatoon3-spreadsheet" className="w-full h-auto"/>
            <div className="p-4">
              <h2 className="text-lg font-bold">スプラトゥーン3 スプレッドシート</h2>
              <p className="text-sm mt-1">
                スプラ3のガチャやクキチドローンで出た結果などの統計を取っているスプレッドシートです
              </p>
              <p className="text-sm text-blue-600 mt-2">
                クリックしてアクセス ↗
              </p>
            </div>
          </Link>

          {/* 空のプレースホルダーカード */}
          <div className="bg-[#c2cafc] rounded-2xl aspect-square" />
          <div className="bg-[#c2cafc] rounded-2xl aspect-square" />
        </div>
      </main>
    </>
  );
}