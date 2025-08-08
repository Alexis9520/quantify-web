"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Command, Search } from "lucide-react";

type Item = { label: string; href: string; keywords?: string[] };

export default function CommandPalette({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [i, setI] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const hotkey = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k";
      if (hotkey) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (open) {
      setQ("");
      setI(0);
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [open]);

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return items;
    return items.filter((it) =>
      [it.label, ...(it.keywords || [])].join(" ").toLowerCase().includes(term)
    );
  }, [q, items]);

  const go = (idx: number) => {
    const it = filtered[idx];
    if (!it) return;
    setOpen(false);
    const el = document.querySelector(it.href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.location.href = it.href;
  };

  if (!open) return null;

  return (
    <div className="palette-backdrop">
      <div className="palette-panel">
        <div className="flex items-center gap-2 px-3">
          <Search size={16} className="text-white/60" />
          <input
            ref={inputRef}
            className="flex-1 bg-transparent outline-none text-white placeholder-white/40 py-3"
            placeholder="Buscar: servicios, contacto, asesoría..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setI((v) => Math.min(v + 1, filtered.length - 1)); }
              if (e.key === "ArrowUp")   { e.preventDefault(); setI((v) => Math.max(v - 1, 0)); }
              if (e.key === "Enter")     { e.preventDefault(); go(i); }
            }}
          />
          <div className="hidden md:flex items-center gap-1 text-[10px] text-white/50 bg-white/10 px-2 py-1 rounded">
            <Command size={10} />K
          </div>
        </div>
        <div className="max-h-72 overflow-auto">
          {filtered.map((it, idx) => (
            <button
              key={it.label}
              onClick={() => go(idx)}
              onMouseEnter={() => setI(idx)}
              className={`w-full text-left px-4 py-3 text-white/90 hover:bg-white/5 transition-colors ${idx === i ? "bg-white/10" : ""}`}
            >
              {it.label}
              {it.keywords?.length ? (
                <span className="ml-2 text-xs text-white/40">{it.keywords.join(" • ")}</span>
              ) : null}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}