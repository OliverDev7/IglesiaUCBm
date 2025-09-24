import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, BookOpen, Hand as Hands } from "lucide-react"

export function WelcomeSection() {
  const values = [
    {
      icon: Heart,
      title: "Amor",
      description: "Experimentamos y compartimos el amor incondicional de Dios con todos.",
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Construimos relaciones auténticas y nos apoyamos mutuamente en la fe.",
    },
    {
      icon: BookOpen,
      title: "Palabra",
      description: "Basamos nuestras enseñanzas en la Biblia y su mensaje transformador.",
    },
    {
      icon: Hands,
      title: "Servicio",
      description: "Servimos a nuestra comunidad local y extendemos la mano a los necesitados.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Bienvenido a Nuestra Familia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Somos una iglesia cristiana comprometida con vivir y compartir el evangelio de Jesucristo. Aquí encontrarás
            una comunidad que te acompaña en tu crecimiento espiritual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-secondary/50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Hacer discípulos de Jesucristo que transformen vidas y comunidades a través del amor, la verdad y el
            servicio. Creemos que cada persona tiene un propósito divino y estamos aquí para ayudarte a descubrirlo.
          </p>
        </div>
      </div>
    </section>
  )
}
