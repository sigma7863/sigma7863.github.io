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
            <p className="text-xl mb-3">随時載せていく予定です</p>
            <p className="text-xl text-white mb-6">更新日: 2025年7月20日</p>
            <p className="text-2xl font-bold text-teal-400 mb-4">ツール系</p>
        
            <Link href="https://splatoon3.ink" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/splatoon3Ink-logo.png" alt="Splatoon3-Icon" width={40} height={40}  className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Splatoon3.ink</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p className="text-shadow-md">スプラ3のバンカラマッチやサーモンランなどのスケジュールをブラウザで見れるサイト</p>
              </div>
            </Link>
        
            <Link href="https://onlineminitools.com" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/omt-logo.png" alt="OMT-Icon" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">OnlineminiTools</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p className="text-shadow-md">Webサイトのファビコンのダウンロードやパスワード生成など、便利なツールを色々提供しているサイト</p>
              </div>
            </Link>
        
            <Link href="http://juppo.seesaa.net" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/HighSchoolClassic-logo.jpg" alt="HighSchoolClassic-logo" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">高校古文こういう話</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>教科書に掲載されている古文を4コマ漫画で解説しているサイト</p>
              </div>
            </Link>

            <Link href="https://ktgis.net/kjmapw/index.html" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/TimeSeriesTopographicMap-logo.png" alt="TimeSeriesTopographicMap-logo" width={40} height={40} className="w-15 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">今昔マップ on the web</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>江戸～昭和期の古地図を現在地図に重ねて閲覧できるサイト</p>
              </div>
            </Link>

            <Link href="https://app.molview.com/" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/molview-logo.png" alt="molview-logo" width={40} height={40} className="w-14 h-14"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">MolView</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>ブラウザで化学構造式を描画できるサイト</p>
              </div>
            </Link>

            <Link href="https://www.freepublicapis.com/" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/free-public-apis-logo.png" alt="free-public-apis-logo" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Free Public APIs</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>無料で使えるAPIの一覧(ゲームや雑誌など)が載っているサイト</p>
              </div>
            </Link>

            <Link href="https://www.flightradar24.com/" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/flightradar24-logo.png" alt="flightradar24-logo" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">flightradar24</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>世界で飛んでいる飛行機をリアルタイムで見れるサイト</p>
              </div>
            </Link>

            <Link href="https://fonts.google.com/" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/google-font-logo.png" alt="google-font-logo" width={40} height={40} className="w-13 h-14"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Google Fonts</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>Googleが提供しているフォントの一覧が見れるサイト</p>
              </div>
            </Link>

            <Link href="https://unityroom.com/" target="_blank" className="flex items-start space-x-4 mb-6 hover:underline">
              <Image src="/Link-Image/unity-room-logo.png" alt="unity-room-logo" width={40} height={40} className="w-14 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">Unityroom</h3>
                  <ExternalLink className="w-5 h-5"/>
                </div>
                <p>Unityを使って作られたゲームを遊べるサイト</p>
              </div>
            </Link>

            <Link href="https://www.8bitdash.com/" target="_blank" className="flex items-start space-x-4 hover:underline">
              <Image src="/Link-Image/8bitdash-logo.png" alt="8bitdash-logo" width={40} height={40} className="w-12 h-12"/>
              <div>
                <div className="flex items-center space-x-1">
                  <h3 className="text-xl font-bold">8bitdash.com</h3>
                  <ExternalLink className="w-5 h-5" />
                </div>
                <p>8bitのデジタルの時刻が表示されるサイト</p>
              </div>
            </Link>

          </section>
        </div>  
      </main>
    </>  
  );
} 