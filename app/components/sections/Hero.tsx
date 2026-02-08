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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/80 dark:bg-zinc-800/80 border border-ink-200/70 dark:border-zinc-700 text-ink-700 dark:text-zinc-200 rounded-full text-sm font-semibold mb-6 shadow-[0_6px_20px_-15px_rgba(15,23,42,0.25)] reveal">
          {hero.badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-semibold text-ink-900 dark:text-zinc-100 leading-tight mb-6 reveal">
            {hero.titleTop}
            <br />
            <span className="text-brand-700 dark:text-blue-400">{hero.titleHighlight}</span>
          </h1>

          <p className="text-lg md:text-xl text-ink-600 dark:text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed reveal">
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

        <div className="hidden lg:block relative group">
          {/* Confluence-style Mock (Background) */}
          <div className="absolute -top-12 -left-12 w-full h-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden -z-20 transition-all duration-700 ease-out group-hover:-translate-x-6 group-hover:-translate-y-6 group-hover:shadow-3xl">
            <div className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-zinc-200 dark:border-zinc-800 px-4 py-2 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="ml-4 h-4 w-32 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
            </div>
            <div className="flex blur-[1px] opacity-40 group-hover:opacity-60 transition-opacity duration-500">
              <div className="w-1/4 border-r border-zinc-100 dark:border-zinc-800 p-4 space-y-3">
                <div className="h-2 w-full bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                <div className="h-2 w-4/5 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                <div className="h-2 w-full bg-brand-200 dark:bg-brand-800/40 rounded-full" />
              </div>
              <div className="flex-1 p-6 space-y-4">
                <div className="h-2 w-24 bg-zinc-200 dark:bg-zinc-800 rounded-full mb-4" />
                <div className="h-6 w-48 bg-zinc-300 dark:bg-zinc-700 rounded-lg" />
                <div className="space-y-2">
                  <div className="h-2.5 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                  <div className="h-2.5 w-11/12 bg-zinc-200 dark:bg-zinc-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-ink-200/70 dark:border-zinc-700 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl p-8 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] reveal relative overflow-hidden z-10 transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-[0_40px_100px_-60px_rgba(15,23,42,0.7)]">
            {/* Atlassian-style Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-600 group-hover:h-1.5 transition-all duration-300" />
            
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-brand-500/50 group-hover:shadow-xl">
                  <span className="font-bold text-lg">J</span>
                </div>
                <div>
                  <div className="text-[10px] font-bold text-ink-600 dark:text-zinc-500 uppercase tracking-widest leading-none mb-1">Jira Service Management</div>
                  <div className="text-sm font-bold text-ink-900 dark:text-zinc-100">PROJ-742</div>
                </div>
              </div>
              <div className="w-8 h-8 rounded-full bg-ink-100 dark:bg-zinc-800 flex items-center justify-center hover:bg-ink-200 dark:hover:bg-zinc-700 transition-colors cursor-pointer">
                <div className="w-1 h-1 rounded-full bg-ink-400 dark:bg-zinc-500 mx-0.5" />
                <div className="w-1 h-1 rounded-full bg-ink-400 dark:bg-zinc-500 mx-0.5" />
                <div className="w-1 h-1 rounded-full bg-ink-400 dark:bg-zinc-500 mx-0.5" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-200 dark:border-blue-800 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                In Progress
              </div>
              
              <h3 className="text-2xl font-bold text-ink-900 dark:text-zinc-100 leading-tight">
                Automate <span className="text-brand-700 dark:text-blue-400">Onboarding</span> <br/>
                Workflows with Assets
              </h3>

              <div className="p-4 bg-ink-50 dark:bg-zinc-800/50 rounded-2xl border border-ink-200/50 dark:border-zinc-700 space-y-3">
                <div className="flex items-center justify-between text-[11px] font-bold text-ink-600 dark:text-zinc-500 uppercase tracking-wider">
                  <span>Progress</span>
                  <span className="text-brand-700 dark:text-blue-400">82%</span>
                </div>
                <div className="h-2 w-full bg-ink-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-600 rounded-full w-[82%] transition-all duration-700 ease-out group-hover:w-[88%]" />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-ink-100 dark:border-zinc-800">
                <div className="flex -space-x-2 transition-all duration-300 group-hover:space-x-1">
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-zinc-900 bg-brand-100 dark:bg-brand-900/40 text-brand-700 dark:text-blue-400 flex items-center justify-center text-[10px] font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">OT</div>
                  <div className="w-9 h-9 rounded-full border-2 border-white dark:border-zinc-900 bg-ink-200 dark:bg-zinc-800 text-ink-600 dark:text-zinc-400 flex items-center justify-center text-[10px] font-bold shadow-sm transition-transform duration-300 group-hover:scale-105">AI</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-ink-600 dark:text-zinc-500 text-xs font-medium">
                    <div className="w-3 h-3 rounded-sm border border-brand-500/50 dark:border-blue-500/50 flex items-center justify-center">
                      <div className="w-1 h-1 bg-brand-500 dark:bg-blue-500 rounded-full" />
                    </div>
                    High
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
