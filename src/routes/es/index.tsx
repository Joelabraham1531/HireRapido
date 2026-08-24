import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ChevronDown,
  ArrowRight,
  Sparkles,
  Clock,
  Wallet,
  ShieldCheck,
  Users,
  HeartHandshake,
  Play,
  Star,
  Plus,
  Minus,
  LogIn,
  Menu,
  X,
  Search,
  MapPin,
  CheckCircle2,
} from "lucide-react";

import oliver from "@/assets/talent-oliver.jpg";
import melisa from "@/assets/talent-melisa.jpg";
import fernando from "@/assets/talent-fernando.jpg";
import yolanda from "@/assets/talent-yolanda.jpg";
import latamMap from "@/assets/latam-map.jpg";
import ashley from "@/assets/testimonial-ashley.jpg";
import case1 from "@/assets/case-1.jpg";
import case2 from "@/assets/case-2.jpg";
import case3 from "@/assets/case-3.jpg";
import stepProfile from "@/assets/step-profile.jpg";
import stepMatch from "@/assets/step-match.jpg";
import stepGrow from "@/assets/step-grow.jpg";
import hireRapidoLogo from "@/assets/hire-rapido-logo.jpg";

export const Route = createFileRoute("/es/")({
  component: Home,
});



function Hero() {
  return (
    <section className="portal-hero">
      <div className="portal-shell hero-layout grid items-center gap-10 py-10 sm:py-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-8 lg:py-12 xl:gap-10 xl:py-14 2xl:max-w-[1440px] 2xl:py-16">
        <div className="hero-stage order-2 lg:order-1">
          <HeroTalentCard />
        </div>
        <div className="hero-copy order-1 text-center lg:order-2 lg:text-left">
          <div className="portal-eyebrow">
            <span className="h-2 w-2 rounded-full bg-brand-orange" />
            PLATAFORMA DE TALENTO LATAM{" "}
            <span className="text-brand-gold">800K+ PERFILES</span>
          </div>

          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:mx-0 lg:mt-4 lg:text-[clamp(3.35rem,4.7vw,4.15rem)] 2xl:text-[4.4rem]">
            Contrata{" "}
            <span className="text-gradient-brand">talento LATAM</span>
            <br />
            por 80% menos
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-muted-foreground sm:text-lg lg:mx-0 lg:mt-4 lg:text-[1.05rem] lg:leading-7">
            HireRapido es el marketplace de talento más grande de Latinoamérica —
            más de 800,000 profesionales tecnológicos y generalistas previamente
            evaluados. Explora y contrata directamente, o cuéntanos qué necesitas
            y recibe una selección personalizada en 24 horas.
          </p>

          <div className="portal-searchbar mx-auto mt-6 max-w-2xl lg:mx-0 lg:mt-5">
            <a href="#talent" className="portal-search-segment text-left">
              <Search className="h-4 w-4 shrink-0 text-brand-orange" />
              <span className="truncate">Buscar por puesto o habilidad</span>
            </a>

            <div className="hidden h-8 w-px bg-border sm:block" />

            <a href="#talent" className="portal-search-segment text-left">
              <MapPin className="h-4 w-4 shrink-0 text-brand-gold" />
              <span className="truncate">Latinoamérica · Remoto</span>
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-5 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
            >
              Contratar talento
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:mt-3 lg:justify-start">
            <span className="mr-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
              Popular
            </span>

            <a href="/hire-latam-developers" className="portal-chip">
              Desarrolladores
            </a>

            <a href="/hire-latam-medical-assistants" className="portal-chip">
              Asistentes médicos
            </a>

            <a href="/hire-latam-accountants" className="portal-chip">
              Contadores
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroTalentCard() {
  return (
    <div className="hero-visual relative mx-auto w-full max-w-[540px] px-4 py-8 sm:px-8 lg:max-w-[520px] lg:py-5 xl:max-w-[560px] 2xl:max-w-[590px]">
      <div className="portal-photo-frame hero-main-photo overflow-hidden">
        <img
          src={oliver}
          alt="Talento previamente evaluado de HireRapido"
          className="h-[400px] w-full object-cover sm:h-[460px] lg:h-[430px] xl:h-[470px] 2xl:h-[500px]"
          width={760}
          height={760}
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="portal-panel float-card float-card-a absolute left-0 top-1 flex items-center gap-4 rounded-[1.35rem] px-4 py-3 sm:left-1 sm:px-5">
        <div>
          <p className="text-sm font-extrabold">
            Puntuación de compatibilidad
          </p>

          <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
            Líder sénior de ventas
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-brand-orange text-sm font-extrabold">
          98%
        </div>
      </div>

      <div className="portal-eyebrow float-card float-card-b absolute right-0 top-16 hidden sm:flex">
        <MapPin className="h-3.5 w-3.5 text-brand-orange" /> Zonas horarias de
        EE. UU.
      </div>

      <div className="portal-badge-dark float-card float-card-c absolute -bottom-1 right-1 flex items-center gap-3 px-5 py-3.5 sm:right-5">
        <div>
          <p className="text-sm font-extrabold">Perfil verificado</p>

          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            Talento top 3%
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-foreground">
          <CheckCircle2 className="h-5 w-5" />
        </span>
      </div>

      <div className="portal-panel float-card float-card-d absolute -left-1 bottom-5 hidden max-w-[210px] rounded-[1.35rem] px-4 py-3 sm:block">
        <p className="text-sm font-extrabold">Sin depósito requerido</p>

        <p className="mt-1 text-[11px] font-medium leading-5 text-muted-foreground">
          Explora y entrevista antes de comprometerte.
        </p>
      </div>
    </div>
  );
}

const clientLogos = [
  "Dr Squatch",
  "EasyHealth",
  "check",
  "Silvics",
  "coinbase",
  "taloflow",
  "mural health",
  "QUIMBY",
];

function ClientMarquee() {
  return (
    <>
      <style>{`
        @keyframes marqueeInfinite {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        .marquee-track {
          animation: marqueeInfinite 22s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section className="relative overflow-hidden border-y border-brand-orange/35 bg-brand-orange/15 py-5 sm:py-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-orange/70 to-transparent" />

          <div className="absolute bottom-0 left-1/2 h-px w-[92%] -translate-x-1/2 bg-gradient-to-r from-transparent via-brand-orange/60 to-transparent" />

          <div className="absolute left-1/2 top-1/2 h-24 w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/25 blur-3xl" />

          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/10 via-transparent to-brand-orange/10" />
        </div>

        <div className="relative mx-auto flex max-w-7xl items-center gap-5 px-6">
          {/* Trusted By */}
          <div className="hidden shrink-0 items-center gap-3 rounded-full border border-brand-orange/40 bg-white/90 px-4 py-2 shadow-sm backdrop-blur sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <div className="leading-tight">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Con la confianza de
              </p>

              <p className="text-xs font-bold text-foreground">
                Equipos de EE. UU. en crecimiento
              </p>
            </div>
          </div>

          {/* Infinite Marquee */}
          <div className="relative min-w-0 flex-1 overflow-hidden rounded-full border border-brand-orange/30 bg-white/75 py-3 shadow-[0_10px_35px_rgba(249,115,22,0.15)] backdrop-blur">
            {/* Left fade */}
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-28" />

            {/* Right fade */}
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-28" />

            <div className="marquee-track flex w-max items-center">
              {/* FIRST COPY */}
              <div className="flex shrink-0 items-center">
                {clientLogos.map((logo) => (
                  <div
                    key={`first-${logo}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="mx-7 text-lg font-extrabold tracking-tight text-black transition-colors duration-300 hover:text-orange-700 sm:mx-10 sm:text-xl">
                      {logo}
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/70" />
                  </div>
                ))}
              </div>

              {/* SECOND IDENTICAL COPY */}
              <div
                className="flex shrink-0 items-center"
                aria-hidden="true"
              >
                {clientLogos.map((logo) => (
                  <div
                    key={`second-${logo}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="mx-7 text-lg font-extrabold tracking-tight text-black sm:mx-10 sm:text-xl">
                      {logo}
                    </span>

                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile label */}
        <div className="relative mx-auto mt-3 flex max-w-7xl items-center justify-center gap-2 px-6 sm:hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />

          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
            Con la confianza de equipos de EE. UU. en crecimiento
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
        </div>
      </section>
    </>
  );
}

const talents = [
  {
    name: "Melisa N.",
    role: "Marketing y Diseño Gráfico",
    rate: "1,500",
    img: melisa,
    flag: "🇦🇷",
    skills: [
      "Marketing Digital",
      "Diseño Gráfico",
      "Ilustración",
      "Adobe",
    ],
    levels: [
      ["Marketing Digital", 80],
      ["Diseño Gráfico", 85],
      ["Ilustración", 90],
    ],
  },
  {
    name: "Fernando G.",
    role: "Redactor",
    rate: "3,000",
    img: fernando,
    flag: "🇲🇽",
    skills: [
      "Redacción Publicitaria",
      "Guionismo",
      "Community Manager",
      "Escritura Creativa",
    ],
    levels: [
      ["Redacción Publicitaria", 80],
      ["Guionismo", 85],
      ["Community Manager", 85],
    ],
  },
  {
    name: "Yolanda L.",
    role: "Atención al Cliente y BDR",
    rate: "1,800",
    img: yolanda,
    flag: "🇨🇴",
    skills: [
      "Atención al Cliente",
      "Relaciones con Clientes",
      "Asistencia Administrativa",
    ],
    levels: [
      ["Atención al Cliente", 80],
      ["Microsoft Office", 80],
      ["Asistencia Administrativa", 80],
    ],
  },
  {
    name: "Rodrigo A.",
    role: "Desarrollador de Software Senior",
    rate: "3,499",
    img: oliver,
    flag: "🇧🇷",
    skills: ["React.JS", "Node.JS", "Blockchain", "AngularJS"],
    levels: [
      ["Blockchain", 95],
      ["React.JS", 90],
      ["Node.JS", 90],
    ],
  },
] as const;

function TalentSection() {
  const [activeTalent, setActiveTalent] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveTalent((current) => (current + 1) % talents.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  const talent = talents[activeTalent];

  return (
    <section id="talent" className="portal-section portal-section-grid">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Contrata al{" "}
            <span className="text-gradient-brand">3% mejor</span>{" "}
            talento de LatAm
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            HireRapido conecta empresas de EE. UU. con el mejor talento de
            Latinoamérica. Nuestra selección cuidadosamente evaluada de
            profesionales hace que encontrar al candidato ideal sea sencillo.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_280px] lg:items-stretch">
          <article
            key={talent.name}
            className="portal-card overflow-hidden border border-[#01132B] bg-[#01132B] shadow-[0_20px_50px_rgba(1,19,43,0.18)]"
          >
            <div className="grid min-h-[360px] md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative min-h-[260px] overflow-hidden md:min-h-0">
                <img
                  src={talent.img}
                  alt={talent.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                  loading="lazy"
                  width={700}
                  height={700}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#01132B]/55 via-transparent to-transparent" />

                <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-[#01132B]/85 px-3 py-1.5 text-xs font-bold text-white shadow-sm backdrop-blur">
                  {talent.flag} Talento previamente evaluado
                </div>
              </div>

              <div className="flex flex-col p-6 text-white sm:p-7 lg:p-8">
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">
                        {talent.name}
                      </h3>

                      <p className="mt-1 text-sm font-medium text-white/65">
                        {talent.role}
                      </p>
                    </div>

                    <p className="rounded-full border border-brand-orange/20 bg-brand-orange/15 px-3 py-1.5 text-sm font-bold text-brand-orange">
                      {talent.rate} USD/mes
                    </p>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {talent.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/15 bg-white/[0.07] px-3 py-1.5 text-xs font-semibold text-white/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 space-y-4">
                    {talent.levels.map(([label, pct]) => (
                      <div key={label as string}>
                        <div className="flex justify-between text-xs font-semibold text-white/80">
                          <span>{label}</span>
                          <span>{pct}%</span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/15">
                          <div
                            className="h-full rounded-full bg-gradient-brand transition-[width] duration-700 ease-out"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-7">
                  <button className="w-full rounded-2xl border border-white/25 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-brand-orange hover:bg-brand-orange hover:text-white">
                    Ver perfil
                  </button>
                </div>
              </div>
            </div>
          </article>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-1">
            {talents.map((item, index) => {
              const isActive = index === activeTalent;

              return (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActiveTalent(index)}
                  className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#01132B] bg-[#01132B] text-white shadow-[0_10px_30px_rgba(1,19,43,0.15)]"
                      : "border-border bg-card hover:-translate-y-0.5 hover:border-brand-orange/25"
                  }`}
                  aria-label={`Mostrar ${item.name}`}
                >
                  <img
                    src={item.img}
                    alt=""
                    aria-hidden="true"
                    className="h-14 w-14 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                    width={160}
                    height={160}
                  />

                  <div className="min-w-0">
                    <p
                      className={`truncate text-sm font-bold ${
                        isActive ? "text-white" : ""
                      }`}
                    >
                      {item.name}
                    </p>

                    <p
                      className={`mt-0.5 line-clamp-2 text-[11px] font-medium leading-4 ${
                        isActive
                          ? "text-white/60"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.role}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-2">
          {talents.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveTalent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeTalent === index
                  ? "w-8 bg-[#01132B]"
                  : "w-2 bg-border hover:bg-[#01132B]/40"
              }`}
              aria-label={`Ir a ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimeZone() {
  return (
    <section className="portal-section relative overflow-hidden bg-gradient-to-br from-orange-50/80 via-white to-amber-50/60">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-brand-orange/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              Trabaja en sincronía
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
            Talento de primer nivel,
            <br />
            en tu{" "}
            <span className="text-gradient-brand">
              zona horaria.
            </span>
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-muted-foreground">
            HireRapido conecta empresas de EE. UU. con talento técnico y no
            técnico destacado de Latinoamérica. Nuestras selecciones
            personalizadas y perfiles detallados hacen que encontrar al
            candidato ideal sea muy sencillo.
          </p>

          {/* Small value cards */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                0–3h
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Diferencia horaria
              </p>
            </div>

            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                24h
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Entrega de candidatos
              </p>
            </div>

            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                LATAM
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Talento remoto
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#how"
              className="rounded-2xl border border-foreground px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-foreground hover:text-primary-foreground"
            >
              Conoce más
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contratar talento destacado
            </a>
          </div>
        </div>

        {/* RIGHT MAP */}
        <div className="relative mx-auto w-full max-w-[650px] py-8">
          {/* Main map card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-orange/20 bg-white p-3 shadow-[0_30px_80px_rgba(249,115,22,0.13)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-orange-50">
              <img
                src={latamMap}
                alt="Cobertura de talento en Latinoamérica"
                className="h-[400px] w-full object-cover sm:h-[470px]"
                loading="lazy"
                style={{
                  /*
                    Shifts the original pink map tones toward
                    HireRapido orange.
                  */
                  filter:
                    "hue-rotate(-32deg) saturate(1.35) contrast(1.03)",
                }}
              />

              {/* Orange color reinforcement */}
              <div className="pointer-events-none absolute inset-0 bg-brand-orange/[0.07] mix-blend-multiply" />

              {/* Soft map fade */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-white/10" />

              {/* Animated map points */}
              <div className="absolute left-[42%] top-[34%]">
                <span className="absolute -inset-2 animate-ping rounded-full bg-brand-orange/30" />

                <span className="relative block h-3.5 w-3.5 rounded-full border-[3px] border-white bg-brand-orange shadow-lg" />
              </div>

              <div className="absolute left-[57%] top-[55%]">
                <span
                  className="absolute -inset-2 animate-ping rounded-full bg-brand-orange/30"
                  style={{ animationDelay: "0.8s" }}
                />

                <span className="relative block h-3.5 w-3.5 rounded-full border-[3px] border-white bg-brand-orange shadow-lg" />
              </div>

              <div className="absolute left-[48%] top-[70%]">
                <span
                  className="absolute -inset-2 animate-ping rounded-full bg-brand-orange/30"
                  style={{ animationDelay: "1.4s" }}
                />

                <span className="relative block h-3.5 w-3.5 rounded-full border-[3px] border-white bg-brand-orange shadow-lg" />
              </div>
            </div>
          </div>

          {/* Floating card - top right */}
          <div className="absolute right-0 top-0 rounded-2xl border border-brand-orange/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:right-[-18px]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">
                <Clock className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-muted-foreground">
                  Horario laboral de EE. UU.
                </p>

                <p className="text-sm font-extrabold">
                  Compatibilidad perfecta
                </p>
              </div>
            </div>
          </div>

          {/* Floating card - bottom left */}
          <div className="absolute bottom-0 left-0 rounded-2xl border border-brand-orange/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:left-[-20px]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <span className="h-3 w-3 rounded-full bg-brand-orange" />

                <span className="absolute h-7 w-7 animate-ping rounded-full border border-brand-orange/30" />
              </span>

              <div>
                <p className="text-xs font-bold text-muted-foreground">
                  Disponibilidad de talento
                </p>

                <p className="text-sm font-extrabold">
                  En toda Latinoamérica
                </p>
              </div>
            </div>
          </div>

          {/* Decorative orange badge */}
          <div className="absolute bottom-7 right-3 hidden rounded-full bg-brand-orange px-4 py-2 text-xs font-extrabold text-white shadow-lg sm:block">
            Remoto · LATAM
          </div>
        </div>
      </div>
    </section>
  );
}

const cases = [
  {
    img: case1,
    title:
      "Dribbble ahorró 85% al contratar un equipo SDR con HireRapido",
  },
  {
    img: case2,
    title:
      "La fintech líder Basis Theory ahorra 50% en equipos técnicos y no técnicos",
  },
  {
    img: case3,
    title:
      "Cómo Dr Squatch construyó su equipo tecnológico y ahorró 70%",
  },
];

function CaseStudies() {
  return (
    <section className="portal-section relative overflow-hidden">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Éxito de nuestros clientes
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Casos de éxito{" "}
              <span className="text-gradient-brand">
                destacados
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Descubre cómo empresas en rápido crecimiento construyen equipos
              más sólidos, contratan más rápido y reducen costos con HireRapido.
            </p>
          </div>

          <a
            href="#cases"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-brand-orange/25 bg-white px-5 py-3 text-sm font-bold text-brand-orange shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:shadow-md md:self-auto"
          >
            Más casos de éxito

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Case study layout */}
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Featured case */}
          {cases[0] && (
            <article className="group relative min-h-[520px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={cases[0].img}
                alt={cases[0].title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                loading="lazy"
                width={1000}
                height={800}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

              {/* Top badge */}
              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Historia destacada
                </span>
              </div>

              {/* Bottom content */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="mb-4 h-1 w-14 rounded-full bg-brand-orange transition-all duration-500 group-hover:w-24" />

                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Caso de éxito
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {cases[0].title}
                </h3>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-brand-orange hover:text-white"
                >
                  Leer historia

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          )}

          {/* Smaller stories */}
          <div className="grid gap-6">
            {cases.slice(1).map((c, i) => (
              <article
                key={c.title}
                className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-lg sm:grid-cols-[0.9fr_1.1fr]"
              >
                {/* Image */}
                <div className="relative min-h-[220px] overflow-hidden sm:min-h-full">
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                    loading="lazy"
                    width={700}
                    height={600}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-brand-orange text-sm font-extrabold text-white shadow-md">
                    {i + 2}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col p-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                      Caso de éxito
                    </p>

                    <h3 className="mt-3 text-lg font-extrabold leading-snug sm:text-xl">
                      {c.title}
                    </h3>
                  </div>

                  <a
                    href="#"
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-foreground transition-colors duration-300 hover:text-brand-orange"
                  >
                    Leer historia

                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueStats() {
  return (
    <section className="portal-section portal-section-grid">
      <div className="mx-auto max-w-7xl px-6">
        <div className="stats-layout overflow-hidden rounded-[2rem] bg-[#01132B] p-8 shadow-[0_25px_70px_rgba(1,19,43,0.22)] sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            {/* LEFT SIDE */}
            <div>
              <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Impacto en contratación
              </div>

              <p className="mt-5 text-7xl font-extrabold leading-none text-white sm:text-8xl">
                <span className="text-brand-orange">10x</span>
              </p>

              <p className="mt-4 max-w-md text-lg font-medium leading-8 text-white/70">
                la productividad de tu equipo — reduce el tiempo de contratación
                en más de un 80%.
              </p>
            </div>

            {/* RIGHT CARDS */}
            <div className="grid gap-5 sm:grid-cols-2">
              <ValueCard
                icon={<Clock className="h-6 w-6" />}
                title="Ahorra tiempo"
                body="Nuestro proceso de evaluación impulsado por IA nos permite mantener la mayor base de talento de Latinoamérica, ahorrando a nuestros clientes más de 100 horas en contratación."
              />

              <ValueCard
                icon={<Wallet className="h-6 w-6" />}
                title="Ahorra dinero"
                body="Reduce tus costos de contratación con nuestra plataforma integral y ahorra hasta un 80% en salarios para puestos generalistas y hasta un 60% en contrataciones tecnológicas."
              />
            </div>
          </div>

          {/* BOTTOM STATS */}
          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              [
                "Más de 5 años",
                "La confianza de marcas líderes y startups",
              ],
              [
                "800+",
                "Habilidades y tecnologías incluidas y verificadas en los perfiles",
              ],
              [
                "4 años",
                "Experiencia promedio que aporta nuestro talento",
              ],
            ].map(([n, d]) => (
              <div
                key={n}
                className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-white/[0.1]"
              >
                <p className="text-3xl font-extrabold text-brand-orange">
                  {n}
                </p>

                <p className="mt-2 text-sm font-medium leading-6 text-white/65">
                  {d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="group rounded-[1.5rem] border border-white/10 bg-white/[0.07] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-white/[0.11]">

      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-[0_8px_25px_rgba(249,115,22,0.25)]">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm font-medium leading-6 text-white/65">
        {body}
      </p>
    </div>
  );
}

const steps = [
  {
    img: stepProfile,
    title: "Configura tu perfil de contratación",
    body:
      "Importa la descripción de tu puesto existente o utiliza nuestra IA interna para crear una desde cero.",
  },
  {
    img: stepMatch,
    title: "Encuentra candidatos en 24 horas",
    body:
      "Utiliza AI Magic para encontrar al candidato ideal o explora nuestra base completa de talento previamente evaluado.",
  },
  {
    img: stepGrow,
    title: "Haz crecer tu equipo",
    body:
      "mientras HireRapido se encarga de Recursos Humanos, nómina internacional y cumplimiento legal.",
  },
];

function Steps() {
  return (
    <section
      id="how"
      className="portal-section relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
      {/* Background details */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-orange/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-orange" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              Proceso de contratación sencillo
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Contrata talento latinoamericano por{" "}
            <span className="text-gradient-brand">
              80% menos.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Desde definir tu puesto hasta hacer crecer tu equipo, HireRapido hace
            que el proceso sea sencillo, rápido y completamente gestionado.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Desktop connecting line */}
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={s.title}
                className={`group relative ${
                  i === 1 ? "lg:-translate-y-6" : ""
                }`}
              >
                {/* Number */}
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-brand-orange text-xl font-extrabold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                  0{i + 1}
                </div>

                {/* Card */}
                <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-orange/25 group-hover:shadow-[0_24px_60px_rgba(249,115,22,0.12)]">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                      width={640}
                      height={512}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

                    {/* Floating step label */}
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
                      Paso {i + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-7">
                    <div className="mb-4 h-1 w-10 rounded-full bg-brand-orange transition-all duration-300 group-hover:w-20" />

                    <h3 className="text-xl font-extrabold sm:text-2xl">
                      {s.title}
                    </h3>

                    <p className="mt-3 text-sm font-medium leading-6 text-muted-foreground sm:text-base sm:leading-7">
                      {s.body}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                        HireRapido
                      </span>

                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-orange/20 bg-brand-orange/10 text-brand-orange transition-all duration-300 group-hover:bg-brand-orange group-hover:text-white">
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Comenzar a contratar

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

const vetting = [
  {
    n: 1,
    title: "Evaluación impulsada por IA",
    body:
      "Nuestra IA interna evalúa la entrevista inicial y el currículum de cada candidato para medir habilidades técnicas y blandas, experiencia y nivel de inglés hablado.",
  },
  {
    n: 2,
    title: "Evaluación de habilidades",
    body:
      "Todas las habilidades de los candidatos reciben una calificación que aparece en su perfil.",
  },
  {
    n: 3,
    title: "Verificación de antecedentes",
    body:
      "Verificamos que todos los candidatos hayan presentado su información de forma precisa, incluida la confirmación de su historial laboral.",
  },
  {
    n: 4,
    title: "Publicación en HireRapido",
    body:
      "Presentamos un perfil completo de cada candidato, incluyendo experiencia previa y habilidades.",
  },
];

function Vetting() {
  return (
    <section className="portal-section portal-tint">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Cómo encontramos al{" "}
            <span className="text-gradient-brand">3% mejor</span>{" "}
            talento
          </h2>

          <p className="mt-4 text-muted-foreground">
            Nuestra combinación única de IA especializada y criterio humano nos
            ayuda a mantener una base de talento de élite.
          </p>
        </div>

        <div className="vetting-layout relative grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {vetting.map((v, i) => (
            <div
              key={v.n}
              className={`portal-card portal-card-hover vetting-card vetting-card-${i} p-6`}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand text-xl font-extrabold text-white">
                {v.n}
              </div>

              <h3 className="mt-4 text-lg font-bold">
                {v.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {v.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="#jobs"
            className="rounded-full border border-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-primary-foreground"
          >
            Buscar empleos
          </a>

          <a
            href="#connect"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Contratar talento destacado
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Gestión Global de Nómina",
    body:
      "Procesamiento eficiente de pagos internacionales para garantizar una compensación puntual y precisa en distintos países.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Garantía de Cumplimiento",
    body:
      "Cumplimiento automatizado de leyes laborales locales, normativas fiscales y estándares de empleo para reducir riesgos legales.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Beneficios Integrados",
    body:
      "Ofrecemos seguro médico a través de nuestro socio SafetyWing por un costo adicional de $106 USD al mes por cada profesional.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Recursos Humanos Integrales",
    body:
      "Nos encargamos de todas tus necesidades administrativas de Recursos Humanos mientras tú gestionas directamente al talento.",
  },
];

function Services() {
  return (
    <section className="portal-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Soluciones integrales de contratación
          </h2>

          <p className="mt-4 text-muted-foreground">
            HireRapido se encarga de Recursos Humanos, nómina internacional y
            cumplimiento legal sin costo adicional, facilitando que empresas de
            EE. UU. y Canadá contraten talento en LatAm.
          </p>
        </div>

        <div className="services-layout grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card service-card-${i} group rounded-[1.75rem] border border-white/10 bg-[#01132B] p-6 shadow-[0_15px_40px_rgba(1,19,43,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-[0_20px_50px_rgba(1,19,43,0.22)]`}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg">
                {s.icon}
              </div>

              <h3 className="mt-4 text-lg font-bold text-white">
                {s.title}
              </h3>

              <p className="mt-2 text-sm font-medium leading-6 text-white/65">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const roleCategories = [
  "Marketing",
  "Desarrolladores",
  "Diseño",
  "Tecnología",
  "Ventas",
  "Contabilidad",
  "Operaciones",
  "Y más",
] as const;

const roles: Record<
  string,
  {
    title: string;
    saving: string;
    price: string;
    body: string;
  }[]
> = {
  Marketing: [
    {
      title: "Redactor",
      saving: "Ahorra hasta 70%",
      price: "$1,900/mes",
      body:
        "Un redactor previamente evaluado por HireRapido puede crear contenido persuasivo y atractivo que impulse tus esfuerzos de marketing.",
    },
    {
      title: "Asistente de Marketing",
      saving: "Ahorra hasta 60%",
      price: "$2,100/mes",
      body:
        "Optimiza tus campañas de marketing gestionando tareas administrativas, redes sociales y coordinación.",
    },
    {
      title: "Especialista SEO",
      saving: "Ahorra hasta 55%",
      price: "$2,600/mes",
      body:
        "Optimiza tu sitio web para obtener mejores posiciones en los motores de búsqueda, aumentando el tráfico orgánico y la visibilidad.",
    },
  ],

  Desarrolladores: [
    {
      title: "Desarrollador Full Stack",
      saving: "Ahorra hasta 65%",
      price: "$5,800/mes",
      body:
        "Profesional con dominio de frontend y backend, ideal para desarrollar desde aplicaciones móviles hasta soluciones de IA.",
    },
    {
      title: "Desarrollador Frontend",
      saving: "Ahorra hasta 70%",
      price: "$4,300/mes",
      body:
        "Crea sitios web y aplicaciones visualmente atractivos y fáciles de usar.",
    },
    {
      title: "Desarrollador Backend",
      saving: "Ahorra hasta 65%",
      price: "$4,900/mes",
      body:
        "Desarrolla y mantiene la parte del servidor de un sitio web o aplicación.",
    },
  ],

  Diseño: [
    {
      title: "Diseñador Web",
      saving: "Ahorra hasta 65%",
      price: "$2,800/mes",
      body:
        "Combina conocimientos técnicos con creatividad para renovar o crear nuevas identidades de marca.",
    },
    {
      title: "Diseñador Gráfico",
      saving: "Ahorra hasta 70%",
      price: "$2,300/mes",
      body:
        "Da vida a tu marca con recursos visuales impactantes que conecten con tu audiencia.",
    },
    {
      title: "Editor de Video",
      saving: "Ahorra hasta 65%",
      price: "$2,100/mes",
      body:
        "Transforma material en bruto en contenido profesional que cautive a tu audiencia.",
    },
  ],

  Tecnología: [
    {
      title: "Ingeniero de IA",
      saving: "Ahorra hasta 65%",
      price: "$5,800/mes",
      body:
        "Desarrolladores experimentados especializados en NLP, visión por computadora y análisis predictivo.",
    },
    {
      title: "Ingeniero DevOps",
      saving: "Ahorra hasta 70%",
      price: "$4,300/mes",
      body:
        "Automatiza procesos y optimiza el desarrollo utilizando pipelines CI/CD y tecnologías en la nube.",
    },
    {
      title: "Ingeniero QA",
      saving: "Ahorra hasta 65%",
      price: "$3,100/mes",
      body:
        "Experiencia clave en pruebas manuales y automatizadas, además de scripting para automatización.",
    },
  ],

  Ventas: [
    {
      title: "Representante de Desarrollo de Ventas",
      saving: "Ahorra hasta 80%",
      price: "$1,900/mes",
      body:
        "Acompaña a los prospectos desde la parte superior del embudo hasta la compra y fomenta clientes recurrentes.",
    },
    {
      title: "Gerente de Cuentas",
      saving: "Ahorra hasta 65%",
      price: "$2,300/mes",
      body:
        "Fortalece la relación con tus clientes y aumenta su fidelidad.",
    },
    {
      title: "Representante de Desarrollo de Negocios",
      saving: "Ahorra hasta 60%",
      price: "$2,300/mes",
      body:
        "Impulsa el crecimiento y lleva tu estrategia de ventas al siguiente nivel.",
    },
  ],

  Contabilidad: [
    {
      title: "Contador",
      saving: "Ahorra hasta 65%",
      price: "$2,500/mes",
      body:
        "Gestiona la salud financiera de tu empresa, desde informes hasta declaraciones fiscales y cumplimiento.",
    },
    {
      title: "Analista Financiero",
      saving: "Ahorra hasta 70%",
      price: "$2,800/mes",
      body:
        "Obtén análisis basados en datos sobre presupuestos, proyecciones e inversiones.",
    },
    {
      title: "Auxiliar Contable",
      saving: "Ahorra hasta 55%",
      price: "$2,000/mes",
      body:
        "Optimiza facturación, nómina, declaraciones fiscales e informes financieros.",
    },
  ],

  Operaciones: [
    {
      title: "Gerente de Proyectos",
      saving: "Ahorra hasta 75%",
      price: "$2,600/mes",
      body:
        "Supervisa proyectos desde su inicio hasta su finalización, garantizando entregas a tiempo.",
    },
    {
      title: "Asistente Ejecutivo",
      saving: "Ahorra hasta 65%",
      price: "$1,900/mes",
      body:
        "Gestiona agendas, comunicaciones y tareas administrativas para tu equipo directivo.",
    },
    {
      title: "Soporte al Cliente",
      saving: "Ahorra hasta 65%",
      price: "$1,900/mes",
      body:
        "Facilita una comunicación eficiente y la resolución de problemas con tus clientes.",
    },
  ],

  "Y más": [
    {
      title: "Analista de Datos",
      saving: "Ahorra hasta 65%",
      price: "$2,500/mes",
      body:
        "Interpreta tus datos para descubrir tendencias, orientar la estrategia y mejorar la toma de decisiones.",
    },
    {
      title: "Gerente de Recursos Humanos",
      saving: "Ahorra hasta 60%",
      price: "$2,800/mes",
      body:
        "Optimiza Recursos Humanos desde el reclutamiento hasta la incorporación y el cumplimiento.",
    },
    {
      title: "Transcriptor",
      saving: "Ahorra hasta 50%",
      price: "$2,000/mes",
      body:
        "Convierte contenido de audio y video en documentos escritos precisos.",
    },
  ],
};

function Expertise() {
  const [active, setActive] = useState<string>("Marketing");

  return (
    <section id="pricing" className="portal-section portal-tint">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          HireRapido ofrece talento especializado en{" "}
          <span className="text-gradient-brand">
            todas las áreas
          </span>
        </h2>

        <div className="mt-8 flex flex-wrap gap-2">
          {roleCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                active === c
                  ? "bg-foreground text-primary-foreground"
                  : "border border-border bg-card hover:bg-muted"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="expertise-layout mt-10 grid gap-6 md:grid-cols-12">
          {roles[active].map((r, i) => (
            <div
              key={r.title}
              className={`portal-card portal-card-hover expertise-card expertise-card-${i} role-swap-in p-6`}
            >
              <h3 className="text-xl font-bold">
                {r.title}
              </h3>

              <p className="mt-1 text-sm font-semibold text-brand-gold">
                {r.saving}
              </p>

              <p className="mt-3 text-2xl font-extrabold text-gradient-brand">
                {r.price}
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {r.body}
              </p>

              <a
                href="#connect"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand-orange"
              >
                Contratar este perfil{" "}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        <div className="portal-panel mt-16 grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-center">
          <img
            src={ashley}
            alt="Ashley Rector"
            className="h-32 w-32 rounded-full object-cover"
            loading="lazy"
            width={640}
            height={640}
          />

          <div>
            <div className="flex gap-1 text-brand-orange">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-current"
                />
              ))}
            </div>

            <p className="mt-3 text-lg italic">
              "Solo quiero dar un enorme GRACIAS a [HireRapido]. Usamos
              HireRapido para contratar tres puestos en Latinoamérica. El equipo
              encontró candidatos perfectos, el proceso fue sencillo y realmente
              asequible... ¡esto me ha ahorrado un gran dolor de cabeza!"
            </p>

            <p className="mt-3 font-bold">
              — Ashley Rector
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "¿Qué es HireRapido?",
    a:
      "HireRapido es la mayor base de talento remoto latinoamericano previamente evaluado. Conectamos empresas de EE. UU. con profesionales experimentados de LatAm en ventas, marketing, tecnología, administración y muchas otras áreas.",
  },
  {
    q: "¿Cómo funciona HireRapido?",
    a:
      "Después de registrarte en nuestra plataforma, importa la descripción del puesto y empieza a explorar nuestra base de más de 800,000 profesionales previamente evaluados. Recibe recomendaciones mediante IA o deja que nuestro equipo senior de talento cree una selección personalizada.",
  },
  {
    q: "¿Cuáles son los beneficios de contratar en Latinoamérica?",
    a:
      "Al contratar en LatAm, las empresas norteamericanas pueden ahorrar hasta un 80% al contratar profesionales con dominio del inglés y ubicados en zonas horarias similares. Además, puedes contratar hasta 10 veces más rápido con la plataforma de talento previamente evaluado e impulsada por IA de HireRapido.",
  },
  {
    q: "¿Cuánto puedo ahorrar con HireRapido?",
    a:
      "En promedio, nuestros clientes ahorran un 80% al contratar talento latinoamericano con HireRapido. La mayoría de los puestos pueden cubrirse por menos de $3,000 USD al mes.",
  },
  {
    q: "¿Qué puestos debería contratar en LatAm?",
    a:
      "HireRapido cuenta con una amplia base de talento en ventas, tecnología, marketing, operaciones, administración y muchas otras áreas.",
  },
  {
    q: "¿Cuánto tiempo tarda el proceso de contratación?",
    a:
      "Gracias a nuestro sistema interno de evaluación con IA, todos los candidatos de nuestra plataforma están previamente evaluados y disponibles para comenzar de inmediato. Puedes contratar en tan solo 24 horas.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="portal-section">
      <div className="faq-layout mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <h2 className="faq-title text-center text-4xl font-extrabold sm:text-5xl lg:sticky lg:top-32 lg:text-left">
          Preguntas{" "}
          <span className="text-gradient-brand">
            frecuentes
          </span>
        </h2>

        <div className="portal-panel faq-panel divide-y divide-border overflow-hidden lg:mt-0">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <button
                key={f.q}
                onClick={() =>
                  setOpen(isOpen ? null : i)
                }
                className="flex w-full flex-col items-start px-6 py-5 text-left"
              >
                <div className="flex w-full items-center justify-between gap-4">
                  <span className="text-lg font-bold">
                    {f.q}
                  </span>

                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-brand text-white">
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </div>

                {isOpen && (
                  <p className="faq-answer mt-3 text-muted-foreground">
                    {f.a}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        <div className="faq-actions flex flex-wrap justify-center gap-3 lg:col-start-2">
          <a
            href="#connect"
            className="rounded-full border border-foreground px-6 py-3 text-sm font-semibold hover:bg-foreground hover:text-primary-foreground"
          >
            Agendar una consulta
          </a>

          <a
            href="#connect"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Comenzar
          </a>
        </div>
      </div>
    </section>
  );
}

function ClientsAndCTA() {
  return (
    <section className="portal-section portal-tint">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            ¡Únete a nuestros increíbles clientes!
          </h2>

          <p className="mt-3 text-muted-foreground">
            Colaboramos con empresas líderes de EE. UU., como Dr Squatch y
            Check, para hacer crecer sus equipos remotos en Latinoamérica.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {clientLogos.map((l) => (
            <span
              key={l}
              className="text-2xl font-bold text-muted-foreground/70"
            >
              {l}
            </span>
          ))}
        </div>

        <div className="portal-panel portal-tint final-cta mt-16 overflow-hidden p-10 text-center sm:p-14 lg:p-16">
          <h2 className="text-4xl font-extrabold sm:text-6xl">
            ¿Listo para contratar al mejor talento de{" "}
            <span className="text-gradient-brand">
              Latinoamérica
            </span>
            ?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#jobs"
              className="rounded-2xl border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-primary-foreground"
            >
              Buscar empleos
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
            >
              Contratar talento destacado
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



function Home() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <ClientMarquee />
        <TalentSection />
        <TimeZone />
        <CaseStudies />
        <ValueStats />
        <Steps />
        <Vetting />
        <Services />
        <Expertise />
        <FAQ />
        <ClientsAndCTA />
      </main>
    </div>
  );
}