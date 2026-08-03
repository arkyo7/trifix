import { business } from "@/data/business";

export function Logo({ className = "h-9" }: { className?: string }) {
  return (
    <img
      src={business.images.logo}
      alt="Logo officiel de TRIFIX"
      width={140}
      height={40}
      className={`${className} w-auto object-contain`}
    />
  );
}
