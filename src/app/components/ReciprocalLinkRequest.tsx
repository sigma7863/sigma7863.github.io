import Link from "next/link";
import { ExternalLink } from 'lucide-react';

export default function ReciprocalLinkRequest() {
  return (
    <section>
      <h2 className="text-[1.6rem] font-medium mb-2">相互リンクを募集しています！</h2>
      <p className="text-xl">
        載せて欲しい方がいましたら、
        <span className="inline-flex items-center space-x-1">
          <Link href="https://x.com/sigma_7863" target="_blank" className="text-green-400 hover:underline">
            XのDM(@sigma_7863)
          </Link>
          <ExternalLink className="text-green-400 w-5 h-5" />
          まで！
        </span>
      </p>
    </section>
  );
}
