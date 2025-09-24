import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Eye, Lock, Database, Mail, Phone, Calendar, UserCheck, FileText, AlertTriangle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacidadPage() {
  const politicas = [
    {
      icono: Database,
      titulo: "Recopilación de Información",
      descripcion:
        "Recopilamos información personal que nos proporcionas voluntariamente, como nombre, email, teléfono y dirección cuando te registras para servicios, eventos o boletines informativos.",
    },
    {
      icono: Eye,
      titulo: "Uso de la Información",
      descripcion:
        "Utilizamos tu información para comunicarnos contigo sobre servicios religiosos, eventos especiales, estudios bíblicos y actividades comunitarias de nuestra iglesia.",
    },
    {
      icono: Lock,
      titulo: "Protección de Datos",
      descripcion:
        "Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
    },
    {
      icono: Mail,
      titulo: "Comunicaciones por Email",
      descripcion:
        "Enviamos comunicaciones relacionadas con la iglesia solo a quienes han dado su consentimiento. Puedes cancelar la suscripción en cualquier momento usando el enlace en nuestros emails.",
    },
    {
      icono: Phone,
      titulo: "Información de Contacto",
      descripcion:
        "Tu información de contacto se utiliza exclusivamente para fines ministeriales y nunca se vende, alquila o comparte con terceros sin tu consentimiento explícito.",
    },
    {
      icono: Calendar,
      titulo: "Registro de Eventos",
      descripcion:
        "Cuando te registras para eventos, retiros o actividades, recopilamos información necesaria para la organización y comunicación relacionada con dichos eventos.",
    },
    {
      icono: UserCheck,
      titulo: "Consentimiento",
      descripcion:
        "Al proporcionar tu información, das tu consentimiento para que la utilicemos según se describe en esta política. Puedes retirar tu consentimiento en cualquier momento.",
    },
    {
      icono: FileText,
      titulo: "Retención de Datos",
      descripcion:
        "Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos ministeriales o según lo requiera la ley aplicable.",
    },
    {
      icono: Shield,
      titulo: "Derechos del Usuario",
      descripcion:
        "Tienes derecho a acceder, corregir, actualizar o solicitar la eliminación de tu información personal. Contáctanos para ejercer estos derechos.",
    },
    {
      icono: AlertTriangle,
      titulo: "Cambios en la Política",
      descripcion:
        "Nos reservamos el derecho de actualizar esta política de privacidad. Te notificaremos sobre cambios significativos a través de nuestros canales de comunicación habituales.",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/20 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Shield className="h-16 w-16 text-accent mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-6">
              Política de <span className="text-accent">Privacidad</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              Tu privacidad es importante para nosotros. Esta política explica cómo recopilamos, usamos y protegemos tu
              información personal en nuestra comunidad de fe.
            </p>
            <p className="text-sm text-muted-foreground mt-4">Última actualización: Enero 2024</p>
          </div>
        </section>

        {/* Privacy Policies */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {politicas.map((politica, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <politica.icono className="h-8 w-8 text-accent" />
                      <CardTitle className="text-xl">{politica.titulo}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{politica.descripcion}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-muted py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">¿Preguntas sobre Privacidad?</h2>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información, no dudes en
              contactarnos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>privacidad@iglesia.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-5 w-5" />
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
