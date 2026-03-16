"use client";

export default function ProyectoDetallePage() {
  return (
    <div className="dark relative min-h-screen bg-[radial-gradient(900px_600px_at_10%_-10%,_#1E2A3B_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_0%,_#3B1E1E_0%,_transparent_55%),linear-gradient(180deg,_#0A0C10_0%,_#0E1117_45%,_#0B0F14_100%)] text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -top-20 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-amber-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-sky-500/20 blur-[120px]"
      />

      <div className="relative mx-auto flex w-full max-w-5xl flex-col gap-12 px-4 py-10 sm:px-6 lg:px-10 lg:py-16">
        <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm backdrop-blur-md sm:gap-4 sm:px-6 sm:py-4">
          <a href="/" className="flex items-center gap-2 sm:gap-3" rel="noopener">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/10 text-xs font-semibold tracking-[0.2em] text-white uppercase shadow-sm backdrop-blur sm:h-11 sm:w-11 sm:text-sm">
              NM
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="font-space-grotesk text-sm font-semibold text-white sm:text-base">
                Nicolas Muñoz Araya
              </span>
              <span className="hidden text-xs text-slate-400 sm:block">
                Ingeniero en Informática, backend con Laravel y frontend con Vue
              </span>
            </div>
          </a>
          <nav
            className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4"
            aria-label="Navegación principal"
          >
            <a
              href="/"
              rel="noopener"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-300 uppercase transition active:scale-95 hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3 sm:text-xs"
            >
              Inicio
            </a>
            <a
              href="/#projects"
              rel="noopener"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-300 uppercase transition active:scale-95 hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3 sm:text-xs"
            >
              Proyectos
            </a>
            <a
              href="/contacto"
              rel="noopener"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-300 uppercase transition active:scale-95 hover:border-white/10 hover:bg-white/10 hover:text-white sm:px-3 sm:text-xs"
            >
              Contacto
            </a>
          </nav>
        </header>

        <main className="flex flex-col gap-12">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-sm text-slate-400"
          >
            <a href="/" rel="noopener" className="hover:text-white">
              Inicio
            </a>
            <span>/</span>
            <a href="/#projects" rel="noopener" className="hover:text-white">
              Proyectos
            </a>
            <span>/</span>
            <span className="text-white">Gestor de Clientes</span>
          </nav>

          <div className="flex flex-col gap-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex flex-col gap-4">
                <span className="w-fit rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-slate-200 uppercase">
                  Demo en construccion
                </span>
                <h1 className="font-space-grotesk text-4xl font-semibold text-white sm:text-5xl">
                  Gestor de clientes y facturación
                </h1>
                <p className="max-w-2xl text-lg text-slate-300">
                  Sistema completo para organizar clientes, emitir facturas y
                  controlar estados de pago. Diseñado para pequeñas y medianas
                  empresas que necesitan una solución clara y escalable.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="badge text-slate-300">Laravel</span>
              <span className="badge text-slate-300">Vue</span>
              <span className="badge text-slate-300">Tailwind</span>
              <span className="badge text-slate-300">MySQL</span>
            </div>
          </div>

          <section className="flex flex-col gap-6 animate-on-scroll">
            <h2 className="font-space-grotesk text-2xl font-semibold text-white">
              Stack Técnico
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="card flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-900/30">
                    <svg
                      className="h-6 w-6 text-red-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-white">
                    Backend
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    Laravel 12.x
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    PHP 8.3+
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
                    RESTful API
                  </li>
                </ul>
              </div>

              <div className="card flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-900/30">
                    <svg
                      className="h-6 w-6 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-white">
                    Frontend
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Vue.js 3
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Composition API
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Pinia (Store)
                  </li>
                </ul>
              </div>

              <div className="card flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-900/30">
                    <svg
                      className="h-6 w-6 text-sky-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-white">
                    Estilos
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Responsive
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-sky-500" />
                    Dark mode
                  </li>
                </ul>
              </div>

              <div className="card flex flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-900/30">
                    <svg
                      className="h-6 w-6 text-blue-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <h3 className="font-space-grotesk font-semibold text-white">
                    Base de Datos
                  </h3>
                </div>
                <ul className="space-y-1.5 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    MySQL 8.0
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Migrations
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                    Seeders
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-6 animate-on-scroll">
            <h2 className="font-space-grotesk text-2xl font-semibold text-white">
              Características Principales
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <article className="card flex flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-900/30">
                    <svg
                      className="h-6 w-6 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white">
                      CRUD completo con historial
                    </h3>
                    <p className="text-sm text-slate-300">
                      Gestión completa de clientes con creación, edición,
                      eliminación y visualización. Sistema de historial que registra
                      todos los cambios importantes para auditoría.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card flex flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-rose-900/30">
                    <svg
                      className="h-6 w-6 text-rose-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white">
                      Exportación PDF/CSV
                    </h3>
                    <p className="text-sm text-slate-300">
                      Generación de facturas en PDF con plantillas personalizables.
                      Exportación de datos en CSV para análisis externos o
                      integraciones con otros sistemas.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card flex flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-900/30">
                    <svg
                      className="h-6 w-6 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white">
                      Control de estados
                    </h3>
                    <p className="text-sm text-slate-300">
                      Seguimiento detallado del estado de cada factura y pago.
                      Estados configurables que se adaptan al flujo de trabajo de
                      cada negocio.
                    </p>
                  </div>
                </div>
              </article>

              <article className="card flex flex-col gap-4 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-900/30">
                    <svg
                      className="h-6 w-6 text-purple-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-space-grotesk text-lg font-semibold text-white">
                      Roles y permisos
                    </h3>
                    <p className="text-sm text-slate-300">
                      Sistema de roles básico que diferencia entre equipo operativo
                      y administrador. Permisos granulares para controlar el acceso a
                      funcionalidades sensibles.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="card animate-on-scroll p-8">
            <h2 className="mb-6 font-space-grotesk text-2xl font-semibold text-white">
              Detalles Técnicos
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    Autenticación segura
                  </p>
                  <p className="text-xs text-slate-400">Laravel Sanctum + JWT</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">API RESTful</p>
                  <p className="text-xs text-slate-400">Endpoints documentados</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    Validación robusta
                  </p>
                  <p className="text-xs text-slate-400">
                    Form requests + Vuelidate
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    Testing incluido
                  </p>
                  <p className="text-xs text-slate-400">PHPUnit + Vitest</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    Optimizado para SEO
                  </p>
                  <p className="text-xs text-slate-400">Meta tags + sitemap</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <svg
                  className="mt-0.5 h-5 w-5 shrink-0 text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <div>
                  <p className="text-sm font-medium text-white">
                    Responsive design
                  </p>
                  <p className="text-xs text-slate-400">Mobile-first approach</p>
                </div>
              </div>
            </div>
          </section>

          <aside className="card flex flex-col gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm animate-on-scroll">
            <div className="flex flex-col gap-4">
              <h2 className="font-space-grotesk text-2xl font-semibold text-white">
                ¿Te interesa este proyecto?
              </h2>
              <p className="text-slate-300">
                Este es un demo en construcción. Si necesitas una solución similar o
                quieres adaptar este sistema a tus necesidades, conversemos.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contacto"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:bg-slate-100"
              >
                Hablemos del proyecto
              </a>
              <a
                href="/#projects"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                Ver otros proyectos
              </a>
            </div>
          </aside>
        </main>

        <footer className="flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-slate-400">
          <span>Disponible para proyectos freelance y personales.</span>
          <span>Construido con Laravel, Vue y Tailwind.</span>
        </footer>
      </div>
    </div>
  );
}

