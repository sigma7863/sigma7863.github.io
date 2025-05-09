import Link from "next/link";
import { getArticles } from "../lib/newt";
import styles from ../global.css
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "シグマのブログ",
  description: "日記や本の感想など、色々書いています",
}

export default async function Blog() {
  const articles = await getArticles()
  return (
     <main className={styles.main}>
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