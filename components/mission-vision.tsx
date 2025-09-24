import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Compass } from "lucide-react"

export function MissionVision() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Misión, Visión y Valores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Estos principios guían cada decisión y acción en nuestra comunidad de fe.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Mission */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-2xl">Misión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Hacer discípulos de Jesucristo que transformen vidas y comunidades a través del amor, la verdad y el
                servicio, guiando a cada persona hacia una relación personal con Dios.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-accent/10 p-3 rounded-full">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
              </div>
              <CardTitle className="text-2xl">Visión</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                Ser una iglesia que impacte nuestra ciudad y más allá, donde cada persona experimente el amor de Dios,
                descubra su propósito y viva una vida de significado eterno.
              </p>
            </CardContent>
          </Card>

          {/* Values */}
          <Card className="text-center hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="bg-secondary/50 p-3 rounded-full">
                  <Compass className="h-8 w-8 text-secondary-foreground" />
                </div>
              </div>
              <CardTitle className="text-2xl">Valores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Amor Incondicional</p>
                <p className="font-medium text-foreground">Verdad Bíblica</p>
                <p className="font-medium text-foreground">Comunidad Auténtica</p>
                <p className="font-medium text-foreground">Servicio Generoso</p>
                <p className="font-medium text-foreground">Crecimiento Continuo</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Biblical Foundation */}
        <div className="bg-card rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Nuestro Fundamento</h3>
          <blockquote className="text-lg italic text-muted-foreground mb-4 text-balance">
            "Por tanto, id, y haced discípulos a todas las naciones, bautizándolos en el nombre del Padre, y del Hijo, y
            del Espíritu Santo; enseñándoles que guarden todas las cosas que os he mandado; y he aquí yo estoy con
            vosotros todos los días, hasta el fin del mundo."
          </blockquote>
          <cite className="text-sm text-muted-foreground">— Mateo 28:19-20</cite>
        </div>
      </div>
    </section>
  )
}
