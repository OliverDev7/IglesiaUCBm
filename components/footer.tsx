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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-accent" />
              <span className="text-xl font-bold">Iglesia UCB</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Una comunidad de fe donde todos son bienvenidos. Descubre el amor de Dios y encuentra tu hogar espiritual.
            </p>
            <p className="text-sm font-medium text-accent">
              "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos." - Mateo 18:20
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Enlaces Rápidos</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/sobre-nosotros" className="text-sm hover:text-accent transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/servicios" className="text-sm hover:text-accent transition-colors">
                Servicios
              </Link>
              <Link href="/recursos" className="text-sm hover:text-accent transition-colors">
                Recursos
              </Link>
              <Link href="/galeria" className="text-sm hover:text-accent transition-colors">
                Galería
              </Link>
              <Link href="/blog" className="text-sm hover:text-accent transition-colors">
                Blog
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                <p className="text-sm">
                  Calle Merced 795 
                  <br />
                  Ciudad, Melipilla, RM
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <p className="text-sm">info@iglesia.com</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Devocionales</h3>
            <p className="text-sm text-muted-foreground">Recibe reflexiones diarias y noticias de nuestra comunidad.</p>
            <form onSubmit={handleSubscription} className="space-y-2">
              <Input
                type="email"
                placeholder="Tu email"
                className="bg-background text-foreground"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
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
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent" asChild>
                <a
                  href="https://www.facebook.com/iglesia.cristiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent" asChild>
                <a
                  href="https://www.instagram.com/iglesia.cristiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Síguenos en Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
               <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-accent" asChild>
                <a
                  href="https://www.youtube.com/@iglesia.cristiana"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Suscríbete a nuestro canal de YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <p>&copy; 2025 Iglesia Cristiana. Todos los derechos reservados.</p>
              <div className="flex space-x-4">
                <Link href="/privacidad" className="hover:text-accent transition-colors">
                  Privacidad
                </Link>
                <Link href="/terminos" className="hover:text-accent transition-colors">
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
