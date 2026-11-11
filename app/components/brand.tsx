import Image from "next/image";

/** Yoona's official artwork, downloaded unchanged from its public website. */
export function YoonaLogo({
  className = "",
  light = false,
  preload = false,
}: {
  className?: string;
  light?: boolean;
  preload?: boolean;
}) {
  return (
    <Image
      src="/images/brand/yoona-logo-white.png"
      alt="yoona — not just any agent"
      width={920}
      height={212}
      unoptimized
      preload={preload}
      className={`block h-auto object-contain ${light ? "" : "brightness-0"} ${className}`}
    />
  );
}
