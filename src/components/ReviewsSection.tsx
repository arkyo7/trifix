import { Star, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { business } from "@/data/business";

export function ReviewsSection() {
  return (
    <section id="avis" className="scroll-mt-24 bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <p className="text-sm font-extrabold uppercase tracking-widest text-brand">
          Avis clients
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Un service apprécié par nos clients
        </h2>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Badge className="gap-1.5 bg-brand text-primary-foreground hover:bg-brand">
            <Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
            {business.rating.value}/5 sur Google
          </Badge>
          <span className="text-sm font-semibold text-muted-ink">
            {business.rating.count} avis
          </span>
        </div>

        <div className="mt-10 grid gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
          {business.reviews.map((review) => (
            <Card key={review.author} className="border-line">
              <CardContent className="flex flex-col gap-3">
                <div className="flex gap-0.5" aria-label="Note : 5 étoiles sur 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-brand text-brand"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-ink">{review.text}</p>
                <p className="text-sm font-extrabold text-ink">{review.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Avis publiés sur Google · résumés en français.
        </p>
        <a
          href={business.links.location}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-2 text-sm font-extrabold text-brand-deep underline underline-offset-4 transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          Voir la fiche Google
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
