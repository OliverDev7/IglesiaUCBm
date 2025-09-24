"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Valentina Zarate",
    role: "Joven",
    content:
      "Esta iglesia cambió mi vida. Encontré no solo una comunidad de fe, sino una familia que me ama y me apoya en cada momento. El amor de Dios se siente real aquí.",
    image: "/smiling-hispanic-woman-portrait.jpg",
  },
  {
    name: "Rodrigo Cerda",
    role: "Ayudante de Jóvenes",
    content:
      "Como joven, siempre me sentí perdido hasta que llegué aquí. Los líderes me guiaron con paciencia y ahora puedo servir a otros jóvenes que buscan su propósito en Dios.",
    image: "/young-hispanic-man-smiling-portrait.jpg",
  },
  {
    name: "Ana y Pedro Martín",
    role: "Familia",
    content:
      "Nuestros hijos han crecido en esta iglesia y han aprendido valores sólidos. Es hermoso ver cómo toda la congregación se involucra en el crecimiento de nuestras familias.",
    image: "/hispanic-family-couple-portrait.jpg",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Testimonios de Fe</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Escucha las historias de transformación y esperanza de nuestra comunidad.
          </p>
        </div>

        <div className="relative">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-8">
              <div className="flex justify-center mb-6">
                <Quote className="h-12 w-12 text-accent" />
              </div>

              <div className="text-center space-y-6">
                <blockquote className="text-lg md:text-xl italic text-balance leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                <div className="flex flex-col items-center space-y-2">
                  <img
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
