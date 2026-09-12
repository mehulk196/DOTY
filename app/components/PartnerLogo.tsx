import Image from "next/image";
import { hasPartnerLogo } from "@/lib/logos";

export default function PartnerLogo({
  name,
  logo,
  className = "h-16 w-32",
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
    <div
      className={`flex items-center justify-center rounded-xl border border-forest/10 bg-cream-dark/40 p-3 ${className}`}
      title={name}
    >
      <Image
        src={`/partners/${logo}`}
        alt={name}
        width={160}
        height={80}
        className="h-full w-full object-contain"
      />
    </div>
  );
}
