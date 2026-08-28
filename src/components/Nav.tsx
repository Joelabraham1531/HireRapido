import { useState, useEffect } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import hireRapidoLogo from "/assets/hire-rapido-new-logo.jpg";
const navTextEs: Record<string, string> = {
  "Find a Hire": "Encontrar talento",
  "How It Works": "Cómo funciona",
  "AI Hiring": "Contratación con IA",
  "Pricing": "Precios",
  "Jobs": "Empleos",
  "Hire Talent": "Contratar talento",
};

const categoryTextEs: Record<string, string> = {
  "Marketing": "Marketing",
  "Operations": "Operaciones",
  "Sales": "Ventas",
  "Healthcare": "Salud",
  "Legal": "Legal",
  "Finance & Accounting": "Finanzas y Contabilidad",
  "Tech Roles": "Roles tecnológicos",
  "Architecture": "Arquitectura",
};

const roleTextEs: Record<string, string> = {
  "Video Editors": "Editores de video",
  "Digital Marketing": "Marketing digital",
  "Community Managers": "Community managers",
  "Social Media Managers": "Gestores de redes sociales",
  "Paid Ads Specialists": "Especialistas en publicidad pagada",
  "Paid Media Specialists": "Especialistas en medios pagados",
  "Graphic Designers": "Diseñadores gráficos",
  "Copywriters": "Redactores publicitarios",
  "Content Creators": "Creadores de contenido",
  "Media Buyers": "Compradores de medios",
  "Meta Ads Specialists": "Especialistas en Meta Ads",
  "Google Ads Specialists": "Especialistas en Google Ads",

  "Virtual Assistants": "Asistentes virtuales",
  "Executive Assistant": "Asistente ejecutivo",
  "Project Managers": "Gerentes de proyectos",
  "Operations Managers": "Gerentes de operaciones",
  "HR Professionals": "Profesionales de RR. HH.",
  "Administrative Assistants": "Asistentes administrativos",
  "Personal Assistants": "Asistentes personales",
  "Recruiters": "Reclutadores",
  "Managers": "Gerentes",
  "Chiefs of Staff": "Jefes de gabinete",
  "Translators": "Traductores",

  "Sales Development": "Desarrollo de ventas",
  "SDRs": "SDRs",
  "BDRs": "BDRs",
  "Appointment Setters": "Agendadores de citas",
  "Customer Support": "Soporte al cliente",
  "Growth Leads": "Líderes de crecimiento",
  "HubSpot Specialists": "Especialistas en HubSpot",
  "SEO Specialist": "Especialista SEO",

  "Medical Assistants": "Asistentes médicos",
  "Medical Interpreters": "Intérpretes médicos",
  "Medical Administrators": "Administradores médicos",
  "Medical Billing Specialists": "Especialistas en facturación médica",
  "Medical Intake Specialists": "Especialistas en admisión médica",
  "Medical Practitioners": "Profesionales médicos",
  "Medical Representatives": "Representantes médicos",
  "Virtual Healthcare Assistants": "Asistentes virtuales de salud",
  "Medical Receptionists": "Recepcionistas médicos",
  "Medical Scribes": "Escribas médicos",
  "Medical Coders": "Codificadores médicos",
  "Insurance Verification Specialists": "Especialistas en verificación de seguros",
  "Medical Eligibility Specialists": "Especialistas en elegibilidad médica",
  "Prior Authorization Coordinators": "Coordinadores de autorización previa",
  "Medical Billing Coordinators": "Coordinadores de facturación médica",
  "Patient Care Specialists": "Especialistas en atención al paciente",
  "Patient Care Coordinators": "Coordinadores de atención al paciente",

  "Paralegals": "Paralegales",
  "Legal Assistants": "Asistentes legales",
  "Legal Secretaries": "Secretarios legales",
  "Legal Intake Specialists": "Especialistas en admisión legal",
  "Lawyers": "Abogados",

  "Accountants": "Contadores",
  "Finance Professionals": "Profesionales de finanzas",
  "Bookkeepers": "Auxiliares contables",
  "Auditors": "Auditores",
  "CPAs": "CPAs",
  "GAAP Accountants": "Contadores GAAP",

  "Developers": "Desarrolladores",
  "DevOps Engineers": "Ingenieros DevOps",
  "Data Scientists": "Científicos de datos",
  "AI Engineers": "Ingenieros de IA",
  "QA Engineers": "Ingenieros QA",
  "Tech Support": "Soporte técnico",
  "UX Designers": "Diseñadores UX",
  "Product Designers": "Diseñadores de producto",
  "IT Managers": "Gerentes de TI",

  "Architects": "Arquitectos",
  "CAD Drafters": "Dibujantes CAD",
  "Estimators": "Estimadores",
};

