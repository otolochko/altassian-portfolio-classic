import { ShieldCheck } from "lucide-react";
import type { CSSProperties } from "react";

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
  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center text-ink-900 reveal">
          {tech.title}
        </h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white/90 p-8 rounded-2xl border border-ink-200/70 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] reveal">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2 text-ink-900">
              <ShieldCheck className="text-brand-600" aria-hidden="true" /> {tech.certsTitle}
            </h3>
            <div className="grid gap-3">
              {tech.certs.map((cert, i) => {
                const isObject = typeof cert === "object";
                const text = isObject ? cert.text : cert;
                const link = isObject ? cert.link : undefined;
                const icon = isObject ? cert.icon : undefined;

                const content = (
                  <div className="flex items-center gap-3 p-3 bg-ink-50 rounded-xl hover:bg-ink-100 transition-colors group border border-ink-200/60">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        className="w-7 h-7 object-contain shrink-0 bg-white p-0.5 rounded-full border border-ink-200/70 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                    )}
                    <span className="font-medium text-ink-700 text-sm group-hover:text-brand-700 transition-colors">
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
                <h4 className="text-brand-700 font-semibold mb-2 uppercase text-xs tracking-[0.2em]">
                  {item.category}
                </h4>
                <div className="p-4 bg-white rounded-xl border border-ink-300 text-ink-600 font-mono text-sm shadow-sm">
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
