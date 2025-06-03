"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { Tarefa } from "@/types/tarefa";

interface TarefaContextType {
  tarefas: Tarefa[];
  adicionarTarefa: (title: string) => void;
  toggleConcluido: (id: number) => void;
}

const TarefaContext = createContext<TarefaContextType | undefined>(undefined);

export const useTarefa = () => {
  const context = useContext(TarefaContext);
  if (!context) {
    throw new Error("useTarefa deve ser usado dentro de TarefaProvider");
  }
  return context;
};

export const TarefaProvider = ({ children }: { children: ReactNode }) => {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);

  // Carregar do localStorage
  useEffect(() => {
    const tarefasSalvas = localStorage.getItem("tarefas");
    if (tarefasSalvas) {
      setTarefas(JSON.parse(tarefasSalvas));
    } else {
      // Se quiser, coloca dados padrão aqui
      setTarefas([]);
    }
  }, []);

  // Salvar no localStorage
  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarTarefa = (title: string) => {
    const nova: Tarefa = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTarefas((prev) => [nova, ...prev]);
  };

  const toggleConcluido = (id: number) => {
    setTarefas((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  return (
    <TarefaContext.Provider value={{ tarefas, adicionarTarefa, toggleConcluido }}>
      {children}
    </TarefaContext.Provider>
  );
};
