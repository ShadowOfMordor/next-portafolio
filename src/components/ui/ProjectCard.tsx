import type { ReactNode } from "react";

type StatusTone = "neutral" | "amber";

type ProjectCardProps = {
  title: string;
  description: string;
  statusText: string;
  bullets: string[];
  tags: string[];
  href?: string;
  dashed?: boolean;
  statusTone?: StatusTone;
};

function statusClass(tone: StatusTone) {
  if (tone === "amber") {
    return "w-fit rounded-full border border-amber-300/60 bg-amber-100/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-amber-800 uppercase dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200 sm:px-3 sm:text-xs sm:tracking-[0.18em]";
  }

  return "w-fit rounded-full border border-slate-200/70 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/10 dark:text-slate-200 sm:px-3 sm:text-xs sm:tracking-[0.18em]";
}

const baseCardClass =
  "flex h-full flex-col gap-3 rounded-2xl border bg-white/70 p-4 shadow-sm transition active:scale-[0.98] hover:-translate-y-1 sm:gap-4 sm:rounded-3xl sm:p-5 md:p-6";

export function ProjectCard({
  title,
  description,
  statusText,
  bullets,
  tags,
  href,
  dashed = false,
  statusTone = "neutral",
}: ProjectCardProps) {
  const className = `${baseCardClass} ${
    dashed
      ? "border-dashed border-slate-300/70 bg-white/40 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
      : "border-black/10 dark:border-white/10 dark:bg-white/5"
  } ${
    dashed
      ? ""
      : "hover:border-black/20 dark:hover:border-white/20"
  }`;

  const inner: ReactNode = (
    <>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div className="flex flex-col gap-1.5 sm:gap-2">
          <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
            {title}
          </h3>
          <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
            {description}
          </p>
        </div>
        <span className={statusClass(statusTone)}>{statusText}</span>
      </div>

      <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 sm:gap-2 sm:text-sm">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${className} text-left`}>
        {inner}
      </a>
    );
  }

  return <div className={className}>{inner}</div>;
}
