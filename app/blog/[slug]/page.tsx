"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Calendar, User, ArrowLeft, Share2, Facebook, MessageCircle, Instagram, Heart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import { useParams } from "next/navigation"

// Datos completos de los artículos
const articulosCompletos = {
  "poder-oracion-tiempos-dificiles": {
    titulo: "El Poder de la Oración en Tiempos Difíciles",
    resumen:
      "Descubre cómo la oración puede transformar tu perspectiva y darte paz en medio de las tormentas de la vida.",
    fecha: "15 de Abril, 2025",
    autor: "Hermano Miguel",
    categoria: "Espiritualidad",
    imagen: "/person-praying-peaceful.jpg",
    contenido: `
      <p>En los momentos más oscuros de nuestra vida, cuando las circunstancias parecen abrumadoras y el futuro incierto, la oración se convierte en nuestro refugio más poderoso. No es simplemente un ritual religioso, sino una comunicación íntima con nuestro Padre celestial que tiene el poder de transformar no solo nuestras circunstancias, sino también nuestro corazón.</p>

      <h2>La Oración Como Fortaleza Espiritual</h2>
      <p>Cuando Jesús enfrentó su momento más difícil en el Getsemaní, se refugió en la oración. Allí, en esa intimidad con el Padre, encontró la fortaleza para enfrentar la cruz. De la misma manera, nosotros podemos encontrar en la oración la fuerza que necesitamos para superar cualquier adversidad.</p>

      <p>La oración no es un escape de la realidad, sino un encuentro con la Realidad suprema. Es en ese encuentro donde nuestras perspectivas se alinean con las de Dios, donde nuestros temores se transforman en fe, y donde nuestra ansiedad se convierte en paz.</p>

      <h2>Transformando la Perspectiva</h2>
      <p>Uno de los efectos más poderosos de la oración es su capacidad para cambiar nuestra perspectiva. Cuando oramos, no estamos tratando de cambiar la mente de Dios, sino permitiendo que Él transforme la nuestra. Comenzamos a ver nuestras circunstancias desde una perspectiva eterna, entendiendo que Dios está obrando incluso en medio del dolor.</p>

      <p>La historia de Job nos enseña que incluso en las pérdidas más devastadoras, Dios tiene un propósito. Job no entendía por qué estaba sufriendo, pero su relación con Dios a través de la oración le permitió mantener su fe incluso cuando todo parecía perdido.</p>

      <h2>La Paz que Sobrepasa Todo Entendimiento</h2>
      <p>Filipenses 4:6-7 nos promete: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias. Y la paz de Dios, que sobrepasa todo entendimiento, guardará vuestros corazones y vuestros pensamientos en Cristo Jesús."</p>

      <p>Esta paz no es la ausencia de problemas, sino la presencia de Dios en medio de ellos. Es una paz que no depende de nuestras circunstancias externas, sino de nuestra relación con Aquel que tiene control sobre todas las cosas.</p>

      <h2>Pasos Prácticos para una Vida de Oración Efectiva</h2>
      <p><strong>1. Establece un tiempo regular:</strong> La consistencia en la oración es clave. Dedica un tiempo específico cada día para estar a solas con Dios.</p>

      <p><strong>2. Sé honesto en tu comunicación:</strong> Dios ya conoce tu corazón. No necesitas usar palabras elegantes; simplemente habla con Él como lo harías con un padre amoroso.</p>

      <p><strong>3. Incluye adoración y gratitud:</strong> Comienza tus oraciones reconociendo quién es Dios y agradeciendo por Sus bendiciones.</p>

      <p><strong>4. Ora con las Escrituras:</strong> Usa los Salmos y otras oraciones bíblicas como guía para tu tiempo de oración.</p>

      <p><strong>5. Persevera en la oración:</strong> No te desanimes si no ves respuestas inmediatas. Dios siempre responde, aunque no siempre como esperamos.</p>

      <h2>El Testimonio de la Oración</h2>
      <p>He visto cómo la oración ha transformado vidas en nuestra congregación. Matrimonios al borde del divorcio que han sido restaurados, enfermedades que han sido sanadas, adicciones que han sido rotas, y corazones quebrantados que han encontrado esperanza nuevamente.</p>

      <p>La oración no es magia, pero es poderosa. No siempre cambia nuestras circunstancias, pero siempre nos cambia a nosotros. Y cuando somos transformados por el poder de la oración, estamos mejor equipados para enfrentar cualquier tormenta que la vida nos presente.</p>

      <h2>Una Invitación Personal</h2>
      <p>Si estás pasando por un tiempo difícil, te invito a que no enfrentes solo tus batallas. Dios está esperando que vengas a Él en oración. No importa cuán grande sea tu problema o cuán pequeña parezca tu fe, Él está dispuesto a escucharte y a obrar en tu situación.</p>

      <p>Recuerda las palabras de Jesús: "Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar" (Mateo 11:28). Esta invitación sigue vigente hoy. En la oración, encontramos ese descanso que nuestras almas necesitan.</p>

      <p>Que el Señor te bendiga y te guarde en este tiempo, y que experimentes el poder transformador de la oración en tu vida.</p>
    `,
  },
  "viviendo-con-proposito": {
    titulo: "Viviendo con Propósito: Descubre tu Llamado",
    resumen:
      "Cada persona tiene un propósito único en el plan de Dios. Aprende cómo descubrir y vivir tu llamado divino.",
    fecha: "8 de Abril, 2025",
    autor: "Hermano Hernan",
    categoria: "Propósito",
    imagen: "/proposito.jpeg",
    contenido: `
      <p>Una de las preguntas más profundas que podemos hacernos es: "¿Para qué estoy aquí?" Esta búsqueda de propósito no es solo una curiosidad filosófica, sino una necesidad fundamental del alma humana. Como cristianos, tenemos la bendición de saber que no estamos aquí por accidente, sino que fuimos creados con un propósito específico en el corazón de Dios.</p>

      <h2>Creados con Propósito Divino</h2>
      <p>Efesios 2:10 nos recuerda: "Porque somos hechura suya, creados en Cristo Jesús para buenas obras, las cuales Dios preparó de antemano para que anduviésemos en ellas." Esto significa que antes de que naciéramos, Dios ya había preparado un camino específico para cada uno de nosotros.</p>

      <p>Tu propósito no es algo que tienes que inventar o crear; es algo que tienes que descubrir. Dios ya lo ha plantado en tu corazón, en tus talentos, en tus pasiones, y en las circunstancias únicas de tu vida.</p>

      <h2>Señales de tu Llamado Divino</h2>
      <p><strong>1. Tus Talentos Naturales:</strong> Dios te ha dotado con habilidades específicas que son pistas de tu propósito. ¿En qué eres naturalmente bueno? ¿Qué actividades te resultan fáciles mientras otros luchan con ellas?</p>

      <p><strong>2. Tus Pasiones Profundas:</strong> ¿Qué te emociona? ¿Qué problemas del mundo te rompen el corazón? ¿Qué actividades te hacen perder la noción del tiempo? Estas pasiones son a menudo indicadores de tu llamado.</p>

      <p><strong>3. Las Necesidades que Ves:</strong> Dios a menudo nos llama a través de las necesidades que percibimos en nuestro entorno. ¿Qué problemas notas que otros pasan por alto? ¿Qué injusticias te mueven a la acción?</p>

      <p><strong>4. Las Confirmaciones de Otros:</strong> Frecuentemente, otros pueden ver nuestros dones y llamado más claramente que nosotros mismos. ¿Qué dicen las personas que te conocen bien sobre tus fortalezas?</p>

      <h2>Obstáculos Comunes en el Descubrimiento del Propósito</h2>
      <p><strong>El Miedo al Fracaso:</strong> Muchos no persiguen su propósito por temor a fallar. Pero recuerda que Dios no nos llama porque seamos perfectos, sino porque Él es fiel para completar la obra que comenzó en nosotros.</p>

      <p><strong>La Comparación con Otros:</strong> Tu propósito es único. No trates de copiar el llamado de otra persona. Dios tiene un plan específico para ti que nadie más puede cumplir.</p>

      <p><strong>La Búsqueda de Aprobación Humana:</strong> A veces evitamos nuestro verdadero llamado porque tememos lo que otros puedan pensar. Recuerda que tu primera responsabilidad es hacia Dios, no hacia las expectativas humanas.</p>

      <h2>Pasos Prácticos para Descubrir tu Propósito</h2>
      <p><strong>1. Dedica Tiempo a la Oración y Reflexión:</strong> Pregúntale a Dios qué tiene en mente para tu vida. Escucha en silencio y permite que Él hable a tu corazón.</p>

      <p><strong>2. Estudia las Escrituras:</strong> La Palabra de Dios está llena de principios sobre el propósito y el llamado. Estudia las vidas de personajes bíblicos y ve cómo Dios los usó.</p>

      <p><strong>3. Experimenta y Sirve:</strong> No esperes a tener todo claro antes de comenzar a servir. A menudo descubrimos nuestro propósito en el proceso de servir a otros.</p>

      <p><strong>4. Busca Mentoría:</strong> Encuentra personas maduras en la fe que puedan guiarte y aconsejarte en tu búsqueda de propósito.</p>

      <p><strong>5. Mantén un Diario Espiritual:</strong> Anota tus pensamientos, oraciones, y las formas en que sientes que Dios te está guiando.</p>

      <h2>Viviendo tu Propósito Diariamente</h2>
      <p>Descubrir tu propósito es solo el comienzo. El verdadero desafío es vivirlo día a día. Esto requiere:</p>

      <p><strong>Disciplina:</strong> Desarrollar los hábitos y habilidades necesarios para cumplir tu llamado.</p>

      <p><strong>Perseverancia:</strong> No rendirte cuando enfrentes obstáculos o desánimo.</p>

      <p><strong>Flexibilidad:</strong> Estar abierto a cómo Dios puede refinar o redirigir tu propósito a lo largo del tiempo.</p>

      <p><strong>Dependencia de Dios:</strong> Recordar que es Dios quien obra a través de ti, no tu propia fuerza.</p>

      <h2>El Impacto de una Vida con Propósito</h2>
      <p>Cuando vives alineado con tu propósito divino, experimentas:</p>

      <p>• <strong>Satisfacción profunda:</strong> Hay una paz que viene de saber que estás donde Dios quiere que estés.</p>
      <p>• <strong>Energía renovada:</strong> Cuando haces lo que amas y para lo que fuiste creado, el trabajo no se siente como una carga.</p>
      <p>• <strong>Impacto significativo:</strong> Tu vida toca y transforma las vidas de otros de maneras que solo Dios puede orquestar.</p>
      <p>• <strong>Crecimiento espiritual:</strong> Cumplir tu propósito te acerca más a Dios y profundiza tu relación con Él.</p>

      <h2>Una Vida que Importa</h2>
      <p>Al final de nuestros días, lo que importará no será cuánto dinero ganamos o cuán famosos fuimos, sino si cumplimos el propósito para el cual Dios nos creó. Cada uno de nosotros tiene la oportunidad de vivir una vida que realmente importa, una vida que hace una diferencia eterna.</p>

      <p>Te animo a que no te conformes con una existencia sin propósito. Dios tiene algo increíble preparado para ti. Toma tiempo para buscarlo, descubrirlo, y luego vívelo con todo tu corazón. El mundo necesita lo que Dios ha puesto en ti.</p>

      <p>Que el Señor te guíe en este emocionante viaje de descubrimiento y te dé la valentía para vivir plenamente el propósito para el cual fuiste creado.</p>
    `,
  },
  "importancia-comunidad-cristiana": {
    titulo: "La Importancia de la Comunidad Cristiana",
    resumen:
      "Dios nos diseñó para vivir en comunidad. Explora por qué necesitamos unos a otros en nuestro caminar de fe.",
    fecha: "10 de Enero, 2025",
    autor: "Hermano Hernan",
    categoria: "Comunidad",
    imagen: "/christian-community-fellowship.jpg",
    contenido: `
      <p>Desde el principio de la creación, Dios declaró: "No es bueno que el hombre esté solo" (Génesis 2:18). Esta verdad fundamental no se aplica solo al matrimonio, sino a toda la experiencia humana. Fuimos diseñados para la comunidad, para la conexión, para el compañerismo. Y en el contexto de la fe cristiana, la comunidad no es solo deseable, es esencial.</p>

      <h2>El Diseño Divino para la Comunidad</h2>
      <p>La Trinidad misma es un ejemplo perfecto de comunidad. El Padre, el Hijo y el Espíritu Santo existen en perfecta unidad y comunión. Cuando Dios nos creó a Su imagen, nos creó para reflejar esa naturaleza comunitaria. No somos seres aislados destinados a caminar solos por la vida.</p>

      <p>Jesús mismo modeló la importancia de la comunidad. Aunque era completamente autosuficiente, eligió rodearse de discípulos. Invirtió tiempo en relaciones profundas, compartió Su vida con otros, y estableció la iglesia como una comunidad de creyentes que se apoyarían mutuamente.</p>

      <h2>Los Beneficios de la Comunidad Cristiana</h2>
      <p><strong>1. Crecimiento Espiritual Acelerado:</strong> Proverbios 27:17 dice: "Hierro con hierro se aguza; y así el hombre aguza el rostro de su amigo." En la comunidad, nos desafiamos mutuamente a crecer, a ser mejores, a profundizar en nuestra fe.</p>

      <p><strong>2. Apoyo en Tiempos Difíciles:</strong> Eclesiastés 4:12 nos recuerda que "cordón de tres dobleces no se rompe pronto." Cuando enfrentamos pruebas, la comunidad nos proporciona la fuerza y el apoyo que necesitamos para perseverar.</p>

      <p><strong>3. Rendición de Cuentas:</strong> En la comunidad, tenemos personas que nos conocen lo suficientemente bien como para hablarnos con amor cuando nos desviamos del camino. Esta rendición de cuentas es un regalo que nos protege del engaño y el pecado.</p>

      <p><strong>4. Diversidad de Dones:</strong> 1 Corintios 12 nos enseña que cada miembro del cuerpo de Cristo tiene dones únicos. En la comunidad, estos dones se complementan y fortalecen el conjunto.</p>

      <h2>Características de una Comunidad Cristiana Saludable</h2>
      <p><strong>Amor Genuino:</strong> Juan 13:35 dice: "En esto conocerán todos que sois mis discípulos, si tuviereis amor los unos con los otros." El amor no es solo un sentimiento, sino una decisión de buscar el bien del otro.</p>

      <p><strong>Transparencia y Vulnerabilidad:</strong> Santiago 5:16 nos exhorta: "Confesaos vuestras ofensas unos a otros, y orad unos por otros, para que seáis sanados." Una comunidad saludable es un lugar seguro donde podemos ser auténticos.</p>

      <p><strong>Perdón y Gracia:</strong> Colosenses 3:13 nos instruye: "soportándoos unos a otros, y perdonándoos unos a otros si alguno tuviere queja contra otro. De la manera que Cristo os perdonó, así también hacedlo vosotros."</p>

      <p><strong>Servicio Mutuo:</strong> Gálatas 5:13 dice: "servíos por amor los unos a los otros." En una comunidad cristiana, buscamos oportunidades para servir y bendecir a otros.</p>

      <h2>Superando los Obstáculos para la Comunidad</h2>
      <p><strong>El Individualismo Moderno:</strong> Nuestra cultura promueve la independencia extrema, pero como cristianos, reconocemos que fuimos creados para la interdependencia saludable.</p>

      <p><strong>El Miedo al Rechazo:</strong> Muchos evitan la comunidad profunda por temor a ser rechazados. Pero recuerda que en Cristo, ya eres completamente aceptado.</p>

      <p><strong>Las Heridas Pasadas:</strong> Algunos han sido lastimados por comunidades anteriores. Aunque es natural ser cauteloso, no permitas que las heridas del pasado te priven de las bendiciones de la comunidad presente.</p>

      <p><strong>La Falta de Tiempo:</strong> En nuestro mundo acelerado, puede parecer que no tenemos tiempo para la comunidad. Pero la comunidad no es un lujo; es una necesidad espiritual.</p>

      <h2>Construyendo Comunidad Auténtica</h2>
      <p><strong>1. Comienza Pequeño:</strong> No necesitas estar en un grupo grande para experimentar comunidad. Comienza con una o dos personas con las que puedas ser auténtico.</p>

      <p><strong>2. Sé Intencional:</strong> La comunidad profunda no sucede por accidente. Requiere intencionalidad, tiempo y esfuerzo.</p>

      <p><strong>3. Practica la Hospitalidad:</strong> Abre tu hogar y tu corazón a otros. La hospitalidad es una forma poderosa de construir comunidad.</p>

      <p><strong>4. Participa Activamente:</strong> No seas solo un espectador en la comunidad. Contribuye, sirve, y invierte en las vidas de otros.</p>

      <p><strong>5. Sé Paciente:</strong> La comunidad auténtica toma tiempo para desarrollarse. No te desanimes si no sucede inmediatamente.</p>

      <h2>La Comunidad Como Testimonio</h2>
      <p>Una de las formas más poderosas de evangelismo es una comunidad cristiana que funciona bien. Cuando el mundo ve cristianos que se aman genuinamente, que se apoyan mutuamente, y que viven en unidad, es un testimonio poderoso del poder transformador del evangelio.</p>

      <p>Jesús oró en Juan 17:21: "para que todos sean uno; como tú, oh Padre, en mí, y yo en ti, que también ellos sean uno en nosotros; para que el mundo crea que tú me enviaste." Nuestra unidad es un testimonio de la realidad de Cristo.</p>

      <h2>El Llamado a la Comunidad</h2>
      <p>Hebreos 10:24-25 nos exhorta: "Y considerémonos unos a otros para estimularnos al amor y a las buenas obras; no dejando de congregarnos, como algunos tienen por costumbre, sino exhortándonos; y tanto más, cuanto veis que aquel día se acerca."</p>

      <p>Este no es solo un consejo; es un mandamiento. Estamos llamados a la comunidad no solo para nuestro propio beneficio, sino para el beneficio de otros y para la gloria de Dios.</p>

      <h2>Una Invitación Personal</h2>
      <p>Si has estado viviendo tu fe cristiana en aislamiento, te invito a dar un paso hacia la comunidad. Puede ser intimidante al principio, pero las recompensas son inmensas. Dios tiene bendiciones esperándote en la comunidad que no puedes experimentar solo.</p>

      <p>Y si ya eres parte de una comunidad, te desafío a profundizar esas relaciones. Sé más vulnerable, más servicial, más amoroso. Ayuda a crear el tipo de comunidad que refleje el corazón de Dios.</p>

      <p>Recuerda, no fuiste diseñado para caminar solo en tu fe. Dios te ha dado una familia espiritual para que juntos puedan crecer, servir, y glorificar a Dios de maneras que nunca podrían hacer solos.</p>
    `,
  },
  "testimonio-encuentro-jesus": {
    titulo: "Testimonio: Mi Encuentro con Jesús",
    resumen: "La historia personal de María sobre cómo Dios transformó su vida y le dio una nueva esperanza.",
    fecha: "25 de Agosto, 2025",
    autor: "María González",
    categoria: "Testimonio",
    imagen: "/woman-testimony-joy.jpg",
    contenido: `
      <p>Mi nombre es María González, y quiero compartir con ustedes la historia más importante de mi vida: cómo Jesús me encontró en mi momento más oscuro y transformó completamente mi existencia. Esta no es solo mi historia; es el testimonio del poder redentor de Dios que puede cambiar cualquier vida, sin importar cuán perdida parezca.</p>

      <h2>Los Años de Oscuridad</h2>
      <p>Durante mis veinte años, mi vida parecía perfecta desde afuera. Tenía un buen trabajo, una casa bonita, y aparentemente todo lo que necesitaba para ser feliz. Pero por dentro, estaba completamente vacía. Luchaba con depresión severa, ansiedad, y una sensación constante de que mi vida no tenía propósito.</p>

      <p>Intenté llenar ese vacío con todo lo que el mundo me ofrecía: relaciones superficiales, trabajo excesivo, compras compulsivas, y eventualmente, alcohol. Nada funcionaba. Cada mañana me despertaba con la misma sensación de desesperanza, preguntándome si valía la pena seguir viviendo.</p>

      <p>La situación empeoró cuando perdí mi trabajo debido a la crisis económica. En cuestión de meses, perdí mi casa, mis ahorros, y lo que quedaba de mi autoestima. Me encontré viviendo en el sofá de una amiga, sintiéndome como una carga para todos a mi alrededor.</p>

      <h2>El Punto de Quiebre</h2>
      <p>La noche del 15 de marzo de 2019 será una fecha que nunca olvidaré. Había llegado al punto más bajo de mi vida. Sentada en mi auto en un estacionamiento vacío, con una botella de pastillas en mis manos, estaba lista para terminar con todo. El dolor emocional era tan intenso que la muerte parecía la única salida.</p>

      <p>Pero en ese momento de desesperación absoluta, algo inexplicable sucedió. Una paz sobrenatural llenó mi auto. No vi una luz brillante ni escuché una voz audible, pero sentí una presencia tan real y amorosa que me hizo llorar incontrolablemente. Por primera vez en años, no eran lágrimas de desesperación, sino de algo que no podía explicar en ese momento.</p>

      <p>Esa noche, en lugar de tomar las pastillas, conduje hasta la iglesia más cercana que encontré. Estaba cerrada, pero me quedé en el estacionamiento hasta el amanecer, sintiendo que algo había cambiado fundamentalmente en mi interior.</p>

      <h2>Los Primeros Pasos de Fe</h2>
      <p>Al domingo siguiente, reuní el valor para entrar a esa iglesia. Nunca había sido una persona religiosa; de hecho, había crecido creyendo que la religión era para personas débiles. Pero algo me atraía hacia ese lugar.</p>

      <p>El pastor estaba predicando sobre el amor incondicional de Dios, y cada palabra parecía dirigida específicamente a mí. Cuando habló sobre cómo Jesús vino a buscar y salvar a los perdidos, supe que estaba hablando de mí. Por primera vez en mi vida, entendí que no tenía que ganarme el amor de Dios; Él ya me amaba tal como era.</p>

      <p>Al final del servicio, cuando el pastor hizo la invitación para recibir a Cristo, mis piernas parecían tener vida propia. Me encontré caminando hacia el frente, con lágrimas corriendo por mis mejillas. Esa mañana, le entregué mi vida a Jesús, y Él me dio una nueva vida a cambio.</p>

      <h2>La Transformación Gradual</h2>
      <p>No voy a mentir y decir que todo cambió de la noche a la mañana. La transformación fue gradual, pero fue real. Los primeros meses fueron difíciles. Tenía que aprender a vivir de una manera completamente nueva, a pensar de manera diferente, a encontrar mi identidad en Cristo en lugar de en mis circunstancias.</p>

      <p>Comencé a leer la Biblia diariamente, algo que nunca pensé que haría. Las palabras cobraron vida para mí. Versículos como Jeremías 29:11 - "Porque yo sé los pensamientos que tengo acerca de vosotros, dice Jehová, pensamientos de paz, y no de mal, para daros el fin que esperáis" - se convirtieron en anclas para mi alma.</p>

      <p>La iglesia se convirtió en mi nueva familia. Personas que apenas me conocían me recibieron con amor incondicional, me ayudaron prácticamente, y me discipularon en mi nueva fe. Aprendí lo que significaba la verdadera comunidad cristiana.</p>

      <h2>Cambios Concretos</h2>
      <p><strong>En mi Salud Mental:</strong> La depresión y ansiedad que habían dominado mi vida durante años comenzaron a disminuir. No desaparecieron inmediatamente, pero ahora tenía herramientas espirituales para lidiar con ellas: oración, lectura bíblica, y el apoyo de mi comunidad de fe.</p>

      <p><strong>En mis Relaciones:</strong> Aprendí a amar de verdad, no solo a buscar lo que otros podían darme. Mis relaciones se volvieron más profundas y significativas. También aprendí a perdonar, incluso a aquellos que me habían lastimado profundamente.</p>

      <p><strong>En mi Propósito:</strong> Por primera vez en mi vida, sentí que tenía un propósito real. No solo existía; tenía una razón para vivir. Dios comenzó a mostrarme cómo podía usar mi historia de dolor para ayudar a otros.</p>

      <p><strong>En mis Finanzas:</strong> Aunque seguía enfrentando dificultades económicas, aprendí a confiar en la provisión de Dios. Él siempre proveyó lo que necesitaba, a menudo de maneras inesperadas.</p>

      <h2>Sirviendo a Otros</h2>
      <p>Dos años después de mi conversión, comencé a servir en el ministerio de mujeres de la iglesia, específicamente trabajando con mujeres que luchaban con depresión y pensamientos suicidas. Dios estaba usando mi historia de dolor para traer sanidad a otras vidas.</p>

      <p>Ahora dirijo un grupo de apoyo para personas que luchan con problemas de salud mental, y he visto cómo Dios usa mi testimonio para alcanzar corazones que parecían imposibles de tocar. Cada vez que veo a alguien encontrar esperanza en Cristo, recuerdo la noche en que Él me encontró a mí.</p>

      <h2>Las Pruebas Continúan, Pero...</h2>
      <p>No quiero dar la impresión de que mi vida ahora es perfecta. Todavía enfrento desafíos, todavía tengo días difíciles, y todavía lucho con algunas de las mismas cosas que luchaba antes. La diferencia es que ahora no las enfrento sola.</p>

      <p>Cuando perdí a mi madre el año pasado, el dolor fue intenso. Pero en lugar de hundirme en desesperación como habría hecho antes, pude encontrar consuelo en las promesas de Dios y en el apoyo de mi familia espiritual. El dolor era real, pero también lo era la esperanza.</p>

      <h2>Lo Que He Aprendido</h2>
      <p><strong>Dios puede usar cualquier cosa:</strong> Incluso mis años más oscuros, Dios los está usando ahora para Su gloria y para ayudar a otros.</p>

      <p><strong>El amor de Dios es incondicional:</strong> No tengo que ser perfecta para que Dios me ame. Su amor no depende de mi desempeño.</p>

      <p><strong>La comunidad es esencial:</strong> No fuimos diseñados para caminar solos en la fe. Necesitamos unos a otros.</p>

      <p><strong>La transformación es posible:</strong> No importa cuán perdido te sientas, Dios puede cambiar tu historia.</p>

      <p><strong>Hay propósito en el dolor:</strong> Dios puede tomar nuestras heridas más profundas y convertirlas en fuentes de sanidad para otros.</p>

      <h2>Un Mensaje de Esperanza</h2>
      <p>Si estás leyendo esto y te sientes perdido, desesperanzado, o como si tu vida no tuviera valor, quiero que sepas que hay esperanza. El mismo Jesús que me encontró en mi momento más oscuro te está buscando a ti también.</p>

      <p>No importa lo que hayas hecho, no importa cuán lejos te hayas alejado, no importa cuán roto te sientas. Dios te ama con un amor que no puedes ganar y que no puedes perder. Él tiene un plan para tu vida, un propósito que solo tú puedes cumplir.</p>

      <p>Mi oración es que mi historia te dé esperanza. Si yo pude ser transformada, tú también puedes serlo. Dios no hace acepción de personas. Lo que Él hizo por mí, lo puede hacer por ti.</p>

      <h2>Una Invitación Personal</h2>
      <p>Si sientes que Dios está hablando a tu corazón mientras lees esto, no ignores esa voz suave. Él te está llamando a una nueva vida, a una nueva esperanza, a un nuevo comienzo.</p>

      <p>Puedes orar conmigo ahora mismo: "Jesús, reconozco que necesito un Salvador. Reconozco que he estado tratando de vivir la vida por mi cuenta y no ha funcionado. Te entrego mi vida hoy. Perdona mis pecados y hazme nuevo. Ayúdame a vivir para ti. Amén."</p>

      <p>Si hiciste esa oración con sinceridad, ¡bienvenido a la familia de Dios! Tu nueva vida acaba de comenzar. Te animo a que busques una iglesia local donde puedas crecer en tu fe y encontrar la comunidad que necesitas.</p>

      <p>Recuerda: tu historia no ha terminado. Dios está escribiendo un nuevo capítulo, y va a ser hermoso.</p>
    `,
  },
  "criando-hijos-fe": {
    titulo: "Criando Hijos en la Fe: Consejos Prácticos",
    resumen:
      "Estrategias bíblicas y prácticas para guiar a nuestros hijos en su desarrollo espiritual desde temprana edad.",
    fecha: "2 de Septiembre, 2025",
    autor: "Hermano Juan",
    categoria: "Familia",
    imagen: "/familia.jpg",
    contenido: `
      <p>Una de las responsabilidades más importantes y desafiantes que Dios nos ha dado como padres es la de guiar a nuestros hijos en su desarrollo espiritual. En un mundo que constantemente compite por la atención y el corazón de nuestros pequeños, ¿cómo podemos asegurar que crezcan con una fe sólida y personal en Jesucristo?</p>

      <h2>El Fundamento Bíblico</h2>
      <p>Deuteronomio 6:6-7 nos da la base para la educación espiritual de nuestros hijos: "Y estas palabras que yo te mando hoy, estarán sobre tu corazón; y las repetirás a tus hijos, y hablarás de ellas estando en tu casa, y andando por el camino, y al acostarte, y cuando te levantes."</p>

      <p>Este pasaje nos enseña que la educación espiritual no es un evento de una hora los domingos, sino un estilo de vida. Es una conversación continua que permea todos los aspectos de nuestra vida familiar.</p>

      <p>Proverbios 22:6 añade: "Instruye al niño en su camino, y aun cuando fuere viejo no se apartará de él." Esto no es solo una promesa, sino también una responsabilidad. Tenemos la oportunidad de plantar semillas espirituales que darán fruto por toda la eternidad.</p>

      <h2>Principios Fundamentales</h2>
      <p><strong>1. Modela lo que Enseñas:</strong> Los niños aprenden más de lo que ven que de lo que escuchan. Si queremos que nuestros hijos tengan una fe auténtica, deben ver esa fe vivida auténticamente en nosotros.</p>

      <p><strong>2. Haz que la Fe sea Relevante:</strong> Conecta las verdades bíblicas con las experiencias diarias de tus hijos. Muéstrales cómo Dios está presente en los momentos ordinarios de la vida.</p>

      <p><strong>3. Crea un Ambiente de Gracia:</strong> Nuestros hogares deben ser lugares donde se experimenta el amor incondicional de Dios, donde hay perdón cuando se cometen errores, y donde se celebra el crecimiento espiritual.</p>

      <p><strong>4. Sé Intencional:</strong> El desarrollo espiritual no sucede por accidente. Requiere planificación, consistencia, y dedicación deliberada.</p>

      <h2>Estrategias Prácticas por Edades</h2>
      <h3>Niños Pequeños (2-5 años)</h3>
      <p><strong>Historias Bíblicas Visuales:</strong> Usa libros con ilustraciones coloridas, videos apropiados para la edad, y representaciones dramáticas simples para contar historias bíblicas.</p>

      <p><strong>Canciones de Adoración:</strong> Los niños pequeños aprenden fácilmente a través de la música. Canta canciones de adoración durante el día, en el auto, y antes de dormir.</p>

      <p><strong>Oraciones Simples:</strong> Enseña oraciones cortas y simples. Permite que tus hijos oren por sus juguetes, mascotas, y familia.</p>

      <p><strong>Rutinas Espirituales:</strong> Establece momentos regulares para la oración y la lectura bíblica, como antes de las comidas y al acostarse.</p>

      <h3>Niños en Edad Escolar (6-11 años)</h3>
      <p><strong>Devocionales Familiares:</strong> Implementa un tiempo diario de devocional familiar con lectura bíblica, discusión, y oración.</p>

      <p><strong>Memorización de Versículos:</strong> Ayuda a tus hijos a memorizar versículos clave. Hazlo divertido con juegos, canciones, y recompensas.</p>

      <p><strong>Servicio Familiar:</strong> Involucra a toda la familia en proyectos de servicio comunitario y misiones.</p>

      <p><strong>Respuestas a Preguntas:</strong> Esta edad está llena de preguntas. Tómate tiempo para responder sus preguntas sobre Dios, la Biblia, y la fe de manera apropiada para su edad.</p>

      <h3>Adolescentes (12+ años)</h3>
      <p><strong>Discusiones Profundas:</strong> Los adolescentes pueden manejar conceptos teológicos más complejos. Discute temas como el sufrimiento, la justicia de Dios, y la relevancia de la fe en el mundo moderno.</p>

      <p><strong>Mentoría Personal:</strong> Considera conectar a tu adolescente con un mentor cristiano maduro además de tu propia influencia.</p>

      <p><strong>Oportunidades de Liderazgo:</strong> Permite que tus hijos adolescentes tomen roles de liderazgo en la iglesia y en proyectos de servicio.</p>

      <p><strong>Apologética Básica:</strong> Equipa a tus hijos con razones para su fe. Ayúdales a entender por qué creen lo que creen.</p>

      <h2>Creando Tradiciones Espirituales Familiares</h2>
      <p><strong>Devocionales Nocturnos:</strong> Termina cada día con un tiempo de reflexión sobre cómo Dios estuvo presente durante el día.</p>

      <p><strong>Celebraciones Espirituales:</strong> Crea tradiciones especiales para Navidad, Pascua, y otros días significativos que enfaticen su significado espiritual.</p>

      <p><strong>Diarios de Oración Familiar:</strong> Mantén un diario donde la familia registre peticiones de oración y celebre las respuestas de Dios.</p>

      <p><strong>Retiros Familiares:</strong> Planifica retiros familiares anuales enfocados en el crecimiento espiritual y la unidad familiar.</p>

      <h2>Navegando Desafíos Comunes</h2>
      <p><strong>Resistencia a las Actividades Espirituales:</strong> Si tus hijos muestran resistencia, evalúa si las actividades son apropiadas para su edad y si estás siendo demasiado rígido. Mantén la flexibilidad mientras mantienes la consistencia.</p>

      <p><strong>Preguntas Difíciles:</strong> Cuando tus hijos hagan preguntas que no puedes responder, está bien decir "No lo sé, pero vamos a investigar juntos." Esto enseña que la fe y el aprendizaje van de la mano.</p>

      <p><strong>Influencias Externas:</strong> Prepara a tus hijos para las influencias seculares que encontrarán. Discute cómo su fe se relaciona con lo que aprenden en la escuela y ven en los medios.</p>

      <p><strong>Diferentes Personalidades:</strong> Reconoce que cada hijo es único. Lo que funciona para uno puede no funcionar para otro. Adapta tu enfoque a la personalidad y estilo de aprendizaje de cada hijo.</p>

      <h2>El Papel de la Iglesia</h2>
      <p>Aunque la responsabilidad principal de la educación espiritual recae en los padres, la iglesia juega un papel crucial de apoyo:</p>

      <p><strong>Escuela Dominical:</strong> Asegúrate de que tus hijos participen regularmente en programas de educación cristiana apropiados para su edad.</p>

      <p><strong>Grupos de Jóvenes:</strong> Los grupos de jóvenes proporcionan comunidad cristiana y oportunidades de crecimiento espiritual con pares.</p>

      <p><strong>Campamentos Cristianos:</strong> Los campamentos ofrecen experiencias intensivas de crecimiento espiritual y a menudo son lugares donde los niños toman decisiones importantes de fe.</p>

      <p><strong>Mentores Adultos:</strong> Conecta a tus hijos con adultos cristianos maduros que puedan servir como modelos a seguir y mentores espirituales.</p>

      <h2>Tecnología y Fe</h2>
      <p>En nuestra era digital, es importante considerar cómo la tecnología puede ser una herramienta para el crecimiento espiritual:</p>

      <p><strong>Aplicaciones Bíblicas:</strong> Usa aplicaciones que ofrecen planes de lectura bíblica para niños y devocionales familiares.</p>

      <p><strong>Música Cristiana:</strong> Crea listas de reproducción de música cristiana apropiada para la edad que tus hijos puedan disfrutar.</p>

      <p><strong>Límites Saludables:</strong> Establece límites en el uso de la tecnología para asegurar que no interfiera con el tiempo familiar y espiritual.</p>

      <p><strong>Discernimiento Digital:</strong> Enseña a tus hijos a evaluar el contenido digital a través de una lente cristiana.</p>

      <h2>Cuando los Hijos se Alejan</h2>
      <p>A pesar de nuestros mejores esfuerzos, algunos hijos pueden alejarse de la fe durante la adolescencia o la adultez temprana. Esto no significa que hemos fallado como padres:</p>

      <p><strong>Continúa Amando:</strong> El amor incondicional es poderoso. Mantén las puertas abiertas y las relaciones intactas.</p>

      <p><strong>Ora Persistentemente:</strong> Nunca subestimes el poder de la oración persistente por tus hijos.</p>

      <p><strong>Confía en las Semillas Plantadas:</strong> Las verdades espirituales plantadas en la infancia a menudo resurgen más tarde en la vida.</p>

      <p><strong>Busca Apoyo:</strong> No camines solo en esta lucha. Busca apoyo de otros padres y líderes espirituales.</p>

      <h2>El Objetivo Final</h2>
      <p>Nuestro objetivo como padres cristianos no es criar niños que simplemente sigan reglas religiosas, sino formar discípulos de Jesucristo que tengan una relación personal y vibrante con Él. Queremos que nuestros hijos:</p>

      <p>• Conozcan a Jesús personalmente, no solo conocer acerca de Él</p>
      <p>• Desarrollen su propia fe, no solo heredar la nuestra</p>
      <p>• Vivan sus valores cristianos en todas las áreas de la vida</p>
      <p>• Sirvan a otros y compartan su fe con el mundo</p>
      <p>• Continúen creciendo espiritualmente toda su vida</p>

      <h2>Una Palabra de Ánimo</h2>
      <p>Criar hijos en la fe es una de las tareas más importantes y desafiantes que enfrentaremos como padres. Habrá días cuando nos sintamos inadecuados, cuando cometamos errores, cuando nos preguntemos si estamos haciendo lo correcto.</p>

      <p>Recuerda que Dios te ha confiado estos hijos por una razón. Él te dará la sabiduría, la fuerza, y los recursos que necesitas. No tienes que ser perfecto; solo tienes que ser fiel.</p>

      <p>Confía en que las semillas espirituales que plantas hoy darán fruto en el tiempo de Dios. Mantén la fe, mantén la esperanza, y mantén el amor como el centro de todo lo que haces.</p>

      <p>Que Dios bendiga tu familia y use tu fidelidad para formar la próxima generación de seguidores de Cristo.</p>
    `,
  },
  "esperanza-no-defrauda": {
    titulo: "La Esperanza que No Defrauda",
    resumen: "En un mundo lleno de incertidumbre, la esperanza cristiana nos ofrece una base sólida e inquebrantable.",
    fecha: "11 de Julio, 2025",
    autor: "Hermano Miguel",
    categoria: "Esperanza",
    imagen: "/sunrise-hope-light.jpg",
    contenido: `
      <p>Vivimos en tiempos de gran incertidumbre. Las noticias están llenas de conflictos, crisis económicas, desastres naturales, y divisiones sociales. En medio de este caos, es fácil perder la esperanza y sucumbir al desánimo. Pero como cristianos, tenemos acceso a una esperanza que trasciende las circunstancias temporales: una esperanza que no defrauda.</p>

      <h2>¿Qué es la Esperanza Cristiana?</h2>
      <p>La esperanza cristiana no es simplemente optimismo o pensamiento positivo. No es la esperanza de que las cosas mejoren por sí solas o que nuestros problemas desaparezcan mágicamente. La esperanza cristiana es mucho más profunda y sólida que eso.</p>

      <p>Romanos 5:5 nos dice: "y la esperanza no avergüenza; porque el amor de Dios ha sido derramado en nuestros corazones por el Espíritu Santo que nos fue dado." Esta esperanza está fundamentada en el carácter inmutable de Dios y en Sus promesas inquebrantables.</p>

      <p>La esperanza cristiana es la confianza segura de que Dios cumplirá todas Sus promesas, que Su plan para nuestras vidas es bueno, y que nuestro futuro eterno está seguro en Cristo Jesús.</p>

      <h2>Los Fundamentos de Nuestra Esperanza</h2>
      <p><strong>1. El Carácter de Dios:</strong> Nuestra esperanza no se basa en circunstancias cambiantes, sino en el carácter inmutable de Dios. Él es fiel, amoroso, justo, y todopoderoso. Hebreos 6:18 nos asegura que "es imposible que Dios mienta."</p>

      <p><strong>2. Las Promesas de Dios:</strong> La Biblia está llena de promesas que Dios ha hecho a Su pueblo. Desde Génesis hasta Apocalipsis, vemos un Dios que cumple Sus promesas. 2 Corintios 1:20 declara: "porque todas las promesas de Dios son en él Sí, y en él Amén."</p>

      <p><strong>3. La Obra de Cristo:</strong> Nuestra esperanza está anclada en lo que Jesús ya ha logrado a través de Su muerte y resurrección. Él ha vencido al pecado, a la muerte, y al diablo. Esta victoria es la base de nuestra esperanza futura.</p>

      <p><strong>4. La Presencia del Espíritu Santo:</strong> El Espíritu Santo en nosotros es "las arras de nuestra herencia" (Efesios 1:14), una garantía de que Dios completará lo que ha comenzado en nuestras vidas.</p>

      <h2>Esperanza en Medio del Sufrimiento</h2>
      <p>Una de las pruebas más grandes de nuestra esperanza viene cuando enfrentamos sufrimiento. Es fácil tener esperanza cuando todo va bien, pero ¿qué pasa cuando la vida se desmorona a nuestro alrededor?</p>

      <p>Job, quien perdió todo lo que tenía, pudo declarar: "Yo sé que mi Redentor vive, y al fin se levantará sobre el polvo" (Job 19:25). Su esperanza no estaba en sus circunstancias presentes, sino en la realidad eterna de Dios.</p>

      <p>Pablo, escribiendo desde la prisión, pudo decir: "Porque esta leve tribulación momentánea produce en nosotros un cada vez más excelente y eterno peso de gloria" (2 Corintios 4:17). Él tenía una perspectiva eterna que transformaba su sufrimiento presente.</p>

      <p>El sufrimiento no elimina nuestra esperanza; la refina. Nos enseña a depender no de nuestras propias fuerzas, sino del poder de Dios. Nos recuerda que este mundo no es nuestro hogar final.</p>

      <h2>La Esperanza de la Resurrección</h2>
      <p>El corazón de la esperanza cristiana es la promesa de la resurrección. Porque Cristo resucitó de los muertos, nosotros también resucitaremos. Esta no es solo una esperanza para el futuro distante; es una realidad que transforma cómo vivimos hoy.</p>

      <p>1 Corintios 15:19 dice: "Si en esta vida solamente esperamos en Cristo, somos los más dignos de conmiseración de todos los hombres." Pero el versículo siguiente declara triunfalmente: "Mas ahora Cristo ha resucitado de los muertos; primicias de los que durmieron es hecho."</p>

      <p>La resurrección significa que la muerte no tiene la última palabra. Significa que nuestros seres queridos que han muerto en Cristo no están perdidos para siempre. Significa que nuestros cuerpos quebrantados serán renovados. Significa que toda injusticia será corregida y toda lágrima será enjugada.</p>

      <h2>Esperanza para el Presente</h2>
      <p>Aunque nuestra esperanza última está en el futuro, también tiene implicaciones poderosas para el presente:</p>

      <p><strong>Fortaleza para Perseverar:</strong> La esperanza nos da la fuerza para continuar cuando queremos rendirnos. Nos recuerda que nuestras luchas actuales no son el final de la historia.</p>

      <p><strong>Paz en la Incertidumbre:</strong> Cuando no sabemos qué traerá el mañana, podemos descansar en la certeza de que Dios tiene el control y que Su plan es bueno.</p>

      <p><strong>Propósito en el Dolor:</strong> La esperanza nos ayuda a ver que incluso nuestro sufrimiento puede tener propósito en el plan de Dios, ya sea para nuestro crecimiento espiritual o para ministrar a otros.</p>

      <p><strong>Motivación para el Servicio:</strong> Sabiendo que nuestro trabajo en el Señor no es en vano (1 Corintios 15:58), somos motivados a servir a otros y a trabajar por la justicia y la paz.</p>

      <h2>Cultivando la Esperanza</h2>
      <p>La esperanza no es algo que simplemente sucede; es algo que debemos cultivar intencionalmente:</p>

      <p><strong>1. Medita en las Promesas de Dios:</strong> Pasa tiempo regularmente leyendo y meditando en las promesas de Dios en Su Palabra. Permite que estas verdades penetren profundamente en tu corazón.</p>

      <p><strong>2. Recuerda la Fidelidad Pasada de Dios:</strong> Mantén un diario de cómo Dios ha sido fiel en tu vida. En tiempos de duda, regresa a estos recordatorios de Su bondad.</p>

      <p><strong>3. Mantén una Perspectiva Eterna:</strong> Regularmente recuérdate a ti mismo que esta vida es temporal y que lo mejor está por venir.</p>

      <p><strong>4. Rodéate de Comunidad:</strong> La esperanza se fortalece en comunidad. Rodéate de otros creyentes que puedan animarte y recordarte las verdades de Dios.</p>

      <p><strong>5. Practica la Gratitud:</strong> La gratitud y la esperanza van de la mano. Cuando nos enfocamos en las bendiciones de Dios, nuestra esperanza se fortalece.</p>

      <h2>Compartiendo la Esperanza</h2>
      <p>Una de las responsabilidades más importantes que tenemos como cristianos es compartir nuestra esperanza con otros. 1 Pedro 3:15 nos instruye: "estad siempre preparados para presentar defensa con mansedumbre y reverencia ante todo el que os demande razón de la esperanza que hay en vosotros."</p>

      <p>El mundo está desesperado por esperanza real. Están cansados de promesas vacías y soluciones temporales. Necesitan escuchar sobre la esperanza que no defrauda, la esperanza que está disponible en Jesucristo.</p>

      <p>Compartimos esta esperanza no solo con nuestras palabras, sino con nuestras vidas. Cuando otros ven cómo respondemos a las dificultades con fe en lugar de desesperación, cuando ven nuestra paz en medio de la tormenta, cuando ven nuestro gozo a pesar de las circunstancias, están viendo el poder de la esperanza cristiana en acción.</p>

      <h2>La Esperanza en Tiempos de Crisis Global</h2>
      <p>En tiempos de crisis global como pandemias, guerras, o colapsos económicos, la esperanza cristiana brilla aún más brillante. Mientras el mundo se tambalea con incertidumbre, nosotros podemos permanecer firmes en la roca sólida de nuestras convicciones.</p>

      <p>Esto no significa que seamos inmunes al dolor o que no sintamos el peso de las circunstancias difíciles. Significa que tenemos un ancla que nos mantiene estables cuando las tormentas de la vida amenazan con llevarnos.</p>

      <p>Salmo 46:1-3 declara: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones. Por tanto, no temeremos, aunque la tierra sea removida, y se traspasen los montes al corazón del mar; aunque bramen y se turben sus aguas, y tiemblen los montes a causa de su braveza."</p>

      <h2>La Esperanza del Regreso de Cristo</h2>
      <p>La culminación de nuestra esperanza cristiana es la promesa del regreso de Jesucristo. Él prometió: "vendré otra vez, y os tomaré a mí mismo, para que donde yo estoy, vosotros también estéis" (Juan 14:3).</p>

      <p>Esta esperanza del regreso de Cristo transforma cómo vemos todo lo demás. Los problemas actuales son temporales; Su reino es eterno. Las injusticias presentes serán corregidas; Él traerá justicia perfecta. El dolor actual será reemplazado por gozo eterno.</p>

      <p>Apocalipsis 21:4 nos promete: "Enjugará Dios toda lágrima de los ojos de ellos; y ya no habrá muerte, ni habrá más llanto, ni clamor, ni dolor; porque las primeras cosas pasaron."</p>

      <h2>Una Invitación a la Esperanza</h2>
      <p>Si estás leyendo esto y sientes que has perdido la esperanza, quiero recordarte que nunca es demasiado tarde para encontrarla nuevamente. La esperanza cristiana está disponible para todos los que ponen su fe en Jesucristo.</p>

      <p>No importa cuán oscuras parezcan tus circunstancias, no importa cuántas veces hayas sido decepcionado, no importa cuán perdido te sientas. Dios tiene esperanza para ti. Él tiene un plan para tu vida, un propósito para tu dolor, y un futuro lleno de esperanza.</p>

      <p>La esperanza cristiana no es un sentimiento que va y viene; es una realidad sólida basada en las promesas inquebrantables de Dios. Es una esperanza que no defrauda porque está fundamentada en Aquel que nunca falla.</p>

      <h2>Viviendo en Esperanza</h2>
      <p>Que podamos ser personas que viven en esperanza, que irradien esperanza, y que compartan esperanza con un mundo que desesperadamente la necesita. Que nuestras vidas sean testimonios vivientes del poder transformador de la esperanza que no defrauda.</p>

      <p>Romanos 15:13 es mi oración para todos nosotros: "Y el Dios de esperanza os llene de todo gozo y paz en el creer, para que abundéis en esperanza por el poder del Espíritu Santo."</p>

      <p>En un mundo lleno de desesperanza, seamos portadores de la esperanza que no defrauda. Porque tenemos una esperanza que es segura y firme, un ancla del alma que penetra hasta dentro del velo, donde Jesús entró por nosotros como precursor (Hebreos 6:19-20).</p>

      <p>Esta es nuestra esperanza. Esta es nuestra confianza. Esta es nuestra victoria. En Cristo, tenemos una esperanza que verdaderamente no defrauda.</p>
    `,
  },
}

