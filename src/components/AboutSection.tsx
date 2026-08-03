import { Check, MapPin } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { business } from "@/data/business";

const points = [
  "Une équipe disponible et à l’écoute",
  "Un accompagnement clair, sans jargon",
  "Une aide pratique lors du changement de téléphone",
];

export function AboutSection() {
  return (
    <section aria-labelledby="about-title" className="bg-card py-16 lg:py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
        <figure className="m-0">
          <SmartImage
            src={business.images.customerServiceImage}
            alt="Illustration d’un accompagnement personnalisé lors du choix d’un smartphone"
            width={1440}
            height={1088}
            className="rounded-3xl border border-line shadow-md"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Photo d’illustration
          </figcaption>
        </figure>
        <div>
          <p className="text-sm font-extrabold uppercase tracking-widest text-brand">
            Une boutique de proximité
          </p>
          <h2
            id="about-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl"
          >
            Un accueil humain au cœur d’Ixelles
          </h2>
          <p className="mt-4 text-muted-ink">
            Chez TRIFIX, chaque client bénéficie d’une attention personnalisée.
            Notre objectif est de vous aider à repartir avec un téléphone adapté
            à vos besoins et l’accompagnement nécessaire pour bien commencer.
          </p>

          <ul className="mt-6 flex flex-col gap-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-soft">
                  <Check className="h-3.5 w-3.5 text-brand-deep" aria-hidden="true" />
                </span>
                <span className="text-sm font-semibold text-ink">{point}</span>
              </li>
            ))}
          </ul>

          <p className="mt-7 flex items-center gap-2 text-sm font-extrabold text-brand-deep">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Passez nous voir à la Chaussée d'Ixelles 75.
          </p>
        </div>
      </div>
    </section>
  );
}
