import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Users, Home, Heart, TrendingUp, Star, ArrowRight, Cross } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ChurchHistory() {
  const milestones = [
    {
      year: "2010",
      icon: Home,
      title: "Fundación Humilde",
      description: "Iniciamos como un pequeño grupo de familias reuniéndose en una casa, con el sueño de crear una comunidad de fe auténtica.",
      highlight: true,
      members: "15 familias",
      image: "/history-2010.jpg"
    },
    {
      year: "2015",
      icon: Users,
      title: "Crecimiento Significativo",
      description: "Nos mudamos a nuestro primer local y comenzamos los ministerios de jóvenes y niños, alcanzando 100 miembros.",
      highlight: false,
      members: "100 miembros",
      image: "/history-2015.jpg"
    },
    {
      year: "2020",
      icon: Heart,
      title: "Expansión Digital",
      description: "A pesar de los desafíos, fortalecimos nuestra comunidad online y expandimos nuestros programas de ayuda social.",
      highlight: false,
      members: "200+ miembros",
      image: "/history-2020.jpg"
    },
    {
      year: "2024",
      icon: TrendingUp,
      title: "Presente y Futuro",
      description: "Hoy somos una familia de más de 300 personas, con múltiples ministerios y un impacto creciente en nuestra ciudad.",
      highlight: true,
      members: "300+ miembros",
      image: "/history-2024.jpg"
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/10 to-transparent"></div>
      
      {/* Timeline Line for Desktop */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-40 bottom-40 w-0.5 bg-gradient-to-b from-primary/20 via-accent/40 to-primary/20 hidden lg:block">
        {/* Timeline Dots */}
        {milestones.map((_, index) => (
          <div 
            key={index}
            className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background"
            style={{ top: `${25 + (index * 25)}%` }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Calendar className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestra Historia</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Una Historia de Fidelidad Divina
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Desde nuestros humildes comienzos hasta hoy, cada capítulo testifica la fidelidad de Dios en nuestro caminar como iglesia.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-12 lg:space-y-24 mb-20">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                <Card className="group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Highlight Badge */}
                  {milestone.highlight && (
                    <div className="absolute top-4 left-4 bg-accent text-primary px-3 py-1 rounded-full text-xs font-bold z-10 flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      Hito Importante
                    </div>
                  )}

                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    milestone.highlight 
                      ? 'from-accent/10 to-primary/20' 
                      : 'from-primary/5 to-secondary/5'
                  }`}></div>

                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="flex items-start space-x-4">
                      {/* Icon */}
                      <div className={`p-4 rounded-2xl flex-shrink-0 ${
                        milestone.highlight 
                          ? 'bg-accent/20 text-accent' 
                          : 'bg-primary/10 text-primary'
                      }`}>
                        <milestone.icon className="h-8 w-8" />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div className="text-3xl font-bold text-accent mb-2 sm:mb-0">{milestone.year}</div>
                          <div className="bg-primary/10 px-3 py-1 rounded-full text-sm font-medium text-primary">
                            {milestone.members}
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </CardContent>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Card>
              </div>

              {/* Image/Visual */}
              <div className="flex-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <div className="bg-background/80 rounded-full p-6 inline-block mb-4">
                        <milestone.icon className="h-12 w-12 text-accent" />
                      </div>
                      <div className="text-6xl font-bold text-accent/30">{milestone.year}</div>
                    </div>
                  </div>
                  
                  {/* Connector Line for Mobile */}
                  <div className="absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-transparent lg:hidden"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conclusion Story */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20 relative overflow-hidden">
          {/* Background Cross Pattern */}
          <div className="absolute top-4 right-4 opacity-5">
            <Cross className="h-24 w-24 text-foreground" />
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Más Allá de los Números: Vidas Transformadas
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Lo que comenzó como un sueño en el corazón de unas pocas familias, se ha convertido en una comunidad vibrante que impacta vidas cada día. 
              Nuestra historia no es solo sobre números o edificios, sino sobre <span className="font-semibold text-accent">vidas transformadas</span> por el amor de Dios. 
              Cada persona que llega a nuestra iglesia añade un nuevo capítulo a esta hermosa historia de fe, esperanza y amor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button className="bg-accent hover:bg-accent/90 text-primary font-semibold rounded-full">
                Unirse a Nuestra Historia
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full border-2">
                Ver Galería de Recuerdos
              </Button>
            </div>

            <div className="flex justify-center pt-6">
              <div className="bg-background/80 px-6 py-3 rounded-full border border-border shadow-lg">
                <span className="text-sm font-medium text-accent flex items-center">
                  <Star className="h-4 w-4 mr-2 fill-accent" />
                  ¡Y la historia continúa escribiéndose!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center bg-card/50 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-accent">14+</div>
            <div className="text-sm text-muted-foreground">Años de Bendición</div>
          </div>
          <div className="text-center bg-card/50 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-accent">300+</div>
            <div className="text-sm text-muted-foreground">Vidas Impactadas</div>
          </div>
          <div className="text-center bg-card/50 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-accent">8</div>
            <div className="text-sm text-muted-foreground">Ministerios Activos</div>
          </div>
          <div className="text-center bg-card/50 rounded-2xl p-6 border border-border/50 hover:shadow-lg transition-all">
            <div className="text-3xl font-bold text-accent">∞</div>
            <div className="text-sm text-muted-foreground">Gracia de Dios</div>
          </div>
        </div>
      </div>
    </section>
  )
}