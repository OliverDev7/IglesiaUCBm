import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, PlayCircle } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/10 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <img
          src="/bible.jpg"
          alt="Interior de iglesia con luz cálida"
          className="w-full h-full object-cover opacity-15"
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000"></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-6">
            <div className="flex justify-center">
             
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              Encuentra Proposito y
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Esperanza en Cristo
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Descubre el propósito eterno que Dios ha diseñado especialmente para ti, y camina junto a otros hacia una vida plena y transformada.
            </p>
          </div>

          {/* Bible Verse */}
          <div className="bg-card/80 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-border/50 shadow-lg">
            <div className="flex items-center justify-center mb-3">
              <Heart className="h-6 w-6 text-accent mr-2" />
              <span className="text-sm font-semibold text-accent">Versículo del Día</span>
            </div>
            <blockquote className="text-lg md:text-xl italic text-card-foreground text-balance leading-relaxed">
              "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-3 block">— Mateo 11:28</cite>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105">
              <Link href="/sobre-nosotros" className="flex items-center">
                Conócenos Mejor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 rounded-full border-2 bg-transparent hover:bg-primary/10 transition-all">
              <Link href="/servicios" className="flex items-center">
                <PlayCircle className="mr-2 h-5 w-5" />
                Ver Servicios
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
         
        </div>
      </div>

      {/* Scroll Indicator */}
     
    </section>
  )
}