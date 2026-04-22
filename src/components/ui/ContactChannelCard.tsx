import type { ReactNode } from "react";

type ContactChannelCardProps = {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  ariaLabel: string;
  target?: "_blank" | "_self";
  rel?: string;
};

export function ContactChannelCard({
  href,
  label,
  value,
  icon,
  ariaLabel,
  target,
  rel,
}: ContactChannelCardProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={target}
      rel={rel}
      className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
          {label}
        </span>
        <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white">
          {value}
        </span>
      </div>
    </a>
  );
}
