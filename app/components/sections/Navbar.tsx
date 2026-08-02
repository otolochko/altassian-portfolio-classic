"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { Locale, PortfolioContent } from "../../content";
import { ThemeToggle } from "../ui/ThemeToggle";

type NavbarProps = {
  locale: Locale;
  nav: PortfolioContent["nav"];
};

export default function Navbar({ locale, nav }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const nextLocale: Locale = locale === "en" ? "uk" : "en";

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [open]);

  const links = [
    { href: "#work", label: nav.work },
    { href: "#expertise", label: nav.expertise },
    { href: "#credentials", label: nav.credentials },
    { href: "#about", label: nav.about },
    { href: "#contact", label: nav.contact },
  ];

  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <Link href={`/${locale}`} className="brand" aria-label="Oleksandr Tolochko">
          <span className="brand-mark" aria-hidden="true">
            OT
          </span>
          <span className="brand-name">
            Oleksandr
            <span> Tolochko</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={nav.primaryNavigation}>
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle label={nav.switchTheme} />
          <Link
            href={`/${nextLocale}`}
            className="language-link"
            aria-label={nav.switchLanguage}
            hrefLang={nextLocale}
          >
            {nextLocale.toUpperCase()}
          </Link>
          <a className="button button-small nav-cta" href="#contact">
            {nav.cta}
          </a>
          <button
            type="button"
            className="icon-button mobile-menu-trigger"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? nav.menuClose : nav.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        data-open={open}
        aria-label={nav.mobileNavigation}
      >
        <div className="shell mobile-nav-inner">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className="mobile-nav-link"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a className="button mobile-nav-cta" href="#contact" onClick={() => setOpen(false)}>
            {nav.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
