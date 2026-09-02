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
  const [emPausa, setEmPausa] = useState(false);
  const emPausaRef = useRef(false);
  emPausaRef.current = emPausa;

  const fita = [...fotos, ...fotos];

  useEffect(() => {
    if (fotos.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId: number;

    function passo() {
      const trilho = trilhoRef.current;
      if (trilho && !emPausaRef.current) {
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
              className="w-full h-auto"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
