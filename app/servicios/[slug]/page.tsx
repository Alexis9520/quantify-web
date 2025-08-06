"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { TypewriterText } from "@/components/typewriter-text"
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
} from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const servicesData = {
  "hostear-portafolios": {
    title: "Hostear Portafolios",
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
    title: "Hosting Web y Creación",
    subtitle: "Desarrollo y alojamiento de sitios web modernos",
    description:
      "Soluciones completas de hosting y desarrollo web con tecnologías de vanguardia para empresas de todos los tamaños.",
    features: [
      "Desarrollo web personalizado",
      "Hosting de alta performance",
      "Diseño responsive",
      "Optimización SEO",
      "Integración con CMS",
      "E-commerce ready",
      "Mantenimiento incluido",
      "Analytics y reportes",
    ],
    benefits: [
      { icon: Code, title: "Tecnología Moderna", description: "React, Next.js, Node.js" },
      { icon: Users, title: "Escalabilidad", description: "Crece con tu negocio" },
      { icon: Award, title: "Diseño Premium", description: "Interfaces atractivas y funcionales" },
      { icon: Clock, title: "Entrega Rápida", description: "Proyectos en tiempo récord" },
    ],
    pricing: {
      basic: { name: "Starter", price: "$29.99", features: ["Sitio Web Básico", "Hosting 1 Año", "5 Páginas"] },
      pro: {
        name: "Business",
        price: "$79.99",
        features: ["Sitio Web Avanzado", "E-commerce", "SEO Optimizado", "10 Páginas"],
      },
      enterprise: {
        name: "Enterprise",
        price: "$199.99",
        features: ["Desarrollo Personalizado", "Funcionalidades Avanzadas", "Soporte Premium", "Páginas Ilimitadas"],
      },
    },
  },
  saas: {
    title: "SaaS Solutions",
    subtitle: "Software como servicio personalizado",
    description:
      "Desarrollamos plataformas SaaS escalables y seguras adaptadas a las necesidades específicas de tu industria.",
    features: [
      "Arquitectura cloud-native",
      "API REST completa",
      "Dashboard administrativo",
      "Sistema de usuarios y roles",
      "Integración con terceros",
      "Métricas y analytics",
      "Escalabilidad automática",
      "Seguridad enterprise",
    ],
    benefits: [
      { icon: Cloud, title: "Cloud Native", description: "Infraestructura moderna y escalable" },
      { icon: Shield, title: "Seguridad Avanzada", description: "Encriptación end-to-end" },
      { icon: TrendingUp, title: "Analytics Integrado", description: "Métricas en tiempo real" },
      { icon: Users, title: "Multi-tenant", description: "Soporte para múltiples clientes" },
    ],
    pricing: {
      basic: {
        name: "MVP",
        price: "$499",
        features: ["Funcionalidades Básicas", "Hasta 100 usuarios", "Soporte Email"],
      },
      pro: {
        name: "Scale",
        price: "$999",
        features: ["Funcionalidades Avanzadas", "Hasta 1000 usuarios", "API Completa", "Soporte Prioritario"],
      },
      enterprise: {
        name: "Enterprise",
        price: "Custom",
        features: ["Desarrollo Personalizado", "Usuarios Ilimitados", "Integraciones Custom", "Soporte Dedicado"],
      },
    },
  },
  "catalogos-sistemas": {
    title: "Catálogos y Sistemas",
    subtitle: "Sistemas de gestión para tu negocio",
    description:
      "Catálogos digitales y sistemas de gestión empresarial que optimizan tus procesos y mejoran la experiencia del cliente.",
    features: [
      "Catálogo digital interactivo",
      "Sistema de inventario",
      "Gestión de pedidos",
      "Panel administrativo",
      "Reportes automáticos",
      "Integración con pagos",
      "App móvil incluida",
      "Sincronización en tiempo real",
    ],
    benefits: [
      { icon: ShoppingBag, title: "E-commerce Ready", description: "Venta online integrada" },
      { icon: TrendingUp, title: "Gestión Inteligente", description: "Automatización de procesos" },
      { icon: Users, title: "Multi-usuario", description: "Acceso para todo el equipo" },
      { icon: Award, title: "Experiencia Premium", description: "Interfaz intuitiva y moderna" },
    ],
    pricing: {
      basic: { name: "Catálogo", price: "$149", features: ["Catálogo Digital", "Hasta 100 productos", "Panel Básico"] },
      pro: {
        name: "Sistema Pro",
        price: "$299",
        features: ["Sistema Completo", "Hasta 1000 productos", "Gestión de Inventario", "Reportes"],
      },
      enterprise: {
        name: "Enterprise",
        price: "$599",
        features: ["Sistema Avanzado", "Productos Ilimitados", "Integraciones", "Soporte Premium"],
      },
    },
  },
  "aplicaciones-moviles": {
    title: "Aplicaciones Móviles",
    subtitle: "Apps nativas e híbridas para iOS y Android",
    description:
      "Desarrollo de aplicaciones móviles modernas con experiencia de usuario excepcional y rendimiento optimizado.",
    features: [
      "Desarrollo nativo iOS/Android",
      "Apps híbridas con React Native",
      "Diseño UX/UI profesional",
      "Integración con APIs",
      "Push notifications",
      "Analytics integrado",
      "Publicación en stores",
      "Mantenimiento y updates",
    ],
    benefits: [
      { icon: Smartphone, title: "Multiplataforma", description: "iOS y Android simultáneo" },
      { icon: Zap, title: "Performance", description: "Velocidad y fluidez nativa" },
      { icon: Users, title: "UX Excepcional", description: "Diseño centrado en el usuario" },
      { icon: TrendingUp, title: "Escalable", description: "Crece con tu audiencia" },
    ],
    pricing: {
      basic: {
        name: "App Básica",
        price: "$2,999",
        features: ["App Híbrida", "5 Pantallas", "Funcionalidades Básicas"],
      },
      pro: {
        name: "App Profesional",
        price: "$5,999",
        features: ["App Nativa", "15 Pantallas", "Integraciones", "Push Notifications"],
      },
      enterprise: {
        name: "App Enterprise",
        price: "$12,999",
        features: ["App Completa", "Pantallas Ilimitadas", "Backend Incluido", "Mantenimiento 1 Año"],
      },
    },
  },
  "almacenamiento-nube": {
    title: "Almacenamiento en la Nube",
    subtitle: "Soluciones de storage seguro y escalable",
    description:
      "Servicios de almacenamiento en la nube con alta disponibilidad, seguridad avanzada y escalabilidad automática.",
    features: [
      "Storage ilimitado",
      "Backup automático",
      "Sincronización multi-dispositivo",
      "Encriptación avanzada",
      "Control de acceso granular",
      "Versionado de archivos",
      "API para desarrolladores",
      "Monitoreo 24/7",
    ],
    benefits: [
      { icon: Database, title: "Capacidad Ilimitada", description: "Escala según tus necesidades" },
      { icon: Shield, title: "Seguridad Máxima", description: "Encriptación AES-256" },
      { icon: Clock, title: "Disponibilidad 99.9%", description: "Acceso garantizado" },
      { icon: Zap, title: "Velocidad Extrema", description: "Transferencias ultrarrápidas" },
    ],
    pricing: {
      basic: { name: "Personal", price: "$4.99", features: ["100GB Storage", "Sync 3 Dispositivos", "Soporte Email"] },
      pro: {
        name: "Profesional",
        price: "$14.99",
        features: ["1TB Storage", "Sync Ilimitado", "Colaboración", "Soporte Prioritario"],
      },
      enterprise: {
        name: "Empresarial",
        price: "$49.99",
        features: ["Storage Ilimitado", "Gestión Avanzada", "API Completa", "Soporte Dedicado"],
      },
    },
  },
  "desarrollo-personalizado": {
    title: "Desarrollo Web Personalizado",
    subtitle: "Desarrollo a medida con tecnologías de vanguardia",
    description:
      "Soluciones de desarrollo web completamente personalizadas utilizando las tecnologías más modernas del mercado.",
    features: [
      "Desarrollo full-stack",
      "Tecnologías modernas",
      "Arquitectura escalable",
      "Testing automatizado",
      "CI/CD pipeline",
      "Documentación completa",
      "Código limpio y mantenible",
      "Soporte post-lanzamiento",
    ],
    benefits: [
      { icon: Code, title: "Tecnología Cutting-edge", description: "React, Next.js, TypeScript, Node.js" },
      { icon: Award, title: "Calidad Premium", description: "Código limpio y documentado" },
      { icon: TrendingUp, title: "Escalabilidad", description: "Arquitectura preparada para crecer" },
      { icon: Headphones, title: "Soporte Continuo", description: "Mantenimiento y actualizaciones" },
    ],
    pricing: {
      basic: {
        name: "Proyecto Pequeño",
        price: "$1,999",
        features: ["Hasta 2 semanas", "Funcionalidades Básicas", "1 Revisión"],
      },
      pro: {
        name: "Proyecto Mediano",
        price: "$4,999",
        features: ["Hasta 6 semanas", "Funcionalidades Avanzadas", "3 Revisiones", "Testing"],
      },
      enterprise: {
        name: "Proyecto Grande",
        price: "$12,999",
        features: ["Hasta 12 semanas", "Desarrollo Completo", "Revisiones Ilimitadas", "Soporte 6 meses"],
      },
    },
  },
  asesoramiento: {
    title: "Asesoramiento Gratuito",
    subtitle: "Consultoría sin costo para tu proyecto",
    description:
      "Análisis completo de tu proyecto y recomendaciones personalizadas sin ningún costo. Te ayudamos a definir la mejor estrategia.",
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
      { icon: MessageCircle, title: "Consulta Gratuita", description: "Sin compromiso ni costo" },
      { icon: Award, title: "Experiencia Comprobada", description: "+100 proyectos exitosos" },
      { icon: Users, title: "Equipo Experto", description: "Consultores especializados" },
      { icon: TrendingUp, title: "Estrategia Personalizada", description: "Adaptada a tu negocio" },
    ],
    pricing: {
      basic: {
        name: "Consulta Básica",
        price: "Gratis",
        features: ["30 min de consulta", "Análisis inicial", "Recomendaciones básicas"],
      },
      pro: {
        name: "Análisis Completo",
        price: "Gratis",
        features: ["60 min de consulta", "Análisis detallado", "Propuesta técnica", "Roadmap"],
      },
      enterprise: {
        name: "Consultoría Premium",
        price: "Gratis",
        features: ["90 min de consulta", "Análisis profundo", "Propuesta completa", "Seguimiento"],
      },
    },
  },
}

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
            <Button className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950">Volver al inicio</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#220636]/40 to-[#003246]/20 relative overflow-hidden">
      {/* Aurora/particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg
          className="absolute w-full h-full"
          style={{ opacity: 0.22 }}
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="aurora1" cx="80%" cy="40%" r="65%" fx="90%" fy="25%" gradientTransform="rotate(30)">
              <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#312e81" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0e0b1f" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="aurora2" cx="20%" cy="80%" r="70%" fx="25%" fy="90%" gradientTransform="rotate(20)">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="80%" stopColor="#164e63" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#0e0b1f" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="1440" height="900" fill="url(#aurora1)" />
          <rect width="1440" height="900" fill="url(#aurora2)" />
        </svg>
        {/* Particle stars */}
        {[...Array(35)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              filter: "blur(0.5px)",
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0b1f]/90 backdrop-blur-md border-b border-purple-900/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Quantify
          </Link>
          <Link href="/">
            <Button
              variant="outline"
              className="border-purple-800 text-purple-400 hover:bg-purple-900/10 bg-transparent"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-black mb-6 text-white drop-shadow-[0_4px_24px_rgba(109,40,217,0.20)]">
                <TypewriterText text={service.title} speed={80} />
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-800 to-cyan-700 mx-auto mb-8 animate-pulse rounded-full shadow-lg shadow-purple-900/20"></div>
              <p className="text-xl md:text-2xl text-purple-300 font-semibold mb-4">{service.subtitle}</p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{service.description}</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              ¿Por qué elegir este servicio?
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 200}>
                <Card className="bg-gradient-to-br from-[#1a1127]/90 to-black/90 border-purple-900/30 hover:border-purple-700/60 transition-all duration-500 hover:scale-105 group shadow-lg shadow-cyan-900/10">
                  <CardContent className="p-7 text-center">
                    <div className="mb-5 flex justify-center">
                      <div className="p-4 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-full group-hover:from-purple-800/50 group-hover:to-cyan-900/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-md shadow-purple-900/10">
                        <benefit.icon className="h-8 w-8 text-purple-400 group-hover:text-cyan-400 transition-all duration-500" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Características Incluidas
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.features.map((feature, index) => (
              <AnimatedSection key={index} animation="fadeInLeft" delay={index * 100}>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-[#1a1127]/60 to-black/50 rounded-lg border border-purple-900/30 hover:border-purple-700/60 transition-all duration-300 hover:scale-105 group shadow">
                  <div className="flex-shrink-0">
                    <Check className="h-5 w-5 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                    {feature}
                  </span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-black/40">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Planes y Precios
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {Object.entries(service.pricing).map(([key, plan], index) => (
              <AnimatedSection key={key} animation="scaleIn" delay={index * 200}>
                <Card
                  className={`relative bg-gradient-to-br from-[#1a1127]/90 to-black/90 border-purple-900/30 hover:border-purple-700/60 transition-all duration-500 hover:scale-105 group shadow-lg shadow-purple-900/20 ${
                    key === "pro" ? "ring-2 ring-purple-800/60 scale-105" : ""
                  }`}
                >
                  {key === "pro" && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-800 to-cyan-800 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center shadow-lg shadow-purple-900/15">
                        <Star className="h-4 w-4 mr-1" />
                        Más Popular
                      </div>
                    </div>
                  )}

                  <CardContent className="p-10 text-center">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {plan.name}
                    </h3>
                    <div className="mb-6">
                      <span className="text-4xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      {plan.price !== "Gratis" && plan.price !== "Custom" && (
                        <span className="text-gray-400 text-lg">/mes</span>
                      )}
                    </div>
                    <div className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center text-gray-300 group-hover:text-white transition-colors duration-300"
                        >
                          <Check className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      className={`w-full transition-all duration-500 group-hover:scale-105 ${
                        key === "pro"
                          ? "bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950"
                          : "bg-gradient-to-r from-gray-900 to-gray-800 hover:from-purple-800/40 hover:to-cyan-800/40"
                      }`}
                    >
                      {plan.price === "Gratis" ? "Solicitar Consulta" : "Comenzar Ahora"}
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center bg-gradient-to-r from-purple-950/30 to-cyan-950/30 rounded-2xl p-12 border border-purple-900/30 shadow-lg shadow-purple-900/20">
              <h2 className="text-4xl font-bold text-white mb-4">¿Listo para comenzar?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Contáctanos hoy mismo y obtén una consulta gratuita para tu proyecto. Nuestro equipo de expertos está
                listo para ayudarte.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-900/25"
                >
                  Consulta Gratuita
                </Button>
                <Link href="/#contacto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-purple-800 text-purple-400 hover:bg-purple-900/10 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                  >
                    Ver Contacto
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