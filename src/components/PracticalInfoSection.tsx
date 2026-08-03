import { MapPin, Phone, Clock, CreditCard, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { business } from "@/data/business";

export function PracticalInfoSection() {
  return (
    <section id="infos-pratiques" className="bg-card py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-extrabold uppercase tracking-widest text-brand">
          Infos pratiques
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Retrouvez-nous à Ixelles
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <Card className="border-line">
              <CardContent className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-ink">Adresse</h3>
                  <address className="mt-1 text-sm not-italic text-muted-ink">
                    Chaussée d'Ixelles 75
                    <br />
                    1050 Ixelles, Belgique
                  </address>
                </div>
              </CardContent>
            </Card>

            <Card className="border-line">
              <CardContent className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-ink">Téléphone</h3>
                  <a
                    href={business.phone.href}
                    className="mt-1 inline-block text-sm font-semibold text-brand-deep underline underline-offset-4 hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {business.phone.display}
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-line">
              <CardContent className="flex items-start gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-extrabold text-ink">Horaires</h3>
                  <ul className="mt-2 flex flex-col gap-1.5 text-sm">
                    {business.hours.map((entry) => (
                      <li key={entry.day} className="flex justify-between gap-4">
                        <span className="text-muted-ink">{entry.day}</span>
                        <span
                          className={
                            entry.closed
                              ? "font-semibold text-muted-foreground"
                              : "font-semibold text-ink"
                          }
                        >
                          {entry.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-line">
              <CardContent className="flex items-start gap-3">
                <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <div className="min-w-0">
                  <h3 className="text-sm font-extrabold text-ink">
                    Moyens de paiement
                  </h3>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {business.payments.map((payment) => (
                      <li
                        key={payment}
                        className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep"
                      >
                        {payment}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={business.links.mapEmbed}
                title="Localisation de TRIFIX à Ixelles"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                width={640}
                height={480}
                className="h-[320px] w-full border-0 lg:h-[420px]"
              />
            </div>
            <Separator />
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="sm:flex-1">
                <a
                  href={business.links.directions}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MapPin aria-hidden="true" />
                  Obtenir l’itinéraire
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="sm:flex-1">
                <a
                  href={business.links.location}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ouvrir dans Google Maps
                  <ExternalLink aria-hidden="true" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
