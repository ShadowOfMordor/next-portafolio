import type { ReactNode } from "react";

type TechBadgeProps = {
  children: ReactNode;
  className?: string;
};

/** Pill de stack (p. ej. Laravel, Vue) en páginas con tema oscuro tipo proyecto-detalle */
export function TechBadge({ children, className = "" }: TechBadgeProps) {
  return (
    <span className={`badge text-slate-300 ${className}`.trim()}>{children}</span>
  );
}
