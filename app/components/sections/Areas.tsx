import { Server, Code, Briefcase, Users, Lock, Layout } from "lucide-react";

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
    <section id="areas" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{areas.title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">{areas.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.items.map((area, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition"
            >
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4">
                {iconMap[area.icon as keyof typeof iconMap]}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">{area.title}</h3>
              <ul className="space-y-2">
                {area.list.map((li, lIdx) => (
                  <li key={lIdx} className="flex items-start gap-2 text-sm text-slate-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
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
