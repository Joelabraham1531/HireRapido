import { useState, type ReactNode } from "react";

import {
  ArrowRight,
  Check,
  Plus,
  MapPin,
  Play,
  Sparkles,
  Clock,
  Globe2,
  ShieldCheck,
  Users,
  Wallet,
} from "lucide-react";

import { FadeIn } from "@/components/FadeIn";

/* =========================================================
   TYPES
========================================================= */

export type RoleLanguage = "en" | "es";

export type ExperienceLevelItem = {
  num: string;
  title: string;
  desc: string;
};

export type CompensationCard = {
  title: string;
  bg: string;
  price: string;
  bullets: string[];
};

export type RoleFAQItem = {
  q: string;
  a: string;
};

export type HeroPerson = {
  image: string;
  alt?: string;
};

export type CandidateQuestion = {
  question: string;
  time: string;
  answer?: string;
};

export type CandidateProfile = {
  name: string;
  location: string;
  title: string;
  bio: string;
  questions: CandidateQuestion[];
};

export type RolePageConfig = {
  roleName: string;
  rolePlural: string;

  hero: {
    description: string;
  };

  topCandidates: {
    description: string;
  };

  candidate: CandidateProfile;

  wealth: {
    highlightedText: string;
    paragraphs: string[];
  };

  experienceLevels: ExperienceLevelItem[];

  compensation: {
    description: string;
    cards: CompensationCard[];
  };

  faq: RoleFAQItem[];
};

export type SharedRoleAssets = {
  heroPeople: HeroPerson[];
  candidateAvatar: string;
  videoThumbnail: string;
};

export type BilingualRolePageConfig = {
  en: RolePageConfig;
  es: RolePageConfig;
  shared: SharedRoleAssets;
};

/* =========================================================
   TRANSLATIONS
========================================================= */

