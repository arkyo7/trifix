import { Sparkles } from "lucide-react";
import { SmartImage } from "@/components/SmartImage";
import { business } from "@/data/business";

export function CosmeticsSection() {
  return (
    <section aria-labelledby="cosmetics-title" className="bg-brand-soft py-12">
      <div className="mx-auto grid max-w-5xl items-center gap-8 px-4 md:grid-cols-[40fr_60fr]">
        <figure className="m-0">
          <SmartImage
            src={business.images.cosmeticsImage}
            alt="Sélection illustrative de produits cosmétiques disponible en boutique"
            width={1440}
            height={1088}
            className="rounded-2xl border border-line"
          />
          <figcaption className="mt-2 text-xs text-muted-foreground">
            Photo d’illustration
          </figcaption>
        </figure>
        <div>
          <p className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-brand-deep">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Et aussi en boutique
          </p>
          <h2
            id="cosmetics-title"
            className="mt-3 text-2xl font-extrabold tracking-tight text-ink"
          >
            Une sélection de cosmétiques à prix accessibles
          </h2>
          <p className="mt-3 text-muted-ink">
            Découvrez également en boutique une sélection variée de produits
            cosmétiques à petits prix.
          </p>
        </div>
      </div>
    </section>
  );
}
