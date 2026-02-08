"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AlertCircle, CheckCircle } from "lucide-react";

interface ChallengesProps {
  challenges: {
    title: string;
    desc: string;
    items: readonly {
      problem: string;
      solution: string;
    }[];
  };
}

const Challenges = ({ challenges }: ChallengesProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section id="challenges" className="py-24 bg-zinc-50/70 dark:bg-zinc-950/40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 dark:text-zinc-100 mb-4 reveal">
              {challenges.title}
            </h2>
            <p className="text-ink-600 dark:text-zinc-300 max-w-2xl mx-auto reveal">{challenges.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.items.map((_, idx) => (
              <div
                key={idx}
                className="bg-ink-100 dark:bg-zinc-800 rounded-2xl p-6 border border-ink-300 dark:border-zinc-700 min-h-[220px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="challenges" className="py-24 bg-zinc-50/70 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 dark:text-zinc-100 mb-4 reveal">
            {challenges.title}
          </h2>
          <p className="text-ink-600 dark:text-zinc-300 max-w-2xl mx-auto reveal">{challenges.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl p-6 border border-zinc-300 dark:border-zinc-700 group hover:border-brand-300 dark:hover:border-blue-500/50 transition-all shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] hover:shadow-[0_24px_60px_-40px_rgba(8,145,178,0.6)] reveal-item"
              style={{ "--delay": `${idx * 90}ms` } as CSSProperties}
            >
              <div className="mb-4 pb-4 border-b border-ink-200/70 dark:border-zinc-700">
                <div className="flex items-center gap-2 mb-2 text-rose-500 dark:text-rose-300 font-semibold text-xs uppercase tracking-[0.2em]">
                  <AlertCircle size={14} aria-hidden="true" /> Problem
                </div>
                <h4 className="font-semibold text-ink-800 dark:text-zinc-100">{item.problem}</h4>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-brand-700 dark:text-blue-400 font-semibold text-xs uppercase tracking-[0.2em]">
                  <CheckCircle size={14} aria-hidden="true" /> Solution
                </div>
                <p className="text-ink-600 dark:text-zinc-300 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