const pageText = {
  en: {
    heroPrefix: "Hire LATAM",

    bookCall: "Book a Call",
    hireNow: "Hire Now",

    noDepositTitle: "No deposit required!",
    noDepositBody:
      "There's no upfront fee for browsing or interviewing our talent; only pay if you decide to hire!",

    topCandidatesPrefix: "Our top",
    preVetted: "pre-vetted",
    candidates: "candidates",

    whyPrefix: "Why",
    latam: "LatAm?",

    usTimeZones: "US Time Zones",
    usTimeZonesBody:
      "HireRapido connects you with top LatAm talent located in US time zones. Find top candidates across Eastern and Central Time.",

    strongEnglish: "Strong English",
    strongEnglishBody:
      "Access candidates with certified English proficiency. All HireRapido talents have full professional English.",

    seamlessCulture: "Seamless Culture",
    seamlessCultureBody:
      "Our proven hiring process ensures a strong cultural and professional fit.",

    lowerCosts: "Lower Operational Costs",
    lowerCostsBody:
      "LatAm salaries are 60-85% below US market rate. Hire the top 1% while keeping your hiring budget in check.",

    introductionVideo: "Introduction video",
    questions: "Questions",

    wealthPrefix: "There is a wealth of",
    wealthSuffix: "in LatAm.",

    experienceLevel: "Experience level",

    compensationPrefix: "Top Talent,",
    transparent: "Transparent",
    compensationSuffix: "Compensation",

    startingAt: "Starting at",

    hiringProcessPrefix: "How HireRapido's proven",
    hiringProcessHighlight: "hiring process",
    hiringProcessSuffix: "works",

    hiringProcessDescription:
      "HireRapido takes care of human resources, international payroll, and legal compliance for all our clients at no additional cost.",

    step1Title: "Join the Platform",
    step1Body:
      "Tell us a bit about your company and your open positions. Then, simply import your existing job descriptions or draft new ones with our in-house AI model.",

    step2Title: "Candidate Shortlists",
    step2Body:
      "Browse our entire talent pool and create shortlists from our comprehensive candidate profiles. Alternatively, call on our white-glove service to create a custom shortlist.",

    step3Title: "Interviews and Hiring",
    step3Body:
      "Interview your shortlists to find the best fit for your team. Hire on a monthly rolling contract and let us handle HR, payroll and compliance at no additional cost.",

    fullServicePrefix: "Full-service hiring",
    fullServiceHighlight: "solutions",

    globalPayments: "Global Payments",
    globalPaymentsBody:
      "Streamlined international payment processing to ensure timely and accurate compensation across borders.",

    legalCompliance: "Legal Compliance",
    legalComplianceBody:
      "Automated adherence to local labor laws, tax regulations, and employment standards to reduce legal risks.",

    comprehensiveHR: "Comprehensive HR",
    comprehensiveHRBody:
      "We take care of all your backend Human Resources needs while you manage the talent directly.",

    startHiring: "Start Hiring",

    faqPrefix: "Frequently asked",
    faqHighlight: "questions",

    readyToHire: "Ready to hire top LatAm talent?",

    findJobs: "Find jobs",
    hireTopTalent: "Hire top talent",
  },

  es: {
    heroPrefix: "Contrata talento LATAM",

    bookCall: "Agendar una llamada",
    hireNow: "Contratar ahora",

    noDepositTitle: "¡No se requiere depósito!",
    noDepositBody:
      "No existe ningún pago inicial para explorar o entrevistar a nuestro talento; solo pagas si decides contratar.",

    topCandidatesPrefix: "Nuestros mejores",
    preVetted: "preseleccionados",
    candidates: "candidatos",

    whyPrefix: "¿Por qué",
    latam: "Latinoamérica?",

    usTimeZones: "Zonas horarias de EE. UU.",
    usTimeZonesBody:
      "HireRapido te conecta con talento latinoamericano ubicado en zonas horarias compatibles con Estados Unidos. Encuentra excelentes candidatos en las zonas Este y Central.",

    strongEnglish: "Inglés profesional",
    strongEnglishBody:
      "Accede a candidatos con dominio certificado del inglés. Todo el talento de HireRapido cuenta con inglés profesional.",

    seamlessCulture: "Compatibilidad cultural",
    seamlessCultureBody:
      "Nuestro proceso de contratación ayuda a garantizar una excelente compatibilidad cultural y profesional.",

    lowerCosts: "Menores costos operativos",
    lowerCostsBody:
      "Los salarios en Latinoamérica pueden ser entre un 60% y un 85% menores que en Estados Unidos. Contrata talento excepcional mientras mantienes tu presupuesto bajo control.",

    introductionVideo: "Video de presentación",
    questions: "Preguntas",

    wealthPrefix: "Existe una gran cantidad de",
    wealthSuffix: "en Latinoamérica.",

    experienceLevel: "Nivel de experiencia",

    compensationPrefix: "Talento de primer nivel,",
    transparent: "Compensación",
    compensationSuffix: "transparente",

    startingAt: "Desde",

    hiringProcessPrefix: "Cómo funciona el",
    hiringProcessHighlight: "proceso de contratación",
    hiringProcessSuffix: "de HireRapido",

    hiringProcessDescription:
      "HireRapido se encarga de recursos humanos, nómina internacional y cumplimiento legal para nuestros clientes sin costo adicional.",

    step1Title: "Únete a la plataforma",
    step1Body:
      "Cuéntanos sobre tu empresa y tus posiciones abiertas. Importa tus descripciones de trabajo existentes o crea nuevas utilizando nuestro modelo de IA.",

    step2Title: "Selección de candidatos",
    step2Body:
      "Explora nuestro grupo de talentos y crea listas utilizando nuestros perfiles completos. También puedes solicitar a nuestro equipo una selección personalizada.",

    step3Title: "Entrevistas y contratación",
    step3Body:
      "Entrevista a los candidatos seleccionados para encontrar el mejor perfil para tu equipo. HireRapido se encarga de recursos humanos, nómina y cumplimiento legal.",

    fullServicePrefix: "Soluciones integrales de",
    fullServiceHighlight: "contratación",

    globalPayments: "Pagos internacionales",
    globalPaymentsBody:
      "Procesamiento simplificado de pagos internacionales para garantizar una compensación precisa y puntual.",

    legalCompliance: "Cumplimiento legal",
    legalComplianceBody:
      "Cumplimiento de leyes laborales, regulaciones fiscales y normas de empleo locales para reducir riesgos legales.",

    comprehensiveHR: "Recursos Humanos",
    comprehensiveHRBody:
      "Nos encargamos de las necesidades administrativas de recursos humanos mientras tú gestionas directamente al talento.",

    startHiring: "Comenzar a contratar",

    faqPrefix: "Preguntas",
    faqHighlight: "frecuentes",

    readyToHire:
      "¿Listo para contratar el mejor talento latinoamericano?",

    findJobs: "Buscar empleos",
    hireTopTalent: "Contratar talento",
  },
} as const;

