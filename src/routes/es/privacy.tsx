import { createFileRoute } from '@tanstack/react-router'
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute('/es/privacy')({
  component: PrivacyPolicy,
})

function PrivacyPolicy() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-foreground mb-8">
            Política de Privacidad
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 font-medium">
              Última actualización: julio de 2026
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              1. Información que recopilamos
            </h2>
            <p className="mb-6">
              Recopilamos la información que nos proporcionas directamente, por ejemplo, cuando creas una cuenta, envías una solicitud de empleo o te comunicas con nosotros. Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono, datos de tu currículum y cualquier otra información que decidas proporcionar.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              2. Cómo utilizamos tu información
            </h2>
            <p className="mb-6">
              Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios. En particular, la utilizamos para conectar candidatos con posibles empleadores, facilitar entrevistas por video, brindar atención al cliente y enviar avisos importantes relacionados con tu cuenta o nuestra plataforma.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              3. Compartición y divulgación de datos
            </h2>
            <p className="mb-6">
              Podemos compartir tu información con posibles empleadores si eres candidato, o con candidatos si eres empleador. No vendemos tu información personal a terceros. También podemos compartir información con proveedores, consultores y otros prestadores de servicios que necesiten acceder a dicha información para realizar trabajos en nuestro nombre.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              4. Seguridad de los datos
            </h2>
            <p className="mb-6">
              Implementamos medidas técnicas y organizativas adecuadas para proteger la seguridad de tu información personal. Sin embargo, ten en cuenta que ningún método de transmisión a través de Internet ni de almacenamiento electrónico es 100% seguro.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              5. Tus derechos de privacidad
            </h2>
            <p className="mb-6">
              Dependiendo de tu ubicación, puedes tener ciertos derechos relacionados con tu información personal, como el derecho a acceder, corregir o eliminar tus datos. Para ejercer estos derechos, ponte en contacto con nosotros.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              6. Cambios a esta política
            </h2>
            <p className="mb-6">
              Podemos actualizar esta Política de Privacidad ocasionalmente. Si realizamos cambios importantes, te notificaremos por correo electrónico o mediante un aviso en nuestra plataforma antes de que dichos cambios entren en vigor.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              7. Contáctanos
            </h2>
            <p className="mb-6">
              Si tienes alguna pregunta o inquietud sobre esta Política de Privacidad, ponte en contacto con nosotros en privacy@hirerapido.com.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}