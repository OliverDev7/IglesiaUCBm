import { Heart } from "lucide-react"

export function AboutHero() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="flex justify-center">
            <Heart className="h-16 w-16 text-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-balance">Sobre Nosotros</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Conoce nuestra historia, misión y el corazón que nos impulsa a servir a Dios y a nuestra comunidad con amor
            y dedicación.
          </p>
        </div>
      </div>
    </section>
  )
}
