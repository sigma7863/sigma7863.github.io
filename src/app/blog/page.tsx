import Link from "next/link"
import { getArticles } from "@/lib/newt"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "シグマのブログです",
}

export default async function Home() {
  const articles = await getArticles()
  return (
    <main className="">
      <ul>
        {articles.map((article) => {
          return (
            <li key={article._id}>
              <Link href={`articles/${article.slug}`}>{article.title}</Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}