import { MapPin, Clock, Phone } from "lucide-react";
import { business } from "@/data/business";

export function TopBar() {
  return (
    <div className="hidden bg-ink text-cream md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs">
        <p className="flex min-w-0 items-center gap-2">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
          <span className="truncate">{business.address.full}</span>
        </p>
        <div className="flex shrink-0 items-center gap-5">
          <span className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            {business.hoursSummary}
          </span>
          <a
            href={business.phone.href}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <Phone className="h-3.5 w-3.5 text-brand" aria-hidden="true" />
            {business.phone.display}
          </a>
        </div>
      </div>
    </div>
  );
}
