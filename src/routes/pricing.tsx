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

export const Route = createFileRoute("/pricing")({
  component: Pricing,
});

const directHireFeatures = [
  "No deposits needed!",
  "Bring talents onto your team directly",
  "Hire in 48 hours",
  "Access to our self service platform!",
  "Pay a one time fee",
];

const monthlyFeatures = [
  "Hire on a monthly rolling basis.",
  "We manage all HR & onboarding",
  "We handle legal compliance and international payments.",
  "Replace your talent at any time",
  "Hire in 48 hours.",
];

const accountFeatures = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Extensive Talent Pool",
    desc: "Access a network of over 10,000 pre-vetted Latin American candidates.",
  },
  {
    icon: <Headphones className="h-5 w-5" />,
    title: "Premium White-Glove Support",
    desc: "Enjoy seamless hiring assistance from day one.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Dedicated Account Manager",
    desc: "Get personalized support from a hiring expert.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "End-to-End Hiring Guidance",
    desc: "Your account manager will assist you throughout the entire hiring process.",
  },
  {
    icon: <Globe2 className="h-5 w-5" />,
    title: "Candidate Shortlisting & Communication",
    desc: "We help you find and connect with the right talent.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Comprehensive HR & Compliance Services",
    desc: "We take care of HR operations and regulatory compliance.",
  },
  {
    icon: <CreditCard className="h-5 w-5" />,
    title: "International Payroll",
    desc: "We handle all cross-border payments at no extra cost.",
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
              Flexible hiring plans
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-black leading-[0.97] tracking-[-0.05em] text-[#01132B] sm:text-6xl lg:text-7xl">
            Unlock 10x savings
            <br />
            with elite{" "}
            <span className="text-gradient-brand">
              LatAm talent
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-8 text-muted-foreground">
            Explore HireRapido's pricing plans.
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
                    No deposit required!
                  </p>
                  <p className="mt-0.5 max-w-[220px] text-[10px] font-medium leading-4 text-muted-foreground">
                    There's no upfront fee for browsing our talent, only pay if
                    you decide to hire!
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  One-time hiring
                </p>

                <h2 className="mt-2 text-3xl font-black text-[#01132B]">
                  Direct Hire
                </h2>

                <p className="mt-2 text-sm font-medium text-muted-foreground">
                  Hire for a fixed one-time fee
                </p>
              </div>

              <div className="my-8 border-y border-slate-200 py-7">
                <h3 className="text-4xl font-black text-[#01132B]">
                  Get in touch
                </h3>

                <p className="mt-2 text-xs font-bold text-muted-foreground">
                  No hidden fees or expenses
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
                href="/#connect"
                className="group/button mt-9 flex w-full items-center justify-center gap-2 rounded-2xl border border-[#01132B] px-6 py-4 text-sm font-black text-[#01132B] transition-all duration-300 hover:bg-[#01132B] hover:text-white"
              >
                Hire Now
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
                  30 days risk free trial
                </div>

                <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-[10px] font-bold text-white/60">
                  Most flexible
                </span>
              </div>

              <div className="mt-8">
                <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Fully managed
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Monthly Staffing
                </h2>

                <p className="mt-2 text-sm font-medium text-white/55">
                  Hire on a flexible monthly basis.
                </p>
              </div>

              <div className="my-8 border-y border-white/10 py-7">
                <div className="flex flex-wrap items-end gap-2">
                  <span className="text-5xl font-black">
                    1,899 USD
                  </span>

                  <span className="pb-1 text-lg font-bold text-white/45">
                    /mo
                  </span>
                </div>

                <p className="mt-3 text-xs font-bold text-white/55">
                  average monthly cost per hire
                </p>

                <p className="mt-1 text-xs font-bold text-brand-orange">
                  Inclusive of all fees.
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
                href="/#connect"
                className="group/button mt-9 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-orange px-6 py-4 text-sm font-black text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#01132B]"
              >
                Hire Now
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
  ["Annual wage", "$70,000", "$14,388"],
  ["Health insurance", "$15,750", "$1,100 (optional)"],
  ["Social Security (6%)", "$4,850", "$0"],
  ["Parking/Equipment", "$2,850", "$0"],
  ["PTO", "$3,120", "$0"],
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
            Cost comparison
          </div>

          <h2 className="mt-5 text-4xl font-black text-white sm:text-5xl lg:text-6xl">
            Benefits of{" "}
            <span className="text-brand-orange">
              HireRapido
            </span>
          </h2>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.05] shadow-2xl backdrop-blur">
          <div className="hidden grid-cols-[1.25fr_1fr_1fr] border-b border-white/10 bg-white/[0.06] md:grid">
            <div className="px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-white/50">
              Costs (Avg.)
            </div>

            <div className="px-7 py-5 text-xs font-black uppercase tracking-[0.15em] text-white/50">
              Local Hire
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
                  Local Hire
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
                Save 86%
              </span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-3 rounded-2xl border border-brand-orange/20 bg-brand-orange/10 px-5 py-4 text-center">
          <Zap className="h-5 w-5 shrink-0 text-brand-orange" />

          <p className="text-sm font-bold text-white/70">
            Reduce your total annual hiring cost dramatically with HireRapido.
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
                Everything included
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight tracking-[-0.04em] text-[#01132B] sm:text-5xl">
              <span className="text-gradient-brand">
                HireRapido
              </span>{" "}
              accounts include:
            </h2>

            <p className="mt-5 max-w-md text-base font-medium leading-7 text-muted-foreground">
              More than access to talent — your account includes the support,
              infrastructure, and tools needed to hire across borders.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {accountFeatures.map((feature, index) => (
              <article
                key={feature.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/25 hover:shadow-[0_20px_45px_rgba(1,19,43,0.08)] ${
                  index === 0 || index === 6 ? "sm:col-span-2" : ""
                }`}
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-orange/5 blur-2xl transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#01132B] text-brand-orange shadow-sm transition group-hover:bg-brand-orange group-hover:text-white">
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
          <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-brand-orange/20 blur-[80px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-brand-gold/10 blur-[80px]" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-3xl font-black text-white sm:text-5xl">
              Ready to start saving on your next hire?
            </h2>

            <a
              href="/#connect"
              className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-brand-orange px-8 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white hover:text-[#01132B]"
            >
              Hire Now
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
        <FAQ />
      </main>
    </div>
  );
}