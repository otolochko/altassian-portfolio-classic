import { Mail, Linkedin, CircleUser } from "lucide-react";
import ContactFormClient from "../ContactFormClient";
import { Lang } from "../../i18n";

interface ContactSectionProps {
  contact: {
    title: string;
    desc: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
      error: string;
    };
  };
  lang: Lang;
}

const ContactSection = ({ contact, lang }: ContactSectionProps) => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto bg-white/90 dark:bg-zinc-900/95 rounded-3xl shadow-[0_30px_80px_-60px_rgba(15,23,42,0.6)] overflow-hidden flex flex-col md:flex-row border border-zinc-200/70 dark:border-zinc-700">
        <div className="bg-gradient-to-br from-zinc-900 via-zinc-900 to-blue-700 p-10 md:w-2/5 flex flex-col justify-between text-white">
          <div>
            <h3 className="text-2xl font-bold mb-6">{contact.title}</h3>
            <p className="mb-8 text-white/90">{contact.desc}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <CircleUser className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-[0.2em] text-white/80">Community</p>
                  <a
                    className="font-medium transition hover:opacity-80"
                    href="https://community.atlassian.com/user/profile/af784eda-dcd2-4fba-8282-d1cd8548b328"
                    target="_blank"
                  >
                    Atlassian Community Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl border bg-white/10 border-white/15">
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase font-bold tracking-[0.2em] text-white/80">Social</p>
                  <a
                    className="font-medium transition hover:opacity-80"
                    href="https://www.linkedin.com/in/oleksandrtolochko/"
                    target="_blank"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 md:w-3/5 bg-white dark:bg-zinc-900">
          <ContactFormClient lang={lang} labels={contact.form} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
