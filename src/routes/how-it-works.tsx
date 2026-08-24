import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Coins,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import latamMap from "@/assets/latam-map.jpg";
import oliver from "@/assets/talent-oliver.jpg";
import melisa from "@/assets/talent-melisa.jpg";
import fernando from "@/assets/talent-fernando.jpg";
import yolanda from "@/assets/talent-yolanda.jpg";
import aiProfileUI from "@/assets/ai-profile.png";
import talentMatchUI from "@/assets/talent-match.png";
import messagingUI from "@/assets/messaging-ui.png";
import autoMatchingUI from "@/assets/auto-matching.png";
import myJobsUI from "@/assets/my-jobs.png";
import videoInterviewUI from "@/assets/video-interview.png";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorks,
});

const NAVY = "#01132B";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-36 top-10 h-[420px] w-[420px] rounded-full bg-brand-orange/10 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-brand-gold/10 blur-[110px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01132B 1px, transparent 1px), linear-gradient(to bottom, #01132B 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:py-20">
        <FadeIn direction="left">
          <div className="max-w-2xl">
           
            <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.05em] text-[#01132B] sm:text-6xl lg:text-[4.65rem]">
              How{" "}
              <span className="text-gradient-brand">
                HireRapido
              </span>{" "}
              works
            </h1>

            <p className="mt-6 text-xl font-bold text-[#01132B]">
              Grow your US team with top remote talent from LatAm
            </p>

            <p className="mt-4 max-w-xl text-base font-medium leading-8 text-muted-foreground sm:text-lg">
              Discover seamless hiring that saves you up to 80% on costs, while
              working with professionals aligned to US time zones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
                <Clock3 className="h-4 w-4 text-brand-orange" />
                <span className="text-sm font-bold">24 hr matching</span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
                <Coins className="h-4 w-4 text-brand-orange" />
                <span className="text-sm font-bold">Up to 80% savings</span>
              </div>

              <div className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
                <CheckCircle2 className="h-4 w-4 text-brand-orange" />
                <span className="text-sm font-bold">Pre-vetted talent</span>
              </div>
            </div>

            <div className="mt-9">
              <a
                href="/#connect"
                className="group inline-flex items-center gap-2 rounded-2xl bg-[#01132B] px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(1,19,43,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:shadow-xl"
              >
                Start hiring
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="right">
          <div className="relative mx-auto w-full max-w-[650px] py-12">
            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#01132B] p-4 shadow-[0_35px_90px_rgba(1,19,43,0.24)]">
              <div className="relative min-h-[520px] overflow-hidden rounded-[2.35rem]">
                <img
                  src={latamMap}
                  alt="Latin America"
                  className="absolute inset-0 h-full w-full object-cover opacity-55"
                />

                <div className="absolute inset-0 bg-gradient-to-tr from-[#01132B] via-[#01132B]/80 to-brand-orange/20" />

                <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                <div className="absolute left-1/2 top-1/2 h-[240px] w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

                <TalentCard
                  image={oliver}
                  title="Project Manager"
                  className="left-5 top-10 rotate-[-3deg]"
                />

                <TalentCard
                  image={melisa}
                  title="Marketing Asst"
                  className="right-6 top-5 rotate-[3deg]"
                  small
                />

                <TalentCard
                  image={fernando}
                  title="Accountant"
                  className="bottom-5 right-8 rotate-[-2deg]"
                />

                <TalentCard
                  image={yolanda}
                  title="HR & Recruiting"
                  className="bottom-10 left-8 rotate-[3deg]"
                  small
                />

                <div className="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rounded-[1.6rem] border border-white/15 bg-white/10 px-6 py-5 text-center shadow-xl backdrop-blur-xl">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange text-white">
                    <Zap className="h-5 w-5" />
                  </div>

                  <p className="mt-3 text-sm font-extrabold text-white">
                    HireRapido
                  </p>

                  <p className="mt-1 text-[11px] font-semibold text-white/55">
                    LATAM talent network
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-1 left-3 rounded-2xl border border-brand-orange/20 bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-bold text-muted-foreground">
                Average savings
              </p>
              <p className="mt-1 text-2xl font-black text-brand-orange">80%</p>
            </div>

            <div className="absolute -right-2 top-5 rounded-2xl border border-brand-orange/20 bg-white px-5 py-4 shadow-xl">
              <p className="text-xs font-bold text-muted-foreground">
                Candidate match
              </p>
              <p className="mt-1 text-2xl font-black text-[#01132B]">24 hrs</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function TalentCard({
  image,
  title,
  className,
  small = false,
}: {
  image: string;
  title: string;
  className: string;
  small?: boolean;
}) {
  return (
    <div
      className={`absolute z-20 rounded-[1.5rem] border border-white/15 bg-white/95 p-2.5 shadow-2xl backdrop-blur transition-all duration-500 hover:rotate-0 hover:scale-105 ${className}`}
    >
      <img
        src={image}
        alt={title}
        className={`rounded-[1.1rem] object-cover ${
          small ? "h-28 w-28" : "h-36 w-36"
        }`}
      />

      <p className="mt-2 max-w-[145px] truncate px-1 text-center text-xs font-extrabold text-[#01132B]">
        {title}
      </p>
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
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .marquee-track {
          animation: marqueeInfinite 22s linear infinite;
          will-change: transform;
        }
      `}</style>

      <section className="relative overflow-hidden border-y border-brand-orange/25 bg-brand-orange/[0.08] py-5">
        <div className="mx-auto flex max-w-7xl items-center gap-5 px-6">
          <div className="hidden shrink-0 items-center gap-3 rounded-2xl bg-[#01132B] px-4 py-3 text-white shadow-lg sm:flex">
            <Sparkles className="h-4 w-4 text-brand-orange" />

            <div>
              <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Trusted by
              </p>
              <p className="text-xs font-bold">Growing US teams</p>
            </div>
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-2xl bg-white py-3 shadow-sm">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent" />

            <div className="marquee-track flex w-max items-center">
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div key={`${logo}-${index}`} className="flex shrink-0 items-center">
                  <span className="mx-8 text-lg font-black text-[#01132B]/75 sm:mx-10">
                    {logo}
                  </span>

                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Steps() {
  const steps = [
    {
      number: "01",
      image: aiProfileUI,
      title: "Set up your hiring profile",
      body:
        "Import your existing job description or use our in-house AI to build one from scratch.",
      label: "Define your role",
    },
    {
      number: "02",
      image: talentMatchUI,
      title: "Match within 24 hrs",
      body:
        "Use AI Magic to find your perfect fit, browse our complete talent pool, or call on our white glove service to lend a hand.",
      label: "Find your match",
    },
    {
      number: "03",
      image: messagingUI,
      title: "Grow your team",
      body:
        "while HireRapido takes care of HR, international payroll, and legal compliance.",
      label: "Scale confidently",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
              Simple hiring process
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#01132B] sm:text-5xl lg:text-6xl">
              Hire LatAm talent for{" "}
              <span className="text-gradient-brand">80% less.</span>
            </h2>
          </div>
        </FadeIn>

        <div className="relative mt-20">
          <div className="absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((step, index) => (
              <FadeIn
                key={step.number}
                direction="up"
                delay={index * 0.12}
              >
                <article
                  className={`group relative ${
                    index === 1 ? "lg:-translate-y-8" : ""
                  }`}
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-brand-orange text-xl font-black text-white shadow-[0_10px_30px_rgba(249,115,22,0.28)]">
                    {step.number}
                  </div>

                  <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-orange/20 group-hover:shadow-[0_25px_65px_rgba(1,19,43,0.12)]">
                    <div className="relative overflow-hidden bg-[#01132B] p-3">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-56 w-full rounded-[1.35rem] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute bottom-6 left-6 rounded-full bg-[#01132B]/85 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur">
                        {step.label}
                      </div>
                    </div>

                    <div className="p-7">
                      <div className="h-1 w-12 rounded-full bg-brand-orange" />

                      <h3 className="mt-5 text-2xl font-black text-[#01132B]">
                        {step.title}
                      </h3>

                      <p className="mt-3 font-medium leading-7 text-muted-foreground">
                        {step.body}
                      </p>
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[#01132B] py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-orange/15 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-brand-gold/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="grid overflow-hidden rounded-[2.75rem] border border-white/10 bg-white/[0.05] lg:grid-cols-2">
            <div className="relative min-h-[420px] overflow-hidden">
              <img
                src={oliver}
                alt="Video Interview"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#01132B]/80 via-transparent to-transparent" />

              <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-bold text-white backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
                REC
              </div>

              <div className="absolute bottom-7 left-7 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-xl">
                <p className="text-xs font-semibold text-white/60">
                  Real-time collaboration
                </p>
                <p className="mt-1 font-black">US-compatible time zones</p>
              </div>
            </div>

            <div className="flex flex-col justify-center p-8 sm:p-12">
              <div className="inline-flex w-fit rounded-full bg-brand-orange/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Work in sync
              </div>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
                Top talent,
                <br />
                in your{" "}
                <span className="text-brand-orange">time zone.</span>
              </h2>

              <p className="mt-6 text-lg font-medium leading-8 text-white/60">
                HireRapido connects US companies with top LatAm talent. Our
                curated shortlists and in-depth profiles make finding your dream
                hire a piece of cake 🍰
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#difference"
                  className="rounded-2xl border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#01132B]"
                >
                  Learn more
                </a>

                <a
                  href="/#connect"
                  className="rounded-2xl bg-brand-orange px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-1"
                >
                  Hire top talent
                </a>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="mt-24 grid gap-5 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-8 sm:p-10">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-7xl font-black leading-none text-brand-orange sm:text-8xl">
                    10x
                  </p>

                  <h3 className="mt-5 text-3xl font-black text-white">
                    your team's productivity
                  </h3>

                  <p className="mt-2 text-xl font-medium text-white/55">
                    reduce time-to-hire by over 50%
                  </p>
                </div>

                <TrendingUp className="h-14 w-14 text-brand-orange/60" />
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-brand-orange p-8 text-white sm:p-10">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-white/65">
                Cost advantage
              </p>

              <p className="mt-6 text-6xl font-black">-80%</p>

              <p className="mt-4 text-lg font-semibold leading-7 text-white/80">
                Reduce hiring costs and salaries without sacrificing talent
                quality.
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            <BenefitCard
              icon={<Clock3 className="h-6 w-6" />}
              title="Save time"
              body="Using our pre-vetted pool saves clients 100+ hours on hiring."
              footer="100+ Hours Saved · Fast Hiring"
            />

            <BenefitCard
              icon={<Target className="h-6 w-6" />}
              title="Drive outcomes"
              body="Hire the best candidate first time with our curated shortlists."
            />

            <BenefitCard
              icon={<TrendingUp className="h-6 w-6" />}
              title="Scale easily"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BenefitCard({
  icon,
  title,
  body,
  footer,
}: {
  icon: React.ReactNode;
  title: string;
  body?: string;
  footer?: string;
}) {
  return (
    <div className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange/30 hover:bg-white/[0.09]">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-xl font-black text-white">{title}</h3>

      {body && (
        <p className="mt-3 font-medium leading-7 text-white/60">{body}</p>
      )}

      {footer && (
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.13em] text-brand-orange">
          {footer}
        </p>
      )}
    </div>
  );
}

function Difference() {
  const items = [
    {
      image: autoMatchingUI,
      number: "01",
      title: "Automatic candidate matching",
      body:
        "Detailed evaluations are auto-generated and manually assessed after interviews.",
    },
    {
      image: myJobsUI,
      number: "02",
      title: "Manage candidate shortlists",
      body:
        "Browse our talent pool or call on our white-glove service to create a custom shortlist.",
    },
    {
      image: videoInterviewUI,
      number: "03",
      title: "AI-Powered video interviews",
      body:
        "Candidates complete a dynamic, conversational interview with HireRapido",
    },
  ];

  return (
    <section id="difference" className="relative overflow-hidden bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              Built differently
            </div>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] text-[#01132B] sm:text-5xl lg:text-6xl">
              What's different about{" "}
              <span className="text-gradient-brand">HireRapido</span>?
            </h2>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn
              key={item.title}
              direction="up"
              delay={index * 0.12}
            >
              <article className="group h-full overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-brand-orange/20 hover:shadow-[0_25px_60px_rgba(1,19,43,0.12)]">
                <div className="relative bg-[#01132B] p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full rounded-[1.4rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-sm font-black text-white shadow-lg">
                    {item.number}
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-2xl font-black leading-tight text-[#01132B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-medium leading-7 text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsAndCTA() {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-28">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn direction="up">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-10">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
              Trusted by growing teams
            </p>

            <h2 className="mt-4 text-3xl font-black text-[#01132B] sm:text-4xl">
              Trusted by amazing{" "}
              <span className="text-gradient-brand">clients</span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              We collaborate with leading US firms to build and scale their
              remote LatAm teams.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
              {["DrSquatch", "Check", "JIMBY", "EasyHealth"].map((client) => (
                <span
                  key={client}
                  className="text-2xl font-black text-[#01132B]/65"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.15}>
          <div className="relative mt-8 overflow-hidden rounded-[2.75rem] bg-[#01132B] px-6 py-16 text-center shadow-[0_30px_80px_rgba(1,19,43,0.2)] sm:px-12 sm:py-20">
            <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-brand-orange/20 blur-[80px]" />
            <div className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-brand-orange/15 blur-[90px]" />

            <div className="relative">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg">
                <Users className="h-6 w-6" />
              </div>

              <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-6xl">
                Ready to hire top{" "}
                <span className="text-brand-orange">LatAm talent?</span>
              </h2>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="/#jobs"
                  className="rounded-2xl border border-white/20 px-8 py-4 text-sm font-bold text-white transition hover:bg-white hover:text-[#01132B]"
                >
                  Find jobs
                </a>

                <a
                  href="/#connect"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-sm font-bold text-white transition hover:-translate-y-1"
                >
                  Hire top talent
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StatsFooter() {
  return (
    <section className="border-t border-slate-200 bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-5 px-6 md:grid-cols-3">
        {[
          ["5+ years", "Trusted by leading brands and startups"],
          ["800+", "Skills and technologies listed in profiles and validated"],
          ["4 years", "Average experience our talents bring to the table"],
        ].map(([number, text], index) => (
          <div
            key={number}
            className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-6 text-center"
          >
            <h4
              className={`text-3xl font-black ${
                index === 1 ? "text-brand-orange" : "text-[#01132B]"
              }`}
            >
              {number}
            </h4>

            <p className="mt-2 text-sm font-medium leading-6 text-muted-foreground">
              {text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <div className="bg-background">
      <main>
        <Hero />
        <ClientMarquee />
        <Steps />
        <Benefits />
        <Difference />
        <ClientsAndCTA />
        <StatsFooter />
      </main>
    </div>
  );
}