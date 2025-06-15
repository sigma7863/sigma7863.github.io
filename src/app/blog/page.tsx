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
            <h2 className="text-3xl font-bold mb-2">Blog</h2>
            <p className="text-xl mb-6">書くか書かないかは未定...</p>
          </section>
        </div>  
      </main>
    </>  
  );
}