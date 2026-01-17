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
    <section id="projects" className="py-20 bg-blue-50 border-t border-slate-200 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{projects.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{projects.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.items.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-slate-200 transition-all flex flex-col"
            >
              <div className="p-8 flex-1">
                <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-3">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-5 leading-relaxed">{project.desc}</p>

                <ul className="space-y-2 mb-6">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
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
