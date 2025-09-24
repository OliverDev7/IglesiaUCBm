import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Users, Heart, Shield, AlertCircle, CheckCircle, XCircle, Scale, Globe, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TerminosPage() {
  const terminos = [
    {
      icono: FileText,
      titulo: "Aceptación de Términos",
      descripcion:
        "Al utilizar nuestro sitio web y servicios, aceptas cumplir con estos términos y condiciones. Si no estás de acuerdo, te pedimos que no uses nuestros servicios.",
    },
    {
      icono: Users,
      titulo: "Uso de Servicios",
      descripcion:
        "Nuestros servicios están destinados para fines religiosos, educativos y comunitarios. Te comprometes a usar el sitio de manera respetuosa y conforme a nuestros valores cristianos.",
    },
    {
      icono: Heart,
      titulo: "Código de Conducta",
      descripcion:
        "Esperamos que todos los usuarios mantengan un comportamiento respetuoso, amoroso y acorde con los principios cristianos en todas las interacciones dentro de nuestra comunidad.",
    },
    {
      icono: Shield,
      titulo: "Propiedad Intelectual",
      descripcion:
        "Todo el contenido del sitio, incluyendo sermones, materiales de estudio y recursos, está protegido por derechos de autor y es propiedad de la iglesia o sus licenciantes.",
    },
    {
      icono: AlertCircle,
      titulo: "Limitación de Responsabilidad",
      descripcion:
        "La iglesia no se hace responsable por daños directos, indirectos o consecuentes que puedan surgir del uso de nuestro sitio web o servicios digitales.",
    },
    {
      icono: CheckCircle,
      titulo: "Registro y Cuentas",
      descripcion:
        "Al crear una cuenta, te comprometes a proporcionar información veraz y mantener la confidencialidad de tus credenciales de acceso.",
    },
    {
      icono: XCircle,
      titulo: "Prohibiciones",
      descripcion:
        "Está prohibido usar nuestros servicios para actividades ilegales, spam, contenido ofensivo o cualquier acción que vaya contra nuestros valores cristianos.",
    },
    {
      icono: Scale,
      titulo: "Resolución de Disputas",
      descripcion:
        "Cualquier disputa se resolverá primero a través de mediación cristiana, siguiendo los principios bíblicos de reconciliación y perdón.",
    },
    {
      icono: Globe,
      titulo: "Jurisdicción",
      descripcion:
        "Estos términos se rigen por las leyes locales aplicables y cualquier disputa legal se resolverá en los tribunales competentes de nuestra jurisdicción.",
    },
    {
      icono: Clock,
      titulo: "Modificaciones",
      descripcion:
        "Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Scale className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Términos y <span className="text-accent">Condiciones</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Estos términos establecen las reglas y condiciones para el uso de nuestro sitio web y servicios digitales,
              basados en principios cristianos de respeto y amor.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>
        </section>

        {/* Terms and Conditions */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {terminos.map((termino, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <termino.icono className="h-8 w-8 text-accent" />
                      <CardTitle className="text-xl">{termino.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{termino.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Biblical Foundation */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Fundamento Bíblico</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Nuestros términos y condiciones están basados en principios bíblicos de amor, respeto y responsabilidad
              mutua.
            </p>
            <div className="bg-accent/10 p-6 rounded-lg">
              <p className="text-lg font-medium text-accent mb-2">
                "Todo lo que querais que los hombres hagan con vosotros, así también haced vosotros con ellos"
              </p>
              <p className="text-sm text-muted-foreground">Mateo 7:12</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Preguntas sobre los Términos?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Si tienes dudas sobre estos términos y condiciones, estamos aquí para ayudarte y aclarar cualquier
              inquietud.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <FileText className="h-5 w-5" />
                <span>legal@iglesia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Users className="h-5 w-5" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
