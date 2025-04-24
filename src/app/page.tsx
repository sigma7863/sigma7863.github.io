import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900 text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="w-48 h-48 bg-gray-200 shrink-0"></div>
          <div className="space-y-2">
            <h2 className="text-3xl font-medium">こんにちは、シグマです！</h2>
            <p className="text-lg">怠惰に過ごしています</p>
            <p className="text-lg">プログラミングと読書をしていて、</p>
            <p className="text-lg">好奇心のままマイペースに学んでいます</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-4">趣味</h2>
          <ul className="space-y-6">
            <li>
              <div className="flex items-center gap-2">
                <span className="text-xl">•</span>
                <span className="text-xl">プログラミング</span>
              </div>
              <p className="ml-6">最近はThree.jsに興味を持っている</p>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span className="text-xl">•</span>
                <span className="text-xl">読書</span>
              </div>
              <p className="ml-6">小説や技術書を読んでいる</p>
              <p className="ml-6"></p>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <span className="text-xl">•</span>
                <span className="text-xl">ゲーム</span>
              </div>
              <p className="ml-6">惰性でスプラトゥーン・マリオカートをしている</p>
            </li>
          </ul>
        </section>
        
        <section className="mb-16">
          <h2 className="text-2xl font-medium mb-2">Link</h2>
          <p className="mb-6">フォロー・フレンドいつでも大歓迎です！</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/x-logo.png" width={40} height={40} className="w-12 h-12 fill-current" alt="x-logo"/>
              </div>
              <p className="text-center">X(Twitter)</p>
              <p className="text-center">@sigma_7863</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/github-logo.png" width={40} height={40} className="w-12 h-12 fill-current" alt="x-logo"/>
              </div>
              <p className="text-center">Github</p>
              <p className="text-center">sigma7863</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/discord-logo.png" width={40} height={40} className="w-12 h-12 fill-current" alt="x-logo"/>
              </div>
              <p className="text-center">Discord</p>
              <p className="text-center">sigma_7863</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src="/geartics-logo.jpg" width={40} height={40} className="w-12 h-12 fill-current" alt="geartics-logo"/>
              </div>
              <p className="text-center">Geartics</p>
              <p className="text-center">↑使っているデバイス</p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <p className="mb-4">このサイトは以下の技術を使用して作成しました</p>
        </section>
      </div>
    </main>
  )
}
