import type { CSSProperties } from "react";

interface ProjectsProps {
  projects: {
    title: string;
    desc: string;
    items: readonly {
      category: string;
      title: string;
      desc: string;
      outcomes: readonly string[];
      tags: readonly string[];
    }[];
  };
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="py-24 bg-zinc-50/70 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 dark:text-zinc-100 mb-4 reveal">
            {projects.title}
          </h2>
          <p className="text-ink-600 dark:text-zinc-300 max-w-2xl mx-auto reveal">{projects.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="bg-white/90 dark:bg-zinc-900/90 rounded-2xl overflow-hidden shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] hover:shadow-[0_24px_60px_-40px_rgba(8,145,178,0.6)] border border-zinc-300 dark:border-zinc-700 transition-all flex flex-col reveal-item"
              style={{ "--delay": `${idx * 100}ms` } as CSSProperties}
            >
              <div className="p-8 flex-1">
                <div className="text-xs font-semibold tracking-[0.25em] text-brand-700 dark:text-blue-400 uppercase mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-semibold text-ink-900 dark:text-zinc-100 mb-3">{project.title}</h3>
                <p className="text-ink-600 dark:text-zinc-300 mb-5 leading-relaxed">{project.desc}</p>

                <ul className="space-y-2 mb-6">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-ink-700 dark:text-zinc-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-2 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 bg-ink-200 dark:bg-zinc-800 text-ink-700 dark:text-zinc-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
