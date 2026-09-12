"use client";

import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site-config";
import Logo from "@/app/components/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-cream/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 text-forest">
          <Logo />
          <span className="hidden text-xs uppercase tracking-[0.2em] text-ink/60 sm:inline">
            {SITE.organizerShort}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 transition hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#register"
            className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-cream transition hover:bg-forest-light"
          >
            Register Now
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/30 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-forest transition ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 bg-forest transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-cream px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink/80"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="rounded-full bg-forest px-5 py-2 text-center text-sm font-semibold text-cream"
            >
              Register Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
