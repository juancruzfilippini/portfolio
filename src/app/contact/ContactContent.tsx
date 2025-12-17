"use client";

import Section from "@/components/Section";
import ButtonLink from "@/components/ButtonLink";
import { useLanguage } from "@/components/LanguageProvider";

export default function ContactContent() {
  const { t } = useLanguage();

  return (
    <Section title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-6 lg:grid-cols-2">
        <form
          className="glass-panel space-y-4"
          action="mailto:juan.cruz@example.com"
          method="POST"
          encType="text/plain"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-white">
              {t.contact.form.name}
            </label>
            <input
              id="name"
              name="name"
              required
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
          <ButtonLink href="mailto:juan.cruz@example.com" variant="secondary">
            {t.contact.mailtoCta}
          </ButtonLink>
          <p className="text-slate-400 text-sm">{t.contact.helper}</p>
        </div>
      </div>
    </Section>
  );
}
