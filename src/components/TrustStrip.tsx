import { HeartHandshake, MessagesSquare, ArrowLeftRight, Nfc } from "lucide-react";

const items = [
  {
    icon: HeartHandshake,
    title: "Accueil chaleureux",
    text: "Une équipe qui prend le temps de vous écouter en boutique.",
  },
  {
    icon: MessagesSquare,
    title: "Conseils personnalisés",
    text: "Des explications claires pour choisir sereinement.",
  },
  {
    icon: ArrowLeftRight,
    title: "Transfert de données",
    text: "Une aide concrète pour retrouver vos contenus.",
  },
  {
    icon: Nfc,
    title: "Paiement sans contact",
    text: "Cartes et paiements mobiles NFC acceptés.",
  },
];

export function TrustStrip() {
  return (
    <section aria-label="Nos atouts" className="border-y border-line bg-card">
      <h2 className="sr-only">Les avantages de TRIFIX</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex min-w-0 flex-col gap-2">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-soft">
              <Icon className="h-5 w-5 text-brand-deep" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-extrabold text-ink sm:text-base">
              {title}
            </h3>
            <p className="text-xs text-muted-ink sm:text-sm">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
