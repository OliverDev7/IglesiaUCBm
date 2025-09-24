import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, MapPin, Users, Music, Baby, Camera, BookHeart } from "lucide-react"
import Link from "next/link"

export function ServicesPreview() {
  const services = [
    {
      icon: Users,
      title: "Servicio General",
      time: "Domingos 10:30 AM",
      description: "Adoración, enseñanza bíblica y comunión para toda la familia.",
      location: "Templo Principal",
    },
    {
      icon: Music,
      title: "Reunión de Jóvenes",
      time: "Sábados 18:00 HRS",
      description: "Adoracion, enseñanza Biblica, dinamicas y mas.",
      location: "Templo principal",
    },
    {
      icon: Baby,
      title: "Escuela dominical",
      time: "Domingos 10:30 HRS",
      description: "Actividades y enseñanzas adaptadas para los niños de nuestra Iglesia",
      location: "Templo principal(salas pequeñas)",
    },
    {
      icon: Camera,
      title: "Reunion de oracion",
      time: "Miercoles 20:30 HRS",
      description: "Tiempo de comunion y oracion via online(zoom)",
      location: "Zoom",
    },
    {
      icon: BookHeart,
      title: "Reunion de mujeres",
      time: "Miercoles 20:30 HRS(Cierto tiempo se avisa)",
      description: "Tiempo de comunion solo mujeres",
      location: "Presencial",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Ofrecemos diferentes espacios de adoración y crecimiento espiritual para todas las edades. Ven y sé parte de
            nuestra comunidad de fe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" />
                  <span>{service.time}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>{service.location}</span>
                </div>
                <p className="text-sm leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/servicios">
              <Calendar className="mr-2 h-5 w-5" />
              Ver Calendario Completo
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
