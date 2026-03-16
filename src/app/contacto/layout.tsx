import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto - Nicolas Muñoz Araya",
  description:
    "Contacta con Nicolas Muñoz Araya para proyectos freelance. Desarrollo backend con Laravel y frontend con Vue.",
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

