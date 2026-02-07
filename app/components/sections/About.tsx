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
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-ink-900 reveal">{about.title}</h2>
          <p className="text-ink-600 mb-4 text-lg leading-relaxed reveal">{about.p1}</p>
          <p className="text-ink-600 leading-relaxed reveal">{about.p2}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-6 bg-white/80 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200/70 dark:border-zinc-700 text-center shadow-[0_16px_40px_-30px_rgba(15,23,42,0.4)] reveal-item">
            <div className="text-4xl font-semibold text-brand-700 dark:text-blue-400 mb-2">8+</div>
            <div className="text-xs text-ink-500 dark:text-zinc-400 font-semibold uppercase tracking-[0.2em]">{about.stat1}</div>
          </div>
          <div className="p-6 bg-white/80 dark:bg-zinc-800/80 rounded-2xl border border-zinc-200/70 dark:border-zinc-700 text-center shadow-[0_16px_40px_-30px_rgba(15,23,42,0.4)] reveal-item">
            <div className="text-4xl font-semibold text-brand-700 dark:text-blue-400 mb-2">ACE</div>
            <div className="text-xs text-ink-500 dark:text-zinc-400 font-semibold uppercase tracking-[0.2em]">{about.stat2}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
