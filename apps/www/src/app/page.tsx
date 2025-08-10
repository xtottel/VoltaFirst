import { Container } from "@/layout/Container";
import { HeroSlider } from "@/components/home/HeroSlider";
import { LatestNews } from "@/components/home/LatestNews";
import { SidebarWidgets } from "@/components/home/SidebarWidgets";
import { SportsSection } from "@/components/home/SportsSection";
import { BusinessSection } from "@/components/home/BusinessSection";
import { LifestyleSection } from "@/components/home/LifestyleSection";
import { TechSection } from "@/components/home/TechSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Main Content - 70% width */}
          <main className="lg:basis-[70%] space-y-12">
            <HeroSlider />
            <LatestNews />
            <SportsSection />
            <BusinessSection />
            <LifestyleSection />
            <TechSection />
          </main>

          {/* Sidebar - 30% width */}
          <aside className="lg:basis-[30%] space-y-6">
            <SidebarWidgets />
          </aside>
        </div>
      </Container>
    </div>
  );
}
