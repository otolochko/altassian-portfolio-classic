import Link from "next/link";
import { Globe } from "lucide-react";
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
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl md:text-2xl font-bold text-blue-900 tracking-tight">
            Oleksandr<span className="text-blue-600">.Tolochko</span>
          </div>

          <div className="hidden lg:flex items-center space-x-6 text-sm font-medium">
            <a href="#about" className="text-slate-600 hover:text-blue-600 transition">
              {nav.about}
            </a>
            <a href="#challenges" className="text-slate-600 hover:text-blue-600 transition">
              {nav.challenges}
            </a>
            <a href="#areas" className="text-slate-600 hover:text-blue-600 transition">
              {nav.expertise}
            </a>
            <a href="#services" className="text-slate-600 hover:text-blue-600 transition">
              {nav.services}
            </a>
            <a href="#projects" className="text-slate-600 hover:text-blue-600 transition">
              {nav.projects}
            </a>
            <a href="#contact" className="text-slate-600 hover:text-blue-600 transition">
              {nav.contact}
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href={{ pathname: "/", query: { lang: nextLang } }}
              className="flex items-center gap-1 text-slate-600 hover:text-blue-600 font-medium transition px-2 py-1 rounded hover:bg-slate-100"
              aria-label="Switch language"
            >
              <Globe size={18} aria-hidden="true" /> <span className="uppercase">{lang}</span>
            </Link>

            <a
              href="#contact"
              className="hidden sm:block bg-blue-100 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-200 transition text-sm"
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
