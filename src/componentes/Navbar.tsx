"use client";

import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-5 text-black shadow-md">
      <ul className="flex gap-6">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tarefas">Tarefas</Link>
        </li>
        <li>
          <Link href="/tarefas/nova">Nova Tarefa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
