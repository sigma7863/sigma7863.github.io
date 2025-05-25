import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';

export default function Links() {
  return (
    <>  
      <main className="min-h-screen bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* 相互リンク */}
          <section className="mb-6">
            <h2 className="text-3xl font-bold mb-2">相互リンク</h2>
            <p className="text-xl">
              募集中です！<br />載せて欲しい方がいたら、
              <span className="inline-flex items-center space-x-1">
                <a href="https://x.com/sigma_7863" target="_blank" className="text-green-400 hover:underline">XのDM(@sigma_7863)</a>
                <ExternalLink className="text-green-400 w-5 h-5"/>
                まで！
              </span>
              
            </p>
          </section>

          <hr className="my-6"/>

          {/* おすすめのサイト */}
          <section>
            <h2 className="text-3xl font-bold mb-2">おすすめのサイト</h2>
            <p className="text-xl mb-6">随時載せていく予定です</p>
        
            <Link href="https:/splatoon3.ink" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/splatoon3Ink-logo.png" width={40} height={40} alt="Splatoon Icon" className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Splatoon3.ink</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-shadow-md">スプラ3のバンカラマッチやサーモンランなどのスケジュールをブラウザで見れるサイト</p>
              </div>
            </Link>
        
            <Link href="https://onlineminitools.com" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/omt-logo.png" alt="OMT Icon" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Onlineminitools.com</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p className="text-shadow-md">Webサイトのファビコンのダウンロードやパスワード生成など、便利なツールを色々提供しているサイト</p>
              </div>
            </Link>
        
            {/* <div className="flex items-start space-x-4">
              <Image src="HighscoolClassic-logo.png" alt="教科書画像" className="w-12 h-12"/>
              <div>
                <p>教科書にある古文を4コマ漫画で解説しているサイト<br />古文苦手なので参考にしている</p>
              </div>
            </div> */}
          </section>
        </div>  
      </main>
    </>  
  );
} 