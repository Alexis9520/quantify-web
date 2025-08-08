"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { AnimatedSection } from "@/components/animated-section"
import BlurText from "@/components/BlurText"
import ShinyText from "@/components/ShinyText"

import CursorBlob from "@/components/CursorBlob"
import FuturisticBackground from "@/components/FuturisticBackground"
import ScrollProgressBar from "@/components/ScrollProgressBar"
import AnimatedTitle from "@/components/AnimatedTitle"
import HolographicCard from "@/components/HolographicCard"

import {
  MessageCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
  Sparkles,
  Zap,
  Shield,
  Award,
  Server,
  Cloud,
  Smartphone,
  Database,
  ShoppingBag,
  Globe,
  Code,
  HardDrive,
} from "lucide-react"
import Link from "next/link"

// Servicios adaptados a lo que ofreces
export const services = [
  {
    slug: "hostear-portafolios", // /servicios/hostear-portafolios
    icon: Globe,
    title: "Hosting para Portafolios",
    desc: "Hosting ultra‑ligero para portafolios y landing pages con despliegue instantáneo y dominios personalizados.",
    tags: ["SSL gratis", "Deploy 1‑click", "Dominios"],
  },
  {
    slug: "hosting-web", // /servicios/hosting-web
    icon: Server,
    title: "Hosting Web",
    desc: "Servidores optimizados con Edge CDN, HTTP/3 y copias de seguridad automáticas para máxima disponibilidad.",
    tags: ["99.99% uptime", "Edge CDN", "Backups"],
  },
  {
    slug: "paginas-web", // /servicios/paginas-web
    icon: Code,
    title: "Desarrollo de Páginas Web",
    desc: "Sitios modernos, accesibles y rápidos con SEO técnico y animaciones de alto rendimiento.",
    tags: ["Next.js", "SEO+", "Accesible"],
  },
  {
    slug: "sistemas-web-escritorio", // /servicios/sistemas-web-escritorio
    icon: Database,
    title: "Sistemas Web y de Escritorio",
    desc: "Sistemas de gestión, dashboards y apps de escritorio con sincronización y control de roles.",
    tags: ["Multi‑plataforma", "RBAC", "Escalable"],
  },
  {
    slug: "saas", // /servicios/saas
    icon: Cloud,
    title: "SaaS",
    desc: "Producto SaaS multi‑tenant con suscripciones, facturación e integración CI/CD sin downtime.",
    tags: ["Multi‑tenant", "Billing", "CI/CD"],
  },
  {
    slug: "catalogos-sistemas", // /servicios/catalogos-sistemas
    icon: ShoppingBag,
    title: "Catálogos y Sistemas para Negocios",
    desc: "Catálogos online, inventario, POS y órdenes integradas con reportes en tiempo real.",
    tags: ["Inventario", "POS", "Reportes"],
  },
  {
    slug: "aplicaciones-moviles", // /servicios/aplicaciones-moviles
    icon: Smartphone,
    title: "Desarrollo de Apps Móviles",
    desc: "Aplicaciones nativas/híbridas para iOS y Android con notificaciones y modo offline‑first.",
    tags: ["iOS/Android", "Push", "Offline"],
  },
  {
    slug: "almacenamiento-nube", // /servicios/almacenamiento-nube
    icon: HardDrive,
    title: "Almacenamiento en la Nube",
    desc: "Almacenamiento seguro con enlaces firmados, CDN y versionado compatible con S3.",
    tags: ["S3 compatible", "Cifrado", "Versionado"],
  },
]

