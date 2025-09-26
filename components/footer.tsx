"use client"
import type React from "react"

import Link from "next/link"
import { Heart, MapPin, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {useState} from "react"

export function Footer() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscription = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setMessage("Por favor, ingresa tu correo electrónico.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Por favor, ingresa un correo electrónico válido.")
      return
    }

    setIsLoading(true)

    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
       const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "newsletter",
          email: email,
        }),
      })

      const result = await response.json()

      if (result.success) {
      setMessage(
        "¡Gracias por suscribirte! Te enviaremos novedades pronto. Mantente atento a tu correo.",
      )
      setEmail("")
    } else {
        setMessage("Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.")
    }
    } catch (error) {
      setMessage("Hubo un error al procesar tu suscripción. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <footer className="bg-gradient-to-b from-slate-50 to-blue-50 text-slate-700 border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="bg-gradient-to-r from-blue-400 to-teal-400 p-2 rounded-full group-hover:scale-105 transition-transform duration-300 shadow-sm">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">Iglesia UCB</span>
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed">
              Una comunidad de fe donde todos son bienvenidos. Descubre el amor de Dios y encuentra tu hogar espiritual.
            </p>
            <p className="text-sm font-medium text-blue-500 italic border-l-3 border-blue-300 pl-3 py-1 bg-blue-50 rounded-r">
              "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos." - Mateo 18:20
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center">
              <div className="w-1 h-5 bg-blue-400 mr-2 rounded-full"></div>
              Enlaces Rápidos
            </h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/sobre-nosotros" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-300 hover:translate-x-2 transform flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3"></div>
                Sobre Nosotros
              </Link>
              <Link href="/servicios" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-300 hover:translate-x-2 transform flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3"></div>
                Servicios
              </Link>
              <Link href="/recursos" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-300 hover:translate-x-2 transform flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3"></div>
                Recursos
              </Link>
              <Link href="/galeria" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-300 hover:translate-x-2 transform flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3"></div>
                Galería
              </Link>
              <Link href="/blog" className="text-sm text-slate-600 hover:text-blue-500 transition-colors duration-300 hover:translate-x-2 transform flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-200 rounded-full mr-3"></div>
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center">
              <div className="w-1 h-5 bg-teal-400 mr-2 rounded-full"></div>
              Contacto
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <MapPin className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Calle Merced 765 
                  <br />
                  Melipilla
                </p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <Phone className="h-4 w-4 text-blue-600 flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600">+56982638176</p>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="bg-blue-100 p-2 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                  <Mail className="h-4 w-4 text-blue-600 flex-shrink-0" />
                </div>
                <p className="text-sm text-slate-600">info@iglesia.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-800 flex items-center">
              <div className="w-1 h-5 bg-indigo-400 mr-2 rounded-full"></div>
              Devocionales
            </h3>
            <p className="text-sm text-slate-600">Recibe reflexiones diarias y noticias de nuestra comunidad.</p>
            <form onSubmit={handleSubscription} className="space-y-3">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-white border-blue-200 text-slate-700 placeholder:text-slate-400 focus:border-blue-400 transition-colors duration-300 shadow-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-medium transition-all duration-300 shadow-sm hover:shadow-md"
                disabled={isLoading}
              >
                {isLoading ? "Suscribiendo..." : "Suscribirse"}
              </Button>
              {message && (
                <p className={`text-xs ${message.includes("Gracias") ? "text-green-600" : "text-red-600"}`}>
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Social Media and Legal */}
        <div className="mt-8 pt-8 border-t border-blue-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-3">
             <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-500 hover:text-blue-600 hover:bg-blue-100 rounded-full transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <a
                  href="https://www.facebook.com/iglesia.cristiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-500 hover:text-pink-600 hover:bg-pink-100 rounded-full transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <a
                  href="https://www.instagram.com/iglesia.cristiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
               <Button 
                variant="ghost" 
                size="icon" 
                className="text-slate-500 hover:text-red-600 hover:bg-red-100 rounded-full transition-all duration-300 transform hover:scale-110"
                asChild
              >
                <a
                  href="https://www.youtube.com/@iglesiaucbcristoalmundo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suscríbete a nuestro canal de YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-slate-500">
              <p>&copy; 2025 Iglesia UCB. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <Link href="/privacidad" className="hover:text-blue-600 transition-colors duration-300">
                  Privacidad
                </Link>
                <Link href="/terminos" className="hover:text-blue-600 transition-colors duration-300">
                  Terminos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}