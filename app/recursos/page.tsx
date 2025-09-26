"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Download, BookOpen, Headphones, Video, Mail, ArrowDown, Play, Users, Send } from "lucide-react"
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

  const recursosConfig = {
  // URLs de audios reales
  audios: {
    "Serie: Fundamentos de la Fe": "/recursos/audios/fundamentos-fe.mp3",
    "El Amor de Dios": "/recursos/audios/amor-dios.mp3",
    "Viviendo en Esperanza": "/recursos/audios/viviendo-esperanza.mp3"
  },
  // URLs de videos reales
  videos: {
    "Testimonios de Fe": "/recursos/videos/testimonios-fe.mp4",
    "Bautismos 2024": "/recursos/videos/bautismos-2024.mp4",
    "Campamento de Jóvenes": "/recursos/videos/campamento-jovenes.mp4"
  },
  // URLs de documentos reales
  documentos: {
    "Guía de Estudio Bíblico": "/recursos/documentos/guia-estudio-biblico.pdf",
    "Devocional Semanal": "/recursos/documentos/devocional-semanal.pdf",
    "Plan de Lectura Anual": "/recursos/documentos/plan-lectura-anual.pdf"
  }
}

  const handleDownload = async (titulo: string, tipo: string) => {
  try {
    // Verificar si es un archivo multimedia real
    if (tipo.toLowerCase() === "audio" && recursosConfig.audios[titulo as keyof typeof recursosConfig.audios]) {
      await descargarArchivoReal(
        recursosConfig.audios[titulo as keyof typeof recursosConfig.audios],
        titulo,
        "mp3"
      )
    } 
    else if (tipo.toLowerCase() === "video" && recursosConfig.videos[titulo as keyof typeof recursosConfig.videos]) {
      await descargarArchivoReal(
        recursosConfig.videos[titulo as keyof typeof recursosConfig.videos],
        titulo,
        "mp4"
      )
    }
    else if (tipo.toLowerCase() === "pdf" && recursosConfig.documentos[titulo as keyof typeof recursosConfig.documentos]) {
      await descargarArchivoReal(
        recursosConfig.documentos[titulo as keyof typeof recursosConfig.documentos],
        titulo,
        "pdf"
      )
    }
    else {
      // Fallback: generar archivo simulado si no existe el recurso real
      generarArchivoSimulado(titulo, tipo)
    }
  } catch (error) {
    console.error("Error al descargar:", error)
    // Fallback a archivo simulado en caso de error
    generarArchivoSimulado(titulo, tipo)
  }
}

