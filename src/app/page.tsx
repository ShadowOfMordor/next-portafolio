"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    document.documentElement.classList.add("js-loaded");

    const onScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = [
        "services",
        "projects",
        "about",
        "contact",
      ] as const;

      let current: string | null = null;

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    const elements =
      document.querySelectorAll<HTMLElement>(".animate-on-scroll");

    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-in");
              obs.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      elements.forEach((el) => observer.observe(el));

      return () => {
        window.removeEventListener("scroll", onScroll);
        observer.disconnect();
      };
    }

    elements.forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(900px_600px_at_5%_-10%,_#FFE9B8_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_10%,_#C4E7FF_0%,_transparent_55%),linear-gradient(180deg,_#FFF7ED_0%,_#F6F3EE_45%,_#F5F0E9_100%)] text-slate-900 dark:bg-[radial-gradient(900px_600px_at_10%_-10%,_#1E2A3B_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_0%,_#3B1E1E_0%,_transparent_55%),linear-gradient(180deg,_#0A0C10_0%,_#0E1117_45%,_#0B0F14_100%)] dark:text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-32 w-32 translate-x-1/3 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20 sm:h-48 sm:w-48 md:h-64 md:w-64"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 -translate-x-1/3 rounded-full bg-sky-200/50 blur-[120px] dark:bg-sky-500/20 sm:h-56 sm:w-56 md:h-72 md:w-72"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-4 py-6 sm:gap-16 sm:px-6 sm:py-8 md:gap-20 md:px-8 md:py-10 lg:px-10 lg:py-16">
        <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white/50 px-4 py-3 text-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:gap-4 sm:px-6 sm:py-4">
          <a href="#top" className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-black/10 bg-white/70 text-xs font-semibold tracking-[0.2em] uppercase shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 sm:h-11 sm:w-11 sm:text-sm">
              NM
            </div>
            <div className="flex flex-col">
              <span className="font-space-grotesk text-sm font-semibold sm:text-base">
                Nicolas Muñoz Araya
              </span>
              <span className="hidden text-xs text-slate-600 dark:text-slate-400 sm:block">
                Backend + Vue · Freelance
              </span>
            </div>
          </a>
          <nav
            className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4"
            aria-label="Navegación principal"
          >
            <a
              href="#services"
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition active:scale-95 sm:px-3 sm:text-xs ${
                activeSection === "services"
                  ? "nav-active border-black/10 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  : "border-transparent text-slate-600 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              Servicios
            </a>
            <a
              href="#projects"
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition active:scale-95 sm:px-3 sm:text-xs ${
                activeSection === "projects"
                  ? "nav-active border-black/10 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  : "border-transparent text-slate-600 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              Proyectos
            </a>
            <a
              href="#about"
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition active:scale-95 sm:px-3 sm:text-xs ${
                activeSection === "about"
                  ? "nav-active border-black/10 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  : "border-transparent text-slate-600 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              Sobre mi
            </a>
            <a
              href="#contact"
              className={`rounded-full border px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] uppercase transition active:scale-95 sm:px-3 sm:text-xs ${
                activeSection === "contact"
                  ? "nav-active border-black/10 bg-white/70 text-slate-900 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  : "border-transparent text-slate-600 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              Contacto
            </a>
          </nav>
        </header>

        <section
          id="top"
          className="grid items-start gap-8 sm:gap-10 md:gap-12 lg:grid-cols-[1.15fr_0.85fr]"
        >
          <div className="flex flex-col gap-4 sm:gap-5 md:gap-6">
            <span className="w-fit rounded-full border border-amber-300/60 bg-amber-100/80 px-3 py-1 text-[10px] font-semibold tracking-[0.25em] text-amber-900/80 uppercase dark:border-amber-500/40 dark:bg-amber-500/10 dark:text-amber-200 sm:px-4 sm:text-xs sm:tracking-[0.3em]">
              Laravel · Vue · MySQL
            </span>
            <div className="flex flex-col gap-3 sm:gap-4">
              <h1 className="font-space-grotesk text-3xl leading-tight font-semibold text-slate-900 dark:text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Ingeniero en Informatica, backend con Laravel y frontend con Vue.
              </h1>
              <p className="font-space-grotesk text-base text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
                Ayudo a negocios a construir APIs, paneles y flujos de datos claros,
                con foco en mantenibilidad, rendimiento y entrega ordenada.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5 text-sm sm:gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-slate-900/20 transition active:scale-95 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 sm:px-6 sm:py-3 sm:text-sm"
              >
                Hablemos
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-xs font-semibold text-slate-900 shadow-sm transition active:scale-95 hover:-translate-y-0.5 hover:border-black/20 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 sm:px-6 sm:py-3 sm:text-sm"
              >
                Ver proyectos
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                Laravel
              </span>
              <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                Vue
              </span>
              <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                Tailwind
              </span>
              <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                MySQL
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.5)] backdrop-blur dark:border-white/10 dark:bg-white/5 sm:gap-5 sm:rounded-3xl sm:p-5 md:gap-6 md:p-6">
            <div className="flex items-start justify-between gap-4 sm:gap-6">
              <div className="flex flex-col gap-1.5 sm:gap-2">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  Disponible
                </span>
                <p className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white sm:text-xl md:text-2xl">
                  Proyectos freelance y personales
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/40 bg-emerald-200/40 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-emerald-900/80 uppercase dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Activo
              </span>
            </div>
            <div className="grid gap-3 text-sm sm:gap-4">
              <div className="rounded-2xl bg-white/80 p-4 dark:bg-white/5">
                <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                  Enfoque
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Backend robusto, front en mejora constante y comunicacion clara en
                  cada entrega.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 dark:bg-white/5">
                <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                  Tiempo de respuesta
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  24 a 48 horas para coordinar y definir alcance.
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 p-4 dark:bg-white/5">
                <p className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                  Ubicacion
                </p>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Chile · Remoto para Latam
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="services"
          className="flex flex-col gap-6 sm:gap-7 md:gap-8 animate-on-scroll"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
              Servicios
            </span>
            <h2 className="font-space-grotesk text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Lo que puedo construir contigo
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Soluciones enfocadas en datos, procesos y rendimiento, listas para
              crecer sin dolor tecnico.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col gap-2.5 rounded-xl border border-black/10 bg-white/70 p-4 shadow-sm transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-3 sm:rounded-2xl sm:p-5 md:p-6">
              <h3 className="font-space-grotesk text-base font-semibold text-slate-900 dark:text-white sm:text-lg">
                APIs y backends en Laravel
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                Estructuras limpias, autenticacion, roles y buenas practicas para
                escalar sin dolor.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
              <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white">
                Paneles y dashboards
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Interfaces claras para administrar datos, con filtros, estados y
                visuales utiles.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
              <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white">
                Integraciones y automatizacion
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Conexiones con servicios externos, jobs en cola y procesos que ahorran
                tiempo.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20">
              <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white">
                Mantenimiento y mejoras
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Refactors, optimizacion y continuidad tecnica para sistemas que ya
                estan en produccion.
              </p>
            </div>
          </div>
        </section>

        <section
          id="projects"
          className="flex flex-col gap-6 sm:gap-7 md:gap-8 animate-on-scroll"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
              Proyectos
            </span>
            <h2 className="font-space-grotesk text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Demos con foco en backend y UI clara
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Dos sistemas listos para construir, mas uno en roadmap para seguir
              fortaleciendo el frontend.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5 md:gap-6 lg:grid-cols-2">
            <a
              href="/proyecto-detalle"
              className="flex h-full flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-4 text-left shadow-sm transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-3xl sm:p-5 md:p-6"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                    Gestor de clientes y facturacion
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    Sistema para organizar clientes, emitir facturas y controlar
                    estados de pago.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-slate-200/70 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/10 dark:text-slate-200 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                  Demo en construccion
                </span>
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 sm:gap-2 sm:text-sm">
                <li>CRUD completo con historial y estados</li>
                <li>Exportacion PDF/CSV y plantillas</li>
                <li>Roles basicos para equipo y administrador</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Laravel
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Vue
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Tailwind
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  MySQL
                </span>
              </div>
            </a>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-3xl sm:p-5 md:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                    Panel de pedidos y logistica
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    Panel para visualizar pedidos, asignar estados y medir tiempos por
                    etapa.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-slate-200/70 bg-slate-100 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/10 dark:text-slate-200 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                  Demo en construccion
                </span>
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 sm:gap-2 sm:text-sm">
                <li>Listados con filtros y busqueda rapida</li>
                <li>Timeline por pedido con cambios auditables</li>
                <li>Dashboard con metricas clave</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Laravel
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Vue
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Tailwind
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  MySQL
                </span>
              </div>
            </div>
            <div className="flex h-full flex-col gap-3 rounded-2xl border border-dashed border-slate-300/70 bg-white/40 p-4 text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200 sm:gap-4 sm:rounded-3xl sm:p-5 md:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="flex flex-col gap-1.5 sm:gap-2">
                  <h3 className="font-space-grotesk text-lg font-semibold text-slate-900 dark:text-white sm:text-xl">
                    Mini SaaS para gestion de servicios
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                    Landing, registro, onboarding y panel basico para practicar UX y
                    conversion.
                  </p>
                </div>
                <span className="w-fit rounded-full border border-amber-300/60 bg-amber-100/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-amber-800 uppercase dark:border-amber-400/40 dark:bg-amber-400/10 dark:text-amber-200 sm:px-3 sm:text-xs sm:tracking-[0.18em]">
                  En el radar
                </span>
              </div>
              <ul className="flex flex-col gap-1.5 text-xs text-slate-600 dark:text-slate-300 sm:gap-2 sm:text-sm">
                <li>Flujo de registro claro</li>
                <li>Panel simple con estado del servicio</li>
                <li>Base lista para pagos a futuro</li>
              </ul>
              <div className="mt-auto flex flex-wrap gap-1.5 sm:gap-2">
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Laravel
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Vue
                </span>
                <span className="rounded-full border border-black/10 bg-white/60 px-2.5 py-1 text-[10px] font-semibold tracking-[0.14em] text-slate-500 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-[11px] sm:tracking-[0.16em]">
                  Tailwind
                </span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] animate-on-scroll"
        >
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
              Sobre mi
            </span>
            <h2 className="font-space-grotesk text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Backend claro, frontend en evolucion
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Soy ingeniero en informatica con foco en backend y estructuras limpias.
              Trabajo con Laravel, Vue, Tailwind y MySQL para entregar soluciones
              estables, faciles de mantener y listas para crecer.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Este portafolio esta pensado para mostrar el progreso en frontend
              mientras mantengo una base tecnica solida.
            </p>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-black/10 bg-white/70 p-4 dark:border-white/10 dark:bg-white/5 sm:gap-5 sm:rounded-3xl sm:p-5 md:gap-6 md:p-6">
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
              Proceso
            </span>
            <div className="grid gap-3 sm:gap-4">
              <div className="flex flex-col gap-1.5 rounded-xl bg-white/80 p-3 dark:bg-white/5 sm:gap-2 sm:rounded-2xl sm:p-4">
                <p className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Diagnostico
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  Reviso objetivos, datos y necesidades para definir un plan realista.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl bg-white/80 p-3 dark:bg-white/5 sm:gap-2 sm:rounded-2xl sm:p-4">
                <p className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Construccion
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  Desarrollo iterativo con entregas claras y codigo mantenible.
                </p>
              </div>
              <div className="flex flex-col gap-1.5 rounded-xl bg-white/80 p-3 dark:bg-white/5 sm:gap-2 sm:rounded-2xl sm:p-4">
                <p className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Entrega y soporte
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 sm:text-sm">
                  Documentacion basica, handoff y mejoras posteriores si hace falta.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-6 sm:gap-7 md:gap-8 animate-on-scroll"
        >
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
              Contacto
            </span>
            <h2 className="font-space-grotesk text-2xl font-semibold text-slate-900 dark:text-white sm:text-3xl">
              Conversemos tu idea
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 sm:text-base">
              Si tienes un proyecto o necesitas apoyo tecnico, escribe y coordinamos
              un siguiente paso.
            </p>
          </div>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
            <a
              href="/contacto"
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  Formulario
                </span>
                <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Enviar mensaje
                </span>
              </div>
              <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Ir
              </span>
            </a>
            <a
              href="mailto:nicolasmo6888@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  Email
                </span>
                <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  nicolasmo6888@gmail.com
                </span>
              </div>
              <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Abrir
              </span>
            </a>
            <a
              href="https://wa.me/56921789145"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  WhatsApp
                </span>
                <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  +56 9 2178 9145
                </span>
              </div>
              <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Abrir
              </span>
            </a>
            <a
              href="https://www.linkedin.com/in/nicol%C3%A1s-mu%C3%B1oz-araya-b2b6781aa/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  LinkedIn
                </span>
                <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Perfil profesional
                </span>
              </div>
              <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Abrir
              </span>
            </a>
            <a
              href="https://github.com/ShadowOfMordor/my-dev"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between gap-3 rounded-xl border border-black/10 bg-white/70 p-4 text-left transition active:scale-[0.98] hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <div className="flex flex-col gap-0.5 sm:gap-1">
                <span className="text-[10px] tracking-[0.25em] text-slate-500 uppercase sm:text-xs sm:tracking-[0.3em]">
                  GitHub
                </span>
                <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white sm:text-base">
                  Repositorio actual
                </span>
              </div>
              <span className="rounded-full border border-black/10 bg-white/70 px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] text-slate-600 uppercase dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:px-3 sm:text-xs sm:tracking-[0.2em]">
                Abrir
              </span>
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span>Disponible para proyectos freelance y personales.</span>
          <span>Construido con Laravel, Vue y Tailwind.</span>
        </footer>
      </div>

      <button
        type="button"
        aria-label="Volver arriba"
        title="Volver arriba"
        className={`back-to-top ${showBackToTop ? "visible" : ""}`}
        onClick={handleBackToTop}
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}
