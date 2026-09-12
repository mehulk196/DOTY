import Image from "next/image";
import { hasPartnerLogo } from "@/lib/logos";

export default function PartnerLogo({
  name,
  logo,
  className = "h-16 w-28 sm:h-24 sm:w-44",
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

  return (
    <div className={`flex items-center justify-center ${className}`} title={name}>
      <Image
        src={`/partners/${logo}`}
        alt={name}
        width={280}
        height={160}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
