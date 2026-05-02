type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({
  eyebrow,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {eyebrow && (
        <span className="mb-4 inline-block rounded-full border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-4 py-1 text-sm font-semibold text-[#4bb5e2]">
          {eyebrow}
        </span>
      )}

      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg leading-relaxed text-neutral-400">
          {description}
        </p>
      )}
    </div>
  );
}