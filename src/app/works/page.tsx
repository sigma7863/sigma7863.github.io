import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';

export default function Works() {
  return (
    <>
      <main className="min-h-screen bg-blue-900 text-white px-8 py-6">
        <h1 className="text-4xl font-bold mb-4">Works</h1>
        <p className="text-xl mb-1">過去に作ったやつを載せています</p>
        <p className="text-xl mb-8">大したことはしていません</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="https://docs.google.com/spreadsheets/d/1CHVfHxc5I3HMjK6TT19GLWB0EyuDyx4iaTRm2h4iTQs/edit?usp=sharing"
            target="_blank"
            className="bg-[#c2cafc] text-black rounded-2xl overflow-hidden hover:scale-101 transition-transform duration-180"
          >
            <Image src="/splatoon3-spreadsheet.png" width={345.7} height={163.8} alt="splatoon3-spreadsheet" className="w-full h-auto"/>
            <div className="p-4">
              <h2 className="text-lg font-bold">スプラトゥーン3 スプレッドシート</h2>
              <p className="text-sm mt-1">
                スプラ3のガチャやブキチドローンで出た結果などの統計を取っているスプレッドシートです
              </p>
              <p className="inline-flex items-center text-base text-blue-600 mt-2">
                クリックしてアクセス
                <ExternalLink className="w-4 h-4" />
              </p>
            </div>
          </Link>
          
          <div className="bg-[#cdd2fb] rounded-2xl aspext-square flex flex-col items-center justify-center text-center shadow-md">
            <p className="text-black text-xl mb-2">？？？</p>
            <h2 className="text-black text-lg font-bold">ComingSoon...</h2>
          </div>
          <div className="bg-[#c2cafc] rounded-2xl aspect-square" />
        </div>
      </main>
    </>
  );
}