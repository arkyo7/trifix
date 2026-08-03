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
  return (
    <div
      className={`relative overflow-hidden bg-brand-soft ${className}`}
      style={{ aspectRatio: `${width} / ${height}` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
    </div>
  );
}
