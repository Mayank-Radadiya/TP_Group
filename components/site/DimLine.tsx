export default function DimLine({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`dim ${dark ? "!text-paper/50" : ""} ${className}`}>
      <span className="tick" aria-hidden />
      <span className="arm" aria-hidden />
      <span className="px-3">{label}</span>
      <span className="arm" aria-hidden />
      <span className="tick" aria-hidden />
    </div>
  );
}
