import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BookHeart, Clock, MapPin, Users, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: "Servicio General",
      dia: "Domingos",
      hora: "10:00 HRS",
      descripcion: "Nos reunimos como familia en la fe para adorar a Dios, recibir Su Palabra y fortalecer nuestros lazos en comunión cristiana.",
      icono: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      titulo: "Reunión de Jóvenes",
      dia: "Sábados",
      hora: "16:00 HRS",
      descripcion: "Espacio para jóvenes con enseñanza bíblica, dinámicas, música y momentos especiales.",
      icono: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      titulo: "Estudio Bíblico",
      dia: "Miércoles",
      hora: "20:30 HRS",
      descripcion: "En grupos pequeños, nos sumergimos en el estudio de la Palabra de Dios y edificamos nuestra fe.",
      icono: BookHeart,
      color: "from-purple-500 to-pink-500",
    },
    {
      titulo: "Reunión de Mujeres",
      dia: "Sábado (Se avisa el día)",
      hora: "16:00 HRS",
      descripcion: "Un espacio para mujeres, dedicado a fortalecer los lazos de comunión y amor fraternal en Cristo.",
      icono: Users,
      color: "from-rose-500 to-red-500",
    },
    {
      titulo: "Escuela Dominical",
      dia: "Domingos",
      hora: "10:30 HRS",
      descripcion: "Enseñanza personalizada y guiada por principios cristianos, diseñada especialmente para el crecimiento integral de los niños.",
      icono: Users,
      color: "from-amber-500 to-orange-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/20 via-background to-secondary/30 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-lg scale-150"></div>
                  <div className="relative bg-background/80 backdrop-blur-sm rounded-full p-4 border border-primary/10 shadow-lg">
                    <Calendar className="h-16 w-16 text-accent" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Servicios y Reuniones
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Únete a nosotros en nuestros encuentros semanales de adoración, enseñanza y comunión. 
                Todos son bienvenidos en nuestra familia de fe.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {servicios.map((servicio, index) => (
                <Card key={index} className="group relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-slate-50/80">
                  <div className={`absolute inset-0 bg-gradient-to-br ${servicio.color} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                  <CardHeader className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${servicio.color} text-white`}>
                        <servicio.icono className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-gray-900">{servicio.titulo}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-accent mt-1">
                          {servicio.dia} • {servicio.hora}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-gray-700 leading-relaxed mb-4">{servicio.descripcion}</p>
                    <div className="flex items-center text-sm text-accent font-medium">
                      <span>Únete a nosotros</span>
                      <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Nuestra Ubicación
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Te esperamos en nuestra iglesia ubicada en el corazón de la ciudad
              </p>
            </div>

            <Card className="overflow-hidden border-0 shadow-2xl">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="p-8 lg:p-12 space-y-8 bg-gradient-to-br from-white to-slate-50/80">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-accent/10 rounded-2xl">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Dirección</h3>
                        <p className="text-muted-foreground">
                          Calle Merced 765
                          <br />
                          Melipilla
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-2xl">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 text-gray-900">Horarios</h3>
                        <div className="space-y-2 text-muted-foreground">
                          <p className="flex justify-between"><span>Domingos:</span> <span className="font-semibold text-accent">10:00 HRS</span></p>
                          <p className="flex justify-between"><span>Sábados:</span> <span className="font-semibold text-accent">16:00 HRS</span></p>
                          <p className="flex justify-between"><span>Miércoles:</span> <span className="font-semibold text-accent">20:30 HRS</span></p>
                        </div>
                      </div>
                    </div>

                    <Button asChild size="lg" className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg">
                      <a href="https://maps.app.goo.gl/X1LGGuJqFus9B3EM8" target="_blank" rel="noopener noreferrer">
                        <MapPin className="h-4 w-4 mr-2" />
                        Abrir en Google Maps
                      </a>
                    </Button>
                  </div>
                  
                  <div className="relative min-h-[400px] lg:min-h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sau!4v1635749293267!5m2!1sen!2sau"
                      width="100%"
                      height="100%"
                      style={{ border: 0, minHeight: "400px" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Ubicación de la Iglesia Cristiana"
                      className="absolute inset-0"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ¿Primera Vez?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
                Si es tu primera visita, queremos que te sientas bienvenido. No dudes en contactarnos si tienes alguna pregunta.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg">
                  <Link href="/contacto">Contáctanos</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link href="/faq">Preguntas Frecuentes</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}