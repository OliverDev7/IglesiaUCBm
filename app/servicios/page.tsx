import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Clock, MapPin, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Servicio General",
      dia: "Domingos",
      hora: "10:00 HRS",
      descripcion: "Adoración, predicación y comunión para toda la familia",
      icono: Users,
    },
    {
      titulo: "Reunión de Jóvenes",
      dia: "Sábados",
      hora: "16:00 HRS",
      descripcion: "Reunion de jovenes donde habra palabra, dinamica, alabanzas y más",
      icono: Users,
    },
    {
      titulo: "Estudio Bíblico",
      dia: "Miércoles",
      hora: "20:30 HRS",
      descripcion: "Profundizamos en la Palabra de Dios en grupos pequeños",
      icono: Users,
    },
    {
      titulo: "Reunion de mujeres",
      dia: "Martes y Jueves",
      hora: "6:00 AM",
      descripcion: "Comenzamos el día en oración y comunión",
      icono: Users,
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Servicios y <span className="text-accent">Reuniones</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Únete a nosotros en nuestros encuentros semanales de adoración, enseñanza y comunión. Todos son
              bienvenidos en nuestra familia de fe.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicios.map((servicio, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <servicio.icono className="h-8 w-8 text-accent" />
                      <div>
                        <CardTitle className="text-xl">{servicio.titulo}</CardTitle>
                        <CardDescription className="text-lg font-medium text-accent">
                          {servicio.dia} - {servicio.hora}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{servicio.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestra Ubicación</h2>
              <p className="text-xl text-muted-foreground">
                Te esperamos en nuestra iglesia ubicada en el corazón de la ciudad
              </p>
            </div>

            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 space-y-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle Principal 123
                          <br />
                          Ciudad, Estado 12345
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Horarios</h3>
                        <div className="space-y-1 text-muted-foreground">
                          <p>Domingos: 10:00 HRS</p>
                          <p>Sábados: 16:00 HRS</p>
                          <p>Miércoles: 20:30 HRS</p>
                        </div>
                      </div>
                    </div>

                    <Button asChild className="w-full bg-accent hover:bg-accent/90">
                        <a href="https://maps.app.goo.gl/X1LGGuJqFus9B3EM8" target="_blank" rel="noopener noreferrer">
                        Abrir en Google Maps
                      </a>
                    </Button>
                  </div>
                    <div className="relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749293267!5m2!1sen!2sau"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "300px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de la Iglesia Cristiana"
                    />
                  </div>
                 
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Primera Vez?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Si es tu primera visita, queremos que te sientas bienvenido. No dudes en contactarnos si tienes alguna
              pregunta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/faq">Preguntas Frecuentes</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
