"use client";
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/ui/card';
import { Badge } from '@/ui/badge';

interface HeroArticle {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  slug: string;
}

export function HeroSlider() {
  const article: HeroArticle = {
    id: 1,
    title: "Volta Region Announces New Infrastructure Projects",
    excerpt: "The government has unveiled plans for major road construction and hospital upgrades across the region, expected to boost economic growth.",
    category: "News",
    image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
    slug: "volta-infrastructure-projects"
  };

  return (
    <section className="mb-12">
      <Card className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden border-none">
        {/* Background Image with Dark Overlay */}
        <div className="absolute inset-0">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
            quality={100}
          />
          {/* Gradient overlay - darker at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
        </div>
        
        {/* Content Container */}
        <div className="relative z-10 h-full flex flex-col justify-end p-4">
          {/* Category Badge */}
          <div className="mb-4">
            <Badge variant="secondary" className="bg-white text-[#094a94] hover:bg-white/90">
              {article.category}
            </Badge>
          </div>

          {/* Article Content - Entire area is clickable */}
          <Link 
            href={`/${article.category.toLowerCase()}/${article.slug}`}
            className="max-w-3xl space-y-4 text-white hover:underline"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {article.title}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {article.excerpt}
            </p>
          </Link>
        </div>
      </Card>
    </section>
  );
}