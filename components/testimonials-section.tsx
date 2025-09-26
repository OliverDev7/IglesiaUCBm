"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Valentina Zarate",
    role: "Joven",
    content:
      "Esta iglesia cambió mi vida. Encontré no solo una comunidad de fe, sino una familia que me ama y me apoya en cada momento. El amor de Dios se siente real aquí.",
    image: "/smiling-hispanic-woman-portrait.jpg",
    rating: 5
  },
  {
    name: "Rodrigo Cerda",
    role: "Ayudante de Jóvenes",
    content:
      "Como joven, siempre me sentí perdido hasta que llegué aquí. Los líderes me guiaron con paciencia y ahora puedo servir a otros jóvenes que buscan su propósito en Dios.",
    image: "/young-hispanic-man-smiling-portrait.jpg",
    rating: 5
  },
  {
    name: "Ana y Pedro Martín",
    role: "Familia",
    content:
      "Nuestros hijos han crecido en esta iglesia y han aprendido valores sólidos. Es hermoso ver cómo toda la congregación se involucra en el crecimiento de nuestras familias.",
    image: "/hispanic-family-couple-portrait.jpg",
    rating: 5
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
    <section className="py-20 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
            <Quote className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Testimonios Reales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Vidas Transformadas por Cristo
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Descubre cómo Dios está obrando en las vidas de nuestra comunidad de fe.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <CardContent className="p-8 md:p-12 relative z-10">
              <div className="flex justify-center mb-6">
                <Quote className="h-16 w-16 text-accent/30" />
              </div>

              <div className="text-center space-y-8">
                {/* Rating Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-xl md:text-2xl italic text-balance leading-relaxed font-light">
                  "{testimonials[currentIndex].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex flex-col items-center space-y-4">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex].image || "/placeholder.svg"}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full object-cover border-4 border-primary/20"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                    <p className="text-primary font-medium">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-2 w-12 h-12 hover:bg-primary hover:text-white transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary scale-125" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-2 w-12 h-12 hover:bg-primary hover:text-white transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Additional Info */}
        
      </div>
    </section>
  )
}