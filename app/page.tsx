"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import BlurText from "@/components/BlurText"
import { ServiceCard } from "@/components/service-card"
import DarkVeil from "@/components/DarkVeil"
import ShinyText from '@/components/ShinyText';

import MagicBento from "@/components/MagicBento";

import {
  Server,
  Globe,
  Cloud,
  ShoppingBag,
  Smartphone,
  Database,
  Code,
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
} from "lucide-react"

const heroLines1 = [
  "Transformamos",
  "ideas",
  "en",
  "soluciones",
  "digitales",
  "innovadoras.",
];

const heroLines2 = [
  "Tecnología",
  "de",
  "vanguardia",
  "para",
  "impulsar",
  "tu",
  "negocio."
];

export default function QuantifyWebsite() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Puedes eliminar el array services si ya no usarás ServiceCard, solo MagicBento

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-[#220636] to-[#003246] relative overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0e0b1f]/90 backdrop-blur-md border-b border-purple-800/30 transition-all duration-300">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-[0_2px_8px_rgba(109,40,217,0.25)]">
            Quantify
          </div>
          <div className="hidden md:flex space-x-8">
            {["Inicio", "Servicios", "Contacto"].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-purple-400 transition-all duration-300 font-medium relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <Button className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-800/25 font-semibold">
            Comenzar
            <Sparkles className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section - Fondo OGL */}
      <section
        id="inicio"
        className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden"
      >
        {/* Fondo OGL */}
        <div className="absolute inset-0 w-full h-full">
          <DarkVeil
            hueShift={-25}
            noiseIntensity={0.06}
            scanlineIntensity={0}
            scanlineFrequency={25}
            warpAmount={0.14}
            speed={0.3}
          />
        </div>
        {/* Contenido principal */}
        <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full relative z-10">
          <BlurText
            text="QUANTIFY"
            delay={100}
            animateBy="letters"
            direction="top"
            className="text-6xl md:text-8xl font-black mb-10 text-white leading-tight drop-shadow-[0_4px_24px_rgba(109,40,217,0.15)] text-center"
          />
          <div className="w-full max-w-2xl flex flex-col items-center justify-center mb-8">
            <ShinyText
              text="Transformamos ideas en soluciones digitales innovadoras."
              speed={3}
              className="text-xl md:text-3xl font-light text-center mb-6"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-900/40 font-bold text-lg group"
            >
              Explorar Servicios
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-purple-800 text-purple-400 hover:bg-purple-900/20 px-10 py-4 rounded-full transition-all duration-500 hover:scale-110 bg-transparent font-bold text-lg hover:border-cyan-700 hover:text-cyan-400"
            >
              Asesoramiento Gratuito
              <MessageCircle className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <ChevronDown className="h-10 w-10 text-purple-400" />
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-[#0e0b1f]/90 relative">
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
              <div className="h-2 w-32 bg-gradient-to-r from-purple-700 to-cyan-600 mx-auto mb-8 rounded-full"></div>
              <ShinyText
                text="Soluciones tecnológicas integrales para llevar tu negocio al siguiente nivel"
                speed={3.5}
                className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed"
              />
            </div>
          </AnimatedSection>
          {/* MagicBento reemplaza el grid de ServiceCard */}
          <div className="flex justify-center">
            <MagicBento
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="132, 0, 255"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-purple-950/20 to-cyan-950/20 relative">
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
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-2xl transform rotate-3 animate-pulse"></div>
                <Card className="relative bg-black/95 border border-purple-900/40 hover:border-purple-700/70 transition-all duration-500 hover:scale-105 group shadow-lg shadow-cyan-900/15">
                  <CardContent className="p-10">
                    <div className="flex items-center mb-6">
                      <MessageCircle className="h-8 w-8 text-purple-400 mr-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                      <h3 className="text-3xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                        Asesoramiento Gratuito
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-8 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                      Obtén una consulta personalizada sin costo. Analizamos tu proyecto y te recomendamos la mejor
                      solución.
                    </p>
                    <Button className="w-full bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/40 font-bold text-lg py-3">
                      Solicitar Consulta
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-[#0e0b1f]/90">
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
                          className="p-4 bg-gradient-to-r from-purple-800/30 to-cyan-900/20 rounded-full hover:from-purple-800/50 hover:to-cyan-900/40 transition-all duration-500 hover:scale-110 hover:rotate-12 group"
                        >
                          <Social className="h-6 w-6 text-purple-400 group-hover:text-cyan-400 transition-all duration-500" />
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fadeInRight">
              <Card className="bg-gradient-to-br from-[#1a1127]/95 to-black/95 border-purple-900/40 hover:border-purple-700/70 transition-all duration-500 hover:scale-105 group shadow-lg shadow-cyan-900/15">
                <CardContent className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-8 group-hover:text-purple-400 transition-colors duration-300">
                    Envíanos un Mensaje
                  </h3>
                  <form className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-300 mb-3">Nombre</label>
                        <Input
                          className="bg-black/50 border-purple-800/40 text-white placeholder-gray-500 focus:border-purple-700 transition-all duration-300 hover:border-purple-800/60 py-3"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-300 mb-3">Email</label>
                        <Input
                          type="email"
                          className="bg-black/50 border-purple-800/40 text-white placeholder-gray-500 focus:border-purple-700 transition-all duration-300 hover:border-purple-800/60 py-3"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Servicio de Interés</label>
                      <select className="w-full p-4 bg-black/50 border border-purple-800/40 rounded-md text-white focus:border-purple-700 focus:outline-none transition-all duration-300 hover:border-purple-800/60">
                        <option value="">Selecciona un servicio</option>
                        <option value="hosting">Hosting Web</option>
                        <option value="saas">SaaS Solutions</option>
                        <option value="mobile">Aplicaciones Móviles</option>
                        <option value="custom">Desarrollo Personalizado</option>
                        <option value="consulting">Asesoramiento</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-300 mb-3">Mensaje</label>
                      <Textarea
                        className="bg-black/50 border-purple-800/40 text-white placeholder-gray-500 focus:border-purple-700 min-h-[150px] transition-all duration-300 hover:border-purple-800/60"
                        placeholder="Cuéntanos sobre tu proyecto..."
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-purple-900 hover:to-cyan-950 text-white py-4 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-purple-900/30 font-bold text-lg group">
                      Enviar Mensaje
                      <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-purple-900/30 py-16">
        <div className="container mx-auto px-4">
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
              { title: "Servicios", links: ["Hosting Web", "SaaS Solutions", "Apps Móviles", "Desarrollo Custom"] },
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
              <p className="text-gray-400 text-lg">&copy; 2024 Quantify. Todos los derechos reservados.</p>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </div>
  )
}