/* =========================================================
   HELPERS
========================================================= */

function GradientText({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="bg-gradient-to-r from-brand-gold via-brand-orange to-brand-orange bg-clip-text text-transparent">
      {children}
    </span>
  );
}

function localizedPath(
  language: RoleLanguage,
  path: string
) {
  return language === "es"
    ? `/es${path}`
    : path;
}

/* =========================================================
   PAGE
========================================================= */

export function RolePage({
  config,
  language = "en",
}: {
  config: BilingualRolePageConfig;
  language?: RoleLanguage;
}) {
  const content = config[language];
  const shared = config.shared;

  return (
    <div className="overflow-hidden bg-[#fbfcfe]">
      <main>
        <Hero
          config={content}
          shared={shared}
          language={language}
        />

        <TopCandidates
          config={content}
          language={language}
        />

        <WhyLatAm
          config={content}
          shared={shared}
          language={language}
        />

        <WealthOfTalent
          config={content}
          language={language}
        />

        <ExperienceLevel
          config={content}
          language={language}
        />

        <TopTalentCompensation
          config={content}
          language={language}
        />

        <HowItWorks
          language={language}
        />

        <FullServiceSolutions
          language={language}
        />

        <RoleFAQ
          config={content}
          language={language}
        />

        <PreFooterCTA
          language={language}
        />
      </main>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function Hero({
  config,
  shared,
  language,
}: {
  config: RolePageConfig;
  shared: SharedRoleAssets;
  language: RoleLanguage;
}) {
  const t = pageText[language];

  const primaryPerson =
    shared.heroPeople[0];

  const secondaryPeople =
    shared.heroPeople.slice(1, 4);

  const floatingPositions = [
    "-left-3 top-14 sm:-left-6 sm:top-16",
    "-right-2 top-28 sm:-right-8",
    "bottom-8 right-4 sm:right-8",
  ];

  return (
    <section className="relative overflow-hidden pb-14 pt-10 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20">

      {/* BACKGROUND */}
      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01132B 1px, transparent 1px), linear-gradient(to bottom, #01132B 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-brand-orange/10 blur-3xl" />

        <div className="absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-brand-gold/10 blur-3xl" />

      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">

        {/* LEFT */}
        <FadeIn direction="up">
          <div>

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-orange/20 bg-white px-4 py-2 shadow-sm">

              <Sparkles className="h-4 w-4 text-brand-orange" />

              <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#01132B]">
                HireRapido
              </span>

            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.98] tracking-[-0.045em] text-[#01132B] sm:text-6xl lg:text-[72px]">

              {t.heroPrefix}

              <br />

              <GradientText>
                {config.rolePlural}
              </GradientText>

            </h1>

            <p className="mt-7 max-w-xl text-base font-medium leading-8 text-slate-600 sm:text-lg">
              {config.hero.description}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">

              <a
                href={localizedPath(
                  language,
                  "/connect"
                )}
                className="group inline-flex items-center gap-2 rounded-full bg-[#01132B] px-7 py-3.5 text-sm font-bold text-white shadow-[0_15px_35px_rgba(1,19,43,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {t.hireNow}

                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={localizedPath(
                  language,
                  "/connect"
                )}
                className="rounded-full border border-[#01132B]/15 bg-white px-7 py-3.5 text-sm font-bold text-[#01132B] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:text-brand-orange"
              >
                {t.bookCall}
              </a>

            </div>

            {/* MINI FEATURE ROW */}
            <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">

              <MiniFeature
                icon={
                  <Clock className="h-4 w-4" />
                }
                text={t.usTimeZones}
              />

              <MiniFeature
                icon={
                  <Globe2 className="h-4 w-4" />
                }
                text={t.strongEnglish}
              />

              <MiniFeature
                icon={
                  <Check className="h-4 w-4" />
                }
                text={t.preVetted}
              />

            </div>

          </div>
        </FadeIn>

        {/* RIGHT VISUAL */}
        <FadeIn direction="up">
          <div className="relative mx-auto w-full max-w-[620px]">

            <div className="relative overflow-hidden rounded-[2.75rem] bg-[#01132B] p-5 shadow-[0_35px_90px_rgba(1,19,43,0.22)] sm:p-7">

              <div className="pointer-events-none absolute -right-24 -top-20 h-72 w-72 rounded-full bg-brand-orange/25 blur-3xl" />

              <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl" />

              <div className="relative overflow-hidden rounded-[2.15rem] bg-white/10 p-3">

                <div className="relative min-h-[430px] overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-orange-50 to-amber-50 sm:min-h-[500px]">

                  {primaryPerson && (
                    <img
                      src={primaryPerson.image}
                      alt={
                        primaryPerson.alt ??
                        config.rolePlural
                      }
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-[#01132B]/75 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">

                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                      <Check className="h-3 w-3" />
                      {t.preVetted}
                    </div>

                    <p className="mt-3 text-xl font-extrabold text-white sm:text-2xl">
                      {config.rolePlural}
                    </p>

                  </div>

                </div>

              </div>

              {/* NO DEPOSIT */}
              <div className="absolute bottom-8 left-0 max-w-[260px] -translate-x-4 rounded-[1.25rem] border border-white/20 bg-white p-4 shadow-2xl sm:-translate-x-10">

                <div className="flex items-start gap-3">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                    <Check className="h-4 w-4" />
                  </div>

                  <div>
                    <p className="text-xs font-extrabold text-[#01132B]">
                      {t.noDepositTitle}
                    </p>

                    <p className="mt-1 text-[10px] font-medium leading-4 text-slate-500">
                      {t.noDepositBody}
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* FLOATING PEOPLE */}
            {secondaryPeople.map(
              (person, index) => (
                <div
                  key={`${person.image}-${index}`}
                  className={`
                    absolute
                    ${floatingPositions[index]}
                    hidden
                    h-20 w-20
                    overflow-hidden
                    rounded-2xl
                    border-4
                    border-white
                    bg-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:rotate-2
                    hover:scale-105
                    sm:block
                    ${index === 1 ? "h-24 w-24" : ""}
                  `}
                >
                  <img
                    src={person.image}
                    alt={
                      person.alt ??
                      config.rolePlural
                    }
                    className="h-full w-full object-cover"
                  />
                </div>
              )
            )}

          </div>
        </FadeIn>

      </div>
    </section>
  );
}

function MiniFeature({
  icon,
  text,
}: {
  icon: ReactNode;
  text: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-slate-200/80 bg-white px-3 py-3 text-xs font-bold text-[#01132B] shadow-sm">

      <span className="text-brand-orange">
        {icon}
      </span>

      <span className="line-clamp-1">
        {text}
      </span>

    </div>
  );
}

/* =========================================================
   TOP CANDIDATES
========================================================= */

function TopCandidates({
  config,
  language,
}: {
  config: RolePageConfig;
  language: RoleLanguage;
}) {
  const t = pageText[language];

  return (
    <section className="relative py-8 sm:py-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[2rem] border border-brand-orange/15 bg-gradient-to-r from-brand-orange/10 via-white to-brand-gold/10 px-7 py-10 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-14">

          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-brand-orange/15 blur-3xl" />

          <div className="relative lg:max-w-md">

            <p className="text-3xl font-black tracking-tight text-[#01132B] sm:text-4xl">

              {t.topCandidatesPrefix}{" "}

              <GradientText>
                {t.preVetted}
              </GradientText>{" "}

              {t.candidates}

            </p>

          </div>

          <p className="relative mt-5 max-w-2xl text-sm font-medium leading-7 text-slate-600 sm:text-base lg:mt-0">
            {config.topCandidates.description}
          </p>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   WHY LATAM
========================================================= */

function WhyLatAm({
  config,
  shared,
  language,
}: {
  config: RolePageConfig;
  shared: SharedRoleAssets;
  language: RoleLanguage;
}) {
  const t = pageText[language];
  const candidate = config.candidate;

  return (
    <section className="relative py-24 sm:py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="overflow-hidden rounded-[2.75rem] bg-[#01132B] px-6 py-8 shadow-[0_30px_80px_rgba(1,19,43,0.16)] sm:px-8 sm:py-10 lg:px-12 lg:py-12">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            {/* LEFT */}
            <div>

              <div className="mb-8">

                <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">

                  {t.whyPrefix}{" "}

                  <span className="text-brand-orange">
                    {t.latam}
                  </span>

                </h2>

              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                <BenefitCardDark
                  icon={
                    <Clock className="h-5 w-5" />
                  }
                  className="sm:col-span-2"
                  title={t.usTimeZones}
                  body={t.usTimeZonesBody}
                />

                <BenefitCardDark
                  icon={
                    <Globe2 className="h-5 w-5" />
                  }
                  title={t.strongEnglish}
                  body={t.strongEnglishBody}
                />

                <BenefitCardDark
                  icon={
                    <Users className="h-5 w-5" />
                  }
                  title={t.seamlessCulture}
                  body={t.seamlessCultureBody}
                />

                <BenefitCardDark
                  icon={
                    <Wallet className="h-5 w-5" />
                  }
                  className="sm:col-span-2"
                  title={t.lowerCosts}
                  body={t.lowerCostsBody}
                />

              </div>

            </div>

            {/* CANDIDATE PROFILE */}
            <FadeIn direction="up">

              <div className="relative rounded-[2rem] bg-white p-4 shadow-2xl sm:p-5">

                <div className="grid overflow-hidden rounded-[1.6rem] border border-slate-100 lg:grid-cols-[0.38fr_0.62fr]">

                  {/* PROFILE */}
                  <div className="bg-gradient-to-b from-orange-50 to-white p-6">

                    <div className="h-24 w-24 overflow-hidden rounded-2xl border-4 border-white shadow-lg">

                      <img
                        src={
                          shared.candidateAvatar
                        }
                        alt={candidate.name}
                        className="h-full w-full object-cover"
                      />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-[#01132B]">
                      {candidate.name}
                    </h4>

                    <div className="mt-2 flex items-center gap-1.5 text-xs font-medium text-slate-500">

                      <MapPin className="h-3.5 w-3.5 text-brand-orange" />

                      {candidate.location}

                    </div>

                    <div className="mt-5 inline-flex rounded-full bg-brand-orange/10 px-3 py-1.5 text-xs font-extrabold text-brand-orange">
                      {candidate.title}
                    </div>

                    <p className="mt-5 text-xs font-medium leading-6 text-slate-500">
                      {candidate.bio}
                    </p>

                  </div>

                  {/* VIDEO */}
                  <div className="p-5 sm:p-6">

                    <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                      {t.introductionVideo}
                    </p>

                    <div className="group relative aspect-video overflow-hidden rounded-[1.25rem] bg-slate-100">

                      <img
                        src={
                          shared.videoThumbnail
                        }
                        alt={t.introductionVideo}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/15" />

                      <div className="absolute inset-0 flex items-center justify-center">

                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-xl transition-transform duration-300 group-hover:scale-110">

                          <Play className="h-5 w-5 fill-current" />

                        </div>

                      </div>

                    </div>

                    <div className="mt-5">

                      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.14em] text-slate-400">
                        {t.questions}
                      </p>

                      <div className="space-y-2">

                        {candidate.questions.map(
                          (question, index) => (
                            <div
                              key={`${question.question}-${index}`}
                              className="rounded-xl border border-slate-100 bg-slate-50/80 p-3"
                            >

                              <div className="flex items-start justify-between gap-3">

                                <p className="text-[11px] font-bold leading-5 text-[#01132B]">
                                  {index + 1}.{" "}
                                  {question.question}
                                </p>

                                <span className="shrink-0 text-[9px] font-bold text-brand-orange">
                                  {question.time}
                                </span>

                              </div>

                              {question.answer && (
                                <p className="mt-2 rounded-lg bg-brand-orange/10 p-2 text-[10px] font-medium leading-5 text-slate-600">
                                  “{question.answer}”
                                </p>
                              )}

                            </div>
                          )
                        )}

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </FadeIn>

          </div>

        </div>

      </div>

    </section>
  );
}

function BenefitCardDark({
  icon,
  title,
  body,
  className = "",
}: {
  icon: ReactNode;
  title: string;
  body: string;
  className?: string;
}) {
  return (
    <div
      className={`
        group
        rounded-[1.4rem]
        border
        border-white/10
        bg-white/[0.06]
        p-5
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-brand-orange/30
        hover:bg-white/[0.09]
        ${className}
      `}
    >

      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange text-white">
        {icon}
      </div>

      <h3 className="text-base font-extrabold text-white">
        {title}
      </h3>

      <p className="mt-2 text-xs font-medium leading-6 text-white/60">
        {body}
      </p>

    </div>
  );
}

/* =========================================================
   WEALTH OF TALENT
========================================================= */

function WealthOfTalent({
  config,
  language,
}: {
  config: RolePageConfig;
  language: RoleLanguage;
}) {
  const t = pageText[language];

  return (
    <section className="relative py-20 sm:py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">

          <div className="lg:sticky lg:top-32">

            <div className="mb-4 h-1 w-12 rounded-full bg-brand-orange" />

            <h2 className="max-w-lg text-4xl font-black leading-tight tracking-tight text-[#01132B] sm:text-5xl">

              {t.wealthPrefix}

              <br />

              <GradientText>
                {
                  config.wealth
                    .highlightedText
                }
              </GradientText>{" "}

              {t.wealthSuffix}

            </h2>

          </div>

          <div className="grid gap-4">

            {config.wealth.paragraphs.map(
              (paragraph, index) => (
                <div
                  key={index}
                  className="group grid gap-5 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/20 hover:shadow-lg sm:grid-cols-[60px_1fr] sm:p-8"
                >

                  <span className="text-3xl font-black text-brand-orange/30">
                    0{index + 1}
                  </span>

                  <p className="text-base font-medium leading-8 text-slate-600">
                    {paragraph}
                  </p>

                </div>
              )
            )}

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   EXPERIENCE
========================================================= */

function ExperienceLevel({
  config,
  language,
}: {
  config: RolePageConfig;
  language: RoleLanguage;
}) {
  const t = pageText[language];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-orange-50/60 to-white py-24">

      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-brand-orange/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mx-auto mb-14 max-w-2xl text-center">

          <h2 className="text-4xl font-black tracking-tight text-[#01132B] sm:text-5xl">
            {t.experienceLevel}
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

          {config.experienceLevels.map(
            (level, index) => (
              <div
                key={level.num}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[1.75rem]
                  border
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                  ${
                    index % 2 === 0
                      ? "border-brand-orange/15 bg-white"
                      : "border-[#01132B]/10 bg-[#01132B] text-white"
                  }
                `}
              >

                <div
                  className={`
                    mb-8
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-xl
                    text-sm
                    font-extrabold
                    ${
                      index % 2 === 0
                        ? "bg-brand-orange text-white"
                        : "bg-brand-orange text-white"
                    }
                  `}
                >
                  {level.num}
                </div>

                <h3
                  className={`text-xl font-extrabold ${
                    index % 2 === 0
                      ? "text-[#01132B]"
                      : "text-white"
                  }`}
                >
                  {level.title}
                </h3>

                <p
                  className={`mt-4 text-sm font-medium leading-7 ${
                    index % 2 === 0
                      ? "text-slate-500"
                      : "text-white/60"
                  }`}
                >
                  {level.desc}
                </p>

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand-orange/10 transition-transform duration-500 group-hover:scale-150" />

              </div>
            )
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   COMPENSATION
========================================================= */

function TopTalentCompensation({
  config,
  language,
}: {
  config: RolePageConfig;
  language: RoleLanguage;
}) {
  const t = pageText[language];

  return (
    <section className="py-24 sm:py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-14 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">

          <h2 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-[#01132B] sm:text-5xl">

            {t.compensationPrefix}{" "}

            <GradientText>
              {t.transparent}
            </GradientText>{" "}

            {t.compensationSuffix}

          </h2>

          <p className="max-w-xl text-sm font-medium leading-7 text-slate-600 sm:text-base">
            {config.compensation.description}
          </p>

        </div>

        <div
          className={`grid gap-5 ${
            config.compensation.cards.length >= 3
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2"
          }`}
        >

          {config.compensation.cards.map(
            (card, index) => {
              const featured =
                index === 1;

              return (
                <div
                  key={card.title}
                  className={`
                    group
                    relative
                    flex
                    min-h-[440px]
                    flex-col
                    overflow-hidden
                    rounded-[2rem]
                    border
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-2xl
                    ${
                      featured
                        ? "border-[#01132B] bg-[#01132B] text-white shadow-[0_20px_50px_rgba(1,19,43,0.18)]"
                        : `border-slate-200 ${card.bg}`
                    }
                  `}
                >

                  <div className="mb-8 flex items-start justify-between gap-4">

                    <h3
                      className={`text-2xl font-black ${
                        featured
                          ? "text-white"
                          : "text-[#01132B]"
                      }`}
                    >
                      {card.title}
                    </h3>

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        ${
                          featured
                            ? "bg-brand-orange text-white"
                            : "bg-white text-brand-orange shadow-sm"
                        }
                      `}
                    >
                      <Check className="h-5 w-5" />
                    </div>

                  </div>

                  <ul className="flex-1 space-y-4">

                    {card.bullets.map(
                      (bullet) => (
                        <li
                          key={bullet}
                          className={`flex items-start gap-3 text-sm font-medium leading-6 ${
                            featured
                              ? "text-white/65"
                              : "text-slate-600"
                          }`}
                        >

                          <Check className="mt-1 h-4 w-4 shrink-0 text-brand-orange" />

                          <span>
                            {bullet}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                  <div
                    className={`mt-10 border-t pt-6 ${
                      featured
                        ? "border-white/10"
                        : "border-black/10"
                    }`}
                  >

                    <p
                      className={`text-xs font-bold ${
                        featured
                          ? "text-white/50"
                          : "text-slate-400"
                      }`}
                    >
                      {t.startingAt}
                    </p>

                    <div className="mt-2 flex items-center justify-between">

                      <p
                        className={`text-3xl font-black ${
                          featured
                            ? "text-white"
                            : "text-[#01132B]"
                        }`}
                      >
                        {card.price}
                      </p>

                      <a
                        href={localizedPath(
                          language,
                          "/connect"
                        )}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-orange text-white transition-all duration-300 group-hover:translate-x-1"
                        aria-label={
                          language === "es"
                            ? `Contratar ${card.title}`
                            : `Hire ${card.title}`
                        }
                      >
                        <ArrowRight className="h-5 w-5" />
                      </a>

                    </div>

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   HOW IT WORKS
========================================================= */

function HowItWorks({
  language,
}: {
  language: RoleLanguage;
}) {
  const t = pageText[language];

  const steps = [
    {
      title: t.step1Title,
      body: t.step1Body,
    },
    {
      title: t.step2Title,
      body: t.step2Body,
    },
    {
      title: t.step3Title,
      body: t.step3Body,
    },
  ];

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="relative overflow-hidden rounded-[2.75rem] bg-[#01132B] px-6 py-12 sm:px-10 lg:px-14 lg:py-16">

          <div className="pointer-events-none absolute -right-40 -top-40 h-[420px] w-[420px] rounded-full bg-brand-orange/20 blur-3xl" />

          <div className="relative">

            <div className="mx-auto max-w-3xl text-center">

              <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">

                {t.hiringProcessPrefix}{" "}

                <span className="text-brand-orange">
                  {t.hiringProcessHighlight}
                </span>{" "}

                {t.hiringProcessSuffix}

              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-8 text-white/60">
                {t.hiringProcessDescription}
              </p>

            </div>

            <div className="relative mt-16">

              <div className="absolute left-[16%] right-[16%] top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent md:block" />

              <div className="relative grid gap-5 md:grid-cols-3">

                {steps.map(
                  (step, index) => (
                    <div
                      key={step.title}
                      className="group"
                    >

                      <div className="relative z-10 mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#01132B] bg-brand-orange text-lg font-black text-white shadow-lg">
                        {index + 1}
                      </div>

                      <div className="h-full rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-brand-orange/25 group-hover:bg-white/[0.09]">

                        <h3 className="text-xl font-extrabold text-white">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm font-medium leading-7 text-white/55">
                          {step.body}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FULL SERVICE
========================================================= */

function FullServiceSolutions({
  language,
}: {
  language: RoleLanguage;
}) {
  const t = pageText[language];

  const cards = [
    {
      title: t.globalPayments,
      icon: (
        <Globe2 className="h-6 w-6" />
      ),
      desc: t.globalPaymentsBody,
    },

    {
      title: t.legalCompliance,
      icon: (
        <ShieldCheck className="h-6 w-6" />
      ),
      desc: t.legalComplianceBody,
    },

    {
      title: t.comprehensiveHR,
      icon: (
        <Users className="h-6 w-6" />
      ),
      desc: t.comprehensiveHRBody,
    },
  ];

  return (
    <section className="py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 text-center">

          <h2 className="text-4xl font-black tracking-tight text-[#01132B] sm:text-5xl">

            {t.fullServicePrefix}{" "}

            <GradientText>
              {t.fullServiceHighlight}
            </GradientText>

          </h2>

        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">

          {cards.map(
            (card, index) => (
              <div
                key={card.title}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[2rem]
                  border
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                  ${
                    index === 0
                      ? "border-brand-orange/20 bg-gradient-to-br from-brand-orange/10 via-white to-brand-gold/10 lg:row-span-1"
                      : "border-slate-200 bg-white"
                  }
                `}
              >

                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-orange text-white shadow-lg">
                  {card.icon}
                </div>

                <h3 className="text-2xl font-black text-[#01132B]">
                  {card.title}
                </h3>

                <p className="mt-4 max-w-md text-sm font-medium leading-7 text-slate-600">
                  {card.desc}
                </p>

                <div className="pointer-events-none absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-brand-orange/10 transition-transform duration-500 group-hover:scale-125" />

              </div>
            )
          )}

        </div>

        <div className="mt-10 text-center">

          <a
            href={localizedPath(
              language,
              "/connect"
            )}
            className="group inline-flex items-center gap-2 rounded-full bg-[#01132B] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
          >

            {t.startHiring}

            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />

          </a>

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   FAQ
========================================================= */

function RoleFAQ({
  config,
  language,
}: {
  config: RolePageConfig;
  language: RoleLanguage;
}) {
  const [open, setOpen] =
    useState<number | null>(0);

  const t = pageText[language];

  return (
    <section className="bg-gradient-to-b from-white to-orange-50/50 py-24">

      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-12">

          <h2 className="text-4xl font-black tracking-tight text-[#01132B] sm:text-5xl">

            {t.faqPrefix}{" "}

            <GradientText>
              {t.faqHighlight}
            </GradientText>

          </h2>

        </div>

        <div className="space-y-3">

          {config.faq.map(
            (faq, index) => {
              const isOpen =
                open === index;

              return (
                <div
                  key={faq.q}
                  className={`
                    overflow-hidden
                    rounded-[1.4rem]
                    border
                    transition-all
                    duration-300
                    ${
                      isOpen
                        ? "border-brand-orange/25 bg-white shadow-[0_15px_40px_rgba(1,19,43,0.08)]"
                        : "border-slate-200 bg-white/75"
                    }
                  `}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setOpen(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    aria-expanded={isOpen}
                  >

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-xl
                        text-xs
                        font-black
                        ${
                          isOpen
                            ? "bg-brand-orange text-white"
                            : "bg-brand-orange/10 text-brand-orange"
                        }
                      `}
                    >
                      {(index + 1)
                        .toString()
                        .padStart(
                          2,
                          "0"
                        )}
                    </span>

                    <span className="flex-1 text-sm font-extrabold leading-6 text-[#01132B] sm:text-base">
                      {faq.q}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        ${
                          isOpen
                            ? "border-brand-orange bg-brand-orange text-white"
                            : "border-slate-200 text-[#01132B]"
                        }
                      `}
                    >
                      <Plus
                        className={`h-4 w-4 transition-transform ${
                          isOpen
                            ? "rotate-45"
                            : ""
                        }`}
                      />
                    </span>

                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">

                      <p className="pb-6 pl-[76px] pr-6 text-sm font-medium leading-7 text-slate-600">
                        {faq.a}
                      </p>

                    </div>
                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </section>
  );
}

/* =========================================================
   CTA
========================================================= */

function PreFooterCTA({
  language,
}: {
  language: RoleLanguage;
}) {
  const t = pageText[language];

  return (
    <section className="px-6 pb-16 pt-12">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.75rem] bg-brand-orange px-6 py-14 text-center shadow-[0_25px_70px_rgba(249,115,22,0.22)] sm:px-10 sm:py-16">

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "42px 42px",
          }}
        />

        <div className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-white/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            {t.readyToHire}
          </h2>

          <div className="mt-9 flex flex-wrap justify-center gap-3">

            <a
              href={localizedPath(
                language,
                "/jobs"
              )}
              className="rounded-full border border-white/30 bg-white px-7 py-3.5 text-sm font-bold text-[#01132B] transition-all duration-300 hover:-translate-y-1"
            >
              {t.findJobs}
            </a>

            <a
              href={localizedPath(
                language,
                "/connect"
              )}
              className="group inline-flex items-center gap-2 rounded-full bg-[#01132B] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {t.hireTopTalent}

              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}