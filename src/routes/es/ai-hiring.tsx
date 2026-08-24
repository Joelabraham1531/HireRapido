import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { FAQ } from "@/components/FAQ";
import { FadeIn } from "@/components/FadeIn";

import aiTalentDashboard from "@/assets/ai-talent-dashboard.png";
import talentMatchUI from "@/assets/talent-match.png";
import videoInterviewUI from "@/assets/video-interview.png";
import talentMaria from "@/assets/talent-maria.png";

export const Route = createFileRoute("/es/ai-hiring")({
  component: AIHiring,
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-44 top-10 h-[480px] w-[480px] rounded-full bg-brand-orange/10 blur-[120px]" />
        <div className="absolute -right-36 bottom-0 h-[520px] w-[520px] rounded-full bg-brand-gold/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01132B 1px, transparent 1px), linear-gradient(to bottom, #01132B 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[0.88fr_1.12fr]">
        <FadeIn direction="left">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-brand-orange" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                Contratación más inteligente con IA
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.05em] text-[#01132B] sm:text-6xl lg:text-[4.8rem]">
              Contratación
              <br />
              <span className="text-gradient-brand">
                impulsada por IA
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg font-medium leading-8 text-muted-foreground sm:text-xl">
              Utilizamos herramientas de IA personalizadas para ofrecer perfiles
              de candidatos completos y accesibles, para que puedas tomar
              decisiones de contratación más informadas.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <BrainCircuit className="h-4 w-4 text-brand-orange" />

                <span className="text-sm font-bold text-[#01132B]">
                  Emparejamiento con IA
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-brand-orange" />

                <span className="text-sm font-bold text-[#01132B]">
                  Evaluación mejorada con IA
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" />

                <span className="text-sm font-bold text-[#01132B]">
                  Mejores perfiles de candidatos
                </span>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="/es/#learn-more"
                className="rounded-2xl border border-[#01132B] px-7 py-4 text-sm font-bold text-[#01132B] transition hover:bg-[#01132B] hover:text-white"
              >
                Conoce más
              </a>

              <a
                href="/es/#connect"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#01132B] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(1,19,43,0.18)] transition-all hover:-translate-y-1 hover:bg-brand-orange"
              >
                Contratar talento destacado

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="relative mx-auto w-full max-w-[720px] py-10">
            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#01132B] p-3 shadow-[0_35px_90px_rgba(1,19,43,0.25)]">
              <div className="overflow-hidden rounded-[2.35rem] border border-white/10 bg-[#071a33]">
                <div className="flex h-14 items-center border-b border-white/10 px-5">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-green-400" />
                  </div>

                  <div className="mx-auto rounded-lg border border-white/10 bg-white/10 px-4 py-1.5 text-[10px] font-bold text-white/65">
                    Panel de búsqueda de talento
                  </div>
                </div>

                <div className="relative min-h-[500px] p-5 sm:p-7">
                  <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
                      backgroundSize: "28px 28px",
                    }}
                  />

                  <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-brand-orange/30 bg-brand-orange/15 text-brand-orange">
                        <BrainCircuit className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-sm font-black tracking-wide text-white">
                          MOTOR DE IA NOVA
                        </p>

                        <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-brand-orange">
                          BÚSQUEDA: DESARROLLADOR REACT SENIOR
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-6 text-right">
                      <div className="hidden sm:block">
                        <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                          CANDIDATOS ANALIZADOS
                        </p>

                        <p className="mt-1 text-sm font-black text-green-400">
                          12,458
                        </p>
                      </div>

                      <div>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">
                          TIEMPO TRANSCURRIDO
                        </p>

                        <p className="mt-1 animate-pulse text-sm font-black text-white">
                          00:01.4s
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-5 grid gap-5 md:grid-cols-[0.72fr_1.28fr]">
                    <div className="hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 md:block">
                      <p className="border-b border-white/10 pb-3 text-[9px] font-black uppercase tracking-[0.16em] text-white/40">
                        Registro de análisis en vivo
                      </p>

                      <div className="mt-4 space-y-4 font-mono text-[10px]">
                        <LogLine orange>
                          Inicializando emparejamiento neuronal...
                        </LogLine>

                        <LogLine>
                          Filtrando por zona horaria (EST ±3h)
                        </LogLine>

                        <LogLine green>
                          4,210 candidatos compatibles
                        </LogLine>

                        <LogLine>
                          Analizando repositorios de GitHub...
                        </LogLine>

                        <LogLine>
                          Evaluando nivel de inglés...
                        </LogLine>

                        <LogLine orange>
                          Finalizando los 3 mejores candidatos...
                        </LogLine>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <CandidateResult
                        image="https://i.pravatar.cc/150?img=68"
                        name="Mateo V."
                        role="Ingeniero Frontend Senior · Argentina"
                        score="99% COMPATIBLE"
                        skills={["React", "TypeScript", "Next.js"]}
                        featured
                      />

                      <CandidateResult
                        image="https://i.pravatar.cc/150?img=47"
                        name="Sofia M."
                        role="Desarrolladora Fullstack · Colombia"
                        score="94% COMPATIBLE"
                        skills={["React", "Node.js"]}
                      />

                      <CandidateResult
                        image="https://i.pravatar.cc/150?img=11"
                        name="Diego L."
                        role="Desarrollador Frontend · México"
                        score="91% COMPATIBLE"
                        skills={["React", "Vue"]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-4 rounded-2xl border border-brand-orange/20 bg-white px-5 py-4 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Búsqueda con IA
              </p>

              <p className="mt-1 text-lg font-black text-[#01132B]">
                12,458 candidatos
              </p>
            </div>

            <div className="absolute -right-2 top-3 rounded-2xl border border-brand-orange/20 bg-white px-5 py-4 shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Mejor candidato
              </p>

              <p className="mt-1 text-2xl font-black text-brand-orange">
                99%
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function LogLine({
  children,
  green = false,
  orange = false,
}: {
  children: React.ReactNode;
  green?: boolean;
  orange?: boolean;
}) {
  return (
    <div
      className={`flex gap-2 ${
        green
          ? "text-green-400"
          : orange
            ? "text-brand-orange"
            : "text-white/60"
      }`}
    >
      <span className="text-white/25">&gt;</span>
      <span>{children}</span>
    </div>
  );
}

function CandidateResult({
  image,
  name,
  role,
  score,
  skills,
  featured = false,
}: {
  image: string;
  name: string;
  role: string;
  score: string;
  skills: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-0.5 ${
        featured
          ? "border-brand-orange/40 bg-brand-orange/10"
          : "border-white/10 bg-white/[0.04] hover:bg-white/[0.07]"
      }`}
    >
      <div
        className={`relative h-12 w-12 shrink-0 rounded-full border-2 ${
          featured ? "border-brand-orange" : "border-white/20"
        }`}
      >
        <img
          src={image}
          alt="Candidato"
          className="h-full w-full rounded-full object-cover"
        />

        {featured && (
          <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-[#071a33] bg-green-500" />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <p className="truncate text-sm font-black text-white">
            {name}
          </p>

          <span
            className={`shrink-0 rounded-lg px-2 py-1 text-[10px] font-black ${
              featured
                ? "bg-brand-orange/15 text-brand-orange"
                : "text-white/60"
            }`}
          >
            {score}
          </span>
        </div>

        <p className="mt-1 truncate text-[10px] font-medium text-white/45">
          {role}
        </p>

        <div className="mt-2 flex flex-wrap gap-1.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-md border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[9px] font-medium text-white/70"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AIMatching() {
  return (
    <section
      id="learn-more"
      className="relative overflow-hidden bg-[#01132B] py-28"
    >
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.82fr_1.18fr]">
        <FadeIn direction="left">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              <Search className="h-4 w-4" />
              Emparejamiento inteligente
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Emparejamiento{" "}
              <span className="text-brand-orange">
                basado en IA
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-white/60">
              Nuestras herramientas de IA personalizadas están diseñadas para
              conectar a nuestros clientes de EE. UU. con el talento
              latinoamericano ideal. Desde redactar una descripción del puesto
              hasta encontrar al candidato adecuado, nuestra IA personalizada
              facilita todo el proceso.
            </p>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="relative mx-auto w-full max-w-[650px] py-10">
            <div className="absolute left-0 top-24 h-[300px] w-[75%] rotate-[-5deg] rounded-[2rem] border border-white/10 bg-white/[0.04]" />

            <div className="absolute right-0 top-10 h-[330px] w-[75%] rotate-[5deg] rounded-[2rem] border border-white/10 bg-white/[0.06]" />

            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2.5rem] border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.28)]">
              <div className="relative h-[360px] overflow-hidden">
                <img
                  src={talentMaria}
                  alt="Candidata"
                  className="h-full w-full object-cover object-top"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#01132B] via-[#01132B]/15 to-transparent" />

                <div className="absolute right-5 top-5 flex items-center gap-2 rounded-xl bg-white/95 px-3 py-2 text-[10px] font-black text-brand-orange shadow-lg backdrop-blur">
                  <Sparkles className="h-3.5 w-3.5" />
                  MEJOR CANDIDATA
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="flex items-center gap-2 text-2xl font-black text-white">
                    Maria Silva

                    <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  </h3>

                  <p className="mt-1 font-medium text-white/70">
                    Analista de Datos Senior
                  </p>
                </div>
              </div>

              <div className="relative flex items-center justify-between px-8 py-8">
                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400">
                  ✕
                </button>

                <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white shadow-xl">
                  <button className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-brand text-xl text-white shadow-lg">
                    ♥
                  </button>
                </div>

                <button className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-400">
                  ✓
                </button>
              </div>
            </div>

            <div className="absolute -bottom-2 right-2 rounded-2xl bg-brand-orange px-5 py-4 text-white shadow-xl">
              <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/65">
                Calidad de compatibilidad
              </p>

              <p className="mt-1 text-xl font-black">
                MEJOR CANDIDATA
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function AIVetting() {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.12fr_0.88fr]">
        <FadeIn direction="left">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.75rem] bg-[#01132B] p-3 shadow-[0_30px_80px_rgba(1,19,43,0.2)]">
              <div className="overflow-hidden rounded-[2.3rem] bg-white">
                <div className="group relative h-[320px] overflow-hidden bg-[#01132B]">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Video de entrevista"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#01132B]/90 via-transparent to-[#01132B]/35" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/45 px-3 py-2">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />

                    <span className="text-[10px] font-black tracking-wider text-white">
                      REC 04:22
                    </span>
                  </div>

                  <div className="absolute right-5 top-5 flex items-center gap-2 rounded-xl bg-brand-orange px-3 py-2 text-[10px] font-black text-white">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    EVALUADO POR IA
                  </div>

                  <div className="absolute bottom-6 left-6">
                    <p className="font-black text-white">
                      Entrevista técnica
                    </p>

                    <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-brand-orange">
                      <Zap className="h-3.5 w-3.5" />
                      Evaluando arquitectura...
                    </p>
                  </div>
                </div>

                <div className="p-7 sm:p-8">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                      <BrainCircuit className="h-5 w-5" />
                    </div>

                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#01132B]">
                      Resumen de evaluación con IA
                    </p>
                  </div>

                  <ScoreBar
                    label="COMUNICACIÓN"
                    score={95}
                  />

                  <ScoreBar
                    label="TÉCNICO"
                    score={98}
                  />

                  <ScoreBar
                    label="CULTURA"
                    score={92}
                  />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              <ShieldCheck className="h-4 w-4" />
              Información más profunda del candidato
            </div>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-[#01132B] sm:text-5xl lg:text-6xl">
              Evaluación{" "}
              <span className="text-gradient-brand">
                mejorada con IA
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-muted-foreground">
              Cada profesional de nuestra base ha sido evaluado rigurosamente
              en cuanto a habilidades, dominio del inglés y experiencia
              relevante. Nuestra IA revisa estos datos y los convierte en un
              perfil accesible para nuestros usuarios.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                ["95%", "Comunicación"],
                ["98%", "Técnico"],
                ["92%", "Afinidad cultural"],
              ].map(([score, label]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4"
                >
                  <p className="text-2xl font-black text-brand-orange">
                    {score}
                  </p>

                  <p className="mt-1 text-xs font-bold text-muted-foreground">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ScoreBar({
  label,
  score,
}: {
  label: string;
  score: number;
}) {
  return (
    <div className="mb-5 flex items-center gap-4 last:mb-0">
      <div className="w-24 text-[9px] font-black tracking-wider text-slate-400">
        {label}
      </div>

      <div className="h-2 flex-1 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full bg-gradient-brand"
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="w-9 text-right text-xs font-black text-brand-orange">
        {score}%
      </div>
    </div>
  );
}

function AIHiring() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <AIMatching />
        <AIVetting />
        <FAQ />
      </main>
    </div>
  );
}