import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from 'lucide-react';

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-blue-900 text-white container mx-auto px-4">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section className="flex flex-col sm:flex-row gap-8 mb-8 items-center">
            <Image src="/about/my-icon.png" width={180} height={180} alt="my-icon" className="flex justify-center md:justify-start"/>
            <div className="space-y-2">
              <h2 className="text-3xl font-medium">こんにちは、シグマです！</h2>
              <p className="text-lg">怠惰に過ごしていますが、</p>
              <p className="text-lg">プログラミングや読書などをしていて</p>
              <p className="text-lg">好奇心のままマイペースに学んでいます</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-medium mb-2">趣味</h2>
            <ul className="space-y-3">
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-[1.4rem]">プログラミング</span>
                </div>
                <p className="text-xl ml-4 mb-4">最近はThree.jsに興味を持っている</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-[1.4rem]">ゲーム</span>
                </div>
                <p className="text-xl ml-4">スプラトゥーンとマリオカートを主にしている</p>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <span className="text-xl">•</span>
                  <span className="text-[1.4rem]">読書</span>
                </div>
                <p className="text-xl ml-4 mb-1">哲学系の本や技術書を読んでいる<br/></p>
                <p className="text-xl line-through ml-4 mb-4">1日に読む時間は少ない</p>
              </li>
            </ul>
          </section>
          
          <section className="mb-12">
            <h2 className="text-[1.7rem] font-medium mb-1">Link</h2>
            <p className="text-xl mb-6">フォロー ・ フレンド いつでも大歓迎です！</p>

            <div className="grid grid-cols-2 sm:grid-cols-6">
              <Link href="https://x.com/sigma_7863" target="_blank" className="flex flex-col items-center hover:text-[#2CB7A2] hover:underline">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image src="/about/x-logo.png" width={40} height={40} className="w-12 h-12 fill-current hover:cyan-500" alt="x-logo"/>
                </div>
                <p className="text-center inline-flex items-center space-x-1">
                  <span>X(Twitter)</span>
                  <ExternalLink className="w-4 h-4" />
                </p>
                <p className="text-center">@sigma_7863</p>
              </Link>

              <Link href="https://github.com/sigma7863" target="_blank" className="flex flex-col items-center hover:text-[#2CB7A2] hover:underline">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image src="/about/github-logo.png" width={40} height={40} className="w-12 h-12 fill-current" alt="github-logo"/>
                </div>
                <p className="text-center inline-flex items-center space-x-1">
                 <span>Github</span>
                 <ExternalLink className="w-4 h-4" />
                </p>
                <p className="text-center">sigma7863</p>
              </Link>

              <Link href="http://discordapp.com/users/1078241292422762579" target="_blank" className="flex flex-col items-center hover:text-[#2CB7A2] hover:underline">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image src="/about/discord-logo.png" width={40} height={40} className="w-12 h-12 fill-current" alt="discord-logo"/>
                </div>
                <p className="text-center inline-flex items-center space-x-1">
                  <span>Discord</span>
                  <ExternalLink className="w-4 h-4" />
                </p>
                <p className="text-center">sigma_7863</p>
              </Link>
            </div>
          </section>

          <section className="">
            <h2 className="text-[1.6rem] font-medium mb-2">相互リンクを募集しています！</h2>
            <p className="text-xl">
              載せて欲しい方がいましたら、
              <span className="inline-flex items-center space-x-1">
                <a href="https://x.com/sigma_7863" target="_blank" className="text-green-400 hover:underline">XのDM(@sigma_7863)</a>
                <ExternalLink className="text-green-400 w-5 h-5"/>
                まで！
              </span>
            </p>
          </section>
        </div>
      </main>
    </>
  );
}
