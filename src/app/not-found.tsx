import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-x-hidden bg-[radial-gradient(900px_600px_at_5%_-10%,_#FFE9B8_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_10%,_#C4E7FF_0%,_transparent_55%),linear-gradient(180deg,_#FFF7ED_0%,_#F6F3EE_45%,_#F5F0E9_100%)] px-6 text-center text-slate-900 dark:bg-[radial-gradient(900px_600px_at_10%_-10%,_#1E2A3B_0%,_transparent_60%),radial-gradient(900px_600px_at_90%_0%,_#3B1E1E_0%,_transparent_55%),linear-gradient(180deg,_#0A0C10_0%,_#0E1117_45%,_#0B0F14_100%)] dark:text-slate-100">
      <p className="text-xs font-semibold tracking-[0.3em] text-slate-500 uppercase dark:text-slate-400">
        Error 404
      </p>
      <h1 className="mt-3 font-space-grotesk text-3xl font-semibold sm:text-4xl">
        Página no encontrada
      </h1>
      <p className="mt-3 max-w-md text-sm text-slate-600 dark:text-slate-300">
        La ruta que buscas no existe o fue movida. Vuelve al inicio o revisa la URL.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-900 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 dark:focus-visible:outline-white"
      >
        Volver al inicio
      </Link>
    </div>
  );
}
