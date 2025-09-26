import { Heart } from "lucide-react"

export function AboutHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-primary/15 via-background to-secondary/25 overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Icono con contenedor decorativo */}
          <div className="flex justify-center">
            
          </div>
          
          {/* Título y descripción */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sobre Nosotros
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Conoce nuestra historia, misión y el corazón que nos impulsa a servir a Dios y a nuestra comunidad con amor
              y dedicación.
            </p>
          </div>
          
          {/* Elementos decorativos inferiores */}
          <div className="flex justify-center space-x-4 pt-8">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-secondary rounded-full animate-pulse delay-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}