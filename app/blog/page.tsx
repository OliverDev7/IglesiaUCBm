"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react"
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
      autor: "Pastor Miguel",
      categoria: "Espiritualidad",
      imagen: "/person-praying-peaceful.jpg",
      slug: "poder-oracion-tiempos-dificiles",
    },
    {
      titulo: "Viviendo con Propósito: Descubre tu Llamado",
      resumen:
        "Cada persona tiene un propósito único en el plan de Dios. Aprende cómo descubrir y vivir tu llamado divino.",
      fecha: "8 de Enero, 2024",
      autor: "Pastora Ana",
      categoria: "Propósito",
      imagen: "/person-helping-others-with-purpose.jpg",
      slug: "viviendo-con-proposito",
    },
    {
      titulo: "La Importancia de la Comunidad Cristiana",
      resumen:
        "Dios nos diseñó para vivir en comunidad. Explora por qué necesitamos unos a otros en nuestro caminar de fe.",
      fecha: "1 de Enero, 2024",
      autor: "Pastor Miguel",
      categoria: "Comunidad",
      imagen: "/christian-community-fellowship.jpg",
      slug: "importancia-comunidad-cristiana",
    },
    {
      titulo: "Testimonio: Mi Encuentro con Jesús",
      resumen: "La historia personal de María sobre cómo Dios transformó su vida y le dio una nueva esperanza.",
      fecha: "25 de Diciembre, 2023",
      autor: "María González",
      categoria: "Testimonio",
      imagen: "/woman-testimony-joy.jpg",
      slug: "testimonio-encuentro-jesus",
    },
    {
      titulo: "Criando Hijos en la Fe: Consejos Prácticos",
      resumen:
        "Estrategias bíblicas y prácticas para guiar a nuestros hijos en su desarrollo espiritual desde temprana edad.",
      fecha: "18 de Diciembre, 2023",
      autor: "Pastora Ana",
      categoria: "Familia",
      imagen: "/placeholder-xfyxi.png",
      slug: "criando-hijos-fe",
    },
    {
      titulo: "La Esperanza que No Defrauda",
      resumen:
        "En un mundo lleno de incertidumbre, la esperanza cristiana nos ofrece una base sólida e inquebrantable.",
      fecha: "11 de Diciembre, 2023",
      autor: "Pastor Miguel",
      categoria: "Esperanza",
      imagen: "/sunrise-hope-light.jpg",
      slug: "esperanza-no-defrauda",
    },
  ]

  const categorias = ["Todos", "Espiritualidad", "Propósito", "Comunidad", "Testimonio", "Familia", "Esperanza"]

  const articulosFiltrados =
    selectedCategory === "Todos" ? articulos : articulos.filter((articulo) => articulo.categoria === selectedCategory)

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <BookOpen className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Blog <span className="text-accent">Cristiano</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Reflexiones, testimonios y enseñanzas para fortalecer tu fe y crecer espiritualmente. Encuentra
              inspiración para tu caminar diario con Dios.
            </p>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 border-b">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categorias.map((categoria) => (
                <Badge
                  key={categoria}
                  variant={categoria === selectedCategory ? "default" : "outline"}
                  className="cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors"
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
          <section className="py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2">
                  {selectedCategory === "Todos" ? "Artículo Destacado" : `Destacado en ${selectedCategory}`}
                </h2>
                <p className="text-muted-foreground">
                  {selectedCategory === "Todos"
                    ? "Lo más reciente de nuestro blog"
                    : `Artículos sobre ${selectedCategory}`}
                </p>
              </div>

              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative">
                    <img
                      src={articulosFiltrados[0].imagen || "/placeholder.svg"}
                      alt={articulosFiltrados[0].titulo}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <Badge variant="secondary">{articulosFiltrados[0].categoria}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {articulosFiltrados[0].fecha}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-1" />
                        {articulosFiltrados[0].autor}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{articulosFiltrados[0].titulo}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{articulosFiltrados[0].resumen}</p>
                    <Button asChild className="bg-accent hover:bg-accent/90">
                      <Link href={`/blog/${articulosFiltrados[0].slug}`}>
                        Leer Artículo
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory === "Todos" ? "Artículos Recientes" : `Más sobre ${selectedCategory}`}
              </h2>
              <p className="text-muted-foreground">
                {articulosFiltrados.length > 1
                  ? "Explora más contenido inspirador"
                  : "No hay más artículos en esta categoría"}
              </p>
            </div>

            {articulosFiltrados.length > 1 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articulosFiltrados.slice(1).map((articulo, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <img
                        src={articulo.imagen || "/placeholder.svg"}
                        alt={articulo.titulo}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-4 left-4" variant="secondary">
                        {articulo.categoria}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 mb-3 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {articulo.fecha}
                        </div>
                        <div className="flex items-center">
                          <User className="h-4 w-4 mr-1" />
                          {articulo.autor}
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold mb-3 line-clamp-2">{articulo.titulo}</h3>
                      <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-3">
                        {articulo.resumen}
                      </p>
                      <Button asChild variant="outline" className="w-full bg-transparent">
                        <Link href={`/blog/${articulo.slug}`}>
                          Leer Más
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No hay más artículos disponibles en la categoría "{selectedCategory}".
                </p>
                <Button onClick={() => setSelectedCategory("Todos")} className="mt-4 bg-accent hover:bg-accent/90">
                  Ver Todos los Artículos
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="bg-accent text-accent-foreground">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">Mantente Conectado</h2>
                <p className="text-accent-foreground/80 mb-6">
                  Suscríbete para recibir nuestros artículos más recientes y devocionales directamente en tu email
                </p>
                <form onSubmit={handleSubscription} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Tu email"
                    className="flex-1 bg-background text-foreground"
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
                  <p className={`text-sm mt-4 ${message.includes("Gracias") ? "text-green-200" : "text-red-200"}`}>
                    {message}
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
