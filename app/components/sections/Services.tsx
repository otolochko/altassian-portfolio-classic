import { CheckCircle } from "lucide-react";

interface ServicesProps {
  services: {
    title: string;
    desc: string;
    items: readonly {
      title: string;
      desc: string;
      features: readonly string[];
    }[];
  };
}

const Services = ({ services }: ServicesProps) => {
  return (
    <section id="services" className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{services.title}</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">{services.desc}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.items.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
            <p className="text-slate-600 mb-6 min-h-[48px]">{service.desc}</p>
            <ul className="space-y-3">
              {service.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-sm font-medium">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
