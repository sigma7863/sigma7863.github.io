// app/blog/[id]/page.tsx
import { client } from '@/libs/microcms';
import dayjs from 'dayjs';
import parse from 'html-react-parser'; 

// ブログ記事の型定義
type Props = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  category: { name: string };
};

// microCMSから特定の記事を取得
async function getBlogPost(id: string): Promise<Props> {
  const data = await client.get({
    endpoint: `blog/${id}`,
  });
  return data;
}

// 記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params; // IDを取得
  const post = await getBlogPost(id);

  // dayjsを使ってpublishedAtをYY.MM.DD形式に変換
  const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

  return (
    <main>
      <h1>{post.title}</h1> {/* タイトルを表示 */}
      <div>{formattedDate}</div> {/* 日付を表示 */}
      <div>カテゴリー：{post.category && post.category.name}</div> {/* カテゴリーを表示 */}
       <div>{parse(post.content)}</div> {/* JSX化されたHTML本文 */}
    </main>
  );
}

// 静的パスを生成
export async function generateStaticParams() {
  const contentIds = await client.getAllContentIds({ endpoint: "blog" });

  return contentIds.map((contentId) => ({
    id: contentId, // 各記事のIDをパラメータとして返す
  }));
}