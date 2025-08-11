import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';

type LinkCardProps = {
  href: string;
  imgSrc: string;
  alt: string;
  label: string;
  username: string;
};

export default function LinkCard({ href, imgSrc, alt, label, username }: LinkCardProps) {
  return (
    <Link href={href} target="_blank" className="flex flex-col items-center hover:text-[#68dbca]">
      <div className="w-16 h-16 flex items-center justify-center">
        <Image src={imgSrc} width={40} height={40} alt={alt} className="w-12 h-12 fill-current" />
      </div>
      <p className="text-center inline-flex items-center space-x-1">
        <span>{label}</span>
        <ExternalLink className="w-4 h-4" />
      </p>
      <p className="text-center">{username}</p>
    </Link>
  );
}
