"use client";

import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { useLanguage } from "@/components/LanguageProvider";

export default function AboutContent() {
  const { t } = useLanguage();

  return (
    <Section title={t.about.title} subtitle={t.about.subtitle}>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="glass-panel space-y-3 lg:col-span-2">
          <h3 className="text-lg font-semibold text-white">{t.about.overviewTitle}</h3>
          <div className="space-y-3 text-slate-400">
            {t.about.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="glass-panel space-y-4">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">{t.about.skillsTitle}</h3>
            <div className="flex flex-wrap gap-2">
              {t.about.skills.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">{t.about.experienceTitle}</h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-400">
              {t.about.experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