// Función para descargar archivos reales
const descargarArchivoReal = async (url: string, titulo: string, extension: string) => {
  try {
    const response = await fetch(url)
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`)
    }
    
    const blob = await response.blob()
    const blobUrl = URL.createObjectURL(blob)
    
    const element = document.createElement("a")
    element.href = blobUrl
    element.download = `${titulo.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.${extension}`
    element.style.display = "none"
    
    document.body.appendChild(element)
    element.click()
    
    // Limpiar después de la descarga
    setTimeout(() => {
      document.body.removeChild(element)
      URL.revokeObjectURL(blobUrl)
    }, 100)
    
  } catch (error) {
    throw new Error(`No se pudo descargar el archivo: ${error}`)
  }
}

// Función para generar archivos simulados (como fallback)
const generarArchivoSimulado = (titulo: string, tipo: string) => {
  const element = document.createElement("a")
  const fileContent = `Contenido del recurso: ${titulo}\nTipo: ${tipo}\nDescargado desde: Iglesia Cristiana\nFecha: ${new Date().toLocaleDateString()}\n\nNota: Este es un archivo simulado. El recurso multimedia real estará disponible pronto.`
  
  let mimeType = "text/plain"
  let extension = "txt"
  
  if (tipo.toLowerCase() === "pdf") {
    mimeType = "application/pdf"
    extension = "pdf"
  } else if (tipo.toLowerCase() === "audio") {
    mimeType = "audio/mpeg"
    extension = "mp3"
  } else if (tipo.toLowerCase() === "video") {
    mimeType = "video/mp4"
    extension = "mp4"
  }
  
  const file = new Blob([fileContent], { type: mimeType })
  element.href = URL.createObjectURL(file)
  element.download = `${titulo.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.${extension}`
  document.body.appendChild(element)
  element.click()
  document.body.removeChild(element)
}

  // Estructura de recursos actualizada
const recursos = [
  {
    categoria: "Predicaciones",
    icono: Headphones,
    color: "from-blue-500 to-cyan-500",
    items: [
      { 
        titulo: "Serie: Fundamentos de la Fe", 
        tipo: "Audio", 
        duracion: "45 min",
        tamaño: "12 MB", // Información adicional útil
        disponible: true // Indicador si el recurso real está disponible
      },
      { 
        titulo: "El Amor de Dios", 
        tipo: "Audio", 
        duracion: "32 min",
        tamaño: "8 MB",
        disponible: true
      },
      { 
        titulo: "Viviendo en Esperanza", 
        tipo: "Audio", 
        duracion: "38 min",
        tamaño: "10 MB",
        disponible: true
      },
    ],
  },
  {
    categoria: "Videos",
    icono: Video,
    color: "from-blue-500 to-cyan-500",
    items: [
      { 
        titulo: "Testimonios de Fe", 
        tipo: "Video", 
        duracion: "15 min",
        tamaño: "45 MB",
        disponible: true,
        calidad: "720p"
      },
      { 
        titulo: "Bautismos 2024", 
        tipo: "Video", 
        duracion: "25 min",
        tamaño: "75 MB",
        disponible: true,
        calidad: "1080p"
      },
      { 
        titulo: "Campamento de Jóvenes", 
        tipo: "Video", 
        duracion: "12 min",
        tamaño: "35 MB",
        disponible: true,
        calidad: "720p"
      },
    ],
  },
  {
    categoria: "Materiales de Estudio",
    icono: BookOpen,
    color: "from-blue-500 to-cyan-500",
    items: [
      { 
        titulo: "Guía de Estudio Bíblico", 
        tipo: "PDF", 
        duracion: "24 páginas",
        tamaño: "2.5 MB",
        disponible: true
      },
      { 
        titulo: "Devocional Semanal", 
        tipo: "PDF", 
        duracion: "8 páginas",
        tamaño: "1.2 MB",
        disponible: true
      },
      { 
        titulo: "Plan de Lectura Anual", 
        tipo: "PDF", 
        duracion: "2 páginas",
        tamaño: "0.8 MB",
        disponible: true
      },
    ],
  },
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/30 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg scale-150"></div>
                  <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-4 border border-primary/10 shadow-lg">
                    <BookOpen className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent/50 bg-clip-text text-transparent">
                Recursos Espirituales
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Encuentra materiales para fortalecer tu fe y crecer espiritualmente. Predicaciones, estudios bíblicos y
                devocionales para toda la familia.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
       {/* Newsletter Signup */}
<section className="py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary/90 to-accent/20 text-white">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/5 rounded-full blur-xl"></div>
      </div>
      
      <CardContent className="relative p-8 lg:p-12 z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Mail className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Devocionales por Email
            </h2>
            <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Recibe reflexiones bíblicas y palabras de aliento directamente en tu email. 
              <span className="block mt-2 text-white/80">¡Crece espiritualmente cada día!</span>
            </p>
          </div>
          
          <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="bg-white/15 border-white/30 text-white placeholder-white/70 backdrop-blur-sm h-12 px-4 pr-12 rounded-xl border-2 focus:border-white/50 transition-all duration-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isLoading}
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
            </div>
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90 hover:scale-105 transform transition-all duration-300 shadow-xl h-12 px-6 rounded-xl font-semibold"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin mr-2"></div>
                  Suscribiendo...
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="h-4 w-4 mr-2" />
                  Suscribirse
                </div>
              )}
            </Button>
          </form>
          
          {message && (
            <div className={`p-4 rounded-xl backdrop-blur-sm ${message.includes("Gracias") ? "bg-green-500/20 border border-green-400/30" : "bg-red-500/20 border border-red-400/30"}`}>
              <p className={`text-sm font-medium ${message.includes("Gracias") ? "text-green-200" : "text-red-200"}`}>
                {message}
              </p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
</section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {recursos.map((categoria, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${categoria.color} text-white`}>
                      <categoria.icono className="h-6 w-6" />
                    </div>
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      {categoria.categoria}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoria.items.map((item, itemIndex) => (
                      <Card key={itemIndex} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/80">
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoria.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                        <CardHeader className="relative z-10">
                          <CardTitle className="text-lg text-gray-900">{item.titulo}</CardTitle>
                          <CardDescription className="flex items-center space-x-2">
                            <span>{item.tipo}</span>
                            <span>•</span>
                            <span>{item.duracion}</span>
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <Button
                            className="w-full bg-transparent hover:bg-primary/10 text-black border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:text-black"
                            variant="outline"
                            onClick={() => handleDownload(item.titulo, item.tipo)}
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Descargar
                            <ArrowDown className="h-4 w-4 ml-2 transition-transform group-hover:translate-y-1" />
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
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Estudios Bíblicos
            </h2>
            <p className="text-xl text-muted-foreground mb-12 text-pretty max-w-2xl mx-auto">
              Únete a nuestros grupos de estudio para profundizar en la Palabra de Dios
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80 hover:shadow-3xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-2xl">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Culto General</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">Domingos 10:30 HRS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Aprende de la palabra de Dios cada día y encuentra tu propósito en una comunidad de fe.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-primary to-white/40 hover:from-white/40 hover:to-primary shadow-lg">
                    <Link href="/contacto">Más Información</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80 hover:shadow-3xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-2xl">
                      <Play className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl">Grupos Pequeños</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">Miércoles 20:30 HRS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Reunión de grupos pequeños vía online (Zoom) para estudiar la Palabra de Dios en comunidad.
                  </p>
                  <Button asChild variant="outline" className="w-full border-2 hover:bg-primary">
                    <Link href="/faq">Unirse a Grupos</Link>
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
