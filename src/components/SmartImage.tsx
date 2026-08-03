import { useEffect, useRef, useState } from "react";
import { ImageOff } from "lucide-react";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
};

export function SmartImage({
  src,
  alt,
  width,
  height,
  className = "",
  imgClassName = "",
  priority = false,
}: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);
  const fileName = src.split("/").pop();

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, [src]);

  return (
    <div
      className={`relative overflow-hidden bg-brand-soft ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      {failed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <ImageOff className="h-7 w-7 text-brand" aria-hidden="true" />
          <p className="text-xs font-semibold text-brand-deep">Image à venir</p>
          <code className="rounded-md bg-card/70 px-2 py-1 text-[11px] text-muted-foreground">
            {fileName}
          </code>
        </div>
      ) : (
        <img
          ref={ref}
          src={src}
          alt={alt}
          width={width}
          height={height}
          onError={() => setFailed(true)}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
    </div>
  );
}
