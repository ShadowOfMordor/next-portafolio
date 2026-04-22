"use client";

import type { ChangeEvent, FocusEvent, FormEvent, ReactNode } from "react";
import { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ContactChannelCard } from "@/components/ui/ContactChannelCard";
import { FormField } from "@/components/ui/FormField";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FieldName = keyof FormValues;

const INITIAL_VALUES: FormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeInput(input: string, maxLength: number) {
  return input.replace(/[<>]/g, "").slice(0, maxLength);
}

function validateField(field: FieldName, value: string): string {
  const trimmed = value.trim();

  if (field === "name") {
    if (trimmed.length < 2 || trimmed.length > 100) {
      return "El nombre debe tener entre 2 y 100 caracteres.";
    }
    return "";
  }

  if (field === "email") {
    if (!EMAIL_REGEX.test(trimmed)) {
      return "Por favor ingresa un email válido.";
    }
    return "";
  }

  if (field === "subject") {
    if (trimmed.length < 3 || trimmed.length > 200) {
      return "El asunto debe tener entre 3 y 200 caracteres.";
    }
    return "";
  }

  if (field === "message") {
    if (trimmed.length < 10 || trimmed.length > 2000) {
      return "El mensaje debe tener entre 10 y 2000 caracteres.";
    }
    return "";
  }

  return "";
}

const emailIcon = (
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
);

const whatsAppIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-slate-700 dark:text-slate-300"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

type Channel = {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  ariaLabel: string;
  target?: "_blank" | "_self";
  rel?: string;
};

const channels: Channel[] = [
  {
    href: "mailto:nicolasmo6888@gmail.com",
    label: "Email",
    value: "nicolasmo6888@gmail.com",
    icon: emailIcon,
    ariaLabel: "Abrir correo a nicolasmo6888@gmail.com",
  },
  {
    href: "https://wa.me/56921789145",
    label: "WhatsApp",
    value: "+56 9 2178 9145",
    icon: whatsAppIcon,
    ariaLabel: "Abrir conversación por WhatsApp",
    target: "_blank",
    rel: "noreferrer",
  },
];

export default function ContactoPage() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [formMessage, setFormMessage] = useState<{
    text: string;
    type: "idle" | "error" | "info";
  }>({ text: "", type: "idle" });

  const runValidation = (inputValues: FormValues): FormErrors => {
    return {
      name: validateField("name", inputValues.name),
      email: validateField("email", inputValues.email),
      subject: validateField("subject", inputValues.subject),
      message: validateField("message", inputValues.message),
    };
  };

  const hasAnyErrors = (errors: FormErrors) =>
    Object.values(errors).some(Boolean);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as FieldName;
    const maxLength = field === "message" ? 2000 : 1000;
    const sanitizedValue = sanitizeInput(event.target.value, maxLength);

    setValues((prev) => {
      const next = { ...prev, [field]: sanitizedValue };
      if (touched[field]) {
        setFieldErrors((prevErrors) => ({
          ...prevErrors,
          [field]: validateField(field, sanitizedValue),
        }));
      }
      return next;
    });
  };

  const handleBlur = (
    event: FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const field = event.target.name as FieldName;
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFieldErrors((prev) => ({
      ...prev,
      [field]: validateField(field, values[field]),
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = runValidation(values);
    setFieldErrors(errors);
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    if (hasAnyErrors(errors)) {
      setFormMessage({
        text: "Revisa los campos marcados antes de enviar.",
        type: "error",
      });
      return;
    }

    setFormMessage({
      text: "Enviando...",
      type: "info",
    });

    const encodedSubject = encodeURIComponent(values.subject.trim());
    const encodedMessage = encodeURIComponent(values.message.trim());
    const encodedName = encodeURIComponent(values.name.trim());
    const encodedEmail = encodeURIComponent(values.email.trim());

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
        <SiteHeader variant="innerLight" />

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
            <div className="animate-on-scroll flex flex-col gap-6 rounded-3xl border border-black/10 bg-white/70 p-8 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <FormField
                  id="name"
                  name="name"
                  label="Nombre *"
                  value={values.name}
                  placeholder="Tu nombre"
                  required
                  touched={touched.name}
                  error={fieldErrors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  id="email"
                  name="email"
                  label="Email *"
                  type="email"
                  value={values.email}
                  placeholder="tu@email.com"
                  required
                  touched={touched.email}
                  error={fieldErrors.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  id="subject"
                  name="subject"
                  label="Asunto *"
                  value={values.subject}
                  placeholder="¿En qué puedo ayudarte?"
                  required
                  touched={touched.subject}
                  error={fieldErrors.subject}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <FormField
                  id="message"
                  name="message"
                  label="Mensaje *"
                  as="textarea"
                  rows={6}
                  value={values.message}
                  placeholder="Cuéntame sobre tu proyecto..."
                  required
                  touched={touched.message}
                  error={fieldErrors.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
                >
                  Enviar mensaje
                </button>

                {formMessage.text ? (
                  <p
                    role={formMessage.type === "error" ? "alert" : "status"}
                    aria-live="polite"
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

            <div className="animate-on-scroll flex flex-col gap-6">
              <div className="flex flex-col gap-4 rounded-3xl border border-black/10 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5">
                <h2 className="font-space-grotesk text-xl font-semibold text-slate-900 dark:text-white">
                  Canales directos
                </h2>
                <div className="flex flex-col gap-4">
                  {channels.map((channel) => (
                    <ContactChannelCard
                      key={channel.href}
                      href={channel.href}
                      label={channel.label}
                      value={channel.value}
                      icon={channel.icon}
                      ariaLabel={channel.ariaLabel}
                      target={channel.target}
                      rel={channel.rel}
                    />
                  ))}
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

        <SiteFooter />
      </div>
    </div>
  );
}

