import hireRapidoLogo from "@/assets/hire-rapido-logo.jpg";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";

export function Footer() {
  const routerState = useRouterState();

  const isSpanish =
    routerState.location.pathname === "/es" ||
    routerState.location.pathname.startsWith("/es/");

  // Keeps internal links in the selected language
  const localizedPath = (path: string) => {
    if (!isSpanish) return path;

    if (path === "/") return "/es";

    return `/es${path}`;
  };

  return (
    <footer className="portal-tint border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-5 lg:gap-8">

          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <Link
              to={localizedPath("/")}
              className="flex items-center"
            >
              <img
                src={hireRapidoLogo}
                alt="HireRapido"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-foreground max-w-xs font-medium leading-relaxed">
              {isSpanish
                ? "El marketplace de talento impulsado por IA más grande de Latinoamérica, conectando empresas de EE. UU. con talento excepcional de LatAm."
                : "LatAm's largest AI-powered talent marketplace, matching US companies with elite LatAm talent."}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 items-center text-foreground">
              <a
                href="#"
                aria-label="Facebook"
                className="hover:text-brand-gold transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-brand-gold transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-brand-gold transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-brand-gold transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">
              {isSpanish ? "Plataforma" : "Platform"}
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>
                <Link
                  to={localizedPath("/terms")}
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Términos de Servicio"
                    : "Terms of Service"}
                </Link>
              </li>

              <li>
                <Link
                  to={localizedPath("/privacy")}
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Política de Privacidad"
                    : "Privacy Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground">
              {isSpanish ? "Recursos" : "Resources"}
            </h4>

            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Contrata de nuestra base de talento"
                    : "Hire From Our Talent Pool"}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Búsqueda de talento fuera de nuestra base"
                    : "Out-Of-Pool Talent Search"}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Plataforma de contratación autoservicio"
                    : "Self-Service Hiring Platform"}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Contratación empresarial"
                    : "Enterprise Hiring"}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Contratar talento latinoamericano"
                    : "Hire Latin American Talent"}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-brand-gold transition-colors"
                >
                  {isSpanish
                    ? "Reseña y alternativas a Athena"
                    : "Athena Review & Alternatives"}
                </a>
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="font-bold text-foreground">
                {isSpanish ? "Especialidades" : "Skills"}
              </h4>

              <ul className="space-y-3 text-sm text-muted-foreground font-medium">
                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar SDRs"
                      : "Hire SDRs"}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar talento LATAM en ventas y atención al cliente"
                      : "Hire LATAM Sales & Customer Service"}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar talento LATAM en marketing"
                      : "Hire LATAM Marketing"}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar talento LATAM en operaciones"
                      : "Hire LATAM Operations"}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar talento LATAM en contabilidad"
                      : "Hire LATAM Accounting"}
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="hover:text-brand-gold transition-colors"
                  >
                    {isSpanish
                      ? "Contratar talento LATAM en salud"
                      : "Hire LATAM Healthcare"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-border pt-8 text-xs font-semibold text-muted-foreground">
          <p>
            © {new Date().getFullYear()} HireRapido
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              to={localizedPath("/terms")}
              className="hover:text-foreground transition-colors"
            >
              {isSpanish
                ? "Términos de Servicio"
                : "Terms of Service"}
            </Link>

            <Link
              to={localizedPath("/privacy")}
              className="hover:text-foreground transition-colors"
            >
              {isSpanish
                ? "Política de Privacidad"
                : "Privacy Policy"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}