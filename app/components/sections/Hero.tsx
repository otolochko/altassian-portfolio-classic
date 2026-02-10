import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

interface HeroProps {
  hero: {
    badge: string;
    titleTop: string;
    titleHighlight: string;
    desc: string;
    btnPrimary: string;
    btnSecondary: string;
  };
}

const Hero = ({ hero }: HeroProps) => {
  return (
    <section className="pt-32 pb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-zinc-800/80 border border-ink-200/70 dark:border-zinc-700 text-ink-700 dark:text-zinc-200 rounded-full text-sm font-semibold mb-6 shadow-[0_6px_20px_-15px_rgba(15,23,42,0.25)] reveal">
            {hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-ink-900 dark:text-zinc-100 leading-tight mb-6 reveal">
            {hero.titleTop}
            <br />
            <span className="text-brand-700 dark:text-blue-400">{hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-600 dark:text-zinc-400 mb-10 max-w-2xl lg:mx-0 leading-relaxed reveal">
            {hero.desc}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start reveal">
            <a href="#services">
              <Button type="button">
                {hero.btnPrimary} <ArrowRight size={18} aria-hidden="true" />
              </Button>
            </a>
            <a href="#contact">
              <Button type="button" variant="outline">
                {hero.btnSecondary}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
