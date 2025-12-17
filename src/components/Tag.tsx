import type { PropsWithChildren } from "react";

export default function Tag({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-800 bg-white/5 px-3 py-1 text-xs font-semibold text-cyan-100 shadow-sm shadow-cyan-500/10">
      {children}
    </span>
  );
}
