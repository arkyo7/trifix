import { Phone, MapPin } from "lucide-react";
import { business } from "@/data/business";

export function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-cream/95 backdrop-blur-md md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={business.phone.href}
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand text-sm font-extrabold text-primary-foreground transition-colors hover:bg-brand-deep active:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Appeler
        </a>
        <a
          href={business.links.directions}
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-h-12 items-center justify-center gap-2 rounded-xl border border-line bg-card text-sm font-extrabold text-ink transition-colors hover:bg-brand-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <MapPin className="h-4 w-4" aria-hidden="true" />
          Itinéraire
        </a>
      </div>
    </div>
  );
}