const tr = (value: string, isSpanish: boolean) =>
  isSpanish ? navTextEs[value] ?? categoryTextEs[value] ?? roleTextEs[value] ?? value : value;


export const megaMenuCategories = [
  {
    title: "Marketing",
    roles: ["Video Editors","Digital Marketing","Community Managers","Social Media Managers","Paid Ads Specialists","Paid Media Specialists","Graphic Designers","Copywriters","Content Creators","Media Buyers","Meta Ads Specialists","Google Ads Specialists"],
  },
  {
    title: "Operations",
    roles: ["Virtual Assistants","Executive Assistant","Project Managers","Operations Managers","HR Professionals","Administrative Assistants","Personal Assistants","Recruiters","Managers","Chiefs of Staff","Translators"],
  },
  {
    title: "Sales",
    roles: ["Sales Development","SDRs","BDRs","Appointment Setters","Customer Support","Growth Leads","HubSpot Specialists","SEO Specialist"],
  },
  {
    title: "Healthcare",
    roles: ["Medical Assistants","Medical Interpreters","Medical Administrators","Medical Billing Specialists","Medical Intake Specialists","Medical Practitioners","Medical Representatives","Virtual Healthcare Assistants","Medical Receptionists","Medical Scribes","Medical Coders","Insurance Verification Specialists","Medical Eligibility Specialists","Prior Authorization Coordinators","Medical Billing Coordinators","Patient Care Specialists","Patient Care Coordinators"],
  },
  {
    title: "Legal",
    roles: ["Paralegals","Legal Assistants","Legal Secretaries","Legal Intake Specialists","Lawyers"],
  },
  {
    title: "Finance & Accounting",
    roles: ["Accountants","Finance Professionals","Bookkeepers","Auditors","CPAs","GAAP Accountants"],
  },
  {
    title: "Tech Roles",
    roles: ["Developers","DevOps Engineers","Data Scientists","AI Engineers","QA Engineers","Tech Support","UX Designers","Product Designers","IT Managers"],
  },
  {
    title: "Architecture",
    roles: ["Architects","CAD Drafters","Estimators"],
  },
];

export const otherNavLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "AI Hiring", href: "/ai-hiring" },
  { label: "Pricing", href: "/pricing" },
];

const getRoleLink = (role: string) => {
  const customLinks: Record<string, string> = {
    "Video Editors": "/hire-latam-video-editors",
    "Virtual Assistants": "/hire-latam-virtual-assistants",
    "Sales Development": "/hire-latam-sales-development",
    "Medical Assistants": "/hire-latam-medical-assistants",
    "Accountants": "/hire-latam-accountants",
    "Developers": "/hire-latam-developers",
    "Architects": "/hire-latam-architects",
  };
  return customLinks[role] || null;
};

