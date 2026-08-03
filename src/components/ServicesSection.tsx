import { Smartphone, MessagesSquare, ArrowLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Smartphone,
    title: "Smartphones",
    text: "Nous vous présentons nos smartphones en boutique et prenons le temps de vous montrer les modèles disponibles.",
  },
  {
    icon: MessagesSquare,
    title: "Conseil personnalisé",
    text: "Un accompagnement humain, sans jargon, pour vous orienter vers un téléphone adapté à votre usage réel.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfert de données",
    text: "Nous vous accompagnons dans le transfert de vos données vers votre nouveau smartphone.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 bg-cream py-16 lg:py-20">
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

        <div className="mt-10 grid items-stretch gap-6 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <Card
              key={title}
              className="flex h-full flex-col border-line"
            >
              <CardContent className="flex flex-1 flex-col px-6">
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
