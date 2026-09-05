"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gerarLinkWhatsApp } from "../lib/whatsapp";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#cursos", label: "Cursos" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contactos", label: "Contactos" },
];

// Anel de foco visível reutilizado em todos os elementos interactivos do header.
const focoAnel =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Destaca a secção visível, escolhendo a que ocupa mais área à vista.
  useEffect(() => {
    const secoes = links
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const visiveis = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const href = `#${entry.target.id}`;
          if (entry.isIntersecting) {
            visiveis.set(href, entry.intersectionRatio);
          } else {
            visiveis.delete(href);
          }
        }
        if (visiveis.size === 0) {
          setActiveHref(null);
          return;
        }
        const [melhor] = [...visiveis.entries()].sort((a, b) => b[1] - a[1]);
        setActiveHref(melhor[0]);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    secoes.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Fecha o menu e devolve o foco ao botão que o abriu.
  const fechar = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  // Fecha o menu de telemóvel: clique fora, tecla Esc, ou scroll significativo.
  useEffect(() => {
    if (!open) return;

    function aoClicarFora(e: MouseEvent) {
      const alvo = e.target as Node;
      if (navRef.current?.contains(alvo) || buttonRef.current?.contains(alvo)) {
        return;
      }
      setOpen(false);
    }

    function aoPremirTecla(e: KeyboardEvent) {
      if (e.key === "Escape") fechar();
    }

    const yInicial = window.scrollY;
    function aoFazerScroll() {
      if (Math.abs(window.scrollY - yInicial) > 40) setOpen(false);
    }

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoPremirTecla);
    window.addEventListener("scroll", aoFazerScroll, { passive: true });
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoPremirTecla);
      window.removeEventListener("scroll", aoFazerScroll);
    };
  }, [open, fechar]);

  // Logo volta ao topo sem deixar "#" no URL.
  function irParaTopo(e: React.MouseEvent) {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const linkClasses = (href: string) =>
    `text-sm transition-colors ${focoAnel} ${
      activeHref === href
        ? "text-primary font-medium"
        : "text-foreground hover:text-primary"
    }`;

  return (
    <header
      id="topo"
      className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-primary-light"
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-3">
        <a
          href="#"
          onClick={irParaTopo}
          aria-label="Fina Depilações — início"
          className={`flex items-center shrink-0 ${focoAnel}`}
        >
          <Image
            src="/images/logo-fina-depilacoes.webp"
            alt="Fina Depilações"
            width={900}
            height={523}
            priority
            className="h-11 w-auto"
          />
        </a>

        <div className="flex items-center gap-4">
          {/* Navegação de desktop: links em ordem lógica, CTA sempre no fim. */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                aria-current={activeHref === link.href ? "true" : undefined}
                className={linkClasses(link.href)}
              >
                {link.label}
              </a>
            ))}
            {/* O botão faz mesmo o que promete: abre o WhatsApp para marcar. */}
            <a
              href={gerarLinkWhatsApp()}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-wine transition-colors ${focoAnel}`}
            >
              Marcar agora
            </a>
          </nav>

          <ThemeToggle />

          <button
            ref={buttonRef}
            type="button"
            onClick={() => setOpen(!open)}
            className={`md:hidden text-foreground ${focoAnel}`}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Navegação de telemóvel: mesma ordem, CTA em destaque no fim. */}
      {open && (
        <nav
          id="menu-mobile"
          ref={navRef}
          className="menu-mobile-anim md:hidden flex flex-col items-center gap-1 px-6 pb-6 pt-2 border-t border-primary-light/40"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              aria-current={activeHref === link.href ? "true" : undefined}
              className={`w-full text-center py-3 text-sm border-b border-primary-light/40 last:border-0 transition-colors active:bg-primary-light/40 ${focoAnel} ${
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
            className={`w-full text-center bg-primary text-white rounded-lg py-3 mt-4 text-sm font-medium active:bg-wine ${focoAnel}`}
          >
            Marcar agora
          </a>
        </nav>
      )}
    </header>
  );
}
