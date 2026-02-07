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

        <div className="hidden lg:block relative">
          {/* Decorative background element */}
          <div className="absolute -top-6 -right-6 w-full h-full bg-brand-500/5 rounded-3xl -z-10" />
          
          <div className="rounded-3xl border border-ink-200/70 bg-white/90 backdrop-blur-xl p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] reveal relative overflow-hidden">
            {/* Atlassian-style Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-600" />
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
                  <span className="font-bold text-lg">J</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-ink-400 uppercase tracking-widest leading-none mb-1">Jira Service Management</div>
                  <div className="text-sm font-bold text-ink-900">PROJ-742</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-ink-100 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-ink-400 mx-0.5" />
                <div className="w-1 h-1 rounded-full bg-ink-400 mx-0.5" />
                <div className="w-1 h-1 rounded-full bg-ink-400 mx-0.5" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-100 text-blue-700 text-[10px] font-bold uppercase tracking-wider border border-blue-200">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                In Progress
              </div>
              
              <h3 className="text-2xl font-bold text-ink-900 leading-tight">
                Automate <span className="text-brand-700">Onboarding</span> <br/>
                Workflows with Assets
              </h3>

              <div className="p-4 bg-ink-50 rounded-2xl border border-ink-200/50 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-ink-400 uppercase tracking-wider">
                  <span>Progress</span>
                  <span className="text-brand-700">82%</span>
                </div>
                <div className="h-2 w-full bg-ink-200 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-600 rounded-full w-[82%]" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-ink-100">
                <div className="flex -space-x-2">
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-brand-100 text-brand-700 flex items-center justify-center text-[10px] font-bold shadow-sm">OT</div>
                  <div className="w-9 h-9 rounded-full border-2 border-white bg-ink-200 text-ink-600 flex items-center justify-center text-[10px] font-bold shadow-sm">AI</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-ink-400 text-xs font-medium">
                    <div className="w-3 h-3 rounded-sm border border-brand-500/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-brand-500 rounded-full" />
                    </div>
                    High
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Overlapping secondary element for depth */}
          <div className="absolute -bottom-8 -left-8 w-64 p-5 bg-white/60 backdrop-blur-md rounded-2xl border border-ink-200/50 shadow-2xl skew-y-2 -z-10 group-hover:skew-y-0 transition-transform duration-500">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center text-[10px] text-white font-bold">C</div>
              <div className="h-2 w-20 bg-ink-200 rounded-full" />
            </div>
            <div className="space-y-2">
              <div className="h-3 w-full bg-ink-100 rounded-full" />
              <div className="h-3 w-4/5 bg-ink-100 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
