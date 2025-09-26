import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle, MessageCircle, BookOpen, Users, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function FAQPage() {
  const preguntas = [
    {
      pregunta: "¿Qué es el evangelio?",
      respuesta:
        "El evangelio es la buena noticia de que Dios nos ama tanto que envió a su Hijo Jesucristo para salvarnos. Jesús murió en la cruz por nuestros pecados y resucitó al tercer día, ofreciéndonos perdón y vida eterna. Es el mensaje central de la fe cristiana: que podemos tener una relación personal con Dios a través de Jesús.",
      icono: "📖",
    },
    {
      pregunta: "¿Quién es Dios?",
      respuesta:
        "Dios es el Creador del universo, perfecto en amor, justicia y santidad. Existe como Trinidad: Padre, Hijo (Jesucristo) y Espíritu Santo - tres personas en un solo Dios. Él nos creó para tener una relación con Él y desea lo mejor para nuestras vidas. Dios es personal, amoroso y siempre está disponible para quienes lo buscan.",
      icono: "🙏",
    },
    {
      pregunta: "¿Quién es Jesús y por qué vino?",
      respuesta:
        "Jesús es el Hijo de Dios que se hizo hombre para salvarnos. Vino a la tierra para mostrarnos el amor de Dios, enseñarnos cómo vivir, y principalmente para morir en nuestro lugar por nuestros pecados. Su muerte y resurrección nos abrieron el camino para tener una relación restaurada con Dios y la promesa de vida eterna.",
      icono: "✝️",
    },
    {
      pregunta: "¿Qué significa ser salvo?",
      respuesta:
        "Ser salvo significa ser rescatado de la separación eterna de Dios que causan nuestros pecados. Cuando aceptamos a Jesús como nuestro Salvador personal, Dios nos perdona completamente y nos da vida eterna. Es un regalo gratuito que recibimos por fe, no por nuestras buenas obras. Significa tener paz con Dios y la seguridad de pasar la eternidad con Él.",
      icono: "🕊️",
    },
    {
      pregunta: "¿Cómo puedo comenzar una relación con Dios?",
      respuesta:
        "Comenzar una relación con Dios es simple: reconoce que necesitas a Dios en tu vida, cree que Jesús murió por tus pecados y resucitó, y pídele que entre en tu corazón como tu Salvador y Señor. Puedes hacer una oración sencilla expresando esto. Después, busca una iglesia, lee la Biblia y ora regularmente para crecer en tu fe.",
      icono: "❤️",
    },
    {
      pregunta: "¿Necesito ser perfecto para ir a la iglesia?",
      respuesta:
        "¡Absolutamente no! La iglesia es un hospital espiritual para personas que necesitan sanidad, no un museo para personas perfectas. Todos somos pecadores que necesitamos la gracia de Dios. Ven tal como eres - Dios te ama incondicionalmente y la iglesia es el lugar perfecto para crecer y sanar junto con otros.",
      icono: "🤗",
    },
    {
      pregunta: "¿Qué debo esperar en mi primera visita?",
      respuesta:
        "En tu primera visita encontrarás un ambiente acogedor y amigable. Nuestros servicios incluyen música de adoración, oración y una enseñanza bíblica práctica. No hay presión para participar si no te sientes cómodo. Habrá personas disponibles para responder tus preguntas y ayudarte a sentirte bienvenido.",
      icono: "👋",
    },
    {
      pregunta: "¿Cómo puedo crecer espiritualmente?",
      respuesta:
        "El crecimiento espiritual viene a través de la oración regular, la lectura de la Biblia, la participación en una comunidad de fe, y la aplicación de las enseñanzas bíblicas en tu vida diaria. Te recomendamos unirte a un grupo pequeño, participar en estudios bíblicos, y buscar maneras de servir a otros.",
      icono: "🌱",
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
                    <HelpCircle className="h-16 w-16 text-accent" />
                  </div>
                </div>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-balance bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Preguntas Frecuentes
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
                Respuestas claras y bíblicas a las preguntas más comunes sobre la fe cristiana. 
                Si tienes otras preguntas, no dudes en contactarnos.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Preguntas Comunes
              </h2>
              <p className="text-xl text-muted-foreground">
                Encuentra respuestas a las dudas más frecuentes sobre la fe cristiana
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {preguntas.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-0 bg-gradient-to-br from-white to-slate-50/80 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 px-6 hover:bg-accent/5 rounded-2xl transition-colors">
                    <div className="flex items-center space-x-4">
                      <span className="text-2xl">{item.icono}</span>
                      <span className="text-lg lg:text-xl font-semibold text-gray-900 pr-4 text-left">
                        {item.pregunta}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 px-6">
                    <div className="bg-accent/5 rounded-xl p-4">
                      <p className="text-muted-foreground leading-relaxed text-lg">
                        {item.respuesta}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="py-20 bg-gradient-to-br from-slate-100/50 to-blue-100/30">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80 hover:shadow-3xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-2xl">
                      <MessageCircle className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    ¿Tienes más preguntas?
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Estamos aquí para ayudarte en tu jornada de fe
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    Si no encontraste la respuesta que buscabas, no dudes en contactarnos. 
                    Nuestro equipo pastoral está disponible para conversar contigo.
                  </p>
                  <Button asChild className="w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg">
                    <Link href="/contacto" className="flex items-center justify-center">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Contáctanos
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-slate-50/80 hover:shadow-3xl transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-green-100 rounded-2xl">
                      <BookOpen className="h-8 w-8 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Recursos Adicionales
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Materiales para profundizar en tu fe
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-center">
                    Explora nuestros recursos espirituales, incluyendo estudios bíblicos, 
                    devocionales y predicaciones que te ayudarán a crecer.
                  </p>
                  <Button asChild variant="outline" className="w-full border-2">
                    <Link href="/recursos" className="flex items-center justify-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Ver Recursos
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                ¿Listo para dar el siguiente paso?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto leading-relaxed">
                Te invitamos a visitarnos y experimentar el amor de Dios en comunidad. 
                Todos son bienvenidos, sin importar dónde estés en tu jornada espiritual.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent shadow-lg">
                  <Link href="/servicios" className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Ver Horarios
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2">
                  <Link href="/sobre-nosotros" className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    Conoce Más
                  </Link>
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