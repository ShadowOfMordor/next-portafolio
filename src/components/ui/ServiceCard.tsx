type ServiceCardProps = {
  title: string;
  description: string;
  compact?: boolean;
};

export function ServiceCard({
  title,
  description,
  compact = false,
}: ServiceCardProps) {
  return (
    <div
      className={`flex flex-col rounded-2xl border border-black/10 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 ${
        compact ? "gap-2.5 p-4 sm:gap-3 sm:p-5 md:p-6" : "gap-3 p-6"
      }`}
    >
      <h3
        className={`font-space-grotesk font-semibold text-slate-900 dark:text-white ${
          compact ? "text-base sm:text-lg" : "text-lg"
        }`}
      >
        {title}
      </h3>
      <p className={compact ? "text-xs text-slate-600 dark:text-slate-300 sm:text-sm" : "text-sm text-slate-600 dark:text-slate-300"}>
        {description}
      </p>
    </div>
  );
}
