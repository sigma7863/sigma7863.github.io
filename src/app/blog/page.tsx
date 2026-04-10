import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "シグマのブログです",
}

export default function Blog() {
  return (
    <>
      <main className="min-h-screen bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <section>
            <h2 className="text-3xl font-bold mb-3">Blog</h2>
            <p className="text-2xl mb-2">現在、AstroでBlogサイトを絶賛制作中！</p>
            <p className="text-2xl">乞うご期待</p>
          </section>
        </div>
      </main>
    </>
  );
}
