import { useEffect, useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Logo } from "@/components/Logo";
import { business } from "@/data/business";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-line bg-cream/85 backdrop-blur-md"
          : "border-transparent bg-cream"
      }`}
    >
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-2">
        <a
          href="#accueil"
          className="flex min-w-0 items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
        >
          <Logo className="h-12 sm:h-14" />
          <span className="sr-only">TRIFIX — Accueil</span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <nav aria-label="Navigation principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {business.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-md px-3 py-2 text-sm font-semibold text-muted-ink transition-colors hover:bg-brand-soft hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button asChild className="hidden sm:inline-flex">
            <a href={business.phone.href}>
              <Phone aria-hidden="true" />
              Appeler
            </a>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden"
                aria-label="Ouvrir le menu de navigation"
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-cream">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
              </SheetHeader>
              <nav aria-label="Navigation mobile" className="px-4">
                <ul className="flex flex-col gap-1">
                  {business.nav.map((item) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        onClick={() => setOpen(false)}
                        className="block rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-brand-soft hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
                <Separator className="my-4" />
                <Button asChild className="w-full">
                  <a href={business.phone.href} onClick={() => setOpen(false)}>
                    <Phone aria-hidden="true" />
                    Appeler le {business.phone.display}
                  </a>
                </Button>
                <p className="mt-4 text-sm text-muted-foreground">
                  {business.address.full}
                  <br />
                  {business.hoursSummary}
                </p>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
