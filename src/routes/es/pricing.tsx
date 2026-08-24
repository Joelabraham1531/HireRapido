import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Check,
  CreditCard,
  Globe2,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FAQ } from "@/components/FAQ";

export const Route = createFileRoute("/es/pricing")({
  component: Pricing,
});

const directHireFeatures = [
  "¡No se requiere depósito!",
  "Incorpora el talento directamente a tu equipo",
  "Contrata en 48 horas",
  "¡Acceso a nuestra plataforma de autoservicio!",
  "Paga una tarifa única",
];

const monthlyFeatures = [
  "Contrata con una modalidad mensual flexible.",
  "Gestionamos todos los procesos de RR. HH. e incorporación",
  "Nos encargamos del cumplimiento legal y los pagos internacionales.",
  "Reemplaza tu talento en cualquier momento",
  "Contrata en 48 horas.",
];

const accountFeatures = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Amplia Base de Talento",
    desc: "Accede a una red de más de 10,000 candidatos latinoamericanos previamente evaluados.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Soporte Premium Personalizado",
    desc: "Disfruta de asistencia de contratación sin complicaciones desde el primer día.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Gerente de Cuenta Dedicado",
    desc: "Obtén soporte personalizado de un experto en contratación.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Asesoría Integral de Contratación",
    desc: "Tu gerente de cuenta te ayudará durante todo el proceso de contratación.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Selección y Comunicación con Candidatos",
    desc: "Te ayudamos a encontrar y conectar con el talento adecuado.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Servicios Integrales de RR. HH. y Cumplimiento",
    desc: "Nos encargamos de las operaciones de RR. HH. y del cumplimiento normativo.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "Nómina Internacional",
    desc: "Gestionamos todos los pagos internacionales sin costo adicional.",
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute -right-40 top-52 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01132B 1px, transparent 1px), linear-gradient(to bottom, #01132B 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
            <Sparkles className="h-4 w-4 text-brand-orange" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
              Planes de contratación flexibles
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.97] tracking-[-0.05em] text-[#01132B] sm:text-6xl lg:text-7xl">
            Obtén un ahorro de 10x
            <br />
            con talento de élite de{" "}
            <span className="text-gradient-brand">
              LatAm
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
            Explora los planes de precios de HireRapido.
          </p>
        </div>

        <div className="relative mx-auto mt-20 grid max-w-5xl gap-7 lg:grid-cols-2">
          {/* Direct Hire */}
          <article className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(1,19,43,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/25 hover:shadow-[0_30px_80px_rgba(1,19,43,0.14)] sm:p-9">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand-gold/10 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rotate-[-2deg] items-center gap-2 rounded-xl border border-brand-gold/30 bg-amber-50 px-3 py-2 shadow-sm">
                <Sparkles className="h-4 w-4 text-brand-gold" />

                <div>
                  <p className="text-xs font-black text-brand-gold">
                    ¡No se requiere depósito!
                  </p>

                  <p className="mt-0.5 max-w-[220px] text-[10px] font-medium leading-4 text-muted-foreground">
                    No existe ninguna tarifa inicial por explorar nuestro
                    talento; solo pagas si decides contratar.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Contratación única
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#01132B]">
                  Contratación Directa
                </h2>

                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  Contrata por una tarifa fija única
                </p>
              </div>

              <div className="my-8 border-y border-slate-200 py-7">
                <h3 className="text-4xl font-black text-[#01132B]">
                  Contáctanos
                </h3>

                <p className="mt-2 text-xs font-bold text-muted-foreground">
                  Sin tarifas ni gastos ocultos
                </p>
              </div>

              <ul className="space-y-4">
                {directHireFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-muted-foreground"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/es/#connect"
                className="group/button mt-9 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#01132B] px-6 py-4 text-sm font-black text-[#01132B] transition-all duration-300 hover:bg-[#01132B] hover:text-white"
              >
                Contratar ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </a>
            </div>
          </article>

          {/* Monthly */}
          <article className="group relative overflow-hidden rounded-[2.5rem] bg-[#01132B] p-7 text-white shadow-[0_30px_80px_rgba(1,19,43,0.22)] transition-all duration-500 hover:-translate-y-2 sm:p-9 lg:-translate-y-6 lg:hover:-translate-y-8">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-orange/20 blur-[70px]" />
            <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-brand-gold/10 blur-[80px]" />

            <div className="relative">
              <div className="flex items-center justify-between gap-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-white shadow-lg">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  Prueba de 30 días sin riesgo
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-bold text-white/60">
                  Más flexible
                </span>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Gestión integral
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Contratación Mensual
                </h2>

                <p className="mt-2 text-sm font-medium text-white/55">
                  Contrata con una modalidad mensual flexible.
                </p>
              </div>

              <div className="my-8 border-y border-white/10 py-7">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-5xl font-black">
                    1,899 USD
                  </span>

                  <span className="pb-1 text-lg font-bold text-white/45">
                    /mes
                  </span>
                </div>

                <p className="mt-3 text-xs font-bold text-white/55">
                  costo mensual promedio por contratación
                </p>

                <p className="mt-1 text-xs font-bold text-brand-orange">
                  Incluye todas las tarifas.
                </p>
              </div>

              <ul className="space-y-4">
                {monthlyFeatures.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium text-white/65"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-orange text-white">
                      <Check className="h-3.5 w-3.5" />
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href="/es/#connect"
                className="group/button mt-9 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-6 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#01132B]"
              >
                Contratar ahora
                <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

const costs = [
  ["Salario anual", "$70,000", "$14,388"],
  ["Seguro médico", "$15,750", "$1,100 (opcional)"],
  ["Seguro Social (6%)", "$4,850", "$0"],
  ["Estacionamiento/Equipo", "$2,850", "$0"],
  ["Tiempo libre remunerado", "$3,120", "$0"],
];

function BenefitsTable() {
  return (
    <section className="relative overflow-hidden bg-[#01132B] py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-[450px] w-[450px] rounded-full bg-brand-orange/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-brand-gold/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-brand-orange">
            Comparación de costos
          </div>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Beneficios de{" "}
            <span className="text-brand-orange">
              HireRapido
            </span>
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
          <div className="hidden grid-cols-[1.25fr_1fr_1fr] border-b border-white/10 bg-white/[0.06] md:grid">
            <div className="px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-white/50">
              Costos promedio
            </div>

            <div className="px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-white/50">
              Contratación local
            </div>

            <div className="bg-brand-orange/10 px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-brand-orange">
              HireRapido
            </div>
          </div>

          {costs.map(([label, local, rapido]) => (
            <div
              key={label}
              className="grid gap-3 border-b border-white/10 px-6 py-5 last:border-0 md:grid-cols-[1.25fr_1fr_1fr] md:gap-0 md:px-0 md:py-0"
            >
              <div className="font-bold text-white md:px-7 md:py-5">
                {label}
              </div>

              <div className="text-sm font-medium text-white/45 md:px-7 md:py-5">
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.15em] text-white/30 md:hidden">
                  Contratación local
                </span>
                {local}
              </div>

              <div className="text-sm font-black text-white md:bg-brand-orange/[0.04] md:px-7 md:py-5">
                <span className="mb-1 block text-[9px] font-black uppercase tracking-[0.15em] text-brand-orange md:hidden">
                  HireRapido
                </span>
                {rapido}
              </div>
            </div>
          ))}

          <div className="grid gap-4 bg-white/[0.07] px-6 py-7 md:grid-cols-[1.25fr_1fr_1fr] md:gap-0 md:px-0 md:py-0">
            <div className="text-lg font-black text-white md:px-7 md:py-7">
              Total
            </div>

            <div className="text-lg font-bold text-white/45 line-through decoration-white/30 md:px-7 md:py-7">
              $104,570
            </div>

            <div className="flex flex-wrap items-center gap-3 md:bg-brand-orange/10 md:px-7 md:py-7">
              <span className="text-2xl font-black text-white">
                $14,388
              </span>

              <span className="rounded-full bg-emerald-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.1em] text-white">
                Ahorra 86%
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/10 px-5 py-4 text-center">
          <Zap className="h-5 w-5 shrink-0 text-brand-orange" />

          <p className="text-sm font-bold text-white/70">
            Reduce drásticamente el costo anual total de contratación con
            HireRapido.
          </p>
        </div>
      </div>
    </section>
  );
}

function AccountFeatures() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-brand-orange/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
              <BadgeCheck className="h-4 w-4 text-brand-orange" />

              <span className="text-[11px] font-black uppercase tracking-[0.18em] text-brand-orange">
                Todo incluido
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-[#01132B] sm:text-5xl">
              Las cuentas de{" "}
              <span className="text-gradient-brand">
                HireRapido
              </span>{" "}
              incluyen:
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accountFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/25 hover:shadow-[0_20px_45px_rgba(1,19,43,0.08)] ${
                  index === 0 || index === 6 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#01132B] text-brand-orange transition group-hover:bg-brand-orange group-hover:text-white">
                    {feature.icon}
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-[#01132B]">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden rounded-[2.75rem] bg-[#01132B] px-6 py-14 text-center shadow-[0_30px_80px_rgba(1,19,43,0.18)] sm:px-12">
          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black text-white sm:text-5xl">
              ¿Listo para empezar a ahorrar en tu próxima contratación?
            </h2>

            <a
              href="/es/#connect"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#01132B]"
            >
              Contratar ahora
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <BenefitsTable />
        <AccountFeatures />
        <FAQ language="es" />
      </main>
    </div>
  );
}