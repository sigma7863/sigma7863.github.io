import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "ページが存在しません",
}

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-900 text-white">
      <main className="mt-6 sm:flex-grow flex flex-col justify-center items-center px-4 text-center gap-y-8">
        <h1 className="text-8xl font-semibold">404</h1>
        <h2 className="text-4xl text-cyan-300 font-semibold">
          ページが…見つからない！？
        </h2>
        <div className="space-y-3 text-lg sm:text-xl max-w-xl text-left leading-relaxed">
          <p>ページを探して、ここまで来たあなたへ。</p>
          <p>そのページは、最初から「なかった」のかもしれません。</p>
          <p>それとも、世界が静かに忘れてしまっただけなのか。</p>
          <p>情報の海のどこかに、断片だけが今も漂っているのかもしれません。</p>
          <p>でも、ここには、もう何もありません。
            <span className="float-right">by GPT-4o</span>
          </p>
        </div>
      </main>
    </div>
  );
}