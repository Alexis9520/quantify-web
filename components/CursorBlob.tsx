"use client";

import { useEffect, useRef } from "react";

export default function CursorBlob() {
  const blobRef = useRef<HTMLDivElement | null>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef<number | null>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const loop = () => {
      pos.current.x = lerp(pos.current.x, target.current.x, 0.12);
      pos.current.y = lerp(pos.current.y, target.current.y, 0.12);

      if (blobRef.current) {
        blobRef.current.style.transform = `translate(${pos.current.x - 240}px, ${pos.current.y - 240}px)`;
      }
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", move);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={blobRef}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[480px] w-[480px] opacity-40 md:opacity-30"
      style={{
        filter: "blur(40px)",
        mixBlendMode: "screen",
        background:
          "radial-gradient(380px circle at center, rgba(124,58,237,0.22), rgba(34,211,238,0.14) 40%, rgba(0,0,0,0) 60%)",
      }}
    />
  );
}