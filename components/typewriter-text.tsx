"use client"

import { useTypewriter } from "@/hooks/useTypewriter"

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  showCursor?: boolean
}

export function TypewriterText({
  text,
  speed = 100,
  delay = 0,
  className = "",
  showCursor = true,
}: TypewriterTextProps) {
  const { displayText, isComplete } = useTypewriter(text, speed, delay)

  return (
    <span className={className}>
      {displayText}
      {showCursor && !isComplete && <span className="animate-pulse text-purple-400">|</span>}
    </span>
  )
}
