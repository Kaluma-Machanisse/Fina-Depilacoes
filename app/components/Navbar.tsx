"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gerarLinkWhatsApp } from "../lib/whatsapp";

// "Sobre" fica de fora do menu principal (link directo) — a secção continua
// acessível a fazer scroll, e passa a ter um link próprio no Footer.
const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#cursos", label: "Cursos" },
  { href: "#contactos", label: "Contactos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // #1 — destaca no menu a secção que está a ser vista no momento.
  useEffect(() => {
    const secoes = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    secoes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // #2 — fecha o menu mobile ao tocar fora dele ou ao fazer scroll.
  useEffect(() => {
    if (!open) return;

    function aoClicarFora(e: MouseEvent) {
      const alvo = e.target as Node;
      if (navRef.current?.contains(alvo) || buttonRef.current?.contains(alvo)) {
        return;
      }
      setOpen(false);
    }

    function aoFazerScroll() {
      setOpen(false);
    }

    document.addEventListener("mousedown", aoClicarFora);
    window.addEventListener("scroll", aoFazerScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      window.removeEventListener("scroll", aoFazerScroll);
    };
  }, [open]);

  const linkClasses = (href: string) =>
    `text-sm transition-colors ${
      activeHref === href
        ? "text-primary font-medium"
        : "text-foreground hover:text-primary"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-primary-light">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center shrink-0">
          <Image
            src="/images/logo-fina-depilacoes.webp"
            alt="Fina Depilações"
            width={900}
            height={523}
            priority
            className="h-11 w-auto"
          />
        </a>

        {/* Navegação de desktop: links em ordem lógica, CTA sempre no fim. */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.href} href={link.href} className={linkClasses(link.href)}>
              {link.label}
            </a>
          ))}
          {/* #3 — o botão faz mesmo o que promete: abre o WhatsApp para marcar. */}
          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-wine transition-colors"
          >
            Marcar agora
          </a>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Navegação de telemóvel: mesma ordem, CTA em destaque no fim. */}
      {open && (
        <nav ref={navRef} className="md:hidden flex flex-col items-center gap-1 px-6 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`w-full text-center py-3 text-sm border-b border-primary-light/40 last:border-0 transition-colors active:bg-primary-light/40 ${
                activeHref === link.href
                  ? "text-primary font-medium"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={gerarLinkWhatsApp()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="w-full text-center bg-primary text-white rounded-lg py-3 mt-4 text-sm font-medium active:bg-wine"
          >
            Marcar agora
          </a>
        </nav>
      )}
    </header>
  );
}
