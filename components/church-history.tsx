import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Home, Heart } from "lucide-react"

export function ChurchHistory() {
 const milestones = [
    {
      year: "2010",
      icon: Home,
      title: "Fundación",
      description:
        "Iniciamos como un pequeño grupo de familias reuniéndose en una casa, con el sueño de crear una comunidad de fe auténtica.",
    },
    {
      year: "2015",
      icon: Users,
      title: "Crecimiento",
      description:
        "Nos mudamos a nuestro primer local y comenzamos los ministerios de jóvenes y niños, alcanzando 100 miembros.",
    },
    {
      year: "2020",
      icon: Heart,
      title: "Expansión",
      description:
        "A pesar de los desafíos, fortalecimos nuestra comunidad online y expandimos nuestros programas de ayuda social.",
    },
    {
      year: "2024",
      icon: Calendar,
      title: "Presente",
      description:
        "Hoy somos una familia de más de 300 personas, con múltiples ministerios y un impacto creciente en nuestra ciudad.",
    },
  ]

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Nuestra Historia</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Desde nuestros humildes comienzos hasta hoy, Dios ha sido fiel en cada paso de nuestro camino como iglesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((milestone, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-center">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <milestone.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-accent">{milestone.year}</div>
                  <h3 className="text-xl font-semibold">{milestone.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Story */}
        <div className="mt-16 bg-secondary/30 rounded-lg p-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h3 className="text-2xl font-bold">Una Familia en Crecimiento</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lo que comenzó como un sueño en el corazón de unas pocas familias, se ha convertido en una comunidad
              vibrante que impacta vidas cada día. Nuestra historia no es solo sobre números o edificios, sino sobre
              vidas transformadas por el amor de Dios. Cada persona que llega a nuestra iglesia añade un nuevo capítulo
              a esta hermosa historia de fe, esperanza y amor.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
