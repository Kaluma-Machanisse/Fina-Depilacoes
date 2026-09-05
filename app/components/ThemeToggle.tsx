"use client";

import { useEffect, useState } from "react";
import { IconSol, IconLua } from "./icons";

type Tema = "light" | "dark";

// Tema efectivo agora: escolha manual gravada (data-theme) ou, na
// ausência dela, claro — o site não segue a preferência do sistema,
// só muda por acção do utilizador neste botão.
function temaActual(): Tema {
  const escolhido = document.documentElement.getAttribute("data-theme");
  return escolhido === "dark" ? "dark" : "light";
}

// Botão para alternar entre claro e escuro. Por omissão (sem clicar) o
// site fica sempre em tema claro — ver globals.css e o script anti-flash
// em layout.tsx.
export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema | null>(null);

  useEffect(() => {
    setTema(temaActual());
  }, []);

  function alternar() {
    const novo: Tema = temaActual() === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", novo);
    localStorage.setItem("tema", novo);
    setTema(novo);
  }

  // Evita mismatch de hidratação: só decide o ícone depois de saber, no
  // browser, se há escolha gravada ou qual é a preferência do sistema.
  if (tema === null) {
    return <span className="w-9 h-9 inline-block shrink-0" aria-hidden="true" />;
  }

  return (
    <button
      type="button"
      onClick={alternar}
      aria-label={
        tema === "dark" ? "Mudar para tema claro" : "Mudar para tema escuro"
      }
      className="w-9 h-9 shrink-0 flex items-center justify-center rounded-full text-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {tema === "dark" ? (
        <IconSol className="w-5 h-5" />
      ) : (
        <IconLua className="w-5 h-5" />
      )}
    </button>
  );
}
