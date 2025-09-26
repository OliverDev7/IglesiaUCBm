import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración de Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
  // Configuración adicional para mejor rendimiento
  pool: true,
  maxConnections: 1,
  rateDelta: 20000,
  rateLimit: 5
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    // Validaciones
    if (!type) {
      return NextResponse.json(
        { 
          success: false, 
          message: "El campo 'type' es requerido. Valores válidos: contact, newsletter, resources, blog" 
        },
        { status: 400 }
      )
    }

    const validationError = validateFormData(type, data)
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      )
    }

    // Verificar conexión
    await transporter.verify()
    console.log("✅ Conexión con Gmail verificada")

    // Generar contenido del email
    const { subject, htmlContent, textContent } = generateEmailContent(type, data)

    // Enviar email
    const emailResponse = await transporter.sendMail({
      from: {
        name: "Iglesia Cristiana - Formulario Web",
        address: process.env.GMAIL_USER!
      },
      to: ["byronsalga345@gmail.com"], // Email donde recibes los formularios
      subject: subject,
      html: htmlContent,
      text: textContent,
      replyTo: data.email || data.correo || data.mail, // Email del usuario
      // Headers importantes
      headers: {
        'X-Priority': '3',
        'X-Mailer': 'Node.js/Nodemailer'
      }
    })

    console.log("✅ Email enviado exitosamente:", emailResponse.messageId)

    return NextResponse.json({
      success: true,
      message: "Email enviado correctamente",
      id: emailResponse.messageId,
    })

  } catch (error) {
    console.error("❌ Error enviando email:", error)
    
    let errorMessage = "Error al enviar el email"
    
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        errorMessage = "Error de autenticación. Verifica la contraseña de aplicación."
      } else if (error.message.includes("QUOTA")) {
        errorMessage = "Límite de emails alcanzado. Intenta más tarde."
      } else {
        errorMessage = error.message
      }
    }

    return NextResponse.json(
      {
        success: false,
        message: errorMessage,
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}

// Función de validación
function validateFormData(type: string, data: any): string | null {
  const email = data.email || data.correo || data.mail
  
  switch (type) {
    case "contact":
      if (!data.nombre || !email || !data.mensaje) {
        return "Faltan campos requeridos: nombre, email, mensaje"
      }
      break
    case "newsletter":
    case "resources":
    case "blog":
      if (!email) return "El email es requerido"
      break
    default:
      if (!email) return "Se requiere al menos un campo de email"
  }
  
  // Validar formato de email si existe
  if (email && !isValidEmail(email)) {
    return "El formato del email no es válido"
  }
  
  return null
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Función generateEmailContent (MANTIENE TU CÓDIGO ORIGINAL)
function generateEmailContent(type: string, data: any) {
  const currentDate = new Date().toLocaleString("es-ES", {
    timeZone: "America/Guayaquil",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })

  const baseStyle = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
      <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #2563eb; margin: 0; font-size: 24px;">Iglesia Cristiana</h1>
          <p style="color: #666; margin: 5px 0 0 0;">Nuevo mensaje desde el sitio web</p>
        </div>
  `

  const baseStyleEnd = `
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
          <p style="color: #888; font-size: 12px; margin: 0;">
            Recibido el ${currentDate}
          </p>
        </div>
      </div>
    </div>
  `

  switch (type) {
    case "newsletter":
      return {
        subject: "📧 Nueva suscripción al Newsletter - Iglesia Cristiana",
        htmlContent: `
          ${baseStyle}
          <h2 style="color: #1f2937; margin-bottom: 20px;">📧 Suscripción al Newsletter</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0 0 0; color: #374151;"><strong>Tipo:</strong> Newsletter</p>
          </div>
          <p style="color: #6b7280;">Una nueva persona se ha suscrito para recibir nuestro newsletter.</p>
          ${baseStyleEnd}
        `,
        textContent: `
NUEVA SUSCRIPCIÓN AL NEWSLETTER - IGLESIA CRISTIANA

Email: ${data.email}
Tipo: Newsletter
Fecha: ${currentDate}

Una nueva persona se ha suscrito para recibir nuestro newsletter.
        `.trim(),
      }

    case "contact":
      return {
        subject: `📞 Nuevo mensaje de contacto: ${data.asunto || "Sin asunto"} - Iglesia Cristiana`,
        htmlContent: `
          ${baseStyle}
          <h2 style="color: #1f2937; margin-bottom: 20px;">📞 Formulario de Contacto</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Nombre:</strong> ${data.nombre}</p>
            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Teléfono:</strong> ${data.telefono || "No proporcionado"}</p>
            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Asunto:</strong> ${data.asunto || "Sin asunto"}</p>
          </div>
          <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b;">
            <h3 style="margin: 0 0 10px 0; color: #92400e;">Mensaje:</h3>
            <p style="margin: 0; color: #92400e; white-space: pre-wrap;">${data.mensaje}</p>
          </div>
          ${baseStyleEnd}
        `,
        textContent: `
NUEVO MENSAJE DE CONTACTO - IGLESIA CRISTIANA

Nombre: ${data.nombre}
Email: ${data.email}
Teléfono: ${data.telefono || "No proporcionado"}
Asunto: ${data.asunto || "Sin asunto"}

MENSAJE:
${data.mensaje}

Fecha: ${currentDate}
        `.trim(),
      }

    case "resources":
      return {
        subject: "📖 Nueva suscripción a Devocionales - Iglesia Cristiana",
        htmlContent: `
          ${baseStyle}
          <h2 style="color: #1f2937; margin-bottom: 20px;">📖 Suscripción a Devocionales</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0 0 0; color: #374151;"><strong>Tipo:</strong> Devocionales Diarios</p>
          </div>
          <p style="color: #6b7280;">Una nueva persona se ha suscrito para recibir nuestros devocionales diarios.</p>
          ${baseStyleEnd}
        `,
        textContent: `
NUEVA SUSCRIPCIÓN A DEVOCIONALES - IGLESIA CRISTIANA

Email: ${data.email}
Tipo: Devocionales Diarios
Fecha: ${currentDate}

Una nueva persona se ha suscrito para recibir nuestros devocionales diarios.
        `.trim(),
      }

    case "blog":
      return {
        subject: "📝 Nueva suscripción al Blog - Iglesia Cristiana",
        htmlContent: `
          ${baseStyle}
          <h2 style="color: #1f2937; margin-bottom: 20px;">📝 Suscripción al Blog</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0; color: #374151;"><strong>Email:</strong> ${data.email}</p>
            <p style="margin: 10px 0 0 0; color: #374151;"><strong>Tipo:</strong> Actualizaciones de Blog</p>
          </div>
          <p style="color: #6b7280;">Una nueva persona se ha suscrito para recibir actualizaciones de nuestro blog.</p>
          ${baseStyleEnd}
        `,
        textContent: `
NUEVA SUSCRIPCIÓN AL BLOG - IGLESIA CRISTIANA

Email: ${data.email}
Tipo: Actualizaciones de Blog
Fecha: ${currentDate}

Una nueva persona se ha suscrito para recibir actualizaciones de nuestro blog.
        `.trim(),
      }

    default:
      return {
        subject: "📋 Nuevo mensaje desde el sitio web - Iglesia Cristiana",
        htmlContent: `
          ${baseStyle}
          <h2 style="color: #1f2937; margin-bottom: 20px;">📋 Formulario Genérico</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px 0; color: #374151;"><strong>Tipo:</strong> ${type}</p>
            <pre style="margin: 0; color: #374151; white-space: pre-wrap; font-family: monospace;">${JSON.stringify(data, null, 2)}</pre>
          </div>
          ${baseStyleEnd}
        `,
        textContent: `
FORMULARIO GENÉRICO - IGLESIA CRISTIANA

Tipo: ${type}
Datos: ${JSON.stringify(data, null, 2)}
Fecha: ${currentDate}
        `.trim(),
      }
  }
}