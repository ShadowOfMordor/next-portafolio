type ContactCtaCardProps = {
  href: string;
  label: string;
  value: string;
  actionText: string;
  ariaLabel: string;
  external?: boolean;
};

export function ContactCtaCard({
  href,
  label,
  value,
  actionText,
  ariaLabel,
  external = false,
}: ContactCtaCardProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
    >
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
          {label}
        </span>
        <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
          {value}
        </span>
      </div>
      <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
        {actionText}
      </span>
    </a>
  );
}
