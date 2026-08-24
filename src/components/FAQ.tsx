import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqsEn = [
  {
    question: "What is HireRapido?",
    answer:
      "HireRapido is Latin America's largest AI-powered talent marketplace, designed to connect top US companies with elite, pre-vetted LatAm talent seamlessly.",
  },
  {
    question: "How does HireRapido work?",
    answer:
      "We use bespoke AI tools to match your job description with the ideal candidates. Once matched, you can review detailed profiles, conduct interviews, and hire directly through our platform, while we handle HR and compliance.",
  },
  {
    question:
      "What are the benefits of hiring in Latin America for US companies?",
    answer:
      "Hiring in LatAm offers significant cost savings (up to 80%), highly skilled professionals, excellent English fluency, and perfect time-zone alignment with the US, ensuring real-time collaboration.",
  },
  {
    question: "How much can I save on hiring with HireRapido?",
    answer:
      "On average, our clients save up to 80% on total hiring costs compared to local US hires. This includes savings on base salary, health insurance, social security, and other traditional overheads.",
  },
  {
    question: "Which roles should I hire in LatAm?",
    answer:
      "You can hire across a wide variety of roles, including Software Engineers, Marketing Specialists, Sales Associates, Customer Service Representatives, Accountants, Designers, and administrative staff.",
  },
  {
    question: "How long does the hiring process take?",
    answer:
      "Our AI-powered matching system allows us to present a curated shortlist within 24-48 hours. Most companies are able to make a final hire within a week.",
  },
  {
    question: "How can I start working with LatAm talent?",
    answer:
      "Simply get in touch with us or sign up on our platform to create a job listing. Our team and AI will immediately begin matching you with the perfect candidates.",
  },
];

const faqsEs = [
  {
    question: "¿Qué es HireRapido?",
    answer:
      "HireRapido es el marketplace de talento impulsado por IA más grande de Latinoamérica, diseñado para conectar de forma sencilla a empresas líderes de EE. UU. con talento de LatAm altamente calificado y previamente evaluado.",
  },
  {
    question: "¿Cómo funciona HireRapido?",
    answer:
      "Utilizamos herramientas de IA desarrolladas a medida para conectar la descripción de tu puesto con los candidatos ideales. Una vez encontrados, puedes revisar perfiles detallados, realizar entrevistas y contratar directamente a través de nuestra plataforma, mientras nosotros nos encargamos de Recursos Humanos y cumplimiento legal.",
  },
  {
    question:
      "¿Cuáles son los beneficios de contratar talento de Latinoamérica para empresas de EE. UU.?",
    answer:
      "Contratar en LatAm ofrece importantes ahorros de costos de hasta un 80%, acceso a profesionales altamente capacitados, excelente dominio del inglés y zonas horarias compatibles con EE. UU., lo que facilita la colaboración en tiempo real.",
  },
  {
    question: "¿Cuánto puedo ahorrar contratando con HireRapido?",
    answer:
      "En promedio, nuestros clientes ahorran hasta un 80% en costos totales de contratación en comparación con contrataciones locales en EE. UU. Esto incluye ahorros en salario base, seguro médico, seguridad social y otros costos tradicionales.",
  },
  {
    question: "¿Qué puestos puedo contratar en LatAm?",
    answer:
      "Puedes contratar una amplia variedad de perfiles, incluyendo ingenieros de software, especialistas en marketing, profesionales de ventas, representantes de atención al cliente, contadores, diseñadores y personal administrativo.",
  },
  {
    question: "¿Cuánto tarda el proceso de contratación?",
    answer:
      "Nuestro sistema de coincidencia impulsado por IA nos permite presentar una selección personalizada de candidatos en un plazo de 24 a 48 horas. La mayoría de las empresas puede completar una contratación en aproximadamente una semana.",
  },
  {
    question: "¿Cómo puedo comenzar a trabajar con talento de LatAm?",
    answer:
      "Simplemente ponte en contacto con nosotros o regístrate en nuestra plataforma para crear una oferta de empleo. Nuestro equipo y nuestra IA comenzarán inmediatamente a buscar los candidatos ideales para tu empresa.",
  },
];

type FAQProps = {
  language?: "en" | "es";
};

export function FAQ({ language = "en" }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const isSpanish = language === "es";
  const faqs = isSpanish ? faqsEs : faqsEn;

  return (
    <section className="portal-section portal-section-grid border-t border-border/50">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-extrabold sm:text-5xl mb-16">
          {isSpanish ? (
            <>
              Preguntas{" "}
              <span className="text-gradient-brand">frecuentes</span>
            </>
          ) : (
            <>
              Frequently asked{" "}
              <span className="text-gradient-brand">questions</span>
            </>
          )}
        </h2>

        <div className="portal-panel overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="cursor-pointer border-b border-border px-6 py-6 last:border-b-0 group sm:px-8"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-6 items-center">
                    <span className="text-xl font-bold text-foreground">
                      {String(index + 1).padStart(2, "0")}.
                    </span>

                    <h3 className="text-xl font-bold text-foreground group-hover:text-brand-gold transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground text-primary-foreground">
                    {isOpen ? (
                      <Minus className="h-6 w-6" />
                    ) : (
                      <Plus className="h-6 w-6" />
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-4 ml-14 text-lg text-muted-foreground animate-in slide-in-from-top-2 fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}