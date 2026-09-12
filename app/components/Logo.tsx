export default function Logo({
  className = "",
  wordmark = true,
}: {
  className?: string;
  wordmark?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 40 40"
        className="h-8 w-8 shrink-0"
        fill="none"
        aria-hidden
      >
        <path
          d="M20 36V23.5"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M20 23.5 14.5 18M20 23.5 25.5 18M20 23.5 20 16"
          stroke="currentColor"
          strokeWidth="1.1"
          strokeLinecap="round"
        />
        <g className="text-gold-light" fill="currentColor">
          <circle cx="20" cy="9.5" r="6.2" />
          <circle cx="12.5" cy="13.5" r="5.4" />
          <circle cx="27.5" cy="13.5" r="5.4" />
          <circle cx="20" cy="15.5" r="5.8" />
        </g>
      </svg>
      {wordmark && (
        <span className="font-display text-xl font-bold tracking-tight">
          DOTY
        </span>
      )}
    </span>
  );
}
