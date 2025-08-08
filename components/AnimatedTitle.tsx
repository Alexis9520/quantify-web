"use client";

import React from "react";
import clsx from "clsx";

export default function AnimatedTitle({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const chars = Array.from(text);

  return (
    <div className={clsx("title-animated inline-block relative", className)}>
      {chars.map((ch, i) => (
        <span
          key={i}
          className="title-char"
          style={{ animationDelay: `${i * 70}ms` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
      <span className="title-shine" aria-hidden />
    </div>
  );
}