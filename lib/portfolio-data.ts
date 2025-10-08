import type {
  Availability,
  Contact,
  ExperienceItem,
  Metric,
  NavItem,
  ProjectItem,
  SkillCategory,
  SocialLink,
} from "@/types/portfolio";

export const navItems: readonly NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: readonly SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/mch-fauzy",
    target: "_blank",
    rel: "noreferrer",
    icon: "/icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mch-fauzy-11b1471a5fa/",
    target: "_blank",
    rel: "noreferrer",
    icon: "/icons/linkedin.svg",
  },
  { label: "Email", href: "mailto:mufa.work@gmail.com", icon: "/icons/gmail.svg" },
];

export const heroMetrics: readonly Metric[] = [
  {
    label: "Integrated systems",
    value: "5+",
    description: "critical logistics and human resources platforms shipped end-to-end",
  },
  {
    label: "API performance",
    value: "<200ms",
    description: "median response time after caching and query tuning",
  },
  {
    label: "Team enablement",
    value: "3 squads",
    description: "supported with reusable backend foundations and documentation",
  },
];

export const experience: readonly ExperienceItem[] = [
  {
    company: "DOT Indonesia",
    role: "Backend Engineer",
    employmentType: "Contract / Freelance",
    period: "Mar 2025 - Present",
    location: "Remote",
    summary:
      "Delivering secure access control and cargo workflows for the Java Integrated Industrial and Ports Estate (JIIPE) while co-building a React-powered project monitoring platform for entertainment initiatives.",
    achievements: [
      "Shaped REST APIs for user, role, and QR-based gate access that handle thousands of daily checkpoint scans without downtime.",
      "Implemented schema migrations, seed scripts, and observability hooks (Sentry, structured logs) to keep deployments predictable.",
      "Coordinated integrations with Customs CEISA and PTOSM, ensuring compliance for cross-system data validation.",
      "Delivered project monitoring workflows by connecting React dashboards to Golang services for real-time budget tracking.",
    ],
    tech: [
      "NestJS",
      "React",
      "Ant Design",
      "Golang",
      "GORM",
      "TypeScript",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Docker",
    ],
  },
  {
    company: "Move Byte",
    role: "Software Engineer",
    employmentType: "Contract",
    period: "Jan 2024 - Dec 2024",
    location: "Hybrid",
    summary:
      "Built payroll and credit products that automate compliance and streamline finance operations for Indonesian SMEs.",
    achievements: [
      "Delivered CRUD flows and audit-safe deletion rules that reduced support tickets for payroll admins by 35%.",
      "Created composable React hooks and access-aware layouts so designers could ship variants for every user role quickly.",
      "Resolved critical data-loss bugs by tightening transaction boundaries and Redis caching invalidation paths.",
    ],
    tech: [
      "Node.js",
      "Express",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Redis",
      "Docker",
    ],
  },
  {
    company: "Osindo Bahagia Bersama",
    role: "Backend Engineer",
    employmentType: "Contract",
    period: "Jul 2023 - Dec 2023",
    location: "Remote",
    summary:
      "Created APIs that help marketplaces moderate content and surface revenue insights for sellers.",
    achievements: [
      "Launched role-aware discussion workflows so support teams can moderate product questions without slowing shoppers.",
      "Implemented CSV ingestion and GMV aggregation tooling that eliminated weekly manual reporting for the analytics team.",
      "Documented endpoints and onboarding guides that cut partner integration time in half.",
    ],
    tech: [
      "Golang",
      "Go-chi",
      "GORM",
      "MySQL",
      "Node.js",
      "Redis",
      "Docker",
    ],
  },
];

export const featuredProjects: readonly ProjectItem[] = [
  {
    name: "Autogate SEZ Gresik",
    description:
      "Gate automation platform orchestrating cargo entry, customs validation, and QR-based access control across the JIIPE port.",
    impact:
      "Improved throughput for security checkpoints while meeting customs compliance requirements.",
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Docker"],
  },
  {
    name: "Project Monitoring System",
    description:
      "Budget oversight platform pairing React dashboards with Golang services to track entertainment initiatives end-to-end.",
    impact:
      "Supplied real-time visibility for finance leads by automating daily progress recalculations and spend alerts.",
    stack: ["React", "Ant Design", "Golang", "GORM", "PostgreSQL", "Redis", "BullMQ", "Docker"],
  },
  {
    name: "Payroll & Leave Operations",
    description:
      "Modular payroll suite with leave management, role-based dashboards, and reusable UI primitives for HR teams.",
    impact:
      "Cut manual reconciliation time by automating workflows and enforcing tax and benefits rules.",
    stack: ["React", "Node.js", "Prisma", "PostgreSQL", "Docker"],
  },
  {
    name: "Marketplace GMV Insights",
    description:
      "Data ingestion APIs and dashboards giving business teams near real-time GMV monitoring for multi-marketplace sellers.",
    impact:
      "Removed manual CSV crunching and unlocked daily revenue snapshots for operations.",
    stack: ["Golang", "MySQL", "Appsmith", "Docker"],
  },
  {
    name: "Clothing Store Web",
    description:
      "Full-stack ecommerce experiment showcasing authentication, product management, and checkout flows.",
    impact:
      "Demonstrates end-to-end architecture decisions from schema design to UI polish.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "shadcn/ui"],
    href: "https://falena-store-web.vercel.app/",
  },
  {
    name: "Payment Point Online Bank (PPOB) Server",
    description:
      "Service layer powering PPOB operations with secure CRUD endpoints, asset storage, and guarded partner access.",
    impact:
      "Centralised billing data and reduced onboarding friction by automating authentication and asset workflows.",
    stack: ["Node.js", "Express", "PostgreSQL", "JWT", "Cloud Storage"],
    href: "https://nutech-ppob-server.vercel.app/",
  },
  {
    name: "Online Shop Server",
    description:
      "Commerce-focused REST API managing users and catalogs with role-based safeguards.",
    impact:
      "Enabled new storefront experiments by providing a resilient backend with caching and RBAC baked in.",
    stack: ["Node.js", "Express", "PostgreSQL", "Redis", "JWT"],
    href: "https://voca-commerce-server.vercel.app/",
  },
];

export const skills: readonly SkillCategory[] = [
  {
    category: "Backend",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "TypeScript",
      "Golang",
      "GORM",
      "RESTful APIs",
      "TypeORM",
      "Prisma",
      "PostgreSQL",
      "MySQL",
      "Redis",
      ".NET (EF Core)",
    ],
  },
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Shadcn UI", "Ant Design"],
  },
  {
    category: "DevOps & Tooling",
    items: ["Docker", "Git", "BullMQ", "Sentry", "Appsmith"],
  },
  {
    category: "Practices",
    items: ["API design", "Documentation", "Observability", "Cross-team collaboration"],
  },
];

export const availability: Availability = {
  note:
    "Available for full-time or contract roles, leaning toward backend challenges yet comfortable owning frontend and full-stack delivery when teams need it.",
};

export const contact: Contact = {
  email: "mufa.work@gmail.com",
  location: "Surabaya, Indonesia",
};
