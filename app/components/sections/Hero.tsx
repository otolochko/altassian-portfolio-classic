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
      <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 border border-ink-200/70 text-ink-700 rounded-full text-sm font-semibold mb-6 shadow-[0_6px_20px_-15px_rgba(15,23,42,0.25)] reveal">
          {hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-ink-900 leading-tight mb-6 reveal">
            {hero.titleTop}
            <br />
            <span className="text-brand-700">{hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal">
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

        <div className="hidden lg:block">
          <div className="rounded-3xl border border-ink-200/70 bg-white/70 backdrop-blur-sm p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] reveal">
            <div className="grid gap-6">
              <div className="h-2 w-12 rounded-full bg-brand-500/60" />
              <div className="h-3 w-24 rounded-full bg-ink-200" />
              <div className="space-y-3">
                <div className="h-3 w-full rounded-full bg-ink-300" />
                <div className="h-3 w-5/6 rounded-full bg-ink-300" />
                <div className="h-3 w-4/6 rounded-full bg-ink-300" />
              </div>
              <div className="flex gap-2">
                <div className="h-10 w-28 rounded-full bg-brand-600/20 border border-brand-600/30" />
                <div className="h-10 w-24 rounded-full bg-ink-200 border border-ink-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
