import { Server, Code, Briefcase, Users, Lock, Layout } from "lucide-react";
import type { CSSProperties } from "react";

const iconMap = {
  Server: <Server aria-hidden="true" />,
  Code: <Code aria-hidden="true" />,
  Briefcase: <Briefcase aria-hidden="true" />,
  Users: <Users aria-hidden="true" />,
  Lock: <Lock aria-hidden="true" />,
  Layout: <Layout aria-hidden="true" />,
};

interface AreasProps {
  areas: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      list: readonly string[];
      icon: string;
    }[];
  };
}

const Areas = ({ areas }: AreasProps) => {
  return (
    <section id="areas" className="py-24 bg-ink-50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 dark:text-zinc-100 mb-4 reveal">
            {areas.title}
          </h2>
          <p className="text-ink-600 dark:text-zinc-300 max-w-2xl mx-auto reveal">{areas.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.items.map((area, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900/90 p-6 rounded-2xl shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] border border-ink-200/80 dark:border-zinc-700 hover:shadow-[0_24px_60px_-40px_rgba(8,145,178,0.6)] transition reveal-item"
              style={{ "--delay": `${idx * 90}ms` } as CSSProperties}
            >
              <div className="w-11 h-11 bg-brand-50 dark:bg-blue-950/40 text-brand-700 dark:text-blue-300 rounded-xl flex items-center justify-center mb-4 border border-brand-100 dark:border-blue-900/70">
                {iconMap[area.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-lg font-semibold text-ink-900 dark:text-zinc-100 mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.list.map((li, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 text-sm text-ink-600 dark:text-zinc-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-1.5 shrink-0" />
                    {li}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;
