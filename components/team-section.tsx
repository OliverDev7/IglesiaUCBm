import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Users, Crown, Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TeamSection() {
  const pastorTeam = [
    {
      name: "Pastor Miguel Hernández",
      role: "Pastor Principal",
      description:
        "Con más de 15 años de ministerio, el Pastor Miguel lidera nuestra iglesia con sabiduría y compasión. Su corazón por las personas y su dedicación a la Palabra de Dios inspiran a toda nuestra congregación.",
      image: "/placeholder.svg?key=pastor1",
      email: "pastor@iglesiaucb.com",
      phone: "+56 9 8263 8176",
      featured: true
    },
    {
      name: "Anciano Luis Martínez",
      role: "Anciano de la Iglesia",
      description:
        "El Anciano Luis se dedica al cuidado espiritual de la iglesia, apoyando en la enseñanza y guiando con sabiduría a la congregación. Su compromiso con la oración y la enseñanza bíblica ha sido clave para el crecimiento.",
      image: "/placeholder.svg?key=pastor2",
      email: "anciano@iglesiaucb.com",
      phone: "+56 9 7654 3210",
      featured: true
    },
  ]

  const leaders = [
    {
      name: "Juan Canaso",
      role: "Líder de Jóvenes",
      description: "Apasionado por alcanzar a la nueva generación con el mensaje de esperanza de Cristo.",
      image: "/placeholder.svg?key=leader1",
      ministry: "Juventud"
    },
    {
      name: "Cristofer Power",
      role: "Director de Alabanza",
      description: "Guía a nuestro equipo de adoración para crear un ambiente de encuentro con Dios.",
      image: "/placeholder.svg?key=leader2",
      ministry: "Alabanza"
    },
    {
      name: "Paula González",
      role: "Directora de Niños",
      description: "Dedica su vida a enseñar a los más pequeños sobre el amor de Jesús de manera creativa.",
      image: "/placeholder.svg?key=leader3",
      ministry: "Niños"
    },
    {
      name: "Jonathan Silva",
      role: "Anciano",
      description: "Sirve con entrega en la edificación de la iglesia, acompañando a los hermanos con palabras de aliento.",
      image: "/placeholder.svg?key=leader4",
      ministry: "Consejo"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-accent/20 px-4 py-2 rounded-full border border-accent/30">
            <Users className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Nuestro Equipo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Líderes con Corazón de Siervo
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Conoce a los siervos que Dios ha puesto para pastorear, guiar y servir a nuestra comunidad con amor y dedicación.
          </p>
        </div>

        {/* Pastoral Team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Equipo Pastoral</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Líderes comprometidos con el cuidado espiritual de nuestra congregación</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {pastorTeam.map((pastor, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Featured Badge */}
                {pastor.featured && (
                  <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center">
                    <Crown className="h-3 w-3 mr-1" />
                    Líder Principal
                  </div>
                )}

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>

                <CardContent className="p-8 relative z-10">
                  <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-start">
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={pastor.image || "/placeholder.svg"}
                        alt={pastor.name}
                        className="w-32 h-32 rounded-2xl object-cover border-4 border-accent/20 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                        <Heart className="h-4 w-4 text-primary" />
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center lg:text-left space-y-4">
                      <div>
                        <h4 className="text-2xl font-bold text-foreground">{pastor.name}</h4>
                        <p className="text-accent font-semibold text-lg">{pastor.role}</p>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">{pastor.description}</p>
                      
                      {/* Contact Info */}
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <div className="flex items-center space-x-2 text-sm group">
                          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                            <Mail className="h-4 w-4 text-primary group-hover:text-accent" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{pastor.email}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm group">
                          <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-accent/20 transition-colors">
                            <Phone className="h-4 w-4 text-primary group-hover:text-accent" />
                          </div>
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors">{pastor.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Card>
            ))}
          </div>
        </div>

        {/* Ministry Leaders */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Líderes de Ministerio</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">Siervos dedicados que impulsan los diferentes ministerios de nuestra iglesia</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {leaders.map((leader, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 text-center">
                {/* Ministry Badge */}
                <div className="absolute top-4 left-4 bg-primary/20 text-primary px-2 py-1 rounded-full text-xs font-medium">
                  {leader.ministry}
                </div>

                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>

                <CardContent className="p-6 space-y-4 relative z-10">
                  {/* Profile Image */}
                  <div className="relative mx-auto w-20 h-20">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full rounded-2xl object-cover border-2 border-accent/20"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                      <Star className="h-2 w-2 text-primary" />
                    </div>
                  </div>

                  {/* Leader Info */}
                  <div>
                    <h4 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">{leader.name}</h4>
                    <p className="text-accent font-medium text-sm">{leader.role}</p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">{leader.description}</p>

                  {/* Contact Button */}
                  <Button variant="outline" size="sm" className="w-full group-hover:bg-accent group-hover:text-primary transition-colors">
                    Contactar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">¿Te Gustaría Unirte a Nuestra Familia?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Nuestra iglesia es un lugar donde todas las personas son bienvenidas, sin importar de dónde vengas o lo que hayas vivido. 
              Aquí encontrarás un espacio lleno de amor, apoyo y esperanza. Ven a descubrir un lugar donde podrás crecer, 
              hacer nuevos amigos y encontrar respuestas para las preguntas más importantes de la vida.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full px-8">
                <Mail className="mr-2 h-5 w-5" />
                Contáctanos Ahora
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-2">
                <Phone className="mr-2 h-5 w-5" />
                Llamar Ahora
              </Button>
            </div>

            <div className="mt-6 flex items-center justify-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>liderazgo@iglesiaucb.com</span>
              <span className="text-border">•</span>
              <Phone className="h-4 w-4" />
              <span>+56 9 8263 8176</span>
            </div>
          </div>
        </div>

        {/* Volunteer CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            <span className="font-semibold text-accent">¿Interesado en servir?</span> Tenemos oportunidades para que uses tus dones y talentos.
          </p>
        </div>
      </div>
    </section>
  )
}