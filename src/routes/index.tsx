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

export const Route = createFileRoute("/")({
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
            LATAM TALENT PLATFORM{" "}
            <span className="text-brand-gold">800K+ PROFILES</span>
          </div>

          <h1 className="mx-auto mt-5 max-w-3xl text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:mx-0 lg:mt-4 lg:text-[clamp(3.35rem,4.7vw,4.15rem)] 2xl:text-[4.4rem]">
            Hire <span className="text-[#FF5A00]">LATAM talent</span>
            <br />
            for 80% less
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base font-medium leading-7 text-muted-foreground sm:text-lg lg:mx-0 lg:mt-4 lg:text-[1.05rem] lg:leading-7">
            HireRapido is Latin America's largest talent marketplace — 800,000+
            vetted tech and generalist professionals. Browse and hire directly,
            or tell us what you need and get a tailored shortlist in 24 hours.
          </p>

          <div className="portal-searchbar mx-auto mt-6 max-w-2xl lg:mx-0 lg:mt-5">
            <a href="#talent" className="portal-search-segment text-left">
              <Search className="h-4 w-4 shrink-0 text-brand-orange" />
              <span className="truncate">Search by role or skill</span>
            </a>

            <div className="hidden h-8 w-px bg-border sm:block" />

            <a href="#talent" className="portal-search-segment text-left">
              <MapPin className="h-4 w-4 shrink-0 text-brand-gold" />
              <span className="truncate">Latin America · Remote</span>
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-5 py-3.5 text-center text-sm font-bold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
            >
              Hire Talent
            </a>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:mt-3 lg:justify-start">
            <span className="mr-1 text-[11px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground">
              Popular
            </span>

            <a href="/hire-latam-developers" className="portal-chip">
              Developers
            </a>

            <a
              href="/hire-latam-medical-assistants"
              className="portal-chip"
            >
              Medical Assistants
            </a>

            <a href="/hire-latam-accountants" className="portal-chip">
              Accountants
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
          alt="Pre-vetted HireRapido talent"
          className="h-[400px] w-full object-cover sm:h-[460px] lg:h-[430px] xl:h-[470px] 2xl:h-[500px]"
          width={760}
          height={760}
        />

        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      <div className="portal-panel float-card float-card-a absolute left-0 top-1 flex items-center gap-4 rounded-[1.35rem] px-4 py-3 sm:left-1 sm:px-5">
        <div>
          <p className="text-sm font-extrabold">Match Score</p>
          <p className="mt-0.5 text-[11px] font-semibold text-muted-foreground">
            Senior Sales Lead
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-brand-orange text-sm font-extrabold">
          98%
        </div>
      </div>

      <div className="portal-eyebrow float-card float-card-b absolute right-0 top-16 hidden sm:flex">
        <MapPin className="h-3.5 w-3.5 text-brand-orange" />
        US time zones
      </div>

      <div className="portal-badge-dark float-card float-card-c absolute -bottom-1 right-1 flex items-center gap-3 px-5 py-3.5 sm:right-5">
        <div>
          <p className="text-sm font-extrabold">Verified Profile</p>

          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/60">
            Top 3% talent
          </p>
        </div>

        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-yellow text-foreground">
          <CheckCircle2 className="h-5 w-5" />
        </span>
      </div>

      <div className="portal-panel float-card float-card-d absolute -left-1 bottom-5 hidden max-w-[210px] rounded-[1.35rem] px-4 py-3 sm:block">
        <p className="text-sm font-extrabold">No deposit required</p>

        <p className="mt-1 text-[11px] font-medium leading-5 text-muted-foreground">
          Browse and interview before you commit.
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
          <div className="hidden shrink-0 items-center gap-3 rounded-full border border-brand-orange/40 bg-white/90 px-4 py-2 shadow-sm backdrop-blur sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-orange text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>

            <div className="leading-tight">
              <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Trusted by
              </p>

              <p className="text-xs font-bold text-foreground">
                Growing US teams
              </p>
            </div>
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-full border border-brand-orange/30 bg-white/75 py-3 shadow-[0_10px_35px_rgba(249,115,22,0.15)] backdrop-blur">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white via-white/90 to-transparent sm:w-28" />

            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white via-white/90 to-transparent sm:w-28" />

            <div className="marquee-track flex w-max items-center">
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

              <div className="flex shrink-0 items-center" aria-hidden="true">
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

        <div className="relative mx-auto mt-3 flex max-w-7xl items-center justify-center gap-2 px-6 sm:hidden">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />

          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
            Trusted by growing US teams
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
    role: "Marketing & Graphic Design",
    rate: "1,500",
    img: melisa,
    flag: "🇦🇷",
    skills: ["Digital Marketing", "Graphic Design", "Illustration", "Adobe"],
    levels: [
      ["Digital Marketing", 80],
      ["Graphic Design", 85],
      ["Illustration", 90],
    ],
  },
  {
    name: "Fernando G.",
    role: "Copywriter",
    rate: "3,000",
    img: fernando,
    flag: "🇲🇽",
    skills: [
      "Copywriting",
      "Screenwriting",
      "Community Manager",
      "Creative Writing",
    ],
    levels: [
      ["Copywriting", 80],
      ["Screenwriting", 85],
      ["Community Manager", 85],
    ],
  },
  {
    name: "Yolanda L.",
    role: "Customer Service & BDR",
    rate: "1,800",
    img: yolanda,
    flag: "🇨🇴",
    skills: [
      "Customer Service",
      "Client Relations",
      "Administrative Assistance",
    ],
    levels: [
      ["Customer Service", 80],
      ["Microsoft Office", 80],
      ["Administrative Assistance", 80],
    ],
  },
  {
    name: "Rodrigo A.",
    role: "Senior Software Developer",
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
            Hire <span className="text-[#FF5A00]">top 3%</span> LatAm talent
          </h2>

          <p className="mt-4 text-lg text-muted-foreground">
            HireRapido connects US companies with top Latin American talent. Our
            curated selection of professionals makes finding the perfect fit
            simple.
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
                  {talent.flag} Pre-vetted talent
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
                      {talent.rate} USD/mo
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
                    View Profile
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
                  aria-label={`Show ${item.name}`}
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
                        isActive ? "text-white/60" : "text-muted-foreground"
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
              aria-label={`Go to ${item.name}`}
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
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-50" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange" />
            </span>

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              Work in sync
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
            Top talent,
            <br />
            in your <span className="text-[#FF5A00]">time zone.</span>
          </h2>

          <p className="mt-6 text-lg font-medium leading-8 text-muted-foreground">
            HireRapido connects US companies with top technical and non-tech
            LatAm talent. Our curated shortlists and in-depth profiles make
            finding your dream hire a piece of cake .
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                0–3h
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Time difference
              </p>
            </div>

            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                24h
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Shortlist delivery
              </p>
            </div>

            <div className="rounded-2xl border border-brand-orange/15 bg-white/80 p-4 shadow-sm backdrop-blur">
              <p className="text-2xl font-extrabold text-brand-orange">
                LATAM
              </p>

              <p className="mt-1 text-xs font-semibold text-muted-foreground">
                Remote talent
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#how"
              className="rounded-2xl border border-foreground px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:bg-foreground hover:text-primary-foreground"
            >
              Learn more
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Hire top talent
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[650px] py-8">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-brand-orange/20 bg-white p-3 shadow-[0_30px_80px_rgba(249,115,22,0.13)]">
            <div className="relative overflow-hidden rounded-[2rem] bg-orange-50">
              <img
                src={latamMap}
                alt="Latin America talent coverage"
                className="h-[400px] w-full object-cover sm:h-[470px]"
                loading="lazy"
                style={{
                  filter:
                    "hue-rotate(-32deg) saturate(1.35) contrast(1.03)",
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-brand-orange/[0.07] mix-blend-multiply" />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/45 via-transparent to-white/10" />

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

          <div className="absolute right-0 top-0 rounded-2xl border border-brand-orange/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:right-[-18px]">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">
                <Clock className="h-5 w-5" />
              </span>

              <div>
                <p className="text-xs font-bold text-muted-foreground">
                  US working hours
                </p>

                <p className="text-sm font-extrabold">
                  Perfect overlap
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 rounded-2xl border border-brand-orange/20 bg-white/95 px-5 py-4 shadow-xl backdrop-blur sm:left-[-20px]">
            <div className="flex items-center gap-3">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50">
                <span className="h-3 w-3 rounded-full bg-brand-orange" />
                <span className="absolute h-7 w-7 animate-ping rounded-full border border-brand-orange/30" />
              </span>

              <div>
                <p className="text-xs font-bold text-muted-foreground">
                  Talent availability
                </p>

                <p className="text-sm font-extrabold">
                  Across Latin America
                </p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-7 right-3 hidden rounded-full bg-brand-orange px-4 py-2 text-xs font-extrabold text-white shadow-lg sm:block">
            Remote · LATAM
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
      "Design Portfolio Site Dribbble Saved 85% by Hiring SDR Team with HireRapido",
  },
  {
    img: case2,
    title:
      "Leading Fintech Basis Theory Saves 50% on Tech and Non-Tech Teams",
  },
  {
    img: case3,
    title:
      "How Ecommerce Darling Dr Squatch Built Their Tech Team & Saved 70%",
  },
];

function CaseStudies() {
  return (
    <section className="portal-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-16 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-brand-orange" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Customer success
              </span>
            </div>

            <h2 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Featured{" "}
              <span className="text-[#FF5A00]">
                Case Studies
              </span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              See how fast-growing companies build stronger teams, hire faster,
              and reduce costs with HireRapido.
            </p>
          </div>

          <a
            href="#cases"
            className="group inline-flex items-center gap-2 self-start rounded-full border border-brand-orange/25 bg-white px-5 py-3 text-sm font-bold text-brand-orange shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:shadow-md md:self-auto"
          >
            More Case Studies

            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/5" />

              <div className="absolute left-6 top-6">
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                  Featured Story
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <div className="mb-4 h-1 w-14 rounded-full bg-brand-orange transition-all duration-500 group-hover:w-24" />

                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Case Study
                </p>

                <h3 className="mt-3 max-w-2xl text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {cases[0].title}
                </h3>

                <a
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:bg-brand-orange hover:text-white"
                >
                  Read story

                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </article>
          )}

          <div className="grid gap-6">
            {cases.slice(1).map((c, i) => (
              <article
                key={c.title}
                className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-lg sm:grid-cols-[0.9fr_1.1fr]"
              >
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

                <div className="flex flex-col p-6">
                  <div>
                    <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                      Case Study
                    </p>

                    <h3 className="mt-3 text-lg font-extrabold leading-snug sm:text-xl">
                      {c.title}
                    </h3>
                  </div>

                  <a
                    href="#"
                    className="mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-foreground transition-colors duration-300 hover:text-brand-orange"
                  >
                    Read story

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
            <div>
              <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                Hiring Impact
              </div>

              <p className="mt-5 text-7xl font-extrabold leading-none text-white sm:text-8xl">
                <span className="text-brand-orange">10x</span>
              </p>

              <p className="mt-4 max-w-md text-lg font-medium leading-8 text-white/70">
                your team's productivity — reduce time-to-hire by over 80%.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <ValueCard
                icon={<Clock className="h-6 w-6" />}
                title="Save time"
                body="Our AI-powered vetting process allows us to maintain Latin America's largest talent pool, saving clients 100+ hours on hiring."
              />

              <ValueCard
                icon={<Wallet className="h-6 w-6" />}
                title="Save money"
                body="Slash hiring costs in half with our full-service platform, plus save up to 80% on salaries for generalist hires and up to 60% on tech hires."
              />
            </div>
          </div>

          <div className="mt-12 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              ["5+ years", "Trusted by leading brands and startups"],
              [
                "800+",
                "Skills and technologies listed in profiles and validated",
              ],
              [
                "4 years",
                "Average experience our talents bring to the table",
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
    title: "Set up your hiring profile",
    body:
      "Import your existing job description or use our in-house AI to build one from scratch.",
  },
  {
    img: stepMatch,
    title: "Match within 24 hrs",
    body:
      "Use AI Magic to find your perfect fit, or browse our complete pre-vetted talent pool.",
  },
  {
    img: stepGrow,
    title: "Grow your team",
    body:
      "while HireRapido takes care of HR, international payroll, and legal compliance.",
  },
];

function Steps() {
  return (
    <section
      id="how"
      className="portal-section relative overflow-hidden bg-gradient-to-b from-white via-orange-50/30 to-white"
    >
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
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-brand-orange/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-brand-orange" />

            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
              Simple hiring process
            </span>
          </div>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hire Latin American talent for{" "}
            <span className="text-[#FF5A00]">
              80% less.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            From defining your role to growing your team, HireRapido makes the
            process simple, fast, and fully managed.
          </p>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-3">
            {steps.map((s, i) => (
              <article
                key={s.title}
                className={`group relative ${
                  i === 1 ? "lg:-translate-y-6" : ""
                }`}
              >
                <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-brand-orange text-xl font-extrabold text-white shadow-[0_12px_30px_rgba(249,115,22,0.28)] transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-3">
                  0{i + 1}
                </div>

                <div className="overflow-hidden rounded-[2rem] border border-border bg-white shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:border-brand-orange/25 group-hover:shadow-[0_24px_60px_rgba(249,115,22,0.12)]">
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

                    <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-white backdrop-blur">
                      Step {i + 1}
                    </div>
                  </div>

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

        <div className="mt-14 flex justify-center">
          <a
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            Start hiring

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
    title: "AI-powered assessment",
    body:
      "Our in-house AI evaluates a talent's initial interview and resume for hard and soft skills, experience, and spoken English ability.",
  },
  {
    n: 2,
    title: "Skills evaluation",
    body:
      "All talents' skills are given a rating that will appear on their profile.",
  },
  {
    n: 3,
    title: "Background check",
    body:
      "We ensure that all talents have presented themselves accurately, including confirming their prior work history.",
  },
  {
    n: 4,
    title: "Listing on HireRapido",
    body:
      "We present a comprehensive profile of our talents, including prior experience and skills.",
  },
];

function Vetting() {
  return (
    <section className="portal-section portal-tint">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            How we find <span className="text-[#FF5A00]">top 3%</span> talent
          </h2>

          <p className="mt-4 text-muted-foreground">
            Our unique blend of bespoke AI and human ingenuity helps us maintain
            our elite talent pool.
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
            Find jobs
          </a>

          <a
            href="#connect"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Hire top talent
          </a>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: "Global Payroll Management",
    body:
      "Streamlined international payment processing to ensure timely and accurate compensation across borders.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Compliance Assurance",
    body:
      "Automated adherence to local labor laws, tax regulations, and employment standards to reduce legal risks.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Integrated Benefits",
    body:
      "We offer health insurance through our partner, SafetyWing, for an additional $106/mo per talent.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Comprehensive HR",
    body:
      "We take care of all your backend Human Resources needs while you manage the talent directly.",
  },
];

function Services() {
  return (
    <section className="portal-section">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Full-service hiring solutions
          </h2>

          <p className="mt-4 text-muted-foreground">
            HireRapido takes care of human resources, international payroll, and
            legal compliance at no additional cost, making it easy for US and
            Canadian companies to hire in LatAm.
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
  "Developers",
  "Design",
  "Technology",
  "Sales",
  "Accounting",
  "Operations",
  "& More",
] as const;

const roles: Record<
  string,
  { title: string; saving: string; price: string; body: string }[]
> = {
  Marketing: [
    {
      title: "Copywriter",
      saving: "Up to 70% Savings",
      price: "$1,900/month",
      body:
        "A pre-vetted HireRapido copywriter can craft persuasive, engaging content that boosts your marketing efforts.",
    },
    {
      title: "Marketing Assistant",
      saving: "Up to 60% Savings",
      price: "$2,100/month",
      body:
        "Streamline marketing campaigns by handling admin tasks, social media, and coordination.",
    },
    {
      title: "SEO Specialist",
      saving: "Up to 55% Savings",
      price: "$2,600/month",
      body:
        "Optimize your website to rank higher on search engines, driving organic traffic and visibility.",
    },
  ],

  Developers: [
    {
      title: "Full Stack Developer",
      saving: "Up to 65% Savings",
      price: "$5,800/month",
      body:
        "Proficient in frontend and backend, essential for building anything from mobile apps to AI.",
    },
    {
      title: "Front End Developer",
      saving: "Up to 70% Savings",
      price: "$4,300/month",
      body:
        "Create visually appealing, user-friendly websites and applications.",
    },
    {
      title: "Back End Developer",
      saving: "Up to 65% Savings",
      price: "$4,900/month",
      body:
        "Build and maintain the server-side of a website or application.",
    },
  ],

  Design: [
    {
      title: "Web Designer",
      saving: "Up to 65% Savings",
      price: "$2,800/month",
      body:
        "Combine programming know-how with creative flair to refresh or create new brand identities.",
    },
    {
      title: "Graphic Designer",
      saving: "Up to 70% Savings",
      price: "$2,300/month",
      body:
        "Bring your brand to life with impactful visuals that resonate with your audience.",
    },
    {
      title: "Video Editor",
      saving: "Up to 65% Savings",
      price: "$2,100/month",
      body:
        "Transform raw footage into polished content that captivates your audience.",
    },
  ],

  Technology: [
    {
      title: "AI Engineer",
      saving: "Up to 65% Savings",
      price: "$5,800/month",
      body:
        "Experienced developers specializing in NLP, computer vision, and predictive analytics.",
    },
    {
      title: "DevOps Engineer",
      saving: "Up to 70% Savings",
      price: "$4,300/month",
      body:
        "Automate processes and streamline development using CI/CD pipelines and cloud tech.",
    },
    {
      title: "QA Engineer",
      saving: "Up to 65% Savings",
      price: "$3,100/month",
      body:
        "Vital experience in manual and automated testing, plus automation scripting.",
    },
  ],

  Sales: [
    {
      title: "Sales Development Rep",
      saving: "Up to 80% Savings",
      price: "$1,900/month",
      body:
        "Take prospects from top-of-funnel through purchase — and to repeat clients.",
    },
    {
      title: "Account Manager",
      saving: "Up to 65% Savings",
      price: "$2,300/month",
      body:
        "Strengthen your relationship with clients and keep them coming back.",
    },
    {
      title: "Business Development Rep",
      saving: "Up to 60% Savings",
      price: "$2,300/month",
      body:
        "Fuel growth and take your sales strategy to the next level.",
    },
  ],

  Accounting: [
    {
      title: "Accountant",
      saving: "Up to 65% Savings",
      price: "$2,500/month",
      body:
        "Manage your company's financial health, from reports to tax filings and compliance.",
    },
    {
      title: "Financial Analyst",
      saving: "Up to 70% Savings",
      price: "$2,800/month",
      body:
        "Data-driven insights on budgeting, forecasting, and investment.",
    },
    {
      title: "Bookkeeper",
      saving: "Up to 55% Savings",
      price: "$2,000/month",
      body:
        "Streamline invoicing, payroll, tax returns and financial reporting.",
    },
  ],

  Operations: [
    {
      title: "Project Manager",
      saving: "Up to 75% Savings",
      price: "$2,600/month",
      body:
        "Oversee projects from initiation to completion with timely delivery.",
    },
    {
      title: "Executive Assistant",
      saving: "Up to 65% Savings",
      price: "$1,900/month",
      body:
        "Manage schedules, communications, and admin tasks for your leadership team.",
    },
    {
      title: "Customer Support",
      saving: "Up to 65% Savings",
      price: "$1,900/month",
      body:
        "Facilitate efficient communication and problem-solving with your client base.",
    },
  ],

  "& More": [
    {
      title: "Data Analyst",
      saving: "Up to 65% Savings",
      price: "$2,500/month",
      body:
        "Interpret your data to uncover trends, inform strategy, and improve decisions.",
    },
    {
      title: "Human Resources Manager",
      saving: "Up to 60% Savings",
      price: "$2,800/month",
      body:
        "Streamline HR from recruitment to onboarding and compliance.",
    },
    {
      title: "Transcriptionist",
      saving: "Up to 50% Savings",
      price: "$2,000/month",
      body:
        "Convert audio and video content into accurate written documents.",
    },
  ],
};

function Expertise() {
  const [active, setActive] = useState<string>("Marketing");

  return (
    <section id="pricing" className="portal-section portal-tint">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          HireRapido offers expertise in{" "}
          <span className="text-[#FF5A00]">every field</span>
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

              <p className="mt-3 text-2xl font-extrabold text-[#FF5A00]">
                {r.price}
              </p>

              <p className="mt-3 text-sm text-muted-foreground">
                {r.body}
              </p>

              <a
                href="#connect"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold hover:text-brand-orange"
              >
                Hire this role
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
              "I just want to throw out a big THANK YOU to [HireRapido] - we used
              HireRapido to hire for three roles out of Latin America. The team
              has found perfect fits, the process was easy, and actually
              affordable... this has saved me a giant headache!"
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
    q: "What is HireRapido?",
    a:
      "HireRapido is the largest pre-vetted pool of Latin American remote talent. We match US companies with experienced LatAm professionals across sales, marketing, tech, administration and more.",
  },
  {
    q: "How does HireRapido work?",
    a:
      "After signing up to our platform, import your job description and start exploring our talent pool of 800,000+ pre-vetted professionals. Receive AI-recommended suggestions or let our senior talent team create a custom shortlist.",
  },
  {
    q: "What are the benefits of hiring in Latin America?",
    a:
      "By hiring in LatAm, North American companies can save up to 80% on professionals who are fluent in English and located in the same time zones. Plus, hire 10x faster with HireRapido's pre-vetted, AI-powered talent platform!",
  },
  {
    q: "How much can I save with HireRapido?",
    a:
      "On average, our clients save 80% when they hire Latin American talents with HireRapido. Most roles can be filled for under $3,000 USD per month.",
  },
  {
    q: "Which roles should I hire in LatAm?",
    a:
      "HireRapido boasts a diverse pool of talents across sales, tech, marketing, operations, administration and more.",
  },
  {
    q: "How long does it take to hire?",
    a:
      "Thanks to our in-house AI vetting system, all talents in our platform are pre-vetted and available to start immediately — you can hire in as little as 24 hours!",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="portal-section">
      <div className="faq-layout mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <h2 className="faq-title text-center text-4xl font-extrabold sm:text-5xl lg:sticky lg:top-32 lg:text-left">
          Frequently asked{" "}
          <span className="text-[#FF5A00]">
            questions
          </span>
        </h2>

        <div className="portal-panel faq-panel divide-y divide-border overflow-hidden lg:mt-0">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <button
                key={f.q}
                onClick={() => setOpen(isOpen ? null : i)}
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
            Book a consultation
          </a>

          <a
            href="#connect"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Get started
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
            Join our amazing clients!
          </h2>

          <p className="mt-3 text-muted-foreground">
            We collaborate with leading US firms like Dr Squatch and Check to
            grow their remote Latin American teams.
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
            Ready to hire top{" "}
            <span className="text-[#FF5A00]">
              Latin American
            </span>{" "}
            talent?
          </h2>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#jobs"
              className="rounded-2xl border border-foreground px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-foreground hover:text-primary-foreground"
            >
              Find jobs
            </a>

            <a
              href="#connect"
              className="rounded-2xl bg-foreground px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5"
            >
              Hire top talent
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