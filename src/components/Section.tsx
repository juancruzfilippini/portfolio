import type { PropsWithChildren, ReactNode } from "react";

type SectionProps = PropsWithChildren<{
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  id?: string;
}>;

export default function Section({ title, subtitle, actions, id, children }: SectionProps) {
  return (
    <section id={id} className="mb-12 space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="section-title">{title}</h2>
          {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
        </div>
        {actions}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
