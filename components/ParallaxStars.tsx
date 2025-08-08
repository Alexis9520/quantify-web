"use client";

import { useEffect, useRef } from "react";

export default function ParallaxStars({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const parallax = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const raf = useRef<number | null>(null);
  const starsRef = useRef<Array<{ x: number; y: number; z: number; s: number }>>([]);

  useEffect(() => {
    const c = canvasRef.current!;
    const ctx = c.getContext("2d", { alpha: true })!;
    const dpr = Math.min(devicePixelRatio || 1, 2);

    const resize = () => {
      c.width = Math.floor(innerWidth * dpr);
      c.height = Math.floor(innerHeight * dpr);
      c.style.width = innerWidth + "px";
      c.style.height = innerHeight + "px";
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initStars();
    };

    const initStars = () => {
      const count = Math.min(400, Math.floor((innerWidth * innerHeight) / 6000));
      const stars: typeof starsRef.current = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          z: Math.random() * 1 + 0.3, // profundidad 0.3..1.3
          s: Math.random() * 1.6 + 0.2, // tamaño base
        });
      }
      starsRef.current = stars;
    };

    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      parallax.current.tx = x;
      parallax.current.ty = y;
    };

    const onScroll = () => {
      parallax.current.ty = (scrollY / (document.body.scrollHeight - innerHeight)) * 2 - 1;
    };

    const loop = () => {
      const { x, y, tx, ty } = parallax.current;
      parallax.current.x += (tx - x) * 0.04;
      parallax.current.y += (ty - y) * 0.04;

      ctx.clearRect(0, 0, innerWidth, innerHeight);
      ctx.globalCompositeOperation = "lighter";

      const ax = parallax.current.x * 12;
      const ay = parallax.current.y * 10;

      for (const st of starsRef.current) {
        const px = st.x + ax * (1.4 - st.z);
        const py = st.y + ay * (1.4 - st.z);
        const size = st.s * (2.0 - st.z);
        const alpha = 0.25 * (2.0 - st.z);

        ctx.beginPath();
        ctx.fillStyle = `rgba(200,230,255,${alpha.toFixed(3)})`;
        ctx.arc(((px % innerWidth) + innerWidth) % innerWidth, ((py % innerHeight) + innerHeight) % innerHeight, size, 0, Math.PI * 2);
        ctx.fill();
      }

      raf.current = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 -z-[1] ${className}`}
    />
  );
}