import "./globals.css"; // se tiver estilos globais
import { ReactNode } from "react";
import { TarefaProvider } from "@/data/ContextTarefa";
import Navbar from "@/componentes/Navbar";

export const metadata = {
  title: "App de Tarefas",
  description: "Gerenciador de tarefas com React e Next.js",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <TarefaProvider>
          <Navbar />
          <main className="container mx-auto p-4">{children}</main>
        </TarefaProvider>
      </body>
    </html>
  );
}
