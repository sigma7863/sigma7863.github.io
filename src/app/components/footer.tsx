import { ExternalLink } from 'lucide-react';

export default function Footer() {
  return(
    <>
      <footer className="bg-blue-900 text-white text-center py-4">
        <hr className="border-white my-3" />
        <p className="text-center inline-flex items-center space-x-1">
          © 2025 Sigma7863  このサイトの技術スタックは
          <a href="" className="underline hover:no-underline">こちらから</a>
          <ExternalLink className="w-4 h-4"/>
        </p>
      </footer>
    </>
	);
}