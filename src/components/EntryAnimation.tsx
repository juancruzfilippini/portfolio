"use client";

import { useEffect, useState } from "react";

type EntryAnimationProps = {
  children: React.ReactNode;
};

export default function EntryAnimation({ children }: EntryAnimationProps) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsAnimating(false);
      return;
    }

    const timer = window.setTimeout(() => {
      setIsAnimating(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <div
        className={`transition-all duration-700 ${
          isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        {children}
      </div>
      {isAnimating ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 backdrop-blur-md animate-[entryFade_1.4s_ease-in-out_forwards]"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute inset-0 rounded-full border border-cyan-300/60 animate-[entryPulse_1.4s_ease-in-out_infinite]" />
              <span className="absolute inset-0 rounded-full border border-cyan-300/30 animate-[entryPulse_1.4s_ease-in-out_infinite_0.2s]" />
              <span className="text-xl font-semibold text-white">JF</span>
            </div>
            <span className="text-xs uppercase tracking-[0.4em] text-cyan-200">Bienvenido</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
