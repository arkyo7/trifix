import { business } from "@/data/business";

export function Logo({ className = "h-12" }: { className?: string }) {
  return (
    <img
      src={business.images.logo}
      alt="Logo officiel de TRIFIX"
      width={1024}
      height={1024}
      className={`${className} w-auto shrink-0 object-contain`}
    />
  );
}