function MegaMenu({ 
  onMouseEnter, 
  onMouseLeave, 
  isSpanish, 
}: { 
  onMouseEnter: () => void; 
  onMouseLeave: () => void; 
  isSpanish: boolean; 
}) { 
  const [activeCategory, setActiveCategory] = useState( 
    megaMenuCategories[0].title 
  ); 
 
  const selectedCategory = 
    megaMenuCategories.find((cat) => cat.title === activeCategory) ?? 
    megaMenuCategories[0]; 
 
  return ( 
    <div 
      onMouseEnter={onMouseEnter} 
      onMouseLeave={onMouseLeave} 
      className=" 
        portal-mega 
        fixed left-1/2 top-[100px] z-50 
        w-[calc(100vw-2rem)] 
        max-w-[1180px] 
        -translate-x-1/2 
        overflow-hidden 
        rounded-[1.75rem] 
        border border-border 
        bg-white 
        shadow-[0_30px_80px_rgba(0,0,0,0.12)] 
      " 
    > 
      <div className="grid lg:grid-cols-[260px_1fr]"> 
        {/* LEFT CATEGORY MENU */} 
        <div className="border-b border-border bg-muted/30 p-3 lg:border-b-0 lg:border-r lg:p-4"> 
          <div className="space-y-1"> 
            {megaMenuCategories.map((cat) => { 
              const isActive = activeCategory === cat.title; 
 
              return ( 
                <button 
                  key={cat.title} 
                  type="button" 
                  onMouseEnter={() => setActiveCategory(cat.title)} 
                  onFocus={() => setActiveCategory(cat.title)} 
                  onClick={() => setActiveCategory(cat.title)} 
                  className={` 
                    group flex w-full items-center justify-between 
                    rounded-xl px-4 py-3 
                    text-left text-sm font-semibold 
                    transition-all duration-200 
                    ${ 
                      isActive 
                        ? "bg-brand-orange text-white shadow-sm" 
                        : "text-foreground hover:bg-brand-orange/10 hover:text-brand-orange" 
                    } 
                  `} 
                > 
                  <span>{tr(cat.title, isSpanish)}</span> 
 
                  <span 
                    className={` 
                      text-lg transition-transform duration-200 
                      ${isActive ? "translate-x-0.5" : "group-hover:translate-x-0.5"} 
                    `} 
                  > 
                    → 
                  </span> 
                </button> 
              ); 
            })} 
          </div> 
 
          {/* Bottom left CTA */} 
          <div className="mt-5 border-t border-border pt-5"> 
            <p className="px-4 text-[10px] font-extrabold uppercase tracking-[0.18em] text-muted-foreground"> 
              {isSpanish 
                ? "¿Quieres contratar un equipo?" 
                : "Want to hire a full team?"} 
            </p> 
 
            <Link 
              to={isSpanish ? "/es/connect" : "/connect"} 
              className=" 
                mt-2 flex items-center gap-2 
                px-4 text-sm font-bold 
                text-brand-orange 
                transition hover:gap-3 
              " 
            > 
              {isSpanish ? "Contratar un equipo" : "Hire a Team"} 
              <span>→</span> 
            </Link> 
          </div> 
        </div> 
 
        {/* RIGHT CONTENT */} 
        <div className="min-w-0 bg-white p-6 sm:p-8"> 
          {/* Header */} 
          <div className="flex items-end justify-between gap-6 border-b border-border pb-5"> 
            <div> 
              <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-orange"> 
                {isSpanish ? "Contratar talento" : "Hire Talent"} 
              </p> 
 
              <h3 className="mt-2 text-xl font-extrabold text-foreground"> 
                {tr(selectedCategory.title, isSpanish)} 
              </h3> 
            </div> 
 
            <Link 
              to={isSpanish ? "/es" : "/"} 
              hash="talent" 
              className=" 
                hidden items-center gap-2 
                text-sm font-bold text-brand-orange 
                transition hover:gap-3 
                sm:flex 
              " 
            > 
              {isSpanish ? "Ver todos" : "View all"} 
              <span>→</span> 
            </Link> 
          </div> 
 
          {/* ROLES */} 
          <div className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3"> 
            {[...selectedCategory.roles]
              .sort((a, b) =>
                tr(a, isSpanish).localeCompare(
                  tr(b, isSpanish),
                  isSpanish ? "es" : "en",
                  { sensitivity: "base" }
                )
              )
              .map((role) => { 
                const linkUrl = getRoleLink(role); 
 
                return ( 
                  <Link 
                    key={role} 
                    to={ 
                      isSpanish 
                        ? linkUrl 
                          ? `/es${linkUrl}` 
                          : "/es" 
                        : linkUrl 
                          ? linkUrl 
                          : "/" 
                    } 
                    hash={linkUrl ? "" : "talent"} 
                    className=" 
                      group flex items-center justify-between 
                      rounded-xl px-2 py-3 
                      text-sm font-medium text-muted-foreground 
                      transition-all duration-200 
                      hover:bg-brand-orange/5 
                      hover:text-brand-orange 
                    " 
                  > 
                    <span>{tr(role, isSpanish)}</span> 
 
                    <span 
                      className=" 
                        ml-3 translate-x-[-4px] 
                        text-brand-orange 
                        opacity-0 
                        transition-all duration-200 
                        group-hover:translate-x-0 
                        group-hover:opacity-100 
                      " 
                    > 
                      → 
                    </span> 
                  </Link> 
                ); 
              })} 
          </div> 
 
          {/* Mobile view all */} 
          <Link 
            to={isSpanish ? "/es" : "/"} 
            hash="talent" 
            className=" 
              mt-6 flex items-center gap-2 
              border-t border-border pt-5 
              text-sm font-bold text-brand-orange 
              sm:hidden 
            " 
          > 
            {isSpanish ? "Ver todos" : "View all"} → 
          </Link> 
        </div> 
      </div> 
    </div> 
  ); 
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileFindOpen, setMobileFindOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(
    megaMenuCategories[0].title
  );

  const [showMega, setShowMega] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const megaTimerRef = useState<ReturnType<typeof setTimeout> | null>(null);
  
  const routerState = useRouterState();

  const isSpanish = routerState.location.pathname === "/es" || routerState.location.pathname.startsWith("/es/");
  const localizedPath = (path: string) => {
    if (!isSpanish) return path;
    if (path === "/") return "/es";
    return `/es${path}`;
  };

  const languagePath = isSpanish
    ? routerState.location.pathname.replace(/^\/es(?=\/|$)/, "") || "/"
    : `/es${routerState.location.pathname === "/" ? "" : routerState.location.pathname}`;
  const languageHash = routerState.location.hash?.replace(/^#/, "") || "";
  const mobileSelectedCategory =
  megaMenuCategories.find((cat) => cat.title === mobileCategory) ??
  megaMenuCategories[0];

  const openMega = () => {
    if (megaTimerRef[0]) clearTimeout(megaTimerRef[0]);
    setShowMega(true);
  };
  const closeMega = () => {
    megaTimerRef[1](setTimeout(() => setShowMega(false), 150) as unknown as null);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 36);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#fbfcfe]/90 px-2 pt-2 backdrop-blur-xl sm:px-3 sm:pt-3">
      <div
        className={`portal-nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled ? "shadow-elev" : ""
        }`}
      >
       <Link
  to={localizedPath("/")}
  className="flex shrink-0 items-center gap-2.5 rounded-xl px-1.5 py-1 sm:gap-3"
>
  <img
    src={hireRapidoLogo}
    alt="Hire Rápido"
    className="h-11 w-auto object-contain sm:h-12 lg:h-14"
  />

  <div
    className="flex items-center whitespace-nowrap italic leading-none"
    style={{
      fontFamily: '"Arial Black", "Arial", sans-serif',
      
      fontWeight: 900,
      letterSpacing: "-0.055em",
    }}
  >
    <span className="text-[17px] text-[#001A3A] sm:text-[20px] lg:text-[23px]">
      Hire
    </span>

    <span className="text-[17px] text-[#FF5A00] sm:text-[20px] lg:text-[23px]">
      Rápido
    </span>
  </div>
</Link>

        <nav className="hidden items-center rounded-2xl border border-border/80 bg-white/70 p-1 text-sm font-semibold lg:flex">
          <div className="relative" onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              className={`flex items-center gap-1.5 rounded-xl px-4 py-2.5 transition-all duration-200 ${
                showMega ? "bg-amber-50 text-brand-orange" : "hover:bg-muted/70"
              }`}
            >
              {tr("Find a Hire", isSpanish)}
              <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-300 ${showMega ? "rotate-180" : ""}`} />
            </button>
            {showMega && <MegaMenu onMouseEnter={openMega} onMouseLeave={closeMega} isSpanish={isSpanish} />}
          </div>

          {otherNavLinks.map((link) => {
            const localizedHref = localizedPath(link.href);
            const isActive =
              routerState.location.pathname === localizedHref ||
              (link.href === "/how-it-works" && routerState.location.pathname.startsWith(localizedHref));
            return (
              <Link
                key={link.label}
                to={localizedPath(link.href.startsWith("/") && link.href.includes("#") ? "/" : link.href)}
                hash={link.href.includes("#") ? link.href.split("#")[1] : ""}
                onMouseEnter={() => setHoveredLink(link.href)}
                onMouseLeave={() => setHoveredLink(null)}
                className={`rounded-xl px-4 py-2.5 transition-all duration-200 ${
                  hoveredLink === link.href || isActive
                    ? "bg-amber-50 text-brand-orange"
                    : "hover:bg-muted/70"
                }`}
              >
                {tr(link.label, isSpanish)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <Link
            to={localizedPath("/jobs")}
            className="hidden rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold transition hover:border-brand-orange/40 hover:text-brand-orange lg:inline-flex"
          >
            {tr("Jobs", isSpanish)}
          </Link>
          <Link
            to={localizedPath("/connect")}
            className="hidden rounded-xl bg-foreground px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 lg:inline-flex"
          >
            {tr("Hire Talent", isSpanish)}
          </Link>
          <Link
            to={languagePath}
            hash={languageHash}
            className="flex shrink-0 items-center gap-1.5 rounded-xl border border-border bg-white px-2.5 py-2.5 text-xs font-semibold transition hover:border-brand-orange/40 hover:text-brand-orange sm:px-3"
            aria-label={isSpanish ? "Switch to English" : "Cambiar a Español"}
            title={isSpanish ? "Switch to English" : "Cambiar a Español"}
          >
            <Globe2 className="h-3.5 w-3.5" />
            <span>{isSpanish ? "English" : "Español"}</span>
          </Link>
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white transition hover:bg-muted lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
  className={`mx-auto max-w-7xl transition-all duration-300 lg:hidden ${
    mobileOpen
      ? "max-h-[80vh] overflow-y-auto pt-2"
      : "max-h-0 overflow-hidden"
  }`}
>
  <nav className="portal-nav-shell rounded-2xl p-3">
    {/* FIND A HIRE */}
    <button
      type="button"
      onClick={() => setMobileFindOpen((open) => !open)}
      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
        mobileFindOpen
          ? "bg-amber-50 text-brand-orange"
          : "hover:bg-amber-50 hover:text-brand-orange"
      }`}
    >
      <span>{tr("Find a Hire", isSpanish)}</span>

      <ChevronDown
        className={`h-4 w-4 transition-transform duration-300 ${
          mobileFindOpen ? "rotate-180" : ""
        }`}
      />
    </button>

    {/* MOBILE FIND A HIRE MENU */}
    <div
      className={`overflow-hidden transition-all duration-300 ${
        mobileFindOpen
          ? "max-h-[1200px] opacity-100"
          : "max-h-0 opacity-0"
      }`}
    >
      <div className="mt-2 rounded-2xl border border-border bg-white p-3">
        {/* CATEGORIES */}
        <div className="flex gap-2 overflow-x-auto pb-3">
          {megaMenuCategories.map((cat) => {
            const isActive = mobileCategory === cat.title;

            return (
              <button
                key={cat.title}
                type="button"
                onClick={() => setMobileCategory(cat.title)}
                className={`shrink-0 rounded-xl px-3 py-2 text-xs font-bold transition ${
                  isActive
                    ? "bg-brand-orange text-white"
                    : "bg-muted/60 text-foreground hover:bg-brand-orange/10 hover:text-brand-orange"
                }`}
              >
                {tr(cat.title, isSpanish)}
              </button>
            );
          })}
        </div>

        {/* CATEGORY TITLE */}
        <div className="border-t border-border pt-4">
          <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-brand-orange">
            {isSpanish ? "Contratar talento" : "Hire Talent"}
          </p>

          <h3 className="mt-1 text-base font-extrabold text-foreground">
            {tr(mobileSelectedCategory.title, isSpanish)}
          </h3>
        </div>

        {/* ROLES */}
        <div className="mt-3 grid grid-cols-1 gap-1 sm:grid-cols-2">
          {[...mobileSelectedCategory.roles]
            .sort((a, b) =>
              tr(a, isSpanish).localeCompare(
                tr(b, isSpanish),
                isSpanish ? "es" : "en",
                { sensitivity: "base" }
              )
            )
            .map((role) => {
              const linkUrl = getRoleLink(role);

              return (
                <Link
                  key={role}
                  to={
                    isSpanish
                      ? linkUrl
                        ? `/es${linkUrl}`
                        : "/es"
                      : linkUrl
                        ? linkUrl
                        : "/"
                  }
                  hash={linkUrl ? "" : "talent"}
                  onClick={() => {
                    setMobileOpen(false);
                    setMobileFindOpen(false);
                  }}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition hover:bg-brand-orange/5 hover:text-brand-orange"
                >
                  <span>{tr(role, isSpanish)}</span>
                  <span className="text-brand-orange">→</span>
                </Link>
              );
            })}
        </div>

        {/* VIEW ALL */}
        <Link
          to={isSpanish ? "/es" : "/"}
          hash="talent"
          onClick={() => {
            setMobileOpen(false);
            setMobileFindOpen(false);
          }}
          className="mt-3 flex items-center justify-between border-t border-border px-3 pt-4 text-sm font-bold text-brand-orange"
        >
          {isSpanish ? "Ver todos" : "View all"}
          <span>→</span>
        </Link>
      </div>
    </div>

    {/* EXISTING NAV LINKS */}
    {otherNavLinks.map((link) => (
      <Link
        key={link.label}
        to={localizedPath(
          link.href.startsWith("/") && link.href.includes("#")
            ? "/"
            : link.href
        )}
        hash={link.href.includes("#") ? link.href.split("#")[1] : ""}
        onClick={() => setMobileOpen(false)}
        className="flex items-center rounded-xl px-4 py-3 text-sm font-semibold transition hover:bg-amber-50 hover:text-brand-orange"
      >
        {tr(link.label, isSpanish)}
      </Link>
    ))}

    <div className="mt-2 grid gap-2 border-t border-border pt-3 sm:grid-cols-2">
      <Link
        to={localizedPath("/jobs")}
        onClick={() => setMobileOpen(false)}
        className="w-full rounded-xl border border-border bg-white px-4 py-3 text-center text-sm font-semibold transition hover:border-brand-orange/40 hover:text-brand-orange"
      >
        {tr("Jobs", isSpanish)}
      </Link>

      <Link
        to={localizedPath("/connect")}
        onClick={() => setMobileOpen(false)}
        className="w-full rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-primary-foreground transition hover:opacity-90"
      >
        {tr("Hire Talent", isSpanish)}
      </Link>
    </div>
  </nav>
</div>
    </header>
  );
}
