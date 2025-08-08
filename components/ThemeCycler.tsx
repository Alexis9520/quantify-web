"use client";

import { useEffect, useRef, useState } from "react";
import { Paintbrush } from "lucide-react";

const THEMES = ["aurora", "miami", "cyber"] as const;
type Theme = typeof THEMES[number];

export default function ThemeCycler({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>("aurora");
  const [auto, setAuto] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => {
      document.documentElement.removeAttribute("data-theme");
    };
  }, [theme]);

  useEffect(() => {
    if (!auto) {
      if (timer.current) cancelAnimationFrame(timer.current);
      timer.current = null;
      return;
    }
    let last = performance.now();
    let acc = 0;
    const step = (t: number) => {
      const dt = t - last;
      last = t;
      acc += dt;
      if (acc > 8000) { // cada 8s
        acc = 0;
        setTheme((prev) => {
          const idx = THEMES.indexOf(prev);
          return THEMES[(idx + 1) % THEMES.length];
        });
      }
      timer.current = requestAnimationFrame(step);
    };
    timer.current = requestAnimationFrame(step);
    return () => {
      if (timer.current) cancelAnimationFrame(timer.current);
      timer.current = null;
    };
  }, [auto]);

  return (
    <div className={`flex items-center gap-2 rounded-full border border-white/10 bg-black/50 backdrop-blur-md p-2 ${className}`}>
      <div className="px-2 text-xs text-white/70 flex items-center gap-1">
        <Paintbrush size={14} />
        Tema
      </div>
      <div className="flex items-center gap-2">
        {THEMES.map((t) => (
          <button
            key={t}
            aria-label={`Cambiar a tema ${t}`}
            onClick={() => setTheme(t)}
            className={`h-7 w-7 rounded-full ring-1 ring-white/20 transition-transform hover:scale-105 focus:outline-none ${theme === t ? "ring-2 ring-white/60" : ""}`}
            style={{
              background: `linear-gradient(135deg, var(--accent-1), var(--accent-2))`,
              filter:
                t === theme
                  ? "brightness(1.1) saturate(1.2)"
                  : "brightness(0.95) saturate(0.9)",
            }}
            data-theme-preview={t}
            onMouseEnter={(e) => {
              // vista previa suave en hover sin perder selección
              const el = e.currentTarget as HTMLButtonElement;
              const prev = el.getAttribute("data-theme-preview") as Theme;
              document.documentElement.dataset.theme = prev;
            }}
            onMouseLeave={() => {
              document.documentElement.dataset.theme = theme;
            }}
          />
        ))}
      </div>
      <div className="mx-1 h-5 w-px bg-white/10" />
      <label className="flex items-center gap-2 text-xs text-white/70 cursor-pointer select-none px-2">
        <input
          type="checkbox"
          checked={auto}
          onChange={(e) => setAuto(e.target.checked)}
          className="accent-current"
        />
        Auto
      </label>
    </div>
  );
}