import Link from "next/link";
import Image from "next/image";

export default function Links() {
  return (
    <>  
      <main className="min-h-screen bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-2">相互リンク</h2>
            <p className="text-lg">募集中です！<br />載せて欲しい方がいたら、僕のXアカウントのDMまで！</p>
          </section>

          <hr className="my-6"/>
      
          <section>
            <h2 className="text-3xl font-bold mb-2">おすすめのサイト</h2>
            <p className="text-lg mb-6">随時載せていく予定です</p>
        
            <Link href="https:/splatoon3.ink" target="_blank" className="flex items-start space-x-4 mb-6">
              <Image src="/Splatoon3Ink-logo.png" width={40} height={40} alt="Splatoon Icon" className="w-12 h-12"/>
              <div>
                <h3 className="text-2xl font-semibold">Splatoon3.ink</h3>
                <p>スプラ3のバンカラマッチやサーモンランなどのスケジュールをブラウザで見れるサイト</p>
              </div>
            </Link>
        
            <Link href="https://onlineminitools.com" target="_blank" className="flex items-start space-x-4 mb-6">
              <Image src="/omt-logo.png" alt="OMT Icon" width={40} height={40} className="w-12 h-12 bg-white p-1 rounded"/>
              <div>
                <p className="text-2xl font-semibold">Onlineminitools.com</p>
                <p>Webサイトのファビコンのダウンロードやパスワード生成など、便利なツールを色々提供しているサイト</p>
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