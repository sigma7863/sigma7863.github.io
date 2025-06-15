import Link from "next/link";
import Image from "next/image";

export default function Works() {
  return (
    <>
      <main className="min-h-screen bg-blue-900 text-white px-10 py-10">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Works</h1>
          <p className="text-xl mb-1">過去に作ったやつを載せています</p>
          <p className="text-xl mb-8">大したことはしていません</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-stretch">
            <Link href="https://docs.google.com/spreadsheets/d/1CHVfHxc5I3HMjK6TT19GLWB0EyuDyx4iaTRm2h4iTQs/edit?usp=sharing"
              target="_blank"
              className="bg-[#c2cafc] text-black rounded-2xl overflow-hidden hover:scale-102 transition-transform duration-180"
            >
              <Image src="/works/splatoon3-spreadsheet.png" alt="splatoon3-spreadsheet" width={345.7} height={163.8} className="w-full h-auto"/>
              <div className="p-4">
                <h2 className="text-xl font-bold inline-flex items-center gap-0.5">スプラトゥーン3 スプレッドシート</h2>
                <p className="text-base mt-1">
                  スプラ3のガチャやブキチドローンで出た結果などのデータを取っているスプレッドシート
                </p>
              </div>
            </Link>
            
            <div className="flex flex-col bg-[#cdd2fb] rounded-2xl p-4 h-full min-h-[265px] justify-center items-center text-center shadow-md">
              <p className="text-black text-xl mb-2">？？？</p>
              <h2 className="text-black text-lg font-bold">ComingSoon...</h2>
              <h2 className="text-black text-lg">一応やりたいことは決まっている</h2>
            </div>
            
            <div className="bg-[#c2cafc] rounded-2xl h-full" />
          </div>
        </div>
      </main>
    </>
  );
}