export default function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  const ink = dark ? "#F2F0EB" : "#1A1917";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`} aria-label="Tirupati Precast">
      <svg width="34" height="24" viewBox="0 0 34 24" fill="none" aria-hidden>
        <path
          d="M2 14 C10 6, 26 4, 32 7 C24 5, 12 8, 7 13 C12 11, 22 10, 27 12 C20 12, 10 15, 6 19 C10 15, 18 13, 24 14 C16 15, 9 18, 5 22 Z"
          fill="#ED1C24"
        />
        <path d="M8 3 h7 v2.4 h-2.1 V11 h-2.8 V5.4 H8 Z" fill={ink} />
        <path d="M17.5 3 h6.2 v2.4 h-3.4 v1.2 h3.1 v2.3 h-3.1 V11 h-2.8 Z" fill={ink} />
      </svg>
      <span
        className="font-wide text-[13px] tracking-[0.08em]"
        style={{ color: ink }}
      >
        Tirupati&nbsp;<span className="text-red">Precast</span>
      </span>
    </span>
  );
}
