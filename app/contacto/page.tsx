"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              <span className="text-accent">Contáctanos</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Estamos aquí para ti. No dudes en contactarnos si tienes preguntas, necesitas oración o quieres conocer
              más sobre nuestra comunidad.
            </p>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle Principal 123
                          <br />
                          Ciudad, Estado 12345
                          <br />
                          País
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Teléfono</h3>
                        <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">WhatsApp disponible</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-muted-foreground">info@iglesia.com</p>
                        <p className="text-muted-foreground">pastor@iglesia.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Horarios de Oficina</h3>
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
                <Card>
                  <CardHeader>
                    <CardTitle>Horarios de Servicios</CardTitle>
                    <CardDescription>Únete a nosotros en nuestros encuentros semanales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Servicio General</span>
                      <span className="text-muted-foreground">Dom 10:00 AM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Reunión de Jóvenes</span>
                      <span className="text-muted-foreground">Sáb 7:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Estudio Bíblico</span>
                      <span className="text-muted-foreground">Mié 7:30 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Oración Matutina</span>
                      <span className="text-muted-foreground">Mar/Jue 6:00 AM</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Envíanos un Mensaje</CardTitle>
                    <CardDescription>Completa el formulario y nos pondremos en contacto contigo pronto</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="nombre">Nombre *</Label>
                          <Input
                            id="nombre"
                            placeholder="Tu nombre completo"
                            value={formData.nombre}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="telefono">Teléfono</Label>
                          <Input
                            id="telefono"
                            placeholder="Tu número de teléfono"
                            value={formData.telefono}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="tu@email.com"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="asunto">Asunto</Label>
                        <Input
                          id="asunto"
                          placeholder="¿En qué podemos ayudarte?"
                          value={formData.asunto}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="mensaje">Mensaje *</Label>
                        <Textarea
                          id="mensaje"
                          placeholder="Escribe tu mensaje aquí..."
                          rows={5}
                          value={formData.mensaje}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {message && (
                        <p className={`text-sm ${message.includes("Gracias") ? "text-green-600" : "text-red-600"}`}>
                          {message}
                        </p>
                      )}

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90" disabled={isLoading}>
                        <Send className="h-4 w-4 mr-2" />
                        {isLoading ? "Enviando..." : "Enviar Mensaje"}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Cómo Llegar</h2>
              <p className="text-xl text-muted-foreground">
                Estamos ubicados en el centro de la ciudad, con fácil acceso en transporte público
              </p>
            </div>

            <Card className="overflow-hidden">
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
                  />
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <a href="https://maps.app.goo.gl/X1LGGuJqFus9B3EM8" target="_blank" rel="noopener noreferrer">
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
