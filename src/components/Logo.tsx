import { useState } from "react";
import { business } from "@/data/business";

export function Logo({ className = "h-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="text-xl font-extrabold tracking-tight text-brand">
        TRIFIX
      </span>
    );
  }

  return (
    <img
      src={business.images.logo}
      alt="Logo de TRIFIX, boutique de smartphones à Ixelles"
      width={140}
      height={40}
      onError={() => setFailed(true)}
      className={`${className} w-auto object-contain`}
    />
  );
}
