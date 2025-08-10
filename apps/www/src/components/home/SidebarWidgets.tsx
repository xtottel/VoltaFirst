import { Card, CardContent, CardHeader } from "@/ui/card";
import Button from "@/ui/Button";
import { Input } from "@/ui/input";
import Link from "next/link";
import { Mail, Flame } from "lucide-react";
import Image from "next/image";

export function SidebarWidgets() {
  const trendingArticles = [
    {
      title: "New Tourism Initiative Launched",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      link: "#",
    },
    {
      title: "Political Debate Heats Up",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      link: "#",
    },
    {
      title: "Local Athlete Wins Gold",
      image: "https://cdn.sendexa.co/images/carousel/messaging.jpg",
      link: "#",
    },
  ];

  return (
    <div className="space-y-6 lg:sticky top-6 self-start pb-10">
      {/* Ads Widget */}
      <Card className="overflow-hidden border border-green-500/20 shadow-sm">
        <CardContent className="p-0">
          <Link
            href="https://sendexa.co/"
            className="block relative w-full aspect-video group"
          >
            <Image
              src="/ads/exa.jpg"
              alt="Advertisement"
              fill
              className="object-cover transition-transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-3">
              <p className="text-white text-sm font-medium">
                Sponsored Ad — Check this out!
              </p>
            </div>
          </Link>
        </CardContent>
      </Card>

      {/* Newsletter Widget */}
      <Card className="overflow-hidden border border-primary/20 shadow-sm bg-blue-50">
        <CardHeader className="flex flex-row items-center justify-center gap-2 p-4">
          <Mail className="h-6 w-6 text-blue-600" />
          <h3 className="font-semibold text-blue-600">Stay Updated</h3>
        </CardHeader>
        <CardContent className="space-y-3 p-4">
          <p className="text-sm text-muted-foreground text-center">
            Get our top stories delivered to your inbox every week.
          </p>
          <form className="space-y-3">
            <Input type="email" placeholder="Your email" required />
            <Button type="submit" variant="primary" className="w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Trending Widget */}
      <Card className="overflow-hidden border border-orange-500/30 shadow-sm">
        <CardHeader className="flex flex-row items-center gap-2 bg-orange-50 p-4">
          <Flame className="h-5 w-5 text-orange-500" />
          <h3 className="font-semibold text-orange-600">Trending Now</h3>
        </CardHeader>
        <CardContent className="space-y-4 p-4">
          {trendingArticles.map((article, i) => (
            <Link
              href={article.link}
              key={i}
              className="group flex items-center gap-3 hover:bg-muted/50 rounded-md p-2 transition"
            >
              <div className="relative w-12 h-12 flex-shrink-0 rounded overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-tight group-hover:text-orange-600 transition">
                  {article.title}
                </p>
              </div>
              <span className="text-xs text-muted-foreground font-semibold">
                #{i + 1}
              </span>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
