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
                <span className="inline-flex items-center gap-2">
                  <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 8.98h3.96V21H3V8.98Zm7.12 0h3.8v1.64h.06c.53-1 1.83-2.06 3.76-2.06 4.02 0 4.76 2.64 4.76 6.08V21h-3.96v-5.68c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.47-2.17 2.98V21h-3.96V8.98Z" />
                  </svg>
                  {t.contact.linkedin}
                </span>
              </ButtonLink>
              <ButtonLink href={GITHUB_URL} target="_blank" rel="noreferrer" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.62 2 12.28c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.38-2.04 1.01-2.76-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.72 1.02.79-.23 1.63-.34 2.47-.34.84 0 1.68.12 2.47.34 1.89-1.29 2.72-1.02 2.72-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.64 1.01 2.76 0 3.96-2.34 4.83-4.57 5.08.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49 3.96-1.36 6.83-5.2 6.83-9.72C22 6.62 17.52 2 12 2Z" />
                  </svg>
                  {t.contact.github}
                </span>
              </ButtonLink>
              <ButtonLink href={WHATSAPP_URL} target="_blank" rel="noreferrer" variant="secondary">
                <span className="inline-flex items-center gap-2">
                  <svg aria-hidden className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.52 3.5A11.82 11.82 0 0 0 12.05 0C5.46 0 .1 5.38.1 11.99c0 2.11.55 4.17 1.6 6L0 24l6.2-1.63a11.88 11.88 0 0 0 5.85 1.49h.01c6.6 0 11.96-5.38 11.96-11.99 0-3.2-1.24-6.2-3.5-8.37Zm-8.47 17.35h-.01a9.93 9.93 0 0 1-5.07-1.39l-.36-.22-3.68.97.98-3.6-.24-.37a9.95 9.95 0 0 1-1.52-5.27c0-5.5 4.5-9.98 10.03-9.98 2.67 0 5.18 1.04 7.06 2.93a9.9 9.9 0 0 1 2.92 7.05c0 5.5-4.5 9.98-10.12 9.98Zm5.5-7.48c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.69.15-.2.3-.79.97-.97 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.48-2.41-1.53-.89-.82-1.49-1.84-1.66-2.15-.17-.3-.02-.46.13-.61.13-.13.3-.36.46-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.69-1.69-.95-2.32-.25-.6-.5-.52-.69-.52l-.59-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.46 0 1.45 1.07 2.86 1.22 3.06.15.2 2.1 3.21 5.08 4.5.71.3 1.26.49 1.69.62.71.23 1.35.2 1.86.12.57-.09 1.77-.73 2.02-1.43.25-.7.25-1.3.17-1.43-.08-.13-.28-.2-.59-.35Z" />
                  </svg>
                  {t.contact.whatsapp}
                </span>
              </ButtonLink>
            </div>
          </div>
          <p className="text-slate-400 text-sm">{t.contact.helper}</p>
        </div>
      </div>
    </Section>
  );
}
