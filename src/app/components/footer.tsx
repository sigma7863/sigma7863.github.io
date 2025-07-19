import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <>
      <footer className="bg-blue-900 text-white text-center py-4">
        <hr className="border-white my-3" />
        <p className="text-center">
          © 2025 Sigma7863{" "}
          <span className="whitespace-nowrap">
            このサイトの技術スタックは
            <a href="https://github.com/sigma7863/sigma7863.github.io/blob/master/README.md" target="_blank" className="inline-flex items-center space-x-1 ml-1 underline hover:no-underline">
              <span>こちらから</span>
              <ExternalLink className="w-4 h-4"/>
            </a>
          </span>
        </p>
      </footer>
    </>
  );
}