export default function ArticlePage() {
  const params = useParams()
  const slug = params.slug as string
  const [shareMessage, setShareMessage] = useState("")

  const articulo = articulosCompletos[slug as keyof typeof articulosCompletos]

  if (!articulo) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="flex-1 py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-blue-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-blue-500" />
              </div>
              <h1 className="text-xl md:text-2xl font-bold mb-4 text-slate-800">Artículo no encontrado</h1>
              <p className="text-slate-600 mb-6 md:mb-8">El artículo que buscas no existe o ha sido movido.</p>
              <Button asChild className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const shareOnWhatsApp = () => {
    const url = window.location.href
    const text = `Te comparto este artículo: "${articulo.titulo}" - ${url}`
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, "_blank")
    setShareMessage("¡Enlace copiado para WhatsApp!")
    setTimeout(() => setShareMessage(""), 3000)
  }

  const shareOnFacebook = () => {
    const url = window.location.href
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
    setShareMessage("¡Compartido en Facebook!")
    setTimeout(() => setShareMessage(""), 3000)
  }

  const shareOnInstagram = () => {
    const url = window.location.href
    const text = `Te recomiendo este artículo: "${articulo.titulo}" - ${url}`
    navigator.clipboard.writeText(text).then(() => {
      setShareMessage("¡Enlace copiado para Instagram!")
      setTimeout(() => setShareMessage(""), 3000)
    })
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <Header />
      <main className="flex-1">
        {/* Back to Blog */}
        <section className="py-4 md:py-8 border-b border-blue-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Button asChild variant="ghost" className="mb-2 md:mb-4 text-sm md:text-base text-blue-600 hover:text-blue-700 hover:bg-blue-50">
              <Link href="/blog">
                <ArrowLeft className="h-3 w-3 md:h-4 md:w-4 mr-2" />
                Volver al Blog
              </Link>
            </Button>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-8 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100 mb-6 md:mb-8">
              <Badge className="mb-3 md:mb-4 text-xs md:text-sm bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0">
                {articulo.categoria}
              </Badge>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-balance mb-4 md:mb-6 leading-tight text-slate-800">
                {articulo.titulo}
              </h1>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-slate-600 mb-4 md:mb-6">
                <div className="flex items-center text-sm md:text-base">
                  <Calendar className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-500" />
                  {articulo.fecha}
                </div>
                <div className="flex items-center text-sm md:text-base">
                  <User className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-500" />
                  {articulo.autor}
                </div>
              </div>
              <p className="text-lg md:text-xl text-slate-700 text-pretty leading-relaxed border-l-3 border-blue-300 pl-4 bg-blue-50 rounded-r py-2">
                {articulo.resumen}
              </p>
            </div>

            {/* Featured Image */}
            <div className="mb-8 md:mb-12">
              <img
                src={articulo.imagen || "/placeholder.svg"}
                alt={articulo.titulo}
                className="w-full h-48 md:h-64 lg:h-96 object-cover rounded-2xl shadow-lg border-4 border-white"
              />
            </div>

            {/* Share Buttons */}
            <Card className="mb-8 md:mb-12 bg-gradient-to-r from-blue-50 to-teal-50 border border-blue-200 shadow-sm">
              <CardContent className="p-4 md:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center justify-center sm:justify-start">
                    <Share2 className="h-4 w-4 md:h-5 md:w-5 mr-2 text-blue-600" />
                    <span className="font-semibold text-sm md:text-base text-slate-700">Compartir este artículo:</span>
                  </div>
                  <div className="flex justify-center sm:justify-end flex-wrap gap-2">
                    <Button
                      onClick={shareOnWhatsApp}
                      size="sm"
                      className="bg-green-500 hover:bg-green-600 text-white border-0 shadow-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <MessageCircle className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      onClick={shareOnFacebook}
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <Facebook className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Facebook
                    </Button>
                    <Button
                      onClick={shareOnInstagram}
                      size="sm"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0 shadow-sm transition-all duration-300 transform hover:scale-105"
                    >
                      <Instagram className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2" />
                      Instagram
                    </Button>
                  </div>
                </div>
                {shareMessage && (
                  <p className="text-sm text-green-600 mt-3 text-center bg-green-50 py-1 rounded-lg">
                    {shareMessage}
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Article Content */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-blue-100">
              <div
                className="prose prose-sm md:prose-lg max-w-none 
                  prose-headings:text-slate-800 prose-headings:font-bold
                  prose-p:text-slate-700 prose-p:leading-relaxed
                  prose-strong:text-slate-800
                  prose-li:text-slate-700
                  prose-headings:border-b prose-headings:border-blue-200 prose-headings:pb-2
                  prose-blockquote:border-l-blue-400 prose-blockquote:bg-blue-50 prose-blockquote:italic
                  prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
                  prose-img:rounded-lg prose-img:shadow-md"
                dangerouslySetInnerHTML={{ __html: articulo.contenido }}
              />
            </div>

            {/* Share Buttons Bottom */}
            <Card className="mt-8 md:mt-12 bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6 md:p-8 text-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">¿Te bendijo este artículo?</h3>
                <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base">
                  Compártelo con tus amigos y familiares para que ellos también puedan ser bendecidos.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
                  <Button
                    onClick={shareOnWhatsApp}
                    className="bg-white text-green-600 hover:bg-green-50 border-0 shadow-sm transition-all duration-300"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Button>
                  <Button
                    onClick={shareOnFacebook}
                    className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-sm transition-all duration-300"
                  >
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                  <Button
                    onClick={shareOnInstagram}
                    className="bg-white text-pink-600 hover:bg-pink-50 border-0 shadow-sm transition-all duration-300"
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Back to Blog */}
            <div className="mt-8 md:mt-12 text-center">
              <Button asChild className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white shadow-sm">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Volver al Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
