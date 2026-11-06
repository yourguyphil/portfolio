export const site = {
  name: "Philips Nguyen",
  role: "Backend Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://philipsnguyen.com",
  location: "Atlanta, GA",
  github: "https://github.com/yourguyphil",
  linkedin: "https://www.linkedin.com/in/philips-nguyen/",
  resume: "/PhilipsNguyenResume.pdf",
  formEndpoint:
    process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
    "https://formspree.io/philips.nguyen@veym.net",
};

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const stats = [
  { value: "7+", label: "Years engineering" },
  { value: "6,000+", label: "Members on platforms I built" },
  { value: "Finance & Retail", label: "Industries" },
];

export const volunteering = [
  "Volunteer Technology Regional Team Lead for VEYM (non-profit Vietnamese Eucharistic Youth Movement)",
  "Volunteer VEYM Chapter Vice President of Academic Affairs",
];

export const skills: { title: string; items: string[] }[] = [
  {
    title: "Languages",
    items: ["Java", "C#", "SQL", "JavaScript / TypeScript", "YAML"],
  },
  {
    title: "Frameworks & Platforms",
    items: [
      "Spring Boot",
      ".NET Core / .NET MVC",
      "React",
      "Next.js",
      "AngularJS",
      "OpenAPI / gRPC",
      "ELK Stack",
      "Unity / Godot (side projects)",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "Google Cloud Platform (GKE, Pub/Sub, Cloud Run, Cloud Storage)",
      "Azure App Services, Azure B2C, Azure Pipelines",
      "Docker / Kubernetes / Terraform",
      "Jenkins / GitLab CI / GitHub Actions",
      "Kafka",
      "DataDog / Grafana / Prometheus / ELK Stack",
      "SonarQube (code quality & static analysis)",
    ],
  },
  {
    title: "Databases",
    items: ["SQL Server", "MongoDB", "Redis"],
  },
  {
    title: "Practices",
    items: [
      "Agile Scrum",
      "CI/CD",
      "Microservices Architecture",
      "Performance Optimization & Scalability",
      "Monitoring & Alerting",
      "Resiliency Engineering",
      "Root Cause Analysis & Incident Response",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  image: string;
  /** Pixel art should not be smoothed when scaled. */
  pixelArt?: boolean;
  featured?: boolean;
  badge?: string;
  description: string[];
  stack: string[];
  links: { label: string; href: string; event: string }[];
};

export const projects: Project[] = [
  {
    slug: "veym-membership",
    title: "VEYM Membership Platform",
    image: "/projects/veym-membership.webp",
    description: [
      "Led the design and development of a full-stack HR membership system for VEYM, serving 6,000+ members nationwide.",
      "Centralized authentication, hierarchy, reporting, and role-based access control with Azure B2C and .NET Core.",
    ],
    stack: ["SQL", ".NET Core", "Next.js"],
    links: [
      { label: "Go to Login Page", href: "https://members.veym.net/", event: "Project VEYM Membership" },
      { label: "API Documentation", href: "https://membershipsystem.veym.net/", event: "Project VEYM API Docs" },
    ],
  },
  {
    slug: "stripe2db",
    title: "Stripe2DB",
    image: "/projects/stripe2db.webp",
    description: [
      "Open-source tool that syncs Stripe transaction data into SQL Server for reporting, analytics, and Power BI dashboards.",
    ],
    stack: ["Spring Boot", "SQL"],
    links: [
      { label: "View Project in GitHub", href: "https://github.com/yourguyphil/Stripe2DB", event: "Project Stripe2DB" },
    ],
  },
  {
    slug: "veym-website",
    title: "VEYM Main Website",
    image: "/projects/veym-site.webp",
    description: [
      "Contributed to the official VEYM website, improving site performance, building interactive maps, and optimizing resource delivery.",
    ],
    stack: ["Next.js", "Directus"],
    links: [
      { label: "Go to Organization Map", href: "https://veym.net/aboutus/liendoan", event: "Project VEYM Website" },
    ],
  },
  {
    slug: "master-class",
    title: "Philips Nguyen | Master Class",
    image: "/projects/master-class.webp",
    description: [
      "Search-optimized coaching platform for competitive TCG players, featuring CMS integration and responsive design.",
    ],
    stack: ["Next.js", "Directus", "Vercel"],
    links: [
      { label: "View Website", href: "https://coaching.philipsnguyen.com/", event: "Project Master Class" },
    ],
  },
  {
    slug: "adorable-armies",
    title: "Adorable Armies TCG",
    image: "/projects/adorable-armies.webp",
    description: [
      "Creator and lead developer of Adorable Armies, an original print-and-play trading card game featuring collectible recruits, elemental combat, and a fully designed gameplay ecosystem.",
      "Built automated JSON card pipelines, token generators, asset delivery through Azure Blob Storage, and a polished public website supporting future expansions.",
    ],
    stack: ["Next.js", "Azure Storage", "Custom TCG engines"],
    links: [
      { label: "Visit Website", href: "https://www.adorablearmies.com/", event: "Project Adorable Armies" },
    ],
  },
  {
    slug: "simple-rts",
    title: "Simple RTS",
    image: "/projects/simple-rts.png",
    pixelArt: true,
    featured: true,
    badge: "New · Free to play",
    description: [
      "Creator and developer of Simple RTS, a free browser real-time strategy game and a love letter to the genre: gather gold and wood, build your base, and command your army.",
      "Pick Humans or Orcs, train Workers, Scouts, Swordsmen, Archers and Knights, scout through the fog of war and destroy every enemy Castle or Stronghold. Two resources, a focused army, and decisions that matter: easy to learn, hard to master.",
      "The game is built in Unity and C#, with a companion Next.js site that hosts the browser build, a full unit and building guide, and a new-player strategy primer.",
    ],
    stack: ["Unity", "C#", "Next.js", "React"],
    links: [
      { label: "Play Simple RTS", href: "https://simple-rts.com", event: "Project Simple RTS" },
      { label: "itch.io", href: "https://yourguyphil.itch.io/simple-rts", event: "Project Simple RTS itch" },
    ],
  },
];
