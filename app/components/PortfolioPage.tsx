import { ArrowDownRight, ArrowUp, ArrowUpRight, Check, MoveRight } from "lucide-react";
import type { Locale, PortfolioContent } from "../content";
import ContactFormClient from "./ContactFormClient";
import Navbar from "./sections/Navbar";
import SystemMap from "./sections/SystemMap";

type PortfolioPageProps = {
  locale: Locale;
  content: PortfolioContent;
};

export default function PortfolioPage({ locale, content: copy }: PortfolioPageProps) {
  return (
    <>
      <Navbar locale={locale} nav={copy.nav} />

      <main id="top">
        <section className="hero section">
          <div className="shell">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">{copy.hero.eyebrow}</p>
              <h1>
                <span>{copy.hero.titleLead}</span>{" "}
                <em>{copy.hero.titleAccent}</em>
              </h1>
              <div className="hero-support">
                <p>{copy.hero.summary}</p>
                <div className="hero-actions">
                  <a className="button" href="#work">
                    {copy.hero.primaryCta}
                    <ArrowDownRight aria-hidden="true" />
                  </a>
                  <a className="text-link" href="#contact">
                    {copy.hero.secondaryCta}
                    <MoveRight aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <SystemMap system={copy.hero.system} />
              <p className="availability">
                <span aria-hidden="true" />
                {copy.hero.availability}
              </p>
            </div>
          </div>
        </section>

        <section
          className="credibility"
          aria-label={locale === "uk" ? "Коротко про досвід" : "Credentials overview"}
        >
          <dl className="shell credibility-grid">
            {copy.credibility.map((item) => (
              <div key={item.value}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section id="work" className="section section-work">
          <div className="shell">
            <div className="section-heading section-heading-wide">
              <div>
                <p className="eyebrow">{copy.work.eyebrow}</p>
                <h2>{copy.work.title}</h2>
              </div>
              <p className="section-intro">{copy.work.intro}</p>
            </div>

            <div className="case-list">
              {copy.work.items.map((item) => (
                <article className="case-study" key={item.number}>
                  <div className="case-identity">
                    <span className="case-number">{item.number}</span>
                    <p>{item.sector}</p>
                    <h3>{item.title}</h3>
                    <div className="tag-list">
                      {item.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>

                  <div className="case-detail">
                    <div>
                      <p className="detail-label">{copy.work.contextLabel}</p>
                      <p>{item.context}</p>
                    </div>
                    <div>
                      <p className="detail-label">{copy.work.interventionLabel}</p>
                      <p>{item.intervention}</p>
                    </div>
                  </div>

                  <div className="case-outcome">
                    <p className="detail-label">{copy.work.outcomeLabel}</p>
                    {item.metric && (
                      <div className="case-metric">
                        <strong>{item.metric.value}</strong>
                        <span>{item.metric.label}</span>
                      </div>
                    )}
                    <ul>
                      {item.outcomes.map((outcome) => (
                        <li key={outcome}>
                          <Check aria-hidden="true" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="expertise" className="section section-expertise">
          <div className="shell">
            <div className="expertise-intro">
              <div>
                <p className="eyebrow">{copy.expertise.eyebrow}</p>
                <h2>{copy.expertise.title}</h2>
                <p className="section-intro">{copy.expertise.intro}</p>
              </div>

              <aside className="starting-points">
                <p className="detail-label">{copy.expertise.startingPointsLabel}</p>
                <ul>
                  {copy.expertise.startingPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </aside>
            </div>

            <div className="capability-list">
              {copy.expertise.capabilities.map((capability) => (
                <article className="capability-row" key={capability.index}>
                  <span>{capability.index}</span>
                  <h3>{capability.title}</h3>
                  <p>{capability.description}</p>
                  <ul>
                    {capability.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-engagements">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{copy.expertise.engagementEyebrow}</p>
                <h2>{copy.expertise.engagementTitle}</h2>
              </div>
              <p className="section-intro">{copy.expertise.engagementIntro}</p>
            </div>

            <div className="engagement-grid">
              {copy.expertise.engagements.map((engagement) => (
                <article key={engagement.index}>
                  <span>{engagement.index}</span>
                  <ArrowDownRight aria-hidden="true" />
                  <h3>{engagement.title}</h3>
                  <p>{engagement.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="section section-credentials">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{copy.credentials.eyebrow}</p>
                <h2>{copy.credentials.title}</h2>
              </div>
              <p className="section-intro">{copy.credentials.intro}</p>
            </div>

            <div className="credentials-layout">
              <div>
                <p className="detail-label credentials-label">
                  {copy.credentials.certificationsLabel}
                </p>
                <ol className="certification-list">
                  {copy.credentials.certifications.map((certification, index) => (
                    <li key={`${certification.title}-${certification.code ?? index}`}>
                      <span className="cert-index">0{index + 1}</span>
                      <div>
                        <strong>{certification.title}</strong>
                        {certification.code && <span>{certification.code}</span>}
                      </div>
                      {certification.href ? (
                        <a
                          href={certification.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${copy.credentials.verifyLabel}: ${certification.title}`}
                        >
                          {copy.credentials.verifyLabel}
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      ) : (
                        <span className="certified-mark">
                          <Check aria-hidden="true" />
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="toolkit">
                <p className="detail-label credentials-label">{copy.credentials.toolkitLabel}</p>
                {copy.credentials.toolkit.map((group) => (
                  <div key={group.category}>
                    <h3>{group.category}</h3>
                    <p>{group.items}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="shell about-layout">
            <div>
              <p className="eyebrow">{copy.about.eyebrow}</p>
              <h2>{copy.about.title}</h2>
            </div>
            <div className="about-copy">
              {copy.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ol className="principle-list">
              {copy.about.principles.map((principle, index) => (
                <li key={principle.title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{principle.title}</h3>
                    <p>{principle.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="shell">
            <div className="contact-header">
              <p className="eyebrow">{copy.contact.eyebrow}</p>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.description}</p>
            </div>

            <div className="contact-layout">
              <ContactFormClient locale={locale} labels={copy.contact.form} />

              <aside className="direct-links">
                <p className="detail-label">{copy.contact.directLabel}</p>
                <a
                  href="https://community.atlassian.com/user/profile/af784eda-dcd2-4fba-8282-d1cd8548b328"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{copy.contact.communityLabel}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/in/oleksandrtolochko/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{copy.contact.linkedinLabel}</span>
                  <ArrowUpRight aria-hidden="true" />
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="shell">
          <div>
            <span className="brand-mark" aria-hidden="true">
              OT
            </span>
            <p>
              © {new Date().getFullYear()} Oleksandr Tolochko
              <span>{copy.footer.line}</span>
            </p>
          </div>
          <a href="#top">
            {copy.footer.backToTop}
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
}
