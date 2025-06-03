"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useTarefa } from "@/data/ContextTarefa";

const NovaTarefa = () => {
  const [titulo, setTitulo] = useState("");
  const { adicionarTarefa } = useTarefa();
  const router = useRouter();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titulo.trim()) return;
    adicionarTarefa(titulo);
    router.push("/tarefas");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f9fafb] px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-6">
          Nova Tarefa
        </h1>
        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              placeholder="Título da tarefa"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-800"
              autoFocus
            />
          </div>
          <div className="flex space-x-4 justify-end">
            <button
              type="button"
              onClick={() => router.push("/tarefas")}
              className="px-5 py-2 rounded-lg text-sm text-gray-600 hover:text-gray-800 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white font-medium transition shadow-sm"
            >
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NovaTarefa;
