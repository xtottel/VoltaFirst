import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/ui/badge';

interface LifestyleArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export function LifestyleSection() {
  const articles: LifestyleArticle[] = [
    {
      id: 1,
      title: "10 Best Beaches to Visit in the Volta Region",
      excerpt: "From serene hideaways to vibrant shores, here’s your ultimate coastal guide.",
      date: "June 6, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "best-beaches-volta"
    },
    {
      id: 2,
      title: "Healthy Eating: Local Foods That Boost Immunity",
      excerpt: "Discover nutrient-rich traditional dishes that promote wellness and vitality.",
      date: "June 3, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "local-foods-boost-immunity"
    },
    {
      id: 3,
      title: "Cultural Festivals You Can’t Miss This Year",
      excerpt: "A colorful journey through the region’s most exciting celebrations.",
      date: "May 28, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "volta-cultural-festivals"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Lifestyle & Culture</h2>
        <Link 
          href="/lifestyle" 
          className="text-sm font-medium text-[#e63946] hover:underline"
        >
          View All Lifestyle News →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="border-t-4 border-[#f8971d] rounded-none overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image with badge overlay */}
            <div className="relative w-full h-48">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <Badge
                variant="outline"
                className="absolute top-3 left-3 text-white border-white bg-[#f8971d]/80"
              >
                Lifestyle
              </Badge>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-semibold leading-snug">
                <Link 
                  href={`/lifestyle/${article.slug}`} 
                  className="hover:text-[#f8971d] transition-colors"
                >
                  {article.title}
                </Link>
              </h3>
              <p className="text-gray-600 text-sm mt-1 flex-grow">
                {article.excerpt}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
