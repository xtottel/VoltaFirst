import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/ui/badge';

interface BusinessArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export function BusinessSection() {
  const articles: BusinessArticle[] = [
    {
      id: 1,
      title: "Volta Region Sees 15% Growth in Tech Startups",
      excerpt: "New government initiatives are fueling innovation in the regional economy",
      date: "June 4, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "volta-tech-startup-growth"
    },
    {
      id: 2,
      title: "Local Farmers Embrace Sustainable Practices",
      excerpt: "How eco-friendly methods are transforming agriculture in the region",
      date: "June 2, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "sustainable-agriculture-volta"
    },
    {
      id: 3,
      title: "New Business Hub Opens in Ho",
      excerpt: "A state-of-the-art facility to support local entrepreneurs and startups",
      date: "May 30, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "ho-business-hub"
    }
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Business & Economy</h2>
        <Link href="/business" className="text-sm font-medium text-primary hover:underline">
          View All Business News →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div 
            key={article.id} 
            className="border-t-4 border-[#094a94] rounded-none overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
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
                className="absolute top-3 left-3 text-white border-white bg-[#094a94]/80"
              >
                Business
              </Badge>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-semibold leading-snug">
                <Link 
                  href={`/business/${article.slug}`} 
                  className="hover:text-[#094a94] transition-colors"
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
