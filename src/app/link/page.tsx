import RecommendedLinkCard from "@/components/RecommendedLinkCard";
import { Metadata } from "next";
import data from "@/data/recommendedLinks.json";

export const metadata: Metadata = {
  title: "Link",
  description: "おすすめのサイトを載せています",
};

export default function Links() {
  return (
    <main className="min-h-screen bg-blue-900 text-white container mx-auto px-2">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <section>
          <h2 className="text-3xl font-bold mb-2">おすすめのサイト</h2>
          <p className="text-xl mb-3">随時載せていく予定です</p>
          <p className="text-xl text-white mb-6">
            更新日: {data.updatedAt}
          </p>
          <p className="text-2xl font-bold text-teal-500 mb-4">ツール系</p>

          {data.links.map(({ href, imgSrc, alt, title, description }) => (
            <RecommendedLinkCard
              key={href}
              href={href}
              imgSrc={imgSrc}
              alt={alt}
              title={title}
              description={description}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
