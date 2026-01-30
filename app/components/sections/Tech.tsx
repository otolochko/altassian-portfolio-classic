import { ShieldCheck } from "lucide-react";

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
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{tech.title}</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-400" aria-hidden="true" /> {tech.certsTitle}
            </h3>
            <div className="grid gap-3">
              {tech.certs.map((cert, i) => {
                const isObject = typeof cert === "object";
                const text = isObject ? cert.text : cert;
                const link = isObject ? cert.link : undefined;
                const icon = isObject ? cert.icon : undefined;

                const content = (
                  <div className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg hover:bg-slate-700 transition-colors group">
                    {icon ? (
                      <img
                        src={icon}
                        alt=""
                        className="w-7 h-7 object-contain shrink-0 bg-white p-0.5 rounded-full border border-white/20 group-hover:scale-110 transition-transform"
                      />
                    ) : (
                      <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    )}
                    <span className="font-medium text-slate-200 text-sm group-hover:text-blue-400 transition-colors">
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
              <div key={i}>
                <h4 className="text-blue-400 font-bold mb-2 uppercase text-xs tracking-wider">{item.category}</h4>
                <div className="p-4 bg-slate-800 rounded-lg border border-slate-700 text-slate-300 font-mono text-sm">
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
