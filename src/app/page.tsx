import type { Metadata } from "next";
import ProfileSection from "@/components/ProfileSection";
import HobbyList from "@/components/HobbyList";
import LinkCard from "@/components/LinkCard";
import ReciprocalLinkRequest from "@/components/ReciprocalLinkRequest";
import links from "@/data/links.json";

export const metadata: Metadata = {
  title: "Home",
  description: "シグマのWEBサイトのホームページです",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-blue-900 text-white container mx-auto px-4">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <ProfileSection />

        <HobbyList />

        <section className="mb-12">
          <h2 className="text-[1.7rem] font-medium mb-1">Link</h2>
          <p className="text-xl mb-6">フォロー ・ フレンド いつでも大歓迎です！</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {links.map(({ href, imgSrc, alt, label, username }) => (
              <LinkCard
                key={href}
                href={href}
                imgSrc={imgSrc}
                alt={alt}
                label={label}
                username={username}
              />
            ))}
          </div>
        </section>

        <ReciprocalLinkRequest />
      </div>
    </main>
  );
}
