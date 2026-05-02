type FeatureCardProps = {
  eyebrow?: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  eyebrow,
  title,
  description,
  className = "",
}: FeatureCardProps) {
  return (
    <div
      className={`rounded-2xl border border-neutral-800 bg-[#111] p-6 shadow-lg transition hover:-translate-y-1 hover:border-[#38BDF8]/40 hover:shadow-sky-500/10 ${className}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold text-[#38BDF8]">
          {eyebrow}
        </span>
      )}

      <h3 className="mb-3 text-xl font-bold">{title}</h3>

      <p className="text-sm leading-relaxed text-neutral-400">
        {description}
      </p>
    </div>
  );
}