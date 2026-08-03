import { useEffect, useRef, useState } from "react";
import { business } from "@/data/business";

export function Logo({ className = "h-9" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) {
      setFailed(true);
      return;
    }
    const probe = new Image();
    probe.onerror = () => setFailed(true);
    probe.src = business.images.logo;
    return () => {
      probe.onerror = null;
    };
  }, []);

  if (failed) {
    return (
      <span className="text-xl font-extrabold tracking-tight text-brand">
        TRIFIX
      </span>
    );
  }

  return (
    <img
      ref={ref}
      src={business.images.logo}
      alt="Logo de TRIFIX, boutique de smartphones à Ixelles"
      width={140}
      height={40}
      onError={() => setFailed(true)}
      className={`${className} w-auto object-contain`}
    />
  );
}
