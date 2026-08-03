import { Smartphone, MessagesSquare, ArrowLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SmartImage } from "@/components/SmartImage";
import { business } from "@/data/business";

const services = [
  {
    icon: Smartphone,
    title: "Smartphones",
    text: "Nous vous présentons nos smartphones en boutique et prenons le temps de vous montrer les modèles disponibles.",
    image: business.images.smartphones,
    alt: "Sélection de smartphones présentée en boutique chez TRIFIX",
  },
  {
    icon: MessagesSquare,
    title: "Conseil personnalisé",
    text: "Un accompagnement humain, sans jargon, pour vous orienter vers un téléphone adapté à votre usage réel.",
    image: business.images.service,
    alt: "Accompagnement personnalisé d’un client chez TRIFIX",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfert de données",
    text: "Nous vous accompagnons dans le transfert de vos données vers votre nouveau smartphone.",
    image: business.images.dataTransfer,
    alt: "Aide au transfert de données vers un nouveau smartphone",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-cream py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-sm font-extrabold uppercase tracking-widest text-brand">
          À votre service
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          Bien plus qu’un simple achat de téléphone
        </h2>
        <p className="mt-4 max-w-2xl text-muted-ink">
          Notre équipe vous accompagne dans le choix de votre appareil, puis dans
          la transition vers votre nouveau smartphone, pour que tout soit prêt
          avant de quitter la boutique.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text, image, alt }) => (
            <Card key={title} className="overflow-hidden border-line py-0">
              <SmartImage src={image} alt={alt} width={640} height={420} />
              <CardContent className="p-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-soft">
                  <Icon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-ink">{title}</h3>
                <p className="mt-2 text-sm text-muted-ink">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
