export function CottonBranch({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 220 260"
      className={className}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
      aria-hidden
    >
      <path
        d="M30 250C55 210 45 170 75 145C100 124 90 95 115 70C132 53 128 35 145 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        className="text-forest/40"
      />
      {[
        { x: 55, y: 190, r: 22 },
        { x: 92, y: 128, r: 16 },
        { x: 132, y: 42, r: 26 },
      ].map((leaf, i) => (
        <g key={i} className="text-forest/30" stroke="currentColor" strokeWidth="1.5">
          <path
            d={`M${leaf.x} ${leaf.y} q ${leaf.r} -${leaf.r * 0.6} 0 -${leaf.r} q -${leaf.r} ${leaf.r * 0.4} 0 ${leaf.r}`}
          />
        </g>
      ))}
      {[
        { cx: 32, cy: 245 },
        { cx: 145, cy: 12 },
      ].map((boll, i) => (
        <g key={i} className="text-gold-light/70" fill="currentColor">
          <circle cx={boll.cx - 7} cy={boll.cy + 3} r="8" />
          <circle cx={boll.cx + 7} cy={boll.cy + 3} r="8" />
          <circle cx={boll.cx} cy={boll.cy - 4} r="8" />
        </g>
      ))}
    </svg>
  );
}

export function WeaveTexture({ className = "" }: { className?: string }) {
  const id = "doty-weave";
  return (
    <svg
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id={id}
          width="18"
          height="18"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <line x1="0" y1="0" x2="0" y2="18" stroke="currentColor" strokeWidth="1" />
          <line x1="9" y1="0" x2="9" y2="18" stroke="currentColor" strokeWidth="1" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

export function ThreadSwirl({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden>
      <path
        d="M170 20C120 20 150 70 100 80C50 90 80 140 30 150"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="text-gold/50"
      />
      <circle cx="170" cy="20" r="4" fill="currentColor" className="text-gold/60" />
    </svg>
  );
}
