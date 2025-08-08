"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        className="h-full origin-left rounded-r-full"
        style={{
          width: `${Math.min(100, Math.max(0, progress * 100))}%`,
          background:
            "linear-gradient(90deg, rgba(124,58,237,0.9) 0%, rgba(34,211,238,0.9) 50%, rgba(56,189,248,0.9) 100%)",
          boxShadow: "0 0 16px rgba(124,58,237,0.45), 0 0 24px rgba(34,211,238,0.35)",
        }}
      />
    </div>
  );
}