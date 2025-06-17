import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: "Link",
  description: "おすすめのサイトを載せています",
}

export default function Links() {
  return (
    <>  
      <main className="min-h-screen bg-blue-900 text-white container mx-auto px-2">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section>
            <h2 className="text-3xl font-bold mb-2">おすすめのサイト</h2>
            <p className="text-xl mb-6">随時載せていく予定です</p>
        
            <Link href="https://splatoon3.ink" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link/splatoon3Ink-logo.png" alt="Splatoon3-Icon" width={40} height={40}  className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Splatoon3.ink</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-shadow-md">スプラ3のバンカラマッチやサーモンランなどのスケジュールをブラウザで見れるサイト</p>
              </div>
            </Link>
        
            <Link href="https://onlineminitools.com" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link/omt-logo.png" alt="OMT-Icon" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Onlineminitools.com</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-shadow-md">Webサイトのファビコンのダウンロードやパスワード生成など、便利なツールを色々提供しているサイト</p>
              </div>
            </Link>
        
            <Link href="http://juppo.seesaa.net" target="_blank" className="flex items-start space-x-4 hover:underline">
              <Image src="/Link/HighSchoolClassic-logo.jpg" alt="HighSchoolClassic-logo" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">高校古文こういう話</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p>教科書に掲載されている古文を4コマ漫画で解説しているサイト</p>
              </div>
            </Link>
          </section>
        </div>  
      </main>
    </>  
  );
} 