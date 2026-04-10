"use client";

type HeaderVariant = "home" | "innerLight" | "innerDark";

type SiteHeaderProps = {
  variant: HeaderVariant;
  /** Solo para `variant="home"`: id de sección activa al hacer scroll */
  activeSection?: string | null;
};

const shellLight =
  "sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white/50 px-4 py-3 text-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:gap-4 sm:px-6 sm:py-4";

const shellDark =
  "sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur-md sm:gap-4 sm:px-6 sm:py-4";

const navLightInactive =
  "rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-600 uppercase transition active:scale-95 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white sm:px-3 sm:text-xs";

const navDarkInactive =
  "rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-300 uppercase transition active:scale-95 hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3 sm:text-xs";

function homeNavLink(
  sectionId: string,
  label: string,
  activeSection: string | null | undefined,
) {
  const active =
    activeSection === sectionId
      ? "nav-active border-black/10 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
      : "border-transparent text-slate-600 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white";

  return (
    <a
      href={`#${sectionId}`}
      className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition active:scale-95 sm:px-3 sm:text-xs ${active}`}
    >
      {label}
    </a>
  );
}

export function SiteHeader({ variant, activeSection }: SiteHeaderProps) {
  const isHome = variant === "home";
  const isDark = variant === "innerDark";

  return (
    <header className={isDark ? shellDark : shellLight}>
      <a
        href={isHome ? "#top" : "/"}
        className="flex items-center gap-2 sm:gap-3"
        rel={isHome ? undefined : "noopener"}
      >
        <div
          className={
            isDark
              ? "flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-sm backdrop-blur sm:h-11 sm:w-11 sm:text-sm"
              : "flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 sm:h-11 sm:w-11 sm:text-sm"
          }
        >
          NM
        </div>
        <div className={isDark ? "flex min-w-0 flex-col" : "flex flex-col"}>
          <span
            className={
              isDark
                ? "font-space-grotesk text-sm font-semibold text-white sm:text-base"
                : "font-space-grotesk text-sm font-semibold sm:text-base"
            }
          >
            Nicolas Muñoz Araya
          </span>
          <span
            className={
              isDark
                ? "hidden text-xs text-slate-400 sm:block"
                : "hidden text-xs text-slate-600 dark:text-slate-400 sm:block"
            }
          >
            {isDark
              ? "Ingeniero en Informática, backend con Laravel y frontend con Vue"
              : "Backend + Vue · Freelance"}
          </span>
        </div>
      </a>
      <nav
        className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4"
        aria-label="Navegación principal"
      >
        {isHome ? (
          <>
            {homeNavLink("services", "Servicios", activeSection)}
            {homeNavLink("projects", "Proyectos", activeSection)}
            {homeNavLink("about", "Sobre mi", activeSection)}
            {homeNavLink("contact", "Contacto", activeSection)}
          </>
        ) : isDark ? (
          <>
            <a href="/" rel="noopener" className={navDarkInactive}>
              Inicio
            </a>
            <a href="/#projects" rel="noopener" className={navDarkInactive}>
              Proyectos
            </a>
            <a href="/contacto" rel="noopener" className={navDarkInactive}>
              Contacto
            </a>
          </>
        ) : (
          <>
            <a href="/" className={navLightInactive}>
              Inicio
            </a>
            <a href="/#projects" className={navLightInactive}>
              Proyectos
            </a>
            <a href="/contacto" className={navLightInactive}>
              Contacto
            </a>
          </>
        )}
      </nav>
    </header>
  );
}
