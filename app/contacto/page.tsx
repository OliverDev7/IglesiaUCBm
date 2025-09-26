"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Heart } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.nombre || !formData.email || !formData.mensaje) {
      setMessage("Por favor, completa todos los campos obligatorios.")
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
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
          type: "contact",
          ...formData,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setMessage("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
        setFormData({
          nombre: "",
          telefono: "",
          email: "",
          asunto: "",
          mensaje: "",
        })
      } else {
        setMessage("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.")
      }
    } catch (error) {
      setMessage("Hubo un error al enviar tu mensaje. Por favor, intenta nuevamente.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    })
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
                    <MessageCircle className="h-16 w-16 text-primary" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent/50 bg-clip-text text-transparent">
                Contáctanos
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Estamos aquí para ti. No dudes en contactarnos si tienes preguntas, necesitas oración o quieres conocer
                más sobre nuestra comunidad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Información de Contacto
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-3 bg-blue-100 rounded-2xl">
                        <MapPin className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle Merced 765
                          <br />
                          Melipilla
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-3 bg-green-100 rounded-2xl">
                        <Phone className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Teléfono</h3>
                        <p className="text-muted-foreground">+5698272317</p>
                        <p className="text-sm text-muted-foreground">WhatsApp disponible</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-3 bg-purple-100 rounded-2xl">
                        <Mail className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Email</h3>
                        <p className="text-muted-foreground">info@iglesia.com</p>
                        <p className="text-muted-foreground">info2@iglesia.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 p-4 rounded-2xl bg-gradient-to-br from-white to-slate-50/80 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="p-3 bg-orange-100 rounded-2xl">
                        <Clock className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Horarios para llamar</h3>
                        <div className="text-muted-foreground space-y-1">
                          <p>Lunes - Viernes: 9:00 AM - 5:00 PM</p>
                          <p>Sábados: 2:00 PM - 8:00 PM</p>
                          <p>Domingos: 8:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Times */}
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Horarios de Servicios
                    </CardTitle>
                    <CardDescription className="text-lg">Únete a nosotros en nuestros encuentros semanales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center p-3 rounded-xl bg-primary/10">
                      <span className="font-semibold text-gray-900">Servicio General</span>
                      <span className="text-primary font-bold">Dom 10:00 HRS</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-green-50">
                      <span className="font-semibold text-gray-900">Reunión de Jóvenes</span>
                      <span className="text-green-600 font-bold">Sáb 18:00 HRS</span>
                    </div>
                    <div className="flex justify-between items-center p-3 rounded-xl bg-blue-50">
                      <span className="font-semibold text-gray-900">Grupos pequeños</span>
                      <span className="text-blue-600 font-bold">Mié 20:30 HRS</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80">
                  <CardHeader className="text-center pb-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Send className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                      Envíanos un Mensaje
                    </CardTitle>
                    <CardDescription className="text-lg">
                      Completa el formulario y nos pondremos en contacto contigo pronto
                      <span className="block text-sm text-cyan-600 mt-1">*Recuerda colocar un correo valido cuando envies el formulario*</span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre" className="text-gray-900 font-semibold">
                            Nombre *
                          </Label>
                          <Input
                            id="nombre"
                            placeholder="Tu nombre completo"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                            className="h-12 rounded-xl border-2 focus:border-accent transition-all duration-300"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefono" className="text-gray-900 font-semibold">
                            Teléfono (Opcional)
                          </Label>
                          <Input
                            id="telefono"
                            placeholder="Tu número de teléfono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                            className="h-12 rounded-xl border-2 focus:border-accent transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-900 font-semibold">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-xl border-2 focus:border-accent transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asunto" className="text-gray-900 font-semibold">
                          Asunto *
                        </Label>
                        <Input
                          id="asunto"
                          placeholder="¿En qué podemos ayudarte?"
                          value={formData.asunto}
                          onChange={handleInputChange}
                          required
                          className="h-12 rounded-xl border-2 focus:border-accent transition-all duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje" className="text-gray-900 font-semibold">
                          Mensaje *
                        </Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Escribe tu mensaje aquí..."
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          required
                          className="rounded-xl border-2 focus:border-accent transition-all duration-300 resize-none"
                        />
                      </div>

                      {message && (
                        <div className={`p-4 rounded-xl ${message.includes("Gracias") ? "bg-green-100 border border-green-200" : "bg-red-100 border border-red-200"}`}>
                          <p className={`text-sm font-medium ${message.includes("Gracias") ? "text-green-800" : "text-red-800"}`}>
                            {message}
                          </p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-white/20 hover:from-primary/90 hover:to-primary cursor-pointer shadow-lg h-12 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-5 w-5 mr-2" />
                            Enviar Mensaje
                          </div>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Cómo Llegar
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estamos ubicados en el centro de la ciudad, con fácil acceso en transporte público
              </p>
            </div>

            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="relative">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749293267!5m2!1sen!2sau"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de la Iglesia Cristiana"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-white/20 hover:from-primary/90 hover:to-primary shadow-lg">
                <a href="https://maps.app.goo.gl/X1LGGuJqFus9B3EM8" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-5 w-5 mr-2" />
                  Abrir en Google Maps
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}