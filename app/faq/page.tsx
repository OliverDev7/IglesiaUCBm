import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HelpCircle } from "lucide-react"
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
    },
    {
      pregunta: "¿Quién es Dios?",
      respuesta:
        "Dios es el Creador del universo, perfecto en amor, justicia y santidad. Existe como Trinidad: Padre, Hijo (Jesucristo) y Espíritu Santo - tres personas en un solo Dios. Él nos creó para tener una relación con Él y desea lo mejor para nuestras vidas. Dios es personal, amoroso y siempre está disponible para quienes lo buscan.",
    },
    {
      pregunta: "¿Quién es Jesús y por qué vino?",
      respuesta:
        "Jesús es el Hijo de Dios que se hizo hombre para salvarnos. Vino a la tierra para mostrarnos el amor de Dios, enseñarnos cómo vivir, y principalmente para morir en nuestro lugar por nuestros pecados. Su muerte y resurrección nos abrieron el camino para tener una relación restaurada with Dios y la promesa de vida eterna.",
    },
    {
      pregunta: "¿Qué significa ser salvo?",
      respuesta:
        "Ser salvo significa ser rescatado de la separación eterna de Dios que causan nuestros pecados. Cuando aceptamos a Jesús como nuestro Salvador personal, Dios nos perdona completamente y nos da vida eterna. Es un regalo gratuito que recibimos por fe, no por nuestras buenas obras. Significa tener paz con Dios y la seguridad de pasar la eternidad con Él.",
    },
    {
      pregunta: "¿Cómo puedo comenzar una relación con Dios?",
      respuesta:
        "Comenzar una relación con Dios es simple: reconoce que necesitas a Dios en tu vida, cree que Jesús murió por tus pecados y resucitó, y pídele que entre en tu corazón como tu Salvador y Señor. Puedes hacer una oración sencilla expresando esto. Después, busca una iglesia, lee la Biblia y ora regularmente para crecer en tu fe.",
    },
    {
      pregunta: "¿Necesito ser perfecto para ir a la iglesia?",
      respuesta:
        "¡Absolutamente no! La iglesia es un hospital espiritual para personas que necesitan sanidad, no un museo para personas perfectas. Todos somos pecadores que necesitamos la gracia de Dios. Ven tal como eres - Dios te ama incondicionalmente y la iglesia es el lugar perfecto para crecer y sanar junto con otros.",
    },
    {
      pregunta: "¿Qué debo esperar en mi primera visita?",
      respuesta:
        "En tu primera visita encontrarás un ambiente acogedor y amigable. Nuestros servicios incluyen música de adoración, oración y una enseñanza bíblica práctica. No hay presión para participar si no te sientes cómodo. Habrá personas disponibles para responder tus preguntas y ayudarte a sentirte bienvenido.",
    },
    {
      pregunta: "¿Cómo puedo crecer espiritualmente?",
      respuesta:
        "El crecimiento espiritual viene a través de la oración regular, la lectura de la Biblia, la participación en una comunidad de fe, y la aplicación de las enseñanzas bíblicas en tu vida diaria. Te recomendamos unirte a un grupo pequeño, participar en estudios bíblicos, y buscar maneras de servir a otros.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Preguntas <span className="text-accent">Frecuentes</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Respuestas claras y bíblicas a las preguntas más comunes sobre la fe cristiana. Si tienes otras preguntas,
              no dudes en contactarnos.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {preguntas.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="text-lg font-medium pr-4">{item.pregunta}</span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <p className="text-muted-foreground leading-relaxed">{item.respuesta}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>¿Tienes más preguntas?</CardTitle>
                  <CardDescription>Estamos aquí para ayudarte en tu jornada de fe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Si no encontraste la respuesta que buscabas, no dudes en contactarnos. Nuestro equipo pastoral está
                    disponible para conversar contigo.
                  </p>
                  <Button asChild className="w-full bg-accent hover:bg-accent/90">
                    <Link href="/contacto">Contáctanos</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recursos Adicionales</CardTitle>
                  <CardDescription>Materiales para profundizar en tu fe</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Explora nuestros recursos espirituales, incluyendo estudios bíblicos, devocionales y predicaciones
                    que te ayudarán a crecer.
                  </p>
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <Link href="/recursos">Ver Recursos</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Listo para dar el siguiente paso?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Te invitamos a visitarnos y experimentar el amor de Dios en comunidad. Todos son bienvenidos, sin importar
              dónde estés en tu jornada espiritual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
                <Link href="/servicios">Ver Horarios</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/sobre-nosotros">Conoce Más</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
