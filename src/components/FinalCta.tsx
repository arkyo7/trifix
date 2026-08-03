import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "@/data/business";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="relative overflow-hidden bg-ink py-16">
      <div className="pointer-events-none absolute inset-0 grid-accent opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center">
        <h2
          id="final-cta-title"
          className="text-3xl font-extrabold tracking-tight text-cream sm:text-4xl"
        >
          Une question ou besoin d’aide pour votre prochain téléphone ?
        </h2>
        <p className="mt-4 text-cream/80">
          Appelez-nous ou passez directement en boutique à Ixelles.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={business.phone.href}>
              <Phone aria-hidden="true" />
              Appeler le {business.phone.display}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-cream/30 bg-transparent text-cream hover:bg-cream/10 hover:text-cream"
          >
            <a
              href={business.links.directions}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MapPin aria-hidden="true" />
              Voir l’itinéraire
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
