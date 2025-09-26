import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, HandHelping, Cross, Star } from "lucide-react"

export function WelcomeSection() {
  const values = [
    {
      icon: Heart,
      title: "Amor Incondicional",
      description: "Experimentamos y compartimos el amor transformador de Dios con cada persona que llega a nuestra comunidad.",
      color: "text-red-400"
    },
    {
      icon: Users,
      title: "Comunidad Auténtica",
      description: "Construimos relaciones genuinas donde cada miembro encuentra apoyo, amistad y crecimiento espiritual.",
      color: "text-blue-400"
    },
    {
      icon: BookOpen,
      title: "Verdad Bíblica",
      description: "Nuestras enseñanzas se fundamentan en la Palabra de Dios, guiándonos hacia una fe sólida y transformadora.",
      color: "text-green-400"
    },
    {
      icon: HandHelping,
      title: "Servicio Generoso",
      description: "Extendemos la mano a nuestra comunidad, demostrando el amor de Cristo a través de acciones concretas.",
      color: "text-orange-400"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
      <div className="absolute top-20 right-20 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex justify-center">
            <div className="bg-accent/20 p-4 rounded-2xl border border-accent/30">
              <Cross className="h-8 w-8 text-accent" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Bienvenido a la Familia
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Un lugar donde cada persona es valorada, amada y equipada para vivir el propósito que Dios tiene para su vida.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {values.map((value, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardContent className="p-6 space-y-4 relative z-10 text-center">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-3 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300">
                    <value.icon className={`h-8 w-8 ${value.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-16 translate-x-16"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Star className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
              Nuestra Misión Transformadora
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
              Hacer discípulos de Jesucristo que transformen vidas y comunidades a través del amor, la verdad y el servicio. 
              Creemos que cada persona tiene un propósito divino único y estamos aquí para acompañarte en el descubrimiento 
              y desarrollo de ese llamado especial.
            </p>
          </div>
        </div>

        {/* Quick Stats */}
      
      </div>
    </section>
  )
}