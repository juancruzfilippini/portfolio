"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";

const CONTACT_EMAIL = "juancruzfilippini@gmail.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/juan-cruz-filippini-castell-72a38126b/";
const GITHUB_URL = "https://github.com/juancruzfilippini";
const WHATSAPP_URL = "https://wa.me/5492616568016";

export default function ContactContent() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(t.contact.title);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\n\n${message}`);
    return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }, [email, message, name, t.contact.title]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoHref;
  };

  return (
    <Section title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-6 lg:grid-cols-2">
        <form className="glass-panel space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-white">
              {t.contact.form.name}
            </label>
            <input
              id="name"
              name="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-white">
              {t.contact.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-semibold text-white">
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-lg border border-slate-800/60 bg-slate-900/50 px-3 py-2 text-sm text-white outline-none focus:border-cyan-400"
            />
          </div>
          <p className="text-xs text-slate-400">{t.contact.note}</p>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          >
            {t.contact.form.submit}
          </button>
        </form>

        <div className="glass-panel space-y-3">
          <h3 className="text-lg font-semibold text-white">{t.contact.directHeading}</h3>
          <p className="text-slate-400">{t.contact.emailLabel}</p>
          <ButtonLink href={`mailto:${CONTACT_EMAIL}`} variant="secondary">
            {t.contact.mailtoCta}
          </ButtonLink>
          <div className="space-y-3 pt-2">
            <p className="text-slate-400">{t.contact.socialHeading}</p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href={LINKEDIN_URL} target="_blank" rel="noreferrer" variant="secondary">
                {t.contact.linkedin}
              </ButtonLink>
              <ButtonLink href={GITHUB_URL} target="_blank" rel="noreferrer" variant="secondary">
                {t.contact.github}
              </ButtonLink>
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="secondary">
                {t.contact.whatsapp}
              </ButtonLink>
            </div>
          </div>
          <p className="text-slate-400 text-sm">{t.contact.helper}</p>
        </div>
      </div>
    </Section>
  );
}
