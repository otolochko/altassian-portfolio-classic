import { CheckCircle } from "lucide-react";
import type { CSSProperties } from "react";

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
    <section id="services" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-ink-900 mb-4 reveal">
            {services.title}
          </h2>
          <p className="text-ink-600 max-w-2xl mx-auto reveal">{services.desc}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-ink-300 shadow-[0_18px_50px_-40px_rgba(15,23,42,0.5)] hover:shadow-[0_24px_60px_-40px_rgba(8,145,178,0.6)] transition-all duration-300 reveal-item"
              style={{ "--delay": `${idx * 100}ms` } as CSSProperties}
            >
              <h3 className="text-2xl font-semibold text-ink-900 mb-3">{service.title}</h3>
              <p className="text-ink-600 mb-6 min-h-[48px]">{service.desc}</p>
              <ul className="space-y-3">
                {service.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-ink-700">
                    <CheckCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-sm font-medium">{feature}</span>
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

export default Services;
