"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, BookOpen, Mail, Send } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
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
          type: "blog",
          email: email,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage("¡Gracias por suscribirte! Te notificaremos sobre nuevos artículos del blog.")
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

  const articulos = [
    {
      titulo: "El Poder de la Oración en Tiempos Difíciles",
      resumen:
        "Descubre cómo la oración puede transformar tu perspectiva y darte paz en medio de las tormentas de la vida.",
      fecha: "15 de Enero, 2024",
      autor: "Hermano Miguel",
      categoria: "Espiritualidad",
      imagen: "/person-praying-peaceful.jpg",
      slug: "poder-oracion-tiempos-dificiles",
      color: "from-purple-500 to-pink-500",
    },
    {
      titulo: "Viviendo con Propósito: Descubre tu Llamado",
      resumen:
        "Cada persona tiene un propósito único en el plan de Dios. Aprende cómo descubrir y vivir tu llamado divino.",
      fecha: "8 de Enero, 2024",
      autor: "Hermano Hernan",
      categoria: "Propósito",
      imagen: "/proposito.jpeg",
      slug: "viviendo-con-proposito",
      color: "from-blue-500 to-cyan-500",
    },
    {
      titulo: "La Importancia de la Comunidad Cristiana",
      resumen:
        "Dios nos diseñó para vivir en comunidad. Explora por qué necesitamos unos a otros en nuestro caminar de fe.",
      fecha: "1 de Enero, 2024",
      autor: "Hermano Hernan",
      categoria: "Comunidad",
      imagen: "/christian-community-fellowship.jpg",
      slug: "importancia-comunidad-cristiana",
      color: "from-green-500 to-emerald-500",
    },
    {
      titulo: "Testimonio: Mi Encuentro con Jesús",
      resumen: "La historia personal de María sobre cómo Dios transformó su vida y le dio una nueva esperanza.",
      fecha: "25 de Diciembre, 2023",
      autor: "María González",
      categoria: "Testimonio",
      imagen: "/woman-testimony-joy.jpg",
      slug: "testimonio-encuentro-jesus",
      color: "from-orange-500 to-red-500",
    },
    {
      titulo: "Criando Hijos en la Fe: Consejos Prácticos",
      resumen:
        "Estrategias bíblicas y prácticas para guiar a nuestros hijos en su desarrollo espiritual desde temprana edad.",
      fecha: "18 de Diciembre, 2023",
      autor: "Hermano Juan",
      categoria: "Familia",
      imagen: "/familia.jpg",
      slug: "criando-hijos-fe",
      color: "from-amber-500 to-yellow-500",
    },
    {
      titulo: "La Esperanza que No Defrauda",
      resumen:
        "En un mundo lleno de incertidumbre, la esperanza cristiana nos ofrece una base sólida e inquebrantable.",
      fecha: "11 de Diciembre, 2023",
      autor: "Hermano Miguel",
      categoria: "Esperanza",
      imagen: "/sunrise-hope-light.jpg",
      slug: "esperanza-no-defrauda",
      color: "from-indigo-500 to-purple-500",
    },
  ]

  const categorias = ["Todos", "Espiritualidad", "Propósito", "Comunidad", "Testimonio", "Familia", "Esperanza"]

  const articulosFiltrados =
    selectedCategory === "Todos" ? articulos : articulos.filter((articulo) => articulo.categoria === selectedCategory)

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
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent/40 bg-clip-text text-transparent">
                Blog Cristiano
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Reflexiones, testimonios y enseñanzas para fortalecer tu fe y crecer espiritualmente. 
                Encuentra inspiración para tu caminar diario con Dios.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b bg-white/50 backdrop-blur-sm sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categorias.map((categoria) => (
                <Badge
                  key={categoria}
                  variant={categoria === selectedCategory ? "default" : "outline"}
                  className={`cursor-pointer text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                    categoria === selectedCategory 
                      ? "bg-gradient-to-r from-primary to-white/10 text-white shadow-lg" 
                      : "bg-white/80 hover:bg-primary/10 hover:text-primary border-1"
                  }`}
                  onClick={() => setSelectedCategory(categoria)}
                >
                  {categoria}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Article */}
        {articulosFiltrados.length > 0 && (
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                  {selectedCategory === "Todos" ? "Artículo Destacado" : `Destacado en ${selectedCategory}`}
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {selectedCategory === "Todos"
                    ? "Lo más reciente de nuestro blog"
                    : `Artículos sobre ${selectedCategory}`}
                </p>
              </div>

              <Card className="overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 group bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative overflow-hidden">
                    <img
                      src={articulosFiltrados[0].imagen || "/placeholder.svg"}
                      alt={articulosFiltrados[0].titulo}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary backdrop-blur-sm text-white border-0 font-semibold">
                        {articulosFiltrados[0].categoria}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {articulosFiltrados[0].fecha}
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {articulosFiltrados[0].autor}
                      </div>
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-bold mb-4 text-gray-900 leading-tight">
                      {articulosFiltrados[0].titulo}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {articulosFiltrados[0].resumen}
                    </p>
                    <Button asChild className="bg-gradient-to-r from-primary to-white/10 hover:from-white/90 hover:to-white hover:text-black shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <Link href={`/blog/${articulosFiltrados[0].slug}`}>
                        Leer Artículo
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                {selectedCategory === "Todos" ? "Artículos Recientes" : `Más sobre ${selectedCategory}`}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {articulosFiltrados.length > 1
                  ? "Explora más contenido inspirador"
                  : "No hay más artículos en esta categoría"}
              </p>
            </div>

            {articulosFiltrados.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articulosFiltrados.slice(1).map((articulo, index) => (
                  <Card key={index} className="group relative overflow-hidden border-0 shadow-lg bg-white hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={articulo.imagen || "/placeholder.svg"}
                        alt={articulo.titulo}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-900 border-0">
                        {articulo.categoria}
                      </Badge>
                      <div className={`absolute inset-0 bg-gradient-to-br ${articulo.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {articulo.fecha}
                        </div>
                        <div className="flex items-center">
                          <User className="h-3 w-3 mr-1" />
                          {articulo.autor}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-gray-900 line-clamp-2 leading-tight">
                        {articulo.titulo}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-sm leading-relaxed line-clamp-3">
                        {articulo.resumen}
                      </p>
                      <Button asChild variant="outline" className="w-full hover:bg-primary border-2 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                        <Link href={`/blog/${articulo.slug}`}>
                          Leer Más
                          <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 max-w-md mx-auto">
                  <BookOpen className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground text-lg mb-4">
                    No hay más artículos disponibles en la categoría "{selectedCategory}".
                  </p>
                  <Button 
                    onClick={() => setSelectedCategory("Todos")} 
                    className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg"
                  >
                    Ver Todos los Artículos
                  </Button>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-primary/90 to-accent/20 text-white">
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
                      Mantente Conectado
                    </h2>
                    <p className="text-white/90 text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
                      Suscríbete para recibir nuestros artículos más recientes y devocionales directamente en tu email
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
      </main>
      <Footer />
    </div>
  )
}