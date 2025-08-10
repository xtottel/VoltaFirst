import Link from 'next/link';
import Image from 'next/image';
import { Badge } from '@/ui/badge';

interface SportsArticle {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

export function SportsSection() {
  const articles: SportsArticle[] = [
    {
      id: 1,
      title: "Local Football Team Wins Regional Championship",
      excerpt: "A thrilling match that ended in a nail-biting penalty shootout",
      date: "June 5, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "local-football-championship"
    },
    {
      id: 2,
      title: "Athletics Meet Showcases Young Talent",
      excerpt: "Emerging athletes shine at the annual regional athletics meet",
      date: "June 3, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "regional-athletics-meet"
    },
    {
      id: 3,
      title: "Basketball League Kicks Off with Exciting Matches",
      excerpt: "The new season promises thrilling games and fierce competition",
      date: "May 29, 2023",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      slug: "basketball-league-2023"
    }
  ];

  const teamColors = [
    "bg-[#e63946]",
    "bg-[#457b9d]",
    "bg-[#2a9d8f]"
  ];

  return (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Sports</h2>
        <Link href="/sports" className="text-sm font-medium text-[#e63946] hover:underline">
          View All Sports →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div 
            key={article.id} 
            className="rounded-none overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 border-t-4"
            style={{ borderTopColor: teamColors[index % teamColors.length].replace("bg-", "").replace("[", "").replace("]", "") }}
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
                className="absolute top-3 left-3 text-white border-white bg-[#e63946]/80"
              >
                Sports
              </Badge>
            </div>

            {/* Text content */}
            <div className="p-4 flex flex-col h-full">
              <h3 className="text-lg font-semibold leading-snug">
                <Link 
                  href={`/sports/${article.slug}`} 
                  className="hover:text-[#e63946] transition-colors"
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
