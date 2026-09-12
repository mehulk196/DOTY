import { hasPartnerLogo } from "@/lib/logos";

export default function PartnerLogo({
  name,
  logo,
  className = "h-16 sm:h-24",
}: {
  name: string;
  logo: string;
  className?: string;
}) {
  if (!hasPartnerLogo(logo)) {
    return (
      <span className="rounded-full border border-forest/20 bg-cream-dark/60 px-6 py-3 text-sm font-semibold text-forest">
        {name}
      </span>
    );
  }

  // Plain <img> (not next/image) because height-based sizing needs each
  // logo's natural aspect ratio, which next/image can't infer without
  // per-file width/height.
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/partners/${logo}`}
      alt={name}
      title={name}
      className={`w-auto max-w-[160px] object-contain sm:max-w-[240px] ${className}`}
    />
  );
}
