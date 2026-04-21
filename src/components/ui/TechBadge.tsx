import type { ReactNode } from "react";

type TechBadgeProps = {
  children: ReactNode;
  className?: string;
};

export function TechBadge({ children, className = "" }: TechBadgeProps) {
  return (
    <span className={`badge text-slate-300 ${className}`.trim()}>{children}</span>
  );
}
