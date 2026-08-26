"use client";

import { useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#localizacao", label: "Localização" },
  { href: "#contactos", label: "Contactos" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur border-b border-primary-light">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-serif text-xl text-foreground">
          Fina Depilações
        </span>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#marcacao"
            className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium"
          >
            Marcar horário
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Abrir menu"
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

      {open && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#marcacao"
            onClick={() => setOpen(false)}
            className="bg-primary text-white rounded-lg px-4 py-2 text-sm font-medium"
          >
            Marcar horário
          </a>
        </nav>
      )}
    </header>
  );
}
