import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Phone, Calendar } from "lucide-react"
import Link from "next/link"

export function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-10">
          {/* Header Section */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
              <Calendar className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Únete a Nosotros</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Tu Viaje Espiritual Comienza Aquí
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              Da el primer paso hacia una vida transformada. Encuentra propósito, comunidad y esperanza en Cristo.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold text-lg px-8 py-4 rounded-full shadow-lg transition-transform hover:scale-105">
              <Link href="/contacto" className="flex items-center">
                Visítanos Este Domingo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-4 rounded-full border-2 bg-transparent hover:bg-primary/10 transition-all">
              <Link href="/recursos">Explorar Recursos</Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-md mx-auto">
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center space-x-3 text-sm">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="font-medium">Calle Merced 765, Melipilla</span>
              </div>
            </div>
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 hover:shadow-lg transition-all">
              <div className="flex items-center justify-center space-x-3 text-sm">
                <Phone className="h-5 w-5 text-accent" />
                <span className="font-medium">+56 9 8263 8176</span>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-primary/5 rounded-2xl p-6 max-w-2xl mx-auto border border-primary/20">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">Primera vez?</span> Te ayudaremos a sentirte como en casa. 
              Tenemos un equipo de bienvenida listo para recibirte y guiarte.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}