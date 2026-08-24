import type {
  BilingualRolePageConfig,
} from "@/components/roles/RolePage";

import videoThumbnail from "@/assets/video_thumbnail.png";

export const accountantsRole: BilingualRolePageConfig = {
  shared: {
    heroPeople: [
      {
        image:
          "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=300",
        alt: "Finance professional",
      },
      {
        image:
          "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=300",
        alt: "Finance professional",
      },
      {
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=300",
        alt: "Finance professional",
      },
      {
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=300",
        alt: "Finance professional",
      },
    ],

    candidateAvatar:
      "https://i.pravatar.cc/150?u=alejandro",

    videoThumbnail,
  },

  en: {
    roleName: "Accountant",
    rolePlural: "Accountants",

    hero: {
      description:
        "HireRapido connects US companies with elite bookkeepers, CPAs, and financial analysts from Latin America. Streamline your finances and save up to 80% on senior talent.",
    },

    topCandidates: {
      description:
        "HireRapido connects you with top LatAm Accountants and Finance Professionals tailored to your needs. Our curated selection of professionals makes finding the perfect fit simple.",
    },

    candidate: {
      name: "Alejandro Silva",
      location: "Lima, Peru",
      title: "Senior Accountant",

      bio:
        "Hi! I'm a CPA based in Lima with 7 years of experience managing full-cycle accounting for US-based tech startups. I'm highly proficient in QuickBooks, Xero, and NetSuite.",

      questions: [
        {
          question:
            "Describe your experience with month-end close procedures.",
          time: "01:10 ⏵",
        },
        {
          question:
            "How do you handle discrepancies in financial reports?",
          time: "02:30 ⏸",
          answer:
            "When I spot a discrepancy, my first step is always to drill down into the sub-ledgers...",
        },
      ],
    },

    wealth: {
      highlightedText: "Finance Talent",

      paragraphs: [
        "Tap into our pool of 10,000+ candidates to hire top-tier Accountants, Bookkeepers, and Finance Managers. HireRapido enables US companies to reduce overhead and streamline financial operations without compromising on accuracy.",

        "Assemble a high-performing remote finance team and outpace competitors, all while staying budget-conscious.",
      ],
    },

    experienceLevels: [
      {
        num: "01",
        title: "Bookkeeper",
        desc:
          "Has at least 1-2 years of experience. Handles AP/AR, bank reconciliations, and daily transaction categorizations.",
      },
      {
        num: "02",
        title: "Staff Accountant",
        desc:
          "Has 3-4 years of experience or more. Proficient in month-end closes, journal entries, and preparing financial statements.",
      },
      {
        num: "03",
        title: "Senior Accountant / CPA",
        desc:
          "Has 5+ years of experience. Manages complex reporting, US GAAP compliance, and audits.",
      },
      {
        num: "04",
        title: "Financial Analyst (FP&A)",
        desc:
          "Has 4+ years of experience. Specializes in financial modeling, forecasting, budgeting, and strategic insights.",
      },
    ],

    compensation: {
      description:
        "Our unique blend of bespoke AI and human ingenuity helps us maintain our elite talent pool.",

      cards: [
        {
          title: "Bookkeeper",
          bg: "bg-green-50",
          price: "$1.4k/mo",
          bullets: [
            "Fundamental accounting and data entry experience",
            "2+ years of experience",
            "Understanding of AP/AR workflows",
            "Confident using QuickBooks, Xero, Bill.com",
          ],
        },
        {
          title: "Senior Accountant",
          bg: "bg-blue-50",
          price: "$2.2k/mo",
          bullets: [
            "Experienced in full-cycle accounting",
            "5+ years of experience",
            "Experienced in US GAAP",
            "Proficient in NetSuite, QuickBooks Advanced, Excel",
          ],
        },
        {
          title: "Financial Analyst",
          bg: "bg-amber-50",
          price: "$2.5k/mo",
          bullets: [
            "Experienced in corporate FP&A",
            "4+ years of experience",
            "Specialist skills in financial modeling",
            "Proficient in Excel, Tableau, PowerBI",
          ],
        },
      ],
    },

    faq: [
      {
        q:
          "Do HireRapido Accountants have experience working with US companies?",
        a:
          "Yes, our pre-vetted accountants frequently work with US-based companies and are highly experienced in US GAAP standards.",
      },
      {
        q:
          "What software will my Accountant be familiar with?",
        a:
          "Most of our accountants are proficient in QuickBooks, Xero, NetSuite, Bill.com, and advanced Excel.",
      },
      {
        q:
          "How soon can I start working with a HireRapido Accountant?",
        a:
          "You can hire and begin working with a finance professional in as little as 48 hours.",
      },
      {
        q:
          "Why hire a remote Accountant in LatAm?",
        a:
          "LatAm provides highly skilled financial talent in US-compatible time zones at a fraction of US hiring costs.",
      },
      {
        q:
          "How much does it cost to hire an Accountant?",
        a:
          "Our bookkeepers start at $1.4k/mo and senior accountants start at $2.2k/mo.",
      },
      {
        q:
          "How can I hire an Accountant with HireRapido?",
        a:
          "Browse our talent pool, interview candidates, and hire. HireRapido manages compliance and payroll.",
      },
    ],
  },

  es: {
    roleName: "Contador",
    rolePlural: "Contadores",

    hero: {
      description:
        "HireRapido conecta a empresas estadounidenses con contadores, CPAs y analistas financieros de primer nivel en América Latina. Optimiza tus finanzas y ahorra hasta un 80% en talento senior.",
    },

    topCandidates: {
      description:
        "HireRapido te conecta con los mejores contadores y profesionales financieros de Latinoamérica adaptados a tus necesidades. Nuestra selección cuidadosamente evaluada facilita encontrar al candidato ideal.",
    },

    candidate: {
      name: "Alejandro Silva",
      location: "Lima, Perú",
      title: "Contador Senior",

      bio:
        "Soy CPA con sede en Lima y cuento con 7 años de experiencia gestionando contabilidad integral para startups tecnológicas de Estados Unidos. Tengo amplia experiencia con QuickBooks, Xero y NetSuite.",

      questions: [
        {
          question:
            "Describe tu experiencia con los procesos de cierre de fin de mes.",
          time: "01:10 ⏵",
        },
        {
          question:
            "¿Cómo manejas las discrepancias en los informes financieros?",
          time: "02:30 ⏸",
          answer:
            "Cuando detecto una discrepancia, mi primer paso es revisar detalladamente los libros auxiliares...",
        },
      ],
    },

    wealth: {
      highlightedText: "Talento Financiero",

      paragraphs: [
        "Accede a nuestro grupo de más de 10,000 candidatos para contratar contadores, auxiliares contables y gerentes financieros de primer nivel. HireRapido permite a las empresas estadounidenses reducir gastos y optimizar sus operaciones financieras sin comprometer la precisión.",

        "Construye un equipo financiero remoto de alto rendimiento y supera a tus competidores mientras mantienes tus costos bajo control.",
      ],
    },

    experienceLevels: [
      {
        num: "01",
        title: "Auxiliar Contable",
        desc:
          "Cuenta con al menos 1-2 años de experiencia. Gestiona cuentas por pagar y cobrar, conciliaciones bancarias y clasificación diaria de transacciones.",
      },
      {
        num: "02",
        title: "Contador",
        desc:
          "Cuenta con 3-4 años o más de experiencia. Experiencia en cierres mensuales, asientos contables y preparación de estados financieros.",
      },
      {
        num: "03",
        title: "Contador Senior / CPA",
        desc:
          "Cuenta con más de 5 años de experiencia. Gestiona informes complejos, cumplimiento de US GAAP y auditorías.",
      },
      {
        num: "04",
        title: "Analista Financiero (FP&A)",
        desc:
          "Cuenta con más de 4 años de experiencia. Especializado en modelos financieros, pronósticos, presupuestos y análisis estratégico.",
      },
    ],

    compensation: {
      description:
        "Nuestra combinación de inteligencia artificial propia y experiencia humana nos permite mantener una selección de talento de primer nivel.",

      cards: [
        {
          title: "Auxiliar Contable",
          bg: "bg-green-50",
          price: "$1.4k/mes",
          bullets: [
            "Experiencia básica en contabilidad y entrada de datos",
            "Más de 2 años de experiencia",
            "Conocimiento de cuentas por pagar y cobrar",
            "Experiencia con QuickBooks, Xero y Bill.com",
          ],
        },
        {
          title: "Contador Senior",
          bg: "bg-blue-50",
          price: "$2.2k/mes",
          bullets: [
            "Experiencia en contabilidad integral",
            "Más de 5 años de experiencia",
            "Experiencia con US GAAP",
            "Dominio de NetSuite, QuickBooks Advanced y Excel",
          ],
        },
        {
          title: "Analista Financiero",
          bg: "bg-amber-50",
          price: "$2.5k/mes",
          bullets: [
            "Experiencia en FP&A corporativo",
            "Más de 4 años de experiencia",
            "Especialización en modelos financieros",
            "Dominio de Excel, Tableau y PowerBI",
          ],
        },
      ],
    },

    faq: [
      {
        q:
          "¿Los contadores de HireRapido tienen experiencia trabajando con empresas estadounidenses?",
        a:
          "Sí. Nuestros contadores previamente evaluados trabajan frecuentemente con empresas estadounidenses y cuentan con experiencia en estándares US GAAP.",
      },
      {
        q:
          "¿Qué software conocen los contadores de HireRapido?",
        a:
          "La mayoría domina QuickBooks, Xero, NetSuite, Bill.com y Excel avanzado.",
      },
      {
        q:
          "¿Qué tan rápido puedo comenzar a trabajar con un contador de HireRapido?",
        a:
          "Puedes contratar y comenzar a trabajar con un profesional financiero en tan solo 48 horas.",
      },
      {
        q:
          "¿Por qué contratar un contador remoto en Latinoamérica?",
        a:
          "Latinoamérica ofrece profesionales financieros altamente capacitados en zonas horarias compatibles con Estados Unidos y a una fracción del costo.",
      },
      {
        q:
          "¿Cuánto cuesta contratar un contador?",
        a:
          "Nuestros auxiliares contables comienzan desde $1.4k al mes y nuestros contadores senior desde $2.2k al mes.",
      },
      {
        q:
          "¿Cómo puedo contratar un contador con HireRapido?",
        a:
          "Explora nuestro grupo de talentos, entrevista candidatos y contrata. HireRapido se encarga del cumplimiento legal y la nómina.",
      },
    ],
  },
};