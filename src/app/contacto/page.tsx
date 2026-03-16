"use client";

import type { FormEvent } from "react";
import { useState } from "react";

export default function ContactoPage() {
  const [formMessage, setFormMessage] = useState<{
    text: string;
    type: "idle" | "error" | "info";
  }>({ text: "", type: "idle" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const sanitize = (value: FormDataEntryValue | null) =>
      String(value ?? "")
        .trim()
        .replace(/[<>]/g, "")
        .slice(0, 1000);

    const name = sanitize(formData.get("name"));
    const email = sanitize(formData.get("email"));
    const subject = sanitize(formData.get("subject"));
    const message = sanitize(formData.get("message"));

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2 || name.length > 100) {
      setFormMessage({
        text: "El nombre debe tener entre 2 y 100 caracteres.",
        type: "error",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setFormMessage({
        text: "Por favor ingresa un email válido.",
        type: "error",
      });
      return;
    }

    if (subject.length < 3 || subject.length > 200) {
      setFormMessage({
        text: "El asunto debe tener entre 3 y 200 caracteres.",
        type: "error",
      });
      return;
    }

    if (message.length < 10 || message.length > 2000) {
      setFormMessage({
        text: "El mensaje debe tener entre 10 y 2000 caracteres.",
        type: "error",
      });
      return;
    }

    setFormMessage({
      text: "Enviando...",
      type: "info",
    });

    const encodedSubject = encodeURIComponent(subject);
    const encodedMessage = encodeURIComponent(message);
    const encodedName = encodeURIComponent(name);
    const encodedEmail = encodeURIComponent(email);

    const mailtoLink = `mailto:nicolasmo6888@gmail.com?subject=${encodedSubject}&body=De: ${encodedName} (${encodedEmail})%0D%0A%0D%0A${encodedMessage}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
      setFormMessage({
        text: "Redirigiendo a tu cliente de email...",
        type: "info",
      });
    }, 500);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(900px_600px_at_5%_-10%,_#FFE9B8_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_10%,_#C4E7FF_0%,_transparent_55%),linear-gradient(180deg,_#FFF7ED_0%,_#F6F3EE_45%,_#F5F0E9_100%)] text-slate-900 dark:bg-[radial-gradient(900px_600px_at_10%_-10%,_#1E2A3B_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_0%,_#3B1E1E_0%,_transparent_55%),linear-gradient(180deg,_#0A0C10_0%,_#0E1117_45%,_#0B0F14_100%)] dark:text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 right-0 h-64 w-64 translate-x-1/3 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-500/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 -translate-x-1/3 rounded-full bg-sky-200/50 blur-[120px] dark:bg-sky-500/20"
      />

      <div className="relative mx-auto flex w-full max-w-4xl flex-col gap-12 px-6 py-10 lg:px-10 lg:py-16">
        <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/5 bg-white/50 px-4 py-3 text-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5 sm:gap-4 sm:px-6 sm:py-4">
          <a href="/" className="flex items-center gap-2 sm:gap-3">
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
              href="/"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-600 uppercase transition active:scale-95 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white sm:px-3 sm:text-xs"
            >
              Inicio
            </a>
            <a
              href="/#projects"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-600 uppercase transition active:scale-95 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white sm:px-3 sm:text-xs"
            >
              Proyectos
            </a>
            <a
              href="/contacto"
              className="rounded-full border border-transparent px-2.5 py-1 text-[10px] font-medium tracking-[0.18em] text-slate-600 uppercase transition active:scale-95 hover:border-black/10 hover:bg-white/70 hover:text-slate-900 dark:text-slate-300 dark:hover:border-white/10 dark:hover:bg-white/10 dark:hover:text-white sm:px-3 sm:text-xs"
            >
              Contacto
            </a>
          </nav>
        </header>

        <main className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <span className="text-xs tracking-[0.3em] text-slate-500 uppercase">
              Contacto
            </span>
            <h1 className="font-space-grotesk text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
              Conversemos tu proyecto
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Completa el formulario o usa alguno de los canales directos. Respondo
              en 24-48 horas.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6 rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5 animate-on-scroll">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/20"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/20"
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Asunto *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/20"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-semibold text-slate-700 dark:text-slate-300"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="rounded-xl border border-black/10 bg-white/80 px-4 py-3 text-sm focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/20 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white/30 dark:focus:ring-white/20"
                    placeholder="Cuéntame sobre tu proyecto..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Enviar mensaje
                </button>
                {formMessage.text ? (
                  <p
                    className={`text-sm ${
                      formMessage.type === "error"
                        ? "text-red-600 dark:text-red-400"
                        : "text-blue-600 dark:text-blue-400"
                    }`}
                  >
                    {formMessage.text}
                  </p>
                ) : null}
              </form>
            </div>

            <div className="flex flex-col gap-6 animate-on-scroll">
              <div className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h2 className="font-space-grotesk text-xl font-semibold text-slate-900 dark:text-white">
                  Canales directos
                </h2>
                <div className="flex flex-col gap-4">
                  <a
                    href="mailto:nicolasmo6888@gmail.com"
                    className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-slate-700 dark:text-slate-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                        Email
                      </span>
                      <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white">
                        nicolasmo6888@gmail.com
                      </span>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/56921789145"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-black/10 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-black/20 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-slate-700 dark:text-slate-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs tracking-[0.2em] text-slate-500 uppercase">
                        WhatsApp
                      </span>
                      <span className="font-space-grotesk text-sm font-semibold text-slate-900 dark:text-white">
                        +56 9 2178 9145
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h2 className="font-space-grotesk text-xl font-semibold text-slate-900 dark:text-white">
                  Tiempo de respuesta
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  Respondo todos los mensajes en un plazo de 24 a 48 horas hábiles.
                  Para proyectos urgentes, considera usar WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </main>

        <footer className="flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-slate-500 dark:border-white/10 dark:text-slate-400">
          <span>Disponible para proyectos freelance y personales.</span>
          <span>Construido con Laravel, Vue y Tailwind.</span>
        </footer>
      </div>
    </div>
  );
}

