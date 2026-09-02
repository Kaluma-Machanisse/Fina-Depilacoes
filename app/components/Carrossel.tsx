"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Foto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

const PIXEIS_POR_FRAME = 0.6;

// Carrossel horizontal com scroll contínuo (tipo faixa a andar sozinha),
// não em saltos. A fita tem as fotos duplicadas uma vez a seguir às outras;
// ao passar a marca de metade, volta a meio sem se notar, porque o desenho
// se repete — por isso parece andar sempre para a frente, sem fim.
export default function Carrossel({ fotos }: { fotos: Foto[] }) {
  const trilhoRef = useRef<HTMLDivElement>(null);
  // Pausa temporária (rato/dedo em cima) vs. pausa deliberada (botão).
  const [emPausa, setEmPausa] = useState(false);
  const [pausadoPeloUtilizador, setPausadoPeloUtilizador] = useState(false);
  const paradoRef = useRef(false);
  paradoRef.current = emPausa || pausadoPeloUtilizador;

  const fita = [...fotos, ...fotos];

  useEffect(() => {
    if (fotos.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId: number;

    function passo() {
      const trilho = trilhoRef.current;
      if (trilho && !paradoRef.current) {
        trilho.scrollLeft += PIXEIS_POR_FRAME;
        const metade = trilho.scrollWidth / 2;
        if (trilho.scrollLeft >= metade) {
          trilho.scrollLeft -= metade;
        }
      }
      frameId = requestAnimationFrame(passo);
    }

    frameId = requestAnimationFrame(passo);
    return () => cancelAnimationFrame(frameId);
  }, [fotos.length]);

  return (
    <div
      className="relative mb-12 max-w-[675px] mx-auto"
      onMouseEnter={() => setEmPausa(true)}
      onMouseLeave={() => setEmPausa(false)}
      onTouchStart={() => setEmPausa(true)}
      onTouchEnd={() => setEmPausa(false)}
    >
      <div
        ref={trilhoRef}
        className="flex gap-4 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {fita.map((foto, i) => (
          <div
            key={`${foto.src}-${i}`}
            className="shrink-0 w-2/3 sm:w-2/5 rounded-2xl overflow-hidden shadow-sm"
          >
            <Image
              src={foto.src}
              alt={foto.alt}
              width={foto.width}
              height={foto.height}
              sizes="(min-width: 640px) 270px, 66vw"
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* Controlo de pausa — necessário para conteúdo que se move sozinho (WCAG 2.2.2). */}
      <button
        type="button"
        onClick={() => setPausadoPeloUtilizador((p) => !p)}
        aria-pressed={pausadoPeloUtilizador}
        aria-label={
          pausadoPeloUtilizador ? "Retomar a galeria" : "Pausar a galeria"
        }
        className="absolute bottom-2 right-2 rounded-full bg-background/90 text-primary shadow-sm p-2 hover:text-wine transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        {pausadoPeloUtilizador ? (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
          </svg>
        )}
      </button>
    </div>
  );
}
