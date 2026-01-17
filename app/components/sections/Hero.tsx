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
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6">
          {hero.badge}
        </div>

        <h1 className="text-5xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
          {hero.titleTop}
          <br />
          <span className="text-blue-600">{hero.titleHighlight}</span>
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">{hero.desc}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
    </section>
  );
};

export default Hero;
