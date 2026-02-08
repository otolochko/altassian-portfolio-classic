import Link from "next/link";
import { Globe } from "lucide-react";
import { ThemeToggle } from "../ui/ThemeToggle";
type Lang = "en" | "uk";

interface NavbarProps {
  nav: {
    about: string;
    challenges: string;
    expertise: string;
    services: string;
    projects: string;
    contact: string;
    cta: string;
  };
  lang: Lang;
  nextLang: Lang;
}

const Navbar = ({ nav, lang, nextLang }: NavbarProps) => {
  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-zinc-900/95 backdrop-blur-xl z-50 border-b border-ink-300 dark:border-zinc-700 shadow-[0_1px_0_rgba(15,23,42,0.08)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <div className="text-lg md:text-2xl font-semibold text-ink-900 dark:text-zinc-100 tracking-tight">
            Oleksandr<span className="text-brand-700 dark:text-blue-400">.Tolochko</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-semibold text-ink-700 dark:text-zinc-300">
            <a href="#about" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.about}
            </a>
            <a href="#challenges" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.challenges}
            </a>
            <a href="#areas" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.expertise}
            </a>
            <a href="#services" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.services}
            </a>
            <a href="#projects" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.projects}
            </a>
            <a href="#contact" className="hover:text-ink-900 dark:hover:text-zinc-100 transition">
              {nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={{ pathname: "/", query: { lang: nextLang } }}
              className="flex items-center gap-1 text-ink-700 dark:text-ink-300 hover:text-ink-900 dark:hover:text-ink-100 font-semibold transition px-2 py-1 rounded-full hover:bg-ink-100 dark:hover:bg-ink-800"
              aria-label="Switch language"
            >
              <Globe size={18} aria-hidden="true" /> <span className="uppercase">{lang}</span>
            </Link>

            <ThemeToggle />

            <a
              href="#contact"
              className="hidden sm:block bg-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-blue-700 transition text-sm shadow-[0_10px_22px_-16px_rgba(37,99,235,0.8)]"
            >
              {nav.cta}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
