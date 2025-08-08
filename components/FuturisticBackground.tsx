"use client";

export default function FuturisticBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Aurora blobs */}
      <div className="absolute -top-24 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 animate-aurora-sway blur-3xl"
           style={{
             background:
               "radial-gradient(40% 40% at 50% 50%, rgba(167,139,250,0.22) 0%, rgba(56,189,248,0.18) 40%, rgba(0,0,0,0) 70%)",
           }}
      />
      <div className="absolute top-1/3 -right-40 h-[44rem] w-[44rem] animate-aurora-sway-slow blur-[72px]"
           style={{
             background:
               "radial-gradient(35% 35% at 50% 50%, rgba(34,211,238,0.16) 0%, rgba(147,51,234,0.16) 40%, rgba(0,0,0,0) 70%)",
           }}
      />
      {/* Neon grid overlay */}
      <div className="futuristic-grid absolute inset-0 opacity-[0.22]" />
      {/* Subtle noise */}
      <div className="absolute inset-0 noise-mask opacity-[0.08]" />
    </div>
  );
}
