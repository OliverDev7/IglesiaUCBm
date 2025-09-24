import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export function TeamSection() {
  const pastorTeam = [
    {
      name: "Pastor Miguel Hernández",
      role: "Pastor Principal",
      description:
        "Con más de 15 años de ministerio, el Pastor Miguel lidera nuestra iglesia con sabiduría y compasión. Su corazón por las personas y su dedicación a la Palabra de Dios inspiran a toda nuestra congregación.",
      image: "/placeholder.svg?key=pastor1",
      email: "pastor@iglesia.com",
      phone: "+1 (555) 123-4567",
    },
    {
      name: "Anciano UWIWIWIWIW",
      role: "Anciano",
      description:
        "El Anciano UQUWHAHAH se dedica al cuidado espiritual de la iglesia, apoyando en la enseñanza y guiando con sabiduría a la congregación. Su compromiso con la oración, el acompañamiento y la enseñanza bíblica ha sido clave para el crecimiento y la unidad del cuerpo de Cristo.",
      image: "/placeholder.svg?key=pastor2",
      email: "elena@iglesia.com",
      phone: "+1 (555) 123-4568",
    },
  ]

  const leaders = [
    {
      name: "Juan canaso",
      role: "Líder de Jóvenes",
      description: "Apasionado por alcanzar a la nueva generación con el mensaje de esperanza de Cristo.",
      image: "/placeholder.svg?key=leader1",
    },
    {
      name: "Cristofer wowero",
      role: "Director de Alabanza",
      description: "Guía a nuestro equipo de adoración para crear un ambiente de encuentro con Dios.",
      image: "/placeholder.svg?key=leader2",
    },
    {
      name: "Paula",
      role: "Directora de niños",
      description: "Dedica su vida a enseñar a los más pequeños sobre el amor de Jesús de manera creativa.",
      image: "/placeholder.svg?key=leader3",
    },
    {
      name: "Joanatan",
      role: "Anciano",
      description: "Jonatan sirve con entrega en la edificación de la iglesia, acompañando a los hermanos con palabras de aliento y una fe firme en Cristo.",
      image: "/placeholder.svg?key=leader4",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Nuestro Equipo</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Conoce a los líderes que Dios ha puesto para pastorear y servir a nuestra comunidad con amor y dedicación.
          </p>
        </div>

        {/* Pastoral Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Equipo Pastoral</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pastorTeam.map((pastor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img
                        src={pastor.image || "/placeholder.svg"}
                        alt={pastor.name}
                        className="w-32 h-32 rounded-full object-cover mx-auto md:mx-0"
                      />
                    </div>
                    <div className="flex-1 space-y-4 text-center md:text-left">
                      <div>
                        <h4 className="text-xl font-bold">{pastor.name}</h4>
                        <p className="text-accent font-medium">{pastor.role}</p>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{pastor.description}</p>
                      <div className="flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Mail className="h-4 w-4" />
                          <span>{pastor.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Phone className="h-4 w-4" />
                          <span>{pastor.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Ministry Leaders */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Líderes de Ministerio</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto"
                  />
                  <div>
                    <h4 className="text-lg font-bold">{leader.name}</h4>
                    <p className="text-accent font-medium text-sm">{leader.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-secondary/30 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">¿Te Gustaría Asistir?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            Nuestra iglesia es un lugar donde todas las personas son bienvenidas, 
            sin importar de dónde vengas o lo que hayas vivido. Aquí encontrarás un espacio lleno de amor, 
            apoyo y esperanza. Ven a descubrir un lugar donde podrás crecer, hacer nuevos amigos y encontrar
            respuestas para las preguntas más importantes de la vida. Te esperamos con los brazos abiertos para 
            compartir juntos la Palabra de Dios y vivir una experiencia que puede transformar tu corazón.
          </p>
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4" />
            <span>Contáctanos: liderazgo@iglesia.com</span>
          </div>
        </div>
      </div>
    </section>
  )
}
