"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-50px)] bg-blue-900 text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-50 w-60 mb-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <h1 className="text-5xl font-extrabold mb-4 drop-shadow-lg">
        Gerenciador de Tarefas
      </h1>

      <p className="text-lg max-w-xl text-center mb-8">
        Organize suas tarefas de forma simples e eficiente. Use o menu ao lado para navegar e gerenciar suas atividades.
      </p>

      <button
        className="bg-green-400 text-green-900 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-green-300 transition"
        onClick={() => router.push("/tarefas/nova")}
      >
        Começar
      </button>
    </div>
  );
}