export default function QuantifyWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#0a0716] to-[#00121a] relative overflow-hidden">
      {/* Capas globales futuristas */}
      <FuturisticBackground />
      <CursorBlob />
      <ScrollProgressBar />

      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 z-50 -translate-x-1/2 w-[min(96%,1120px)] rounded-2xl border border-white/10 bg-[#0e0b1f]/70 backdrop-blur-xl transition-all duration-300 neon-border">
        <div className="px-5 py-3 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
            Quantify
          </div>
          <div className="hidden md:flex items-center gap-2">
            {["Inicio", "Servicios", "Contacto"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white transition-colors group"
              >
                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                {item}
              </a>
            ))}
          </div>
          <Button className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 transition-all duration-300 hover:scale-[1.04] font-semibold shine-on-hover">
            <span className="relative z-10 flex items-center">
              Comenzar
              <Sparkles className="ml-2 h-4 w-4" />
            </span>
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="min-h-[92vh] flex flex-col items-center justify-center relative overflow-hidden pt-24"
      >
        {/* Contenido principal */}
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full relative z-10">
          <AnimatedTitle
            text="QUANTIFY"
            className="text-6xl md:text-8xl font-black mb-8 text-white leading-[0.95] text-center"
          />
          <div className="w-full max-w-2xl flex flex-col items-center justify-center mb-8">
            <ShinyText
              text="Transformamos ideas en soluciones digitales innovadoras."
              speed={3}
              className="text-xl md:text-3xl font-light text-center mb-6 text-white/90"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <Button
              size="lg"
              className="relative overflow-hidden bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 font-bold text-lg group shine-on-hover"
            >
              <span className="relative z-10 flex items-center">
                Explorar Servicios
                <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="relative overflow-hidden border-2 border-purple-800/70 text-purple-300 hover:text-cyan-200 hover:bg-purple-900/10 px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 bg-transparent font-bold text-lg hover:border-cyan-700 shine-on-hover"
            >
              <span className="relative z-10 flex items-center">
                Asesoramiento Gratuito
                <MessageCircle className="ml-3 h-6 w-6" />
              </span>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="h-10 w-10 text-purple-400" />
        </div>
      </section>

      {/* Divider con grid láser */}
      <div className="relative h-20">
        <div className="absolute inset-0 futuristic-grid opacity-30" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent" />
      </div>

      {/* Services Section */}
      <section id="servicios" className="py-24 relative">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-20">
              <BlurText
                text="Nuestros Servicios"
                delay={80}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-6xl font-black mb-6 text-white"
              />
              <div className="h-2 w-32 bg-gradient-to-r from-purple-700 to-cyan-600 mx-auto mb-8 rounded-full" />
              <ShinyText
                text="Soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel"
                speed={3.5}
                className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
              />
            </div>
          </AnimatedSection>
          {/* Cartas futuristas (tilt + holograma) */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Move useRouter outside the map callback */}
            {(() => {
              const { useRouter } = require("next/navigation");
              const router = useRouter();
              return services.map((s, idx) => (
                <AnimatedSection key={s.slug} animation="fadeInUp" delay={idx * 120}>
                  <HolographicCard
                    className="p-6 hover:scale-[1.02] cursor-pointer group"
                    role="link"
                    tabIndex={0}
                    onClick={() => router.push(`/servicios/${s.slug}`)}
                    onKeyDown={(e) => { if (e.key === "Enter") router.push(`/servicios/${s.slug}`) }}
                  >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-2xl bg-gradient-to-br from-purple-700/40 to-cyan-600/30 ring-1 ring-white/10">
                      <s.icon className="h-7 w-7 text-purple-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-xl font-bold text-white">{s.title}</h3>
                      <p className="mt-2 text-gray-300">{s.desc}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full text-xs text-cyan-200/90 bg-white/5 ring-1 ring-white/10"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={`/servicios/${s.slug}`}
                      className="text-sm text-purple-300 hover:text-cyan-200 transition-colors inline-flex items-center gap-2"
                      prefetch
                      aria-label={`Ver más sobre ${s.title}`}
                      onClick={(e) => e.stopPropagation()} // evita doble navegación
                    >
                      Saber más
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <div className="h-px flex-1 mx-4 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <span className="text-xs text-white/40">#{String(idx + 1).padStart(2, "0")}</span>
                  </div>
                </HolographicCard>
              </AnimatedSection>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <BlurText
                  text="¿Por qué elegir Quantify?"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-5xl font-black mb-8 text-white"
                />
                <div className="space-y-8">
                  {[
                    {
                      icon: Zap,
                      title: "Innovación Constante",
                      desc: "Utilizamos las últimas tecnologías para crear soluciones de vanguardia",
                    },
                    { icon: Shield, title: "Soporte 24/7", desc: "Estamos aquí para ayudarte en cada paso del camino" },
                    {
                      icon: Award,
                      title: "Escalabilidad Garantizada",
                      desc: "Nuestras soluciones crecen junto con tu negocio",
                    },
                  ].map((item, index) => (
                    <AnimatedSection key={index} animation="fadeInLeft" delay={index * 300}>
                      <div className="flex items-start space-x-6 group">
                        <div className="p-3 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-full group-hover:from-purple-800/40 group-hover:to-cyan-800/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
                          <item.icon className="h-7 w-7 text-purple-400 group-hover:text-cyan-400 transition-all duration-500" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <HolographicCard className="p-10 hover:scale-[1.02] transition-transform duration-500">
                  <div className="flex items-center mb-6">
                    <MessageCircle className="h-8 w-8 text-purple-300 mr-4" />
                    <h3 className="text-3xl font-bold text-white">Asesoramiento Gratuito</h3>
                  </div>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    Obtén una consulta personalizada sin costo. Analizamos tu proyecto y te recomendamos la mejor
                    solución.
                  </p>
                  <Button className="w-full relative overflow-hidden bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 transition-all duration-500 hover:scale-105 font-bold text-lg py-3 shine-on-hover">
                    <span className="relative z-10 flex items-center justify-center">
                      Solicitar Consulta
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </span>
                  </Button>
                </HolographicCard>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-20">
              <BlurText
                text="Contáctanos"
                delay={60}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-6xl font-black mb-6 text-white"
              />
              <div className="h-2 w-32 bg-gradient-to-r from-purple-700 to-cyan-600 mx-auto mb-8 rounded-full"></div>
              <BlurText
                text="Estamos listos para hacer realidad tu próximo proyecto digital"
                delay={25}
                animateBy="words"
                direction="top"
                className="text-xl text-gray-300 max-w-3xl mx-auto font-light"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimatedSection animation="fadeInLeft">
              <div>
                <h3 className="text-3xl font-bold text-white mb-8">Información de Contacto</h3>
                <div className="space-y-8">
                  {[
                    { icon: Mail, title: "Email", info: "quantify@gmail.com", color: "purple" },
                    { icon: Phone, title: "Teléfono", info: "+51 123 456 789", color: "purple" },
                    { icon: MapPin, title: "Ubicación", info: "Ciudad de Huancayo, Perú", color: "purple" },
                  ].map((contact, index) => (
                    <AnimatedSection key={index} animation="fadeInLeft" delay={index * 200}>
                      <div className="flex items-center space-x-6 group cursor-pointer">
                        <div
                          className={`p-4 bg-gradient-to-r from-${contact.color}-800/30 to-cyan-900/20 rounded-full group-hover:from-${contact.color}-800/50 group-hover:to-cyan-900/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
                        >
                          <contact.icon
                            className={`h-7 w-7 text-${contact.color}-400 group-hover:text-cyan-400 transition-all duration-500`}
                          />
                        </div>
                        <div>
                          <p className="text-white font-bold text-lg group-hover:text-purple-400 transition-colors duration-300">
                            {contact.title}
                          </p>
                          <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-lg">
                            {contact.info}
                          </p>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
                <AnimatedSection animation="fadeInLeft" delay={600}>
                  <div className="mt-12">
                    <h4 className="text-2xl font-bold text-white mb-6">Síguenos</h4>
                    <div className="flex space-x-6">
                      {[Facebook, Twitter, Instagram, Linkedin].map((Social, index) => (
                        <a
                          key={index}
                          href="#"
                          className="p-4 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-full hover:from-purple-800/50 hover:to-cyan-900/40 transition-all duration-500 hover:scale-110 hover:-rotate-6 group"
                        >
                          <Social className="h-6 w-6 text-purple-300 group-hover:text-cyan-300 transition-all duration-500" />
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight">
              <HolographicCard className="p-10 hover:scale-[1.01] transition-transform duration-500">
                <h3 className="text-3xl font-bold text-white mb-8">Envíanos un Mensaje</h3>
                <form className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Nombre</label>
                      <Input
                        className="bg-black/50 border-purple-800/40 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-2 focus:ring-purple-600/40 transition-all duration-300 hover:border-purple-800/60 py-3"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Email</label>
                      <Input
                        type="email"
                        className="bg-black/50 border-cyan-800/40 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600/40 transition-all duration-300 hover:border-cyan-800/60 py-3"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-3">Servicio de Interés</label>
                    <select className="w-full p-4 bg-black/50 border border-white/10 rounded-md text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-600/40 transition-all duration-300 hover:border-purple-800/60">
                      <option value="">Selecciona un servicio</option>
                      <option value="hosting-portafolios">Hosting para Portafolios</option>
                      <option value="hosting-web">Hosting Web</option>
                      <option value="paginas-web">Desarrollo de Páginas Web</option>
                      <option value="sistemas-web-escritorio">Sistemas Web y de Escritorio</option>
                      <option value="saas">SaaS</option>
                      <option value="catalogos-negocios">Catálogos y Sistemas para Negocios</option>
                      <option value="apps-moviles">Desarrollo de Aplicaciones Móviles</option>
                      <option value="almacenamiento-nube">Almacenamiento en la Nube</option>
                      <option value="asesoramiento">Asesoramiento</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-300 mb-3">Mensaje</label>
                    <Textarea
                      className="bg-black/50 border-white/10 text-white placeholder-gray-500 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-600/40 min-h-[150px] transition-all duration-300 hover:border-purple-800/60"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <Button className="w-full relative overflow-hidden bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white py-4 transition-all duration-500 hover:scale-105 font-bold text-lg group shine-on-hover">
                    <span className="relative z-10 flex items-center justify-center">
                      Enviar Mensaje
                      <ArrowRight className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-2" />
                    </span>
                  </Button>
                </form>
              </HolographicCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 border-t border-purple-900/30 py-16 relative overflow-hidden">
        <div
          className="absolute inset-x-0 -top-32 h-64 blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(124,58,237,0.25) 0%, rgba(34,211,238,0.18) 50%, rgba(0,0,0,0) 70%)",
          }}
        />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <AnimatedSection animation="fadeInUp">
              <div>
                <BlurText
                  text="Quantify"
                  delay={60}
                  animateBy="words"
                  direction="top"
                  className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6 hover:scale-105 transition-transform duration-300 cursor-pointer"
                />
                <p className="text-gray-400 leading-relaxed">
                  Transformando el futuro digital con soluciones innovadoras y tecnología de vanguardia.
                </p>
              </div>
            </AnimatedSection>
            {[
              { title: "Servicios", links: ["Hosting Portafolios", "Hosting Web", "Páginas Web", "Sistemas Web/Escritorio", "SaaS", "Catálogos para Negocios", "Apps Móviles", "Almacenamiento Nube"] },
              { title: "Empresa", links: ["Sobre Nosotros", "Portafolio", "Blog", "Carreras"] },
              { title: "Soporte", links: ["Centro de Ayuda", "Documentación", "Estado del Sistema", "Contacto"] },
            ].map((section, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 200}>
                <div>
                  <h4 className="text-white font-bold mb-6 text-lg">{section.title}</h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 inline-block"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection animation="fadeInUp" delay={800}>
            <div className="border-t border-purple-900/30 mt-12 pt-8 text-center">
              <p className="text-gray-400 text-lg">
                &copy; {new Date().getFullYear()} Quantify. Todos los derechos reservados.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}