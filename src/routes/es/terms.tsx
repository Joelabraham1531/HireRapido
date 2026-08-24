import { createFileRoute } from '@tanstack/react-router'
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute('/es/terms')({
  component: TermsOfService,
})

function TermsOfService() {
  return (
    <div className="bg-background min-h-screen pt-32 pb-24">
      <div className="mx-auto max-w-4xl px-6">
        <FadeIn>
          <h1 className="text-4xl font-extrabold sm:text-5xl text-foreground mb-8">
            Términos de Servicio
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="mb-6 font-medium">
              Última actualización: julio de 2026
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              1. Introducción
            </h2>
            <p className="mb-6">
              Bienvenido a HireRapido. Estos Términos de Servicio ("Términos") regulan tu acceso y uso del sitio web, los servicios y las aplicaciones de HireRapido. Al acceder o utilizar nuestra plataforma, aceptas quedar sujeto a estos Términos.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              2. Descripción de los servicios
            </h2>
            <p className="mb-6">
              HireRapido proporciona una plataforma que conecta empresas con sede en Estados Unidos con talento altamente calificado en Latinoamérica. Nuestros servicios incluyen un sistema de coincidencia impulsado por IA, herramientas de evaluación mediante video y paneles para gestionar selecciones de candidatos.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              3. Responsabilidades del usuario
            </h2>
            <p className="mb-6">
              Como usuario de nuestra plataforma, aceptas proporcionar información precisa y completa. Eres responsable de mantener la confidencialidad de las credenciales de tu cuenta y de todas las actividades que se realicen a través de ella.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              4. Propiedad intelectual
            </h2>
            <p className="mb-6">
              Todo el contenido, las funciones y las funcionalidades de la plataforma HireRapido, incluyendo, entre otros, textos, gráficos, logotipos y software, son propiedad exclusiva de HireRapido y están protegidos por las leyes internacionales de derechos de autor y propiedad intelectual.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              5. Limitación de responsabilidad
            </h2>
            <p className="mb-6">
              HireRapido no será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos, ni por pérdida de beneficios o ingresos, ya sea que se produzcan directa o indirectamente como resultado del uso de la plataforma.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              6. Cambios en los Términos
            </h2>
            <p className="mb-6">
              Nos reservamos el derecho de modificar estos Términos en cualquier momento. Notificaremos a los usuarios sobre cualquier cambio significativo. El uso continuado de la plataforma después de dichas modificaciones constituye la aceptación de los Términos actualizados.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">
              7. Contáctanos
            </h2>
            <p className="mb-6">
              Si tienes alguna pregunta sobre estos Términos, ponte en contacto con nosotros en support@hirerapido.com.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}