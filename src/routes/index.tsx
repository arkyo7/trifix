import { createFileRoute } from "@tanstack/react-router";

import { TopBar } from "@/components/TopBar";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TrustStrip } from "@/components/TrustStrip";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { CosmeticsSection } from "@/components/CosmeticsSection";
import { ReviewsSection } from "@/components/ReviewsSection";

import { PracticalInfoSection } from "@/components/PracticalInfoSection";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { MobileActionBar } from "@/components/MobileActionBar";
import { jsonLd } from "@/data/business";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRIFIX | Smartphones et service personnalisé à Ixelles" },
      {
        name: "description",
        content:
          "TRIFIX, votre boutique de smartphones à Ixelles. Conseil personnalisé, transfert de données et accueil chaleureux. Ouvert du lundi au samedi.",
      },
      { property: "og:title", content: "TRIFIX — Votre boutique mobile à Ixelles" },
      {
        property: "og:description",
        content:
          "Smartphones, conseils personnalisés et aide au transfert de données à Ixelles.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "fr_BE" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(jsonLd) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <TrustStrip />
        <ServicesSection />
        <AboutSection />
        <CosmeticsSection />
        <ReviewsSection />
        
        <PracticalInfoSection />
        <FinalCta />
      </main>
      <Footer />
      <MobileActionBar />
    </div>
  );
}
