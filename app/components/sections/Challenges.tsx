"use client";

import { useEffect, useState } from "react";
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
      <section id="challenges" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{challenges.title}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">{challenges.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {challenges.items.map((_, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-xl p-6 border border-slate-100 min-h-[200px] animate-pulse"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="challenges" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{challenges.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{challenges.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {challenges.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl p-6 border border-slate-100 group hover:border-blue-200 transition-colors"
            >
              <div className="mb-4 pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 mb-2 text-red-500 font-bold text-sm uppercase tracking-wide">
                  <AlertCircle size={14} aria-hidden="true" /> Problem
                </div>
                <h4 className="font-semibold text-slate-700">{item.problem}</h4>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2 text-blue-600 font-bold text-sm uppercase tracking-wide">
                  <CheckCircle size={14} aria-hidden="true" /> Solution
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
