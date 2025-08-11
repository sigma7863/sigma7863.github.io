import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from 'lucide-react';

type RecommendedLinkCardProps = {
  href: string;
  imgSrc: string;
  alt: string;
  title: string;
  description: string;
};

export default function RecommendedLinkCard({ href, imgSrc, alt, title, description }: RecommendedLinkCardProps) {
  return (
    <Link href={href} target="_blank" className="flex items-start space-x-4 mb-8 hover:underline">
      <div className="w-12 h-12 relative flex-shrink-0">
        <Image 
          src={imgSrc} 
          alt={alt} 
          fill 
          sizes="48px"
          style={{ objectFit: "contain" }}
          className=""
          priority={true} 
        />
      </div>
      <div>
        <div className="flex items-center space-x-1">
          <h3 className="text-xl font-bold">{title}</h3>
          <ExternalLink className="w-5 h-5" />
        </div>
        <p className="text-shadow-md">{description}</p>
      </div>
    </Link>
  );
}
