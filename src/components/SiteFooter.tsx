type FooterVariant = "light" | "dark";

type SiteFooterProps = {
  variant?: FooterVariant;
};

const shellLight =
  "flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400";

const shellDark =
  "flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400";

export function SiteFooter({ variant = "light" }: SiteFooterProps) {
  return (
    <footer className={variant === "dark" ? shellDark : shellLight}>
      <span>Disponible para proyectos freelance y personales.</span>
      <span>
        Stack habitual: Laravel, Vue, Next.js, TypeScript, Tailwind y MySQL.
      </span>
    </footer>
  );
}
