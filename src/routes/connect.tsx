import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  UploadCloud,
  CheckCircle2,
  Star,
  Clock,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export const Route = createFileRoute("/connect")({
  component: Connect,
});

function ConnectForm() {
  const [country, setCountry] = useState({
    flag: "🇺🇸",
    code: "+1",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { code: "+1", flag: "🇺🇸", name: "United States" },
    { code: "+1 ", flag: "🇨🇦", name: "Canada" },
    { code: "+52", flag: "🇲🇽", name: "Mexico" },
    { code: "+55", flag: "🇧🇷", name: "Brazil" },
    { code: "+54", flag: "🇦🇷", name: "Argentina" },
    { code: "+57", flag: "🇨🇴", name: "Colombia" },
    { code: "+51", flag: "🇵🇪", name: "Peru" },
    { code: "+56", flag: "🇨🇱", name: "Chile" },
    { code: "+593", flag: "🇪🇨", name: "Ecuador" },
    { code: "+502", flag: "🇬🇹", name: "Guatemala" },
    { code: "+591", flag: "🇧🇴", name: "Bolivia" },
    { code: "+506", flag: "🇨🇷", name: "Costa Rica" },
    { code: "+598", flag: "🇺🇾", name: "Uruguay" },
    { code: "+507", flag: "🇵🇦", name: "Panama" },
    { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
    { code: "+61", flag: "🇦🇺", name: "Australia" },
    { code: "+91", flag: "🇮🇳", name: "India" },
  ];

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Fast Turnaround",
      text: "Get a tailored shortlist of highly vetted candidates within 24 to 48 hours of your call.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Risk-Free Hiring",
      text: "Enjoy peace of mind with our 30-day replacement guarantee if the talent isn't a perfect match.",
    },
    {
      icon: <CheckCircle2 className="h-5 w-5" />,
      title: "Pre-Vetted Experts",
      text: "Every candidate passes rigorous technical skills and English proficiency tests before you ever see them.",
    },
  ];

  return (
    <section className="route-hero relative min-h-screen overflow-hidden bg-white py-24 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-52 top-0 h-[560px] w-[560px] rounded-full bg-brand-orange/10 blur-[130px]" />
        <div className="absolute -right-52 bottom-0 h-[560px] w-[560px] rounded-full bg-brand-gold/10 blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #01132B 1px, transparent 1px), linear-gradient(to bottom, #01132B 1px, transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        {/* LEFT SIDE */}
        <FadeIn
          direction="right"
          delay={0.15}
          className="lg:sticky lg:top-28"
        >
          <div className="relative overflow-hidden rounded-[2.75rem] bg-[#01132B] px-7 py-9 shadow-[0_30px_90px_rgba(1,19,43,0.22)] sm:px-10 sm:py-11">
            <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-brand-orange/20 blur-[90px]" />
            <div className="pointer-events-none absolute -bottom-28 -right-20 h-72 w-72 rounded-full bg-brand-gold/10 blur-[90px]" />

            <div className="relative">
              {/* Talent collage */}
              <div className="relative mb-10 h-[280px] sm:h-[330px]">
                <div className="absolute left-0 top-8 z-20 overflow-hidden rounded-[2rem] border-4 border-white/10 bg-white shadow-2xl transition duration-500 hover:-rotate-1 hover:scale-[1.03]">
                  <img
                    src="/real_worker_1.png"
                    alt="LATAM Remote Talent"
                    className="h-[220px] w-[190px] object-cover sm:h-[260px] sm:w-[220px]"
                  />

                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#01132B]/80 to-transparent px-4 pb-4 pt-12">
                    <p className="text-xs font-bold text-white">
                      LATAM Remote Talent
                    </p>
                  </div>
                </div>

                <div className="absolute right-4 top-0 z-10 overflow-hidden rounded-[1.6rem] border-4 border-white/10 bg-white shadow-xl rotate-[4deg] transition duration-500 hover:rotate-0 hover:scale-105">
                  <img
                    src="/real_worker_2.png"
                    alt="LATAM Remote Talent"
                    className="h-36 w-36 object-cover sm:h-40 sm:w-40"
                  />
                </div>

                <div className="absolute bottom-0 right-12 z-30 overflow-hidden rounded-[1.6rem] border-4 border-white/10 bg-white shadow-xl rotate-[-3deg] transition duration-500 hover:rotate-0 hover:scale-105">
                  <img
                    src="/real_worker_3.png"
                    alt="LATAM Remote Talent"
                    className="h-32 w-32 object-cover sm:h-36 sm:w-36"
                  />
                </div>

                <div className="absolute right-0 top-[145px] z-40 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-xl backdrop-blur-xl">
                  <p className="text-[10px] font-extrabold uppercase tracking-[0.16em] text-white/45">
                    Talent network
                  </p>

                  <p className="mt-1 text-xl font-black text-brand-orange">
                    LATAM
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/25 bg-brand-orange/10 px-4 py-2">
                <Star
                  className="h-4 w-4 text-brand-orange"
                  fill="currentColor"
                />

                <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
                  Top 1% LATAM Talent
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-5xl lg:text-[3.6rem]">
                Book a call to hire
                <br />
                <span className="text-brand-orange">top talent</span>
              </h1>

              <p className="mt-6 max-w-xl text-base font-medium leading-7 text-white/60">
                HireRapido's mission is to build products that enable the
                world's talent to earn, learn, and grow. Tell us what you need
                and we'll match you with the perfect fit.
              </p>

              {/* Benefits */}
              <div className="mt-9 space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="group flex gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition-all duration-300 hover:border-brand-orange/25 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange text-white shadow-lg">
                      {benefit.icon}
                    </div>

                    <div>
                      <h3 className="font-black text-white">
                        {benefit.title}
                      </h3>

                      <p className="mt-1 text-sm font-medium leading-6 text-white/50">
                        {benefit.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* FORM */}
        <FadeIn direction="left" delay={0.25}>
          <div className="relative overflow-hidden rounded-[2.75rem] border border-slate-200 bg-white p-6 shadow-[0_30px_80px_rgba(1,19,43,0.1)] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute -right-28 -top-28 h-64 w-64 rounded-full bg-brand-orange/5 blur-[70px]" />

            <div className="relative">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.16em] text-brand-orange">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Start hiring
                </div>

                <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#01132B] sm:text-4xl">
                  Tell us what you're looking for
                </h2>
              </div>

              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>

                  <Field>
                    <input
                      type="email"
                      placeholder="Work Email"
                      className="w-full bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>
                </div>

                <div className="flex gap-3">
                  {/* Country */}
                  <div
                    className="relative flex w-[42%] cursor-pointer items-center rounded-2xl border border-slate-200 bg-[#f8fafc] px-4 shadow-sm outline-none transition-all focus-within:border-brand-orange focus-within:ring-4 focus-within:ring-brand-orange/10"
                    tabIndex={0}
                    aria-expanded={isDropdownOpen}
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    onBlur={() =>
                      setTimeout(() => setIsDropdownOpen(false), 200)
                    }
                  >
                    <span className="mr-2 text-lg">
                      {country.flag}
                    </span>

                    <span className="text-sm font-black text-[#01132B]">
                      {country.code}
                    </span>

                    <span className="ml-auto text-[10px] text-muted-foreground">
                      ▼
                    </span>

                    {isDropdownOpen && (
                      <div className="absolute left-0 top-full z-50 mt-2 max-h-72 w-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl">
                        {countries.map((c, i) => (
                          <button
                            key={`${c.name}-${i}`}
                            type="button"
                            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition hover:bg-brand-orange/5"
                            onClick={(e) => {
                              e.stopPropagation();

                              setCountry({
                                flag: c.flag,
                                code: c.code,
                              });

                              setIsDropdownOpen(false);
                            }}
                          >
                            <span className="text-lg">{c.flag}</span>

                            <span className="flex-1 text-sm font-semibold text-[#01132B]">
                              {c.name}
                            </span>

                            <span className="text-xs font-bold text-muted-foreground">
                              {c.code}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  <Field className="flex-1">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      className="w-full bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field>
                    <input
                      type="text"
                      placeholder="Company Name"
                      className="w-full bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>

                  <Field>
                    <input
                      type="text"
                      placeholder="Monthly Salary Budget"
                      className="w-full bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>
                </div>

                {/* Tech Role */}
                <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
                  <p className="text-sm font-black text-[#01132B]">
                    Is this a tech role?{" "}
                    <span className="text-red-500">*</span>
                  </p>

                  <div className="mt-4 flex gap-3">
                    <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#01132B] transition hover:border-brand-orange/30">
                      <input
                        type="radio"
                        name="tech_role"
                        className="h-4 w-4 accent-brand-orange"
                      />
                      Yes
                    </label>

                    <label className="flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-bold text-[#01132B] transition hover:border-brand-orange/30">
                      <input
                        type="radio"
                        name="tech_role"
                        className="h-4 w-4 accent-brand-orange"
                      />
                      No
                    </label>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="mb-3 text-sm font-black text-[#01132B]">
                    Role Description
                  </p>

                  <Field>
                    <textarea
                      rows={4}
                      placeholder="Tell us a bit about the role(s) you are hiring for..."
                      className="w-full resize-none bg-transparent px-4 py-4 text-sm font-medium text-[#01132B] outline-none placeholder:text-muted-foreground"
                    />
                  </Field>
                </div>

                {/* Upload */}
                <div>
                  <div className="mb-3 flex items-center justify-between gap-4">
                    <p className="text-sm font-black text-[#01132B]">
                      Upload Job Description
                    </p>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold text-muted-foreground">
                      Optional
                    </span>
                  </div>

                  <div className="group relative overflow-hidden rounded-[2rem] border-2 border-dashed border-brand-orange/25 bg-brand-orange/[0.04] p-7 text-center transition-all duration-300 hover:border-brand-orange/50 hover:bg-brand-orange/[0.07]">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#01132B] text-brand-orange shadow-lg transition duration-300 group-hover:-translate-y-1 group-hover:bg-brand-orange group-hover:text-white">
                      <UploadCloud className="h-6 w-6" />
                    </div>

                    <p className="mt-4 text-sm font-black text-[#01132B]">
                      Click to upload or drag & drop
                    </p>

                    <p className="mt-1 text-xs font-medium text-muted-foreground">
                      PDF, DOCX, or TXT up to 10MB
                    </p>

                    <button
                      type="button"
                      className="mt-5 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-black text-[#01132B] shadow-sm transition hover:border-brand-orange/30 hover:text-brand-orange"
                    >
                      Browse Files
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-[#01132B] py-4 text-sm font-black text-white shadow-[0_14px_35px_rgba(1,19,43,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-brand-orange hover:shadow-xl"
                >
                  Submit Request

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Field({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-slate-200 bg-[#f8fafc] shadow-sm transition-all focus-within:border-brand-orange focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-orange/10 ${className}`}
    >
      {children}
    </div>
  );
}

function Connect() {
  return (
    <div className="bg-background">
      <main>
        <ConnectForm />
      </main>
    </div>
  );
}