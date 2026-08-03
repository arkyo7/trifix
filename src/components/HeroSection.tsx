import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SmartImage } from "@/components/SmartImage";
import { business } from "@/data/business";

export function HeroSection() {
  return (
    <section id="accueil" className="relative overflow-hidden bg-cream">
      <div
        className="pointer-events-none absolute inset-0 grid-accent opacity-60"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-[55fr_45fr] lg:py-20">
        <div>
          <Badge className="bg-brand-soft text-brand-deep hover:bg-brand-soft">
            {business.tagline}
          </Badge>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Smartphones, conseils et service avec le sourire.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-ink">
            Découvrez nos smartphones et profitez d’un accompagnement
            personnalisé, de votre choix jusqu’au transfert de vos données.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-card px-3 py-1.5 text-sm font-semibold text-ink">
            <Star
              className="h-4 w-4 fill-brand text-brand"
              aria-hidden="true"
            />
            {business.rating.label}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href={business.phone.href}>
                <Phone aria-hidden="true" />
                Appeler maintenant
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a
                href={business.links.directions}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin aria-hidden="true" />
                Obtenir l’itinéraire
              </a>
            </Button>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            Ouvert du lundi au samedi, de 09:30 à 19:00.
          </p>
        </div>

        <div className="relative">
          <SmartImage
            src={business.images.heroImage}
            alt="Intérieur illustratif d’une boutique de smartphones moderne à Ixelles"
            width={1600}
            height={1200}
            priority
            className="rounded-3xl border border-line shadow-lg"
          />
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-line bg-card/95 p-4 shadow-md sm:right-auto sm:max-w-[70%]">
            <p className="text-sm font-extrabold text-ink">
              Service personnalisé à Ixelles
            </p>
            <p className="mt-1 text-xs text-muted-ink">
              {business.address.full}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
