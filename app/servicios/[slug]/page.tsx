"use client"

import Link from "next/link"
import { useParams } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TypewriterText } from "@/components/typewriter-text"

import FuturisticBackground from "@/components/FuturisticBackground"
import CursorBlob from "@/components/CursorBlob"
import ScrollProgressBar from "@/components/ScrollProgressBar"
import HolographicCard from "@/components/HolographicCard"

import {
  ArrowLeft,
  Check,
  Star,
  Clock,
  Shield,
  Zap,
  Users,
  TrendingUp,
  Award,
  Headphones,
  Code,
  Cloud,
  ShoppingBag,
  Smartphone,
  Database,
  MessageCircle,
  Globe,
  Server,
  HardDrive,
} from "lucide-react"

/**
 * Servicios actualizados según tu oferta:
 * - Hosting para portafolios
 * - Hosting web
 * - Desarrollo de páginas web
 * - Desarrollo de sistemas web y de escritorio
 * - SaaS
 * - Crear catálogos y sistemas para negocios
 * - Desarrollo de aplicaciones móviles
 * - Almacenamiento en la nube
 * (+ Asesoramiento gratis como extra útil en el funnel)
 */
const servicesData = {
  "hostear-portafolios": {
    icon: Globe,
    title: "Hosting para Portafolios",
    subtitle: "Alojamiento profesional para tu presencia digital",
    description:
      "Hosting optimizado específicamente para portafolios creativos y profesionales con máximo rendimiento y disponibilidad.",
    features: [
      "SSL gratuito incluido",
      "CDN global para velocidad máxima",
      "Backup automático diario",
      "Dominio personalizado",
      "Certificados de seguridad",
      "Soporte técnico 24/7",
      "Panel de control intuitivo",
      "Optimización SEO automática",
    ],
    benefits: [
      { icon: Zap, title: "Velocidad Extrema", description: "Carga en menos de 2 segundos" },
      { icon: Shield, title: "Seguridad Avanzada", description: "Protección contra ataques DDoS" },
      { icon: TrendingUp, title: "99.9% Uptime", description: "Disponibilidad garantizada" },
      { icon: Headphones, title: "Soporte Premium", description: "Asistencia técnica especializada" },
    ],
    pricing: {
      basic: { name: "Básico", price: "$9.99", features: ["1 Portafolio", "5GB Storage", "SSL Gratuito"] },
      pro: {
        name: "Profesional",
        price: "$19.99",
        features: ["3 Portafolios", "25GB Storage", "CDN Global", "Dominio Gratis"],
      },
      enterprise: {
        name: "Empresarial",
        price: "$39.99",
        features: ["Portafolios Ilimitados", "100GB Storage", "Soporte Prioritario", "Analytics Avanzado"],
      },
    },
  },
  "hosting-web": {
    icon: Server,
    title: "Hosting Web",
    subtitle: "Alto rendimiento, disponibilidad y seguridad",
    description:
      "Soluciones de hosting web con tecnologías de vanguardia, optimizadas para sitios corporativos, e‑commerce y aplicaciones modernas.",
    features: [
      "Servidores optimizados",
      "Edge CDN y HTTP/3",
      "Backups automáticos",
      "SSL y WAF",
      "Escalado elástico",
      "Monitoreo 24/7",
      "Panel intuitivo",
      "Migración gratuita",
    ],
    benefits: [
      { icon: Code, title: "Stack Moderno", description: "Listo para SSR/ISR y APIs" },
      { icon: Users, title: "Escalable", description: "Crece con tu tráfico" },
      { icon: Award, title: "Confiable", description: "Infraestructura probada" },
      { icon: Clock, title: "Rápido", description: "TTFB y LCP optimizados" },
    ],
    pricing: {
      basic: { name: "Starter", price: "$6.99", features: ["1 Sitio", "10GB NVMe", "SSL"] },
      pro: {
        name: "Business",
        price: "$14.99",
        features: ["5 Sitios", "50GB NVMe", "CDN", "WAF"],
      },
      enterprise: {
        name: "Enterprise",
        price: "$39.99",
        features: ["Sitios Ilimitados", "200GB NVMe", "Soporte Premium", "SLA 99.99%"],
      },
    },
  },
  "paginas-web": {
    icon: Code,
    title: "Desarrollo de Páginas Web",
    subtitle: "Sitios modernos, rápidos y centrados en conversión",
    description:
      "Diseño y desarrollo de páginas web con performance de primera, SEO técnico y animaciones fluidas, usando stacks modernos.",
    features: [
      "Next.js / React",
      "SEO técnico y semántico",
      "Diseño responsive",
      "Animaciones y microinteracciones",
      "Integración CMS (Headless)",
      "Formularios y automatizaciones",
      "Mejoras de accesibilidad",
      "Analítica e informes",
    ],
    benefits: [
      { icon: Award, title: "Branding Premium", description: "UI/UX profesional y consistente" },
      { icon: TrendingUp, title: "Conversión", description: "Optimizado para resultados" },
      { icon: Shield, title: "Calidad", description: "Código limpio y testable" },
      { icon: Users, title: "Colaborativo", description: "Iteraciones y feedback continuo" },
    ],
    pricing: {
      basic: { name: "Landing", price: "$799", features: ["1 Página", "Diseño + Dev", "SEO Básico"] },
      pro: {
        name: "Web Pro",
        price: "$1,999",
        features: ["Hasta 10 páginas", "Animaciones", "Integración CMS", "SEO Avanzado"],
      },
      enterprise: {
        name: "Custom",
        price: "Custom",
        features: ["Arquitectura a medida", "Integraciones específicas", "Soporte dedicado"],
      },
    },
  },
  "sistemas-web-escritorio": {
    icon: Database,
    title: "Sistemas Web y de Escritorio",
    subtitle: "Plataformas robustas, seguras y conectadas",
    description:
      "Desarrollo de sistemas de gestión, dashboards y aplicaciones de escritorio conectadas con sincronización, control de roles y auditoría.",
    features: [
      "Autenticación + RBAC",
      "Sincronización en tiempo real",
      "Desktop (Electron/Tauri)",
      "Integración con APIs",
      "Reportes y BI",
      "Pruebas automatizadas",
      "CI/CD y versionado",
      "Monitoreo y alertas",
    ],
    benefits: [
      { icon: Shield, title: "Seguridad", description: "Cifrado y permisos granulares" },
      { icon: TrendingUp, title: "Operación", description: "Trazabilidad y auditoría" },
      { icon: Zap, title: "Performance", description: "Escala y responde rápido" },
      { icon: Users, title: "Equipos", description: "Perfiles y roles por área" },
    ],
    pricing: {
      basic: { name: "Core", price: "$2,499", features: ["Módulos esenciales", "RBAC", "API"] },
      pro: {
        name: "Pro",
        price: "$5,999",
        features: ["Módulos avanzados", "Desktop + Web", "Reportes", "CI/CD"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["Integraciones complejas", "Soporte dedicado", "SLA personalizado"],
      },
    },
  },
  saas: {
    icon: Cloud,
    title: "SaaS",
    subtitle: "Software como servicio escalable",
    description:
      "Plataformas SaaS multi‑tenant con facturación, onboarding, permisos y métricas en tiempo real sobre infraestructura cloud.",
    features: [
      "Arquitectura cloud‑native",
      "API REST completa",
      "Dashboard administrativo",
      "Usuarios y roles",
      "Integración con terceros",
      "Métricas y analytics",
      "Auto escalado",
      "Seguridad enterprise",
    ],
    benefits: [
      { icon: Cloud, title: "Cloud Native", description: "Resiliente y eficiente" },
      { icon: Shield, title: "Segura", description: "Encriptación end‑to‑end" },
      { icon: TrendingUp, title: "Métricas", description: "Observabilidad total" },
      { icon: Users, title: "Multi‑tenant", description: "Aislamiento por cliente" },
    ],
    pricing: {
      basic: { name: "MVP", price: "$499", features: ["Core features", "Hasta 100 usuarios", "Soporte email"] },
      pro: {
        name: "Scale",
        price: "$999",
        features: ["Avanzado", "Hasta 1000 usuarios", "API completa", "Soporte prioritario"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["Personalizado", "Ilimitado", "Integraciones", "Soporte dedicado"],
      },
    },
  },
  "catalogos-sistemas": {
    icon: ShoppingBag,
    title: "Catálogos y Sistemas para Negocios",
    subtitle: "Gestión integral de productos, ventas y stock",
    description:
      "Catálogos online, inventario, POS y órdenes integradas con reportes en tiempo real y experiencia de compra optimizada.",
    features: [
      "Catálogo digital interactivo",
      "Inventario y variantes",
      "Gestión de pedidos",
      "Panel administrativo",
      "Reportes automáticos",
      "Integración con pagos",
      "App móvil incluida",
      "Sincronización en tiempo real",
    ],
    benefits: [
      { icon: ShoppingBag, title: "E‑commerce Ready", description: "Checkout integrado" },
      { icon: TrendingUp, title: "Gestión Inteligente", description: "Automatización de procesos" },
      { icon: Users, title: "Multiusuario", description: "Roles y permisos" },
      { icon: Award, title: "Experiencia Premium", description: "UI intuitiva" },
    ],
    pricing: {
      basic: { name: "Catálogo", price: "$149", features: ["Catálogo", "100 productos", "Panel básico"] },
      pro: {
        name: "Sistema Pro",
        price: "$299",
        features: ["Inventario", "1000 productos", "Reportes", "Integraciones"],
      },
      enterprise: {
        name: "Enterprise",
        price: "$599",
        features: ["Ilimitado", "Módulos avanzados", "Soporte Premium"],
      },
    },
  },
  "aplicaciones-moviles": {
    icon: Smartphone,
    title: "Desarrollo de Aplicaciones Móviles",
    subtitle: "Apps nativas e híbridas para iOS y Android",
    description:
      "Aplicaciones modernas con UX excepcional, rendimiento optimizado, notificaciones y soporte offline‑first.",
    features: [
      "Nativo iOS/Android",
      "Híbridas (RN/Expo)",
      "Diseño UX/UI pro",
      "Integración con APIs",
      "Push notifications",
      "Analytics integrado",
      "Publicación en stores",
      "Mantenimiento y updates",
    ],
    benefits: [
      { icon: Smartphone, title: "Multiplataforma", description: "iOS y Android" },
      { icon: Zap, title: "Performance", description: "Animaciones fluidas" },
      { icon: Users, title: "UX Excepcional", description: "Diseño centrado en el usuario" },
      { icon: TrendingUp, title: "Escalable", description: "Arquitectura preparada" },
    ],
    pricing: {
      basic: { name: "App Básica", price: "$2,999", features: ["Híbrida", "5 pantallas", "Core features"] },
      pro: {
        name: "App Pro",
        price: "$5,999",
        features: ["Nativa", "15 pantallas", "Integraciones", "Push"],
      },
      enterprise: {
        name: "App Enterprise",
        price: "$12,999",
        features: ["Completa", "Ilimitadas", "Backend", "Mantenimiento 1 año"],
      },
    },
  },
  "almacenamiento-nube": {
    icon: HardDrive,
    title: "Almacenamiento en la Nube",
    subtitle: "Storage seguro, rápido y escalable",
    description:
      "Almacenamiento cifrado con enlaces firmados, CDN, versionado y monitoreo 24/7, compatible con S3.",
    features: [
      "Storage escalable",
      "Backups automáticos",
      "Multi‑dispositivo",
      "Encriptación avanzada",
      "Control de acceso",
      "Versionado de archivos",
      "API para devs",
      "Monitoreo 24/7",
    ],
    benefits: [
      { icon: Database, title: "Capacidad", description: "Escala según demanda" },
      { icon: Shield, title: "Seguridad", description: "AES‑256 + rotación de claves" },
      { icon: Clock, title: "Disponibilidad", description: "SLA 99.9%" },
      { icon: Zap, title: "Velocidad", description: "CDN y transferencias rápidas" },
    ],
    pricing: {
      basic: { name: "Personal", price: "$4.99", features: ["100GB", "3 dispositivos", "Soporte email"] },
      pro: {
        name: "Profesional",
        price: "$14.99",
        features: ["1TB", "Ilimitado", "Colaboración", "Soporte prioritario"],
      },
      enterprise: {
        name: "Empresarial",
        price: "$49.99",
        features: ["Ilimitado", "Gestión avanzada", "API completa", "Soporte dedicado"],
      },
    },
  },
  asesoramiento: {
    icon: MessageCircle,
    title: "Asesoramiento Gratuito",
    subtitle: "Consultoría sin costo para tu proyecto",
    description:
      "Análisis completo y recomendaciones personalizadas. Te guiamos para definir la mejor estrategia y roadmap.",
    features: [
      "Análisis de requerimientos",
      "Recomendaciones técnicas",
      "Estimación de tiempos",
      "Propuesta de arquitectura",
      "Roadmap del proyecto",
      "Análisis de competencia",
      "Estrategia de lanzamiento",
      "Plan de escalabilidad",
    ],
    benefits: [
      { icon: MessageCircle, title: "Gratis", description: "Sin compromiso" },
      { icon: Award, title: "Experiencia", description: "+100 proyectos" },
      { icon: Users, title: "Equipo experto", description: "Consultores especializados" },
      { icon: TrendingUp, title: "Estrategia", description: "Orientada a resultados" },
    ],
    pricing: {
      basic: { name: "Consulta Básica", price: "Gratis", features: ["30 min", "Análisis inicial", "Recomendaciones"] },
      pro: { name: "Análisis Completo", price: "Gratis", features: ["60 min", "Propuesta técnica", "Roadmap"] },
      enterprise: { name: "Consultoría Premium", price: "Gratis", features: ["90 min", "Análisis profundo", "Seguimiento"] },
    },
  },
} as const

// Alias opcional para compatibilidad con rutas antiguas
;(servicesData as any)["desarrollo-personalizado"] = servicesData["paginas-web"]

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = servicesData[slug as keyof typeof servicesData]

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-[#220636]/40 to-[#003246]/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Servicio no encontrado</h1>
          <Link href="/">
            <Button className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950">
              Volver al inicio
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const HeroIcon = service.icon

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0716] to-[#00121a] relative overflow-hidden">
      {/* Capas globales futuristas */}
      <FuturisticBackground />
      <CursorBlob />
      <ScrollProgressBar />

      {/* Glow aurora extra */}
      <div
        className="pointer-events-none absolute inset-x-0 -top-24 h-[420px] blur-3xl opacity-30 -z-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(139,92,246,0.25) 0%, rgba(34,211,238,0.18) 50%, rgba(0,0,0,0) 70%)",
        }}
      />

      {/* Nav */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1120px)] rounded-2xl border border-white/10 bg-[#0e0b1f]/70 backdrop-blur-xl transition-all duration-300 neon-border">
        <div className="px-5 py-3 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:opacity-90"
          >
            Quantify
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-white/15 text-white/80 hover:bg-white/5">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-28 pb-12 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-10 relative">
              <div className="mx-auto mb-6 inline-flex items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 px-4 py-2 gap-2">
                <div className="p-2 rounded-xl bg-gradient-to-br from-purple-700/30 to-cyan-600/20">
                  <HeroIcon className="h-5 w-5 text-purple-300" />
                </div>
                <span className="text-sm text-white/70">Servicio</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-[0_4px_24px_rgba(109,40,217,0.20)]">
                <TypewriterText text={service.title} speed={70} />
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-800 to-cyan-700 mx-auto mb-6 animate-pulse rounded-full shadow-lg shadow-purple-900/20" />
              <p className="text-xl md:text-2xl text-purple-200/90 font-semibold mb-3">{service.subtitle}</p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
            </div>
          </AnimatedSection>

          {/* Quick badges */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {["Rendimiento", "Seguridad", "Escalabilidad", "Soporte"].map((b, i) => (
                <span
                  key={i}
                  className="text-xs md:text-sm text-white/80 rounded-full px-3 py-1 bg-white/5 ring-1 ring-white/10"
                >
                  {b}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ¿Por qué elegir este servicio?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {service.benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 150}>
                <HolographicCard className="p-6 hover:scale-[1.02] transition-transform duration-500">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-purple-700/30 to-cyan-600/20 ring-1 ring-white/10">
                      <benefit.icon className="h-6 w-6 text-purple-300" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
                  </div>
                  <p className="text-gray-300">{benefit.description}</p>
                </HolographicCard>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Características Incluidas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.features.map((feature, index) => (
              <AnimatedSection key={index} animation="fadeInLeft" delay={index * 80}>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 ring-1 ring-white/10 hover:bg-white/7 hover:ring-white/20 transition-colors">
                  <Check className="h-5 w-5 text-emerald-400" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Planes y Precios
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(service.pricing).map(([key, plan], index) => (
              <AnimatedSection key={key} animation="scaleIn" delay={index * 150}>
                <HolographicCard className={`relative p-8 ${key === "pro" ? "ring-1 ring-purple-400/30" : ""}`}>
                  {key === "pro" && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-800 to-cyan-800 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg shadow-purple-900/15">
                        <Star className="h-4 w-4 mr-1" />
                        Más Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="mb-6">
                      <span className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== "Gratis" && plan.price !== "Custom" && (
                        <span className="text-gray-400 text-lg">/mes</span>
                      )}
                    </div>
                    <div className="space-y-3 mb-7 text-left">
                      {plan.features.map((f: string, i: number) => (
                        <div key={i} className="flex items-center text-gray-200">
                          <Check className="h-4 w-4 text-emerald-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{f}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full transition-all duration-500 hover:scale-[1.02] ${
                        key === "pro"
                          ? "bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950"
                          : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-purple-800/40 hover:to-cyan-800/40"
                      }`}
                    >
                      {plan.price === "Gratis" ? "Solicitar Consulta" : plan.price === "Custom" ? "Solicitar Cotización" : "Comenzar Ahora"}
                    </Button>
                  </div>
                </HolographicCard>
              </AnimatedSection>
            ))}
          </div>

          {/* Included CTA bullets */}
          <AnimatedSection animation="fadeInUp" delay={600}>
            <div className="max-w-4xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Seguridad de grado empresarial" },
                { icon: Headphones, label: "Soporte 24/7" },
                { icon: Award, label: "Calidad garantizada" },
              ].map((b, i) => (
                <div key={i} className="flex items-center justify-center gap-3 p-3 rounded-xl bg-white/5 ring-1 ring-white/10">
                  <b.icon className="h-5 w-5 text-purple-300" />
                  <span className="text-gray-200 text-sm">{b.label}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center neon-border rounded-2xl p-12 bg-black/40 backdrop-blur-md">
              <h2 className="text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Cuéntanos tu idea y te proponemos la mejor ruta. Agenda una consulta gratuita y armemos tu roadmap.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#contacto">
                  <Button className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/25">
                    Consulta Gratuita
                  </Button>
                </Link>
                <Link href="/">
                  <Button
                    variant="outline"
                    className="border-white/20 text-white/90 hover:bg-white/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105"
                  >
                    Ver más servicios
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}