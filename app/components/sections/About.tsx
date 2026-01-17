interface AboutProps {
  about: {
    title: string;
    p1: string;
    p2: string;
    stat1: string;
    stat2: string;
  };
}

const About = ({ about }: AboutProps) => {
  return (
    <section id="about" className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-slate-900">{about.title}</h2>
          <p className="text-slate-600 mb-4 text-lg">{about.p1}</p>
          <p className="text-slate-600">{about.p2}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-sm text-slate-500 font-medium uppercase">{about.stat1}</div>
          </div>
          <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">ACE</div>
            <div className="text-sm text-slate-500 font-medium uppercase">{about.stat2}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
