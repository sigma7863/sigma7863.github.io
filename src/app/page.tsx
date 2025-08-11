import ProfileSection from "@/components/ProfileSection";
import HobbyList from "@/components/HobbyList";
import LinkCard from "@/components/LinkCard";
import ReciprocalLinkRequest from "@/components/ReciprocalLinkRequest";

const links = [
 {
    href: "https://x.com/sigma_7863",
    imgSrc: "/about-Image/x-logo.png",
    alt: "x-logo",
    label: "X(Twitter)",
    username: "@sigma_7863",
  },
  {
    href: "https://github.com/sigma7863",
    imgSrc: "/about-Image/github-logo.png",
    alt: "github-logo",
    label: "Github",
    username: "sigma7863",
  },
  {
    href: "http://discordapp.com/users/1078241292422762579",
    imgSrc: "/about-Image/discord-logo.png",
    alt: "discord-logo",
    label: "Discord",
    username: "sigma_7863",
  },
  {
    href: "https://atcoder.jp/users/ido_7863",
    imgSrc: "/about-Image/atcoder-logo.png",
    alt: "atcoder-logo",
    label: "AtCoder",
    username: "ido_7863",
  },
  {
    href: "https://bookmeter.com/users/1590292",
    imgSrc: "/about-Image/book-meter-logo.png",
    alt: "book-meter-logo",
    label: "読書メーター",
    username: "Sigma",
  },
];

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
