import { Logo } from "@/components/Logo";
import { business } from "@/data/business";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink pb-24 pt-14 text-cream/80 md:pb-14">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-3">
        <div>
          <Logo className="h-16" />
          <p className="mt-4 text-sm font-extrabold text-cream">TRIFIX</p>
          <address className="mt-2 text-sm not-italic">
            Chaussée d'Ixelles 75
            <br />
            1050 Ixelles, Belgique
          </address>
          <a
            href={business.phone.href}
            className="mt-2 inline-block text-sm font-semibold text-cream transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            {business.phone.display}
          </a>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-cream">Horaires</h2>
          <ul className="mt-3 flex flex-col gap-1 text-sm">
            <li>Lundi – Samedi : 09:30 – 19:00</li>
            <li>Dimanche : Fermé</li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-extrabold text-cream">Navigation</h2>
          <nav aria-label="Navigation du pied de page" className="mt-3">
            <ul className="flex flex-col gap-1 text-sm">
              {business.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-cream/10 px-4 pt-6 text-xs">
        <p>© {year} TRIFIX. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
