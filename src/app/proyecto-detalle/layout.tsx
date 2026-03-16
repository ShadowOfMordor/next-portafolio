import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gestor de Clientes y Facturación - Nicolas Muñoz Araya | Proyecto Laravel + Vue",
  description:
    "Sistema completo de gestión de clientes y facturación desarrollado con Laravel y Vue. CRUD completo, exportación PDF/CSV, control de estados y sistema de roles.",
};

export default function ProyectoDetalleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

