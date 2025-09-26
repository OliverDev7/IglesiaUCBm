import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Compass, Heart, Book, Users } from "lucide-react"

export function MissionVision() {
  const values = [
    { name: "Amor Incondicional", icon: Heart },
    { name: "Verdad Bíblica", icon: Book },
    { name: "Comunidad Auténtica", icon: Users },
    { name: "Servicio Generoso", icon: Heart },
    { name: "Crecimiento Continuo", icon: Target },
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full border border-primary/20">
            <Compass className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nuestro Compromiso</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Nuestra Brújula Espiritual
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Los principios que guían cada decisión y acción en nuestra comunidad de fe.
          </p>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Mission */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10"></div>
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Misión</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground leading-relaxed text-center">
                Hacer discípulos de Jesucristo que transformen vidas y comunidades a través del amor, la verdad y el servicio.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/10"></div>
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Visión</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground leading-relaxed text-center">
                Ser una iglesia que impacte nuestra ciudad y más allá, donde cada persona experimente el amor de Dios y descubra su propósito.
              </p>
            </CardContent>
          </Card>

           {/* Respeto */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/10"></div>
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-8 w-8 text-red-700" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Respeto</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <p className="text-muted-foreground leading-relaxed text-center">
                Ser una iglesia que impacte nuestra ciudad y más allá, donde cada persona experimente el amor de Dios y descubra su propósito.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 lg:col-span-3">
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-primary/5"></div>
            <CardHeader className="text-center relative z-10">
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Compass className="h-8 w-8 text-secondary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl text-foreground">Valores Fundamentales</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="text-center group/item hover:scale-105 transition-transform duration-300">
                    <div className="bg-primary/10 p-3 rounded-full w-12 h-12 mx-auto mb-2 group-hover/item:bg-accent/20 transition-colors">
                      <value.icon className="h-6 w-6 text-primary mx-auto group-hover/item:text-accent" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{value.name}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Biblical Foundation */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 text-center border border-primary/20">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Nuestro Fundamento Bíblico</h3>
          <blockquote className="text-lg md:text-xl italic text-muted-foreground mb-6 text-balance leading-relaxed">
            "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con vosotros todos los días, hasta el fin del mundo."
          </blockquote>
          <cite className="text-sm text-accent font-medium">— Mateo 28:19-20</cite>
        </div>
      </div>
    </section>
  )
}