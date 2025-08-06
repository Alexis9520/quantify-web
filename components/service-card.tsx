"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { type LucideIcon, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  slug: string
  features: string[]
  delay?: number
}

export function ServiceCard({ icon: Icon, title, description, slug, features, delay = 0 }: ServiceCardProps) {
  return (
    <Card className="group bg-gradient-to-br from-[#1a1127]/90 to-black/90 border-purple-900/30 hover:border-purple-700/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-900/30 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-cyan-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <CardContent className="p-8 text-center relative z-10">
        <div className="mb-7 flex justify-center">
          <div className="relative p-5 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-full group-hover:from-purple-800/50 group-hover:to-cyan-900/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg shadow-purple-900/20">
            <Icon className="h-12 w-12 text-purple-400 group-hover:text-cyan-400 transition-all duration-500 group-hover:scale-110 drop-shadow-[0_2px_8px_rgba(34,6,54,0.25)]" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700/20 to-cyan-700/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        <h3 className="text-2xl font-extrabold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-cyan-300 group-hover:bg-clip-text transition-all duration-500 tracking-tight drop-shadow-[0_2px_8px_rgba(34,6,54,0.10)]">
          {title}
        </h3>

        <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-500 mb-5 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3 mb-7">
          {features.slice(0, 3).map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-2 h-2 bg-purple-700 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-500"></div>
              {feature}
            </div>
          ))}
        </div>

        <Link href={`/servicios/${slug}`}>
          <Button className="w-full bg-gradient-to-r from-purple-800/80 to-cyan-800/80 hover:from-purple-900 hover:to-cyan-950 text-white transition-all duration-500 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-purple-900/30 font-bold tracking-wide">
            Ver Detalles
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}