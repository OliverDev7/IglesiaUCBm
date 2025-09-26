import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Baby, Church, ArrowRight } from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  const services = [
    {
      icon: Church,
      title: "Servicio General",
      time: "Domingos 10:30 AM",
      description: "Nos reunimos como familia en Cristo para adorar, aprender de Su Palabra y fortalecer nuestra comunión unos con otros.",
      location: "Templo Principal",
      highlight: true
    },
    {
      icon: Users,
      title: "Reunión de Jóvenes",
      time: "Sábados 18:00 HRS",
      description: "Ven y disfruta de un espacio con adoración, enseñanza bíblica, actividades dinámicas y momentos para crecer en comunidad.",
      location: "Templo principal",
      highlight: false
    },
    {
      icon: Baby,
      title: "Escuela Dominical",
      time: "Domingos 10:30 HRS",
      description: "Actividades y enseñanza adaptadas para que los niños de nuestra iglesia crezcan en la fe y el amor de Dios.",
      location: "Templo principal (salas pequeñas)",
      highlight: false
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-12">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestros Servicios</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Unidos en Adoración y Comunión
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Espacios diseñados para cada etapa de la vida, donde juntos crecemos en fe, esperanza y amor.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                service.highlight ? 'md:col-span-2 lg:col-span-1 md:scale-105' : ''
              }`}
            >
              {/* Highlight Badge */}
              {service.highlight && (
                <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold z-10">
                  Principal
                </div>
              )}

              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${
                service.highlight 
                  ? 'from-primary/5 to-accent/10' 
                  : 'from-secondary/5 to-primary/5'
              }`}></div>

              <CardHeader className="text-center relative z-10 pb-4">
                <div className="flex justify-center mb-4">
                  <div className={`p-4 rounded-2xl ${
                    service.highlight 
                      ? 'bg-accent/20 text-accent' 
                      : 'bg-primary/10 text-primary'
                  } group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                </div>
                <CardTitle className={`text-xl lg:text-2xl ${
                  service.highlight ? 'text-accent' : 'text-foreground'
                }`}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 relative z-10">
                <div className="flex items-center space-x-3 text-sm">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{service.time}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{service.location}</span>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground min-h-[60px]">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className={`w-full group-hover:bg-accent group-hover:text-primary transition-colors ${
                    service.highlight ? 'border-accent text-accent' : ''
                  }`}
                >
                  Más Información
                </Button>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">¿Primera Vez Visitándonos?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Te ayudamos a encontrar el servicio perfecto para ti. Contáctanos y te guiaremos personalmente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full px-8">
              <Link href="/servicios" className="flex items-center">
                Ver Calendario Completo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full border-2">
              <Link href="/contacto">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}