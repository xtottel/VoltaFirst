import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/ui/badge';

interface TechArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export function TechSection() {
  const articles: TechArticle[] = [
    {
      id: 1,
      title: "AI Startups Transforming the Volta Region",
      excerpt: "Innovators are harnessing AI to solve real-world problems in agriculture, health, and education.",
      date: "June 7, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "ai-startups-volta"
    },
    {
      id: 2,
      title: "5G Rollout Expands Across Regional Cities",
      excerpt: "Faster connectivity is set to boost businesses, education, and telemedicine.",
      date: "June 5, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "5g-rollout-volta"
    },
    {
      id: 3,
      title: "How Local Developers Are Building Global Apps",
      excerpt: "Young programmers are making waves in the international app market.",
      date: "May 31, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "local-developers-global-apps"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Technology & Innovation</h2>
        <Link 
          href="/tech" 
          className="text-sm font-medium text-[#4f46e5] hover:underline"
        >
          View All Tech News →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="border-t-4 border-[#4f46e5] rounded-none overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
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
                className="absolute top-3 left-3 text-white border-white bg-[#4f46e5]/80"
              >
                Tech
              </Badge>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-semibold leading-snug">
                <Link 
                  href={`/tech/${article.slug}`} 
                  className="hover:text-[#4f46e5] transition-colors"
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
