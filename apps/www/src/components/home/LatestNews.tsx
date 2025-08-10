import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/ui/badge';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
}

export function LatestNews() {
  const articles: Article[] = [
    {
      id: 1,
      title: "Volta Region Sees 15% Growth in Tech Startups",
      excerpt: "New government initiatives are fueling innovation in the regional economy",
      category: "Business",
      date: "June 4, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "volta-tech-startup-growth"
    },
    {
      id: 2,
      title: "Local Farmers Embrace Sustainable Practices",
      excerpt: "How eco-friendly methods are transforming agriculture in the region",
      category: "Agriculture",
      date: "June 2, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "sustainable-agriculture-volta"
    },
    {
      id: 3,
      title: "New Business Hub Opens in Ho",
      excerpt: "A state-of-the-art facility to support local entrepreneurs and startups",
      category: "Business",
      date: "May 30, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "ho-business-hub"
    }
  ];

  return (
    <section className="mb-16">
      {/* Section Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-green-700">Latest News</h2>
        <Link href="/news" className="text-sm font-medium text-green-600 hover:underline">
          View All News →
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Featured Article */}
        <div className="md:flex border border-green-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative md:w-1/2 h-64">
            <Image
              src={articles[0].image}
              alt={articles[0].title}
              fill
              className="object-cover"
            />
            <div className="absolute top-3 left-3">
              <Badge className="bg-green-600 text-white shadow-md">
                {articles[0].category}
              </Badge>
            </div>
          </div>
          <div className="p-6 md:w-1/2 space-y-4">
            <h3 className="text-2xl font-bold">
              <Link
                href={`/news/${articles[0].slug}`}
                className="hover:text-green-600 transition-colors"
              >
                {articles[0].title}
              </Link>
            </h3>
            <p className="text-lg text-gray-700">{articles[0].excerpt}</p>
            <div className="flex justify-between items-center pt-4 border-t border-green-100">
              <span className="text-sm text-gray-500">{articles[0].date}</span>
              <Link
                href={`/news/${articles[0].slug}`}
                className="text-sm font-medium text-green-600 hover:underline"
              >
                Read full story →
              </Link>
            </div>
          </div>
        </div>

        {/* Secondary Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.slice(1).map((article) => (
            <div
              key={article.id}
              className="border border-green-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-green-600 text-white shadow-md">
                    {article.category}
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">
                  <Link
                    href={`/news/${article.slug}`}
                    className="hover:text-green-600 transition-colors"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600">{article.excerpt}</p>
                <div className="flex justify-between items-center pt-4 border-t border-green-100">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link
                    href={`/news/${article.slug}`}
                    className="text-sm font-medium text-green-600 hover:underline"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
