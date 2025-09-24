"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, Quote, Calendar, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function GaleriaPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const eventos = [
    {
      titulo: "Servicio Dominical",
      fecha: "Enero 2024",
      imagenes: ["/church-service-worship.png", "/congregation-singing.jpg", "/pastor-preaching.png"],
    },
    {
      titulo: "Bautismos",
      fecha: "Diciembre 2023",
      imagenes: ["/baptism-ceremony.jpg", "/placeholder-sbfat.png", "/baptism-family.jpg"],
    },
    {
      titulo: "Campamento de Jóvenes",
      fecha: "Noviembre 2023",
      imagenes: ["/placeholder-wzo5o.png", "/youth-worship.jpg", "/youth-fellowship.jpg"],
    },
  ]

  const testimonios = [
    {
      nombre: "María González",
      testimonio:
        "Encontré en esta iglesia una familia que me acogió con amor. Mi vida cambió completamente desde que conocí a Jesús aquí.",
      imagen: "/smiling-hispanic-woman-portrait.jpg",
    },
    {
      nombre: "Carlos Rodríguez",
      testimonio:
        "Los jóvenes de esta iglesia me ayudaron a encontrar mi propósito. Ahora sirvo con alegría en el ministerio de música.",
      imagen: "/young-hispanic-man-smiling-portrait.jpg",
    },
    {
      nombre: "Ana y Pedro Martín",
      testimonio:
        "Como familia, hemos crecido espiritualmente juntos. Nuestros hijos aman venir a la iglesia y participar en las actividades.",
      imagen: "/hispanic-family-couple-portrait.jpg",
    },
  ]

  const videos = [
    {
      titulo: "Testimonio de Fe",
      duracion: "5:30",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
    {
      titulo: "Bautismos 2024",
      duracion: "8:45",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
    {
      titulo: "Campamento Jóvenes",
      duracion: "12:15",
      youtubeId: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
    },
  ]

  const openImageModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  const openYouTubeVideo = (youtubeId: string) => {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Galería <span className="text-accent">Multimedia</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Revive los momentos especiales de nuestra comunidad y conoce las historias de transformación que Dios está
              escribiendo en nuestras vidas.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Momentos Especiales</h2>

            <div className="space-y-12">
              {eventos.map((evento, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-6">
                    <Calendar className="h-6 w-6 text-accent" />
                    <h3 className="text-2xl font-semibold">{evento.titulo}</h3>
                    <span className="text-muted-foreground">• {evento.fecha}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {evento.imagenes.map((imagen, imgIndex) => (
                      <Card key={imgIndex} className="overflow-hidden hover:shadow-lg transition-shadow">
                        <CardContent className="p-0">
                          <div className="relative group cursor-pointer" onClick={() => openImageModal(imagen)}>
                            <img
                              src={imagen || "/placeholder.svg"}
                              alt={`${evento.titulo} ${imgIndex + 1}`}
                              className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                              <Button variant="secondary" size="sm">
                                Ver Imagen
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="bg-muted py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Videos Destacados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={`/video-thumbnail-concept.png?height=200&width=350&query=video thumbnail ${video.titulo}`}
                        alt={video.titulo}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-accent hover:bg-accent/90"
                          onClick={() => openYouTubeVideo(video.youtubeId)}
                        >
                          <Play className="h-6 w-6 mr-2" />
                          Reproducir
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {video.duracion}
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold">{video.titulo}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12">Testimonios de Fe</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="h-8 w-8 text-accent mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonio.testimonio}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonio.imagen || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="font-semibold">{testimonio.nombre}</p>
                        <p className="text-sm text-muted-foreground">Miembro de la iglesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
                onClick={closeImageModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
