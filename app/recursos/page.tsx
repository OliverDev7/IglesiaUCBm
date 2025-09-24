"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Download, BookOpen, Headphones, Video, Mail } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function RecursosPage() {
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
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "resources",
          email: email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage(
          "¡Gracias por suscribirte! Te enviaremos devocionales y recursos espirituales directamente a tu email.",
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

  const handleDownload = (titulo: string, tipo: string) => {
    // Create a mock file download
    const element = document.createElement("a")
    const fileContent = `Contenido del recurso: ${titulo}\nTipo: ${tipo}\nDescargado desde: Iglesia Cristiana\nFecha: ${new Date().toLocaleDateString()}`
    const file = new Blob([fileContent], { type: "text/plain" })
    element.href = URL.createObjectURL(file)
    element.download = `${titulo.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.${tipo.toLowerCase() === "pdf" ? "pdf" : "txt"}`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const recursos = [
    {
      categoria: "Predicaciones",
      icono: Headphones,
      items: [
        { titulo: "Serie: Fundamentos de la Fe", tipo: "Audio", duracion: "45 min" },
        { titulo: "El Amor de Dios", tipo: "Audio", duracion: "32 min" },
        { titulo: "Viviendo en Esperanza", tipo: "Audio", duracion: "38 min" },
      ],
    },
    {
      categoria: "Videos",
      icono: Video,
      items: [
        { titulo: "Testimonios de Fe", tipo: "Video", duracion: "15 min" },
        { titulo: "Bautismos 2024", tipo: "Video", duracion: "25 min" },
        { titulo: "Campamento de Jóvenes", tipo: "Video", duracion: "12 min" },
      ],
    },
    {
      categoria: "Materiales de Estudio",
      icono: BookOpen,
      items: [
        { titulo: "Guía de Estudio Bíblico", tipo: "PDF", duracion: "24 páginas" },
        { titulo: "Devocional Semanal", tipo: "PDF", duracion: "8 páginas" },
        { titulo: "Plan de Lectura Anual", tipo: "PDF", duracion: "2 páginas" },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Recursos <span className="text-accent">Espirituales</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Encuentra materiales para fortalecer tu fe y crecer espiritualmente. Predicaciones, estudios bíblicos y
              devocionales para toda la familia.
            </p>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <Mail className="h-12 w-12 mx-auto" />
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Devocionales Diarios</h2>
                    <p className="text-accent-foreground/80 text-lg">
                      Recibe reflexiones bíblicas y palabras de aliento directamente en tu email
                    </p>
                  </div>
                  <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
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
                      variant="secondary"
                      className="bg-background text-foreground hover:bg-background/90"
                      disabled={isLoading}
                    >
                      {isLoading ? "Suscribiendo..." : "Suscribirse"}
                    </Button>
                  </form>
                  {message && (
                    <p className={`text-sm ${message.includes("Gracias") ? "text-green-200" : "text-red-200"}`}>
                      {message}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {recursos.map((categoria, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-6">
                    <categoria.icono className="h-8 w-8 text-accent" />
                    <h2 className="text-2xl font-bold">{categoria.categoria}</h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.titulo}</CardTitle>
                          <CardDescription>
                            {item.tipo} • {item.duracion}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Button
                            className="w-full bg-transparent"
                            variant="outline"
                            onClick={() => handleDownload(item.titulo, item.tipo)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bible Study Section */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Estudios Bíblicos</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Únete a nuestros grupos de estudio para profundizar en la Palabra de Dios
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Estudio Presencial</CardTitle>
                  <CardDescription>Miércoles 7:30 PM</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Encuentros semanales en la iglesia para estudiar la Biblia en comunidad
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contacto">Más Información</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Grupos Pequeños</CardTitle>
                  <CardDescription>Varios horarios</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Grupos íntimos en hogares para un estudio más personalizado
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/contacto">Unirse a un Grupo</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
