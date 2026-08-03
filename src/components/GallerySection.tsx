import { SmartImage } from "@/components/SmartImage";
import { business } from "@/data/business";

const small = [
  {
    src: business.images.interior1,
    alt: "Intérieur de la boutique TRIFIX à Ixelles",
  },
  {
    src: business.images.smartphones,
    alt: "Sélection de smartphones présentée en boutique chez TRIFIX",
  },
  {
    src: business.images.team,
    alt: "Équipe de TRIFIX en boutique à Ixelles",
  },
  {
    src: business.images.interior2,
    alt: "Espace de conseil à l’intérieur de la boutique TRIFIX",
  },
];

export function GallerySection() {
  return (
    <section id="galerie" className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-extrabold uppercase tracking-widest text-brand">
          Galerie
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Un aperçu de la boutique
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <SmartImage
            src={business.images.facade}
            alt="Façade de la boutique TRIFIX à la Chaussée d'Ixelles 75"
            width={900}
            height={700}
            className="rounded-2xl border border-line"
          />
          <div className="grid grid-cols-2 gap-4">
            {small.map((item) => (
              <SmartImage
                key={item.src}
                src={item.src}
                alt={item.alt}
                width={440}
                height={340}
                className="rounded-2xl border border-line"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
