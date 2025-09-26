"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Play, Quote, Calendar, X, ZoomIn, Heart, Share2 } from "lucide-react"
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
      titulo: "¿Qué es el Evangelio? (Predica)",
      duracion: "2hr 3min",
      youtubeId: "0susTjz09PI&list=PLVXBAF2aTElQy-vhVML-_GKxIqic7HWpk", // Replace with actual YouTube video ID
    },
    {
      titulo: "Alabanzas",
      duracion: "5:01",
      youtubeId: "tizmsERKXFQ&list=PLVXBAF2aTElT-FLgnBXZ3YWBVmj15PrOv", // Replace with actual YouTube video ID
    },
    {
      titulo: "Podcasts",
      duracion: "1hr 17min",
      youtubeId: "KBGZI9Q7Pzo&list=PLVXBAF2aTElSh0pyuzS-BfTW1f6LJHrTY&index=7", // Replace with actual YouTube video ID
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
                    <Play className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent/50 bg-clip-text text-transparent">
                Galería Multimedia
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Revive los momentos especiales de nuestra comunidad y conoce las historias de transformación que Dios está
                escribiendo en nuestras vidas.
              </p>
            </div>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Momentos Especiales
            </h2>

            <div className="space-y-16">
              {eventos.map((evento, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-3 bg-accent/10 rounded-2xl">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-semibold text-gray-900">{evento.titulo}</h3>
                    <span className="text-muted-foreground text-lg">• {evento.fecha}</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {evento.imagenes.map((imagen, imgIndex) => (
                      <Card key={imgIndex} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0">
                        <CardContent className="p-0">
                          <div className="relative cursor-pointer" onClick={() => openImageModal(imagen)}>
                            <img
                              src={imagen || "/placeholder.svg"}
                              alt={`${evento.titulo} ${imgIndex + 1}`}
                              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                                <Button variant="secondary" size="sm" className="bg-white/90 cursor-pointer backdrop-blur-sm">
                                  <ZoomIn className="h-4 w-4 mr-1" />
                                  Ampliar
                                </Button>
                              </div>
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
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Videos Destacados
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video, index) => (
                <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/80">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                        alt={video.titulo}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-primary to-white/10 hover:from-white/90 cursor-pointer hover:to-white hover:text-black shadow-lg transform transition-transform hover:scale-105"
                          onClick={() => openYouTubeVideo(video.youtubeId)}
                        >
                          <Play className="h-6 w-6 mr-2" />
                          Reproducir
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm backdrop-blur-sm">
                        {video.duracion}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{video.titulo}</h3>
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>YouTube</span>
                        <div className="flex space-x-2">
                          {/*<Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Share2 className="h-4 w-4" />
                          </Button>*/}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Testimonios de Fe
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/80">
                  <CardContent className="p-6 relative z-10">
                    <div className="absolute top-4 left-4">
                      <Quote className="h-8 w-8 text-primary/20" />
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed italic relative z-10">"{testimonio.testimonio}"</p>
                    <div className="flex items-center space-x-4">
                      <img
                        src={testimonio.imagen || "/placeholder.svg"}
                        alt={testimonio.nombre}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/20"
                      />
                      <div>
                        <p className="font-bold text-gray-900">{testimonio.nombre}</p>
                        <p className="text-sm text-muted-foreground">Miembro de la iglesia</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
            onClick={closeImageModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute -top-12 right-0 text-white hover:text-gray-300 bg-black/50 rounded-full"
                onClick={closeImageModal}
              >
                <X className="h-6 w-6" />
              </Button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Imagen ampliada"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
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
