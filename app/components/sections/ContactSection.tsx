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
    <section id="contact" className="py-24 px-4 bg-blue-10">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
        <div className="bg-blue-600 p-10 md:w-2/5 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-6">{contact.title}</h3>
            <p className="text-blue-100 mb-8">{contact.desc}</p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/50 rounded-lg">
                  <CircleUser className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">Community</p>
                  <a className="font-medium hover:text-blue-200" href="https://community.atlassian.com/user/profile/af784eda-dcd2-4fba-8282-d1cd8548b328" target="_blank">
                    Atlassian Community Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-500/50 rounded-lg">
                  <Linkedin className="w-6 h-6" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs text-blue-200 uppercase font-bold">Social</p>
                  <a className="font-medium hover:text-blue-200" href="https://www.linkedin.com/in/oleksandrtolochko/" target="_blank">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-10 md:w-3/5">
          <ContactFormClient lang={lang} labels={contact.form} />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
