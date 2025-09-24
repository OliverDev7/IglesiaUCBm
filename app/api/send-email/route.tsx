import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Configuración CORREGIDA de TurboSMTP
const transporter = nodemailer.createTransport({
  host: "smtp.turbosmtp.com",
  port: 587, // Puerto recomendado para TurboSMTP
  secure: false, // false para 587 (usa STARTTLS)
  auth: {
    user: process.env.TURBOSMTP_USER,
    pass: process.env.TURBOSMTP_PASSWORD,
  },
})

// Función de validación de datos
function validateFormData(type: string, data: any): string | null {
  switch (type) {
    case "contact":
      if (!data.nombre || !data.email || !data.mensaje) {
        return "Faltan campos requeridos: nombre, email, mensaje"
      }
      if (!isValidEmail(data.email)) {
        return "El formato del email no es válido"
      }
      break
    case "newsletter":
    case "resources":
    case "blog":
      if (!data.email) return "El email es requerido"
      if (!isValidEmail(data.email)) {
        return "El formato del email no es válido"
      }
      break
    default:
      if (!data.email && !data.correo && !data.mail) {
        return "Se requiere al menos un campo de email"
      }
  }
  return null
}

// Función para validar formato de email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type, ...data } = body

    // Validar que el tipo esté presente
    if (!type) {
      return NextResponse.json(
        { 
          success: false, 
          message: "El campo 'type' es requerido. Valores válidos: contact, newsletter, resources, blog" 
        },
        { status: 400 }
      )
    }

    // Validar los datos del formulario
    const validationError = validateFormData(type, data)
    if (validationError) {
      return NextResponse.json(
        { success: false, message: validationError },
        { status: 400 }
      )
    }

    // Generar contenido del email
    const { subject, htmlContent, textContent } = generateEmailContent(type, data)

    // Verificar la conexión SMTP
    await transporter.verify()
    console.log("✅ Conexión SMTP verificada correctamente")

    // Configurar opciones del email
    const mailOptions = {
      from: {
        name: "Iglesia Cristiana - Formulario Web",
        address: process.env.TURBOSMTP_FROM_EMAIL || process.env.TURBOSMTP_USER || "noreply@iglesiacristiana.com"
      },
      to: ["byronsalga345@gmail.com"],
      subject: subject,
      html: htmlContent,
      text: textContent,
      replyTo: data.email || data.correo || data.mail || process.env.TURBOSMTP_FROM_EMAIL,
      // Agregar headers para mejor compatibilidad
      headers: {
        "X-Priority": "3",
        "X-Mailer": "Node.js/Nodemailer"
      }
    }

    // Enviar el email
    const emailResponse = await transporter.sendMail(mailOptions)

    console.log("✅ Email enviado exitosamente:", emailResponse.messageId)

    return NextResponse.json({
      success: true,
      message: "Email enviado correctamente",
      id: emailResponse.messageId,
    })

  } catch (error) {
    console.error("❌ Error enviando email:", error)
    
    // Mensajes de error más específicos
    let errorMessage = "Error al enviar el email"
    if (error instanceof Error) {
      if (error.message.includes("Authentication failed")) {
        errorMessage = "Error de autenticación con el servidor de email. Verifica las credenciales."
      } else if (error.message.includes("ECONNREFUSED")) {
        errorMessage = "No se puede conectar al servidor de email. Verifica la configuración SMTP."
      } else if (error.message.includes("Invalid login")) {
        errorMessage = "Usuario o contraseña incorrectos para el servicio de email."
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

// Función para generar el contenido del email (mejorada)
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