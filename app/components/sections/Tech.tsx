"use client";

import { ShieldCheck } from "lucide-react";
import { useEffect, useState, type CSSProperties } from "react";

interface TechProps {
  tech: {
    title: string;
    certsTitle: string;
    certs: readonly (
      | string
      | {
          text: string;
          link?: string;
          icon?: string;
        }
    )[];
    stack: readonly {
      category: string;
      items: string;
    }[];
  };
}

const Tech = ({ tech }: TechProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a static skeleton/structure on the server to prevent hydration mismatch
  if (!mounted) {
    return (
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-ink-900 dark:text-zinc-100 reveal">
            {tech.title}
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white/90 dark:bg-zinc-900/90 p-8 rounded-2xl border border-ink-200/70 dark:border-zinc-700 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] reveal animate-pulse min-h-[400px]" />
            <div className="grid gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-4 bg-ink-100 dark:bg-zinc-800 rounded-xl border border-ink-300 dark:border-zinc-700 min-h-[80px] animate-pulse" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-ink-900 dark:text-zinc-100 reveal">
          {tech.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/90 dark:bg-zinc-900/90 p-8 rounded-2xl border border-ink-200/70 dark:border-zinc-700 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] reveal">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink-900 dark:text-zinc-100">
              <ShieldCheck className="text-brand-600" aria-hidden="true" /> {tech.certsTitle}
            </h3>
            <div className="grid gap-3">
              {tech.certs.map((cert, i) => {
                const isObject = typeof cert === "object";
                const text = isObject ? cert.text : cert;
                const link = isObject ? cert.link : undefined;
                const icon = isObject ? cert.icon : undefined;

                const content = (
                  <div className="flex items-center gap-3 p-3 bg-ink-50 dark:bg-zinc-800 rounded-xl hover:bg-ink-100 dark:hover:bg-zinc-700 transition-colors group border border-ink-200/60 dark:border-zinc-700">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        className="w-7 h-7 object-contain shrink-0 bg-white dark:bg-zinc-900 p-0.5 rounded-full border border-ink-200/70 dark:border-zinc-700 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                    )}
                    <span className="font-medium text-ink-700 dark:text-zinc-300 text-sm group-hover:text-brand-700 dark:group-hover:text-blue-400 transition-colors">
                      {text}
                    </span>
                  </div>
                );

                if (link) {
                  return (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none"
                    >
                      {content}
                    </a>
                  );
                }

                return <div key={i}>{content}</div>;
              })}
            </div>
          </div>

          <div className="grid gap-6">
            {tech.stack.map((item, i) => (
              <div key={i} className="reveal-item" style={{ "--delay": `${i * 90}ms` } as CSSProperties}>
                <h4 className="text-brand-700 dark:text-blue-400 font-semibold mb-2 uppercase text-xs tracking-[0.2em]">
                  {item.category}
                </h4>
                <div className="p-4 bg-white dark:bg-zinc-900 rounded-xl border border-ink-300 dark:border-zinc-700 text-ink-600 dark:text-zinc-300 font-mono text-sm shadow-sm">
                  {item.items}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tech;
