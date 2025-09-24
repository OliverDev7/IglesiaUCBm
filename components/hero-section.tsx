import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bible.jpg"
          alt="Interior de iglesia con luz cálida"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <div className="flex justify-center">
              
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-accent leading-tight">
              ¡Bienvenido a nuestro sitio!
              <br />
            </h1>
            <p className="text-xl md:text-2xl text-black max-w-2xl mx-auto text-pretty leading-relaxed">
              Este es un espacio para todos: creas o estés buscando respuestas, aquí encontrarás esperanza, mensajes que 
              fortalecen el alma y una comunidad dispuesta a caminar contigo.
            </p>
          </div>

          {/* Bible Verse */}
          <div className="bg-card/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto border border-border/50">
            <blockquote className="text-lg md:text-xl italic text-card-foreground text-balance">
              "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar."
            </blockquote>
            <cite className="text-sm text-muted-foreground mt-2 block">— Mateo 11:28</cite>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3">
              <Link href="/sobre-nosotros">
                Conócenos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
              <Link href="/servicios">Ver Horarios</Link>
            </Button>
          </div>

          {/* Service Times Quick Info 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md mx-auto text-sm">
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <h3 className="font-semibold text-card-foreground">Domingos</h3>
              <p className="text-muted-foreground">Servicio General - 10:00 AM</p>
            </div>
            <div className="bg-card/60 backdrop-blur-sm rounded-lg p-4 border border-border/50">
              <h3 className="font-semibold text-card-foreground">Sábados</h3>
              <p className="text-muted-foreground">Reunión de Jóvenes - 7:00 PM</p>
            </div>
          </div>
          */}
        </div>
      </div>
    </section>
  )
}
