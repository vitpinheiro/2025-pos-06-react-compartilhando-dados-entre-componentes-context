"use client";

import React from "react";
import { useTarefa } from "@/data/ContextTarefa";

const Tarefas = () => {
  const { tarefas, toggleConcluido } = useTarefa();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Tarefas</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tarefas.map(({ id, title, completed }) => (
          <div
            key={id}
            className={`p-3 rounded shadow cursor-pointer ${
              completed ? "bg-green-400 text-green-900" : "bg-gray-300 text-gray-800"
            }`}
            onClick={() => toggleConcluido(id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggleConcluido(id);
            }}
          >
            <h3 className="font-bold text-lg">{title}</h3>
            <p>{completed ? "Concluída" : "Pendente"}</p>
          </div>
        ))}
        {tarefas.length === 0 && <p>Nenhuma tarefa cadastrada.</p>}
      </div>
    </div>
  );
};

export default Tarefas;
