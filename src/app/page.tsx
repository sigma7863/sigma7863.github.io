// import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const matadata: Metadata = {
  title: "シグマの部屋"
}

export default function about() {
  return　(
    <>
      <main className="bg-blue-800 text-white p-40 space-y-6">
        <section>
          <p className="text-2xl">こんにちは、シグマです！</p>
          <p>怠惰に過ごしています</p>
        </section>
        
        <section>
          <h2 className="text-xl font-semibold mb-2">趣味</h2>        
          <ul className="list-disc list-inside space-y-1">
            <li>プログラミング</li>
            <li>電子工作</li>
            <li>ネットサーフィン</li>
            <li>ゲーム(主にスプラトゥーン)</li>
            <li>読書(小説も読みます)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Link(フォロー・フレンド歓迎！)</h2>
          <div className="flex items-center space-x-6">
            <Link href="https://x.com/sigma_7863" target="_blank" rel="noopener noreferrer">
              <Image src="/x-logo.png" width={40} height={40} alt="x-logo"></Image>
              <span className="text-sm">X(旧Twitter)<br />@sigma_7863</span>
            </Link> 

            <Link href="https://github.com/sigma7863"　target="_blank" rel="noopener noreferrer">
              <Image src="/github-logo.png" width={40} height={40} alt="github-logo"></Image>
              <span>Github<br />sigma7863</span>
            </Link>

            <Link href="https://www.geartics.com/sigma_7863" target="_blank" rel="noopener noreferrer">
              <Image src="/geartics-logo.jpg" width={40} height={40} alt="geartics-logo"></Image>
              <span>Geartics<br />(使っているデバイス)</span>
            </Link>

          </div>

        </section>
      </main>
    </>
  );
}