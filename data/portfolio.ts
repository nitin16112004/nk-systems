export type SocialPlatform = "github" | "linkedin" | "email" | "npm"

export const emailComposeUrl =
  "https://mail.google.com/mail/?view=cm&fs=1&to=nitinkumar16072005@gmail.com"

export type Profile = {
  name: string
  initials: string
  headline: string
  tagline: string
  location: string
  email: string
  phone: string
  phoneHref: string
  summary: string
  availability: string
  roles: string[]
  resumePath: string
  imagePath: string
  imageAlt: string
  education: {
    degree: string
    institution: string
    graduation: string
  }
}

export type SocialLink = {
  platform: SocialPlatform
  label: string
  href: string
}

export type StatusItem = {
  kind: "building" | "maintaining" | "exploring" | "learning" | "available" | "location"
  label: string
  value: string
}

export type Metric = {
  value: string
  label: string
  description: string
  compact?: boolean
}

export type BuildPrinciple = {
  title: string
  description: string
  tone: "cyan" | "blue" | "indigo" | "emerald"
}

export type Capability = {
  title: string
  description: string
  icon: "shield" | "realtime" | "package" | "layers"
}

export type TimelineItem = {
  title: string
  organization: string
  date: string
  kind: "opensource" | "project" | "education" | "leadership"
  description: string[]
}

export type Certification = {
  title: string
  status: "Certificate" | "In Progress" | "Currently Learning"
  href?: string
}

export type ProjectLink =
  | { kind: "github" | "demo" | "npm"; label: string; href: string }
  | { kind: "private" | "in-progress"; label: string }

export type ProjectDeepDive = {
  problem: string
  approach: string
  flow: string[]
  results: string[]
  tradeoffs: string[]
  challenges: string[]
  next: string[]
}

export type Project = {
  id: string
  title: string
  description: string
  impact: string
  tech: string[]
  highlights: Array<{ label: string; text: string }>
  links: ProjectLink[]
  deepDive: ProjectDeepDive
  featured?: boolean
}

export type SkillCategory = {
  title: string
  icon: string
  skills: string[]
}

export type OpenSourceItem = {
  title: string
  description: string
  label: string
  href?: string
  kind: "opensource" | "database" | "learning"
}

export const profile: Profile = {
  name: "NITIN KUMAR",
  initials: "NK",
  headline: "Backend-Focused Full Stack Developer",
  tagline: "I build secure backend systems that scale.",
  location: "Mathura, Uttar Pradesh, India",
  email: "nitinkumar16072005@gmail.com",
  phone: "+91 6386646961",
  phoneHref: "tel:+916386646961",
  summary:
    "Backend-focused full-stack developer building secure REST APIs, real-time applications, reusable developer tooling, and scalable web platforms using Node.js, Express.js, MongoDB, React, JWT, role-based access control, Socket.IO, and Docker.",
  availability: "Open to Internships, PPO & 2027 Graduate Roles",
  roles: ["Backend Developer", "MERN Full Stack Developer", "Open-Source Builder"],
  resumePath: "/nitin-kumar-resume.pdf",
  imagePath: "/nitin-profile.png",
  imageAlt: "Nitin Kumar — Backend-Focused Full Stack Developer",
  education: {
    degree: "Bachelor of Technology in Computer Science",
    institution: "GLA University, Mathura",
    graduation: "Expected June 2027",
  },
}

export const socialLinks: SocialLink[] = [
  { platform: "github", label: "GitHub", href: "https://github.com/nitin16112004" },
  {
    platform: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nitin-kumar-70b7962b1",
  },
  { platform: "email", label: "Email Nitin Kumar", href: emailComposeUrl },
  {
    platform: "npm",
    label: "NPM",
    href: "https://www.npmjs.com/package/@nitinkumar16/backendkit",
  },
]

export const aboutParagraphs = [
  "I’m a final-year Computer Science student at GLA University and a backend-focused full-stack developer. I enjoy designing secure APIs, authentication systems, real-time features, and maintainable backend architectures.",
  "My primary stack includes Node.js, Express.js, MongoDB, React, JavaScript, TypeScript, Java, SQL, JWT authentication, role-based authorization, Socket.IO, and Docker.",
  "I focus on writing reusable code, reducing backend boilerplate, applying practical security practices, and converting product requirements into working applications.",
]

export const statusItems: StatusItem[] = [
  {
    kind: "building",
    label: "Building",
    value: "CareerGuid AI — AI-powered ATS and personalized roadmap platform",
  },
  {
    kind: "maintaining",
    label: "Maintaining",
    value: "BackendKit — reusable backend architecture package",
  },
  {
    kind: "exploring",
    label: "Exploring",
    value: "Docker, Redis, scalable backend architecture and system design",
  },
  {
    kind: "learning",
    label: "Learning",
    value: "Salesforce Administration through Trailhead",
  },
  {
    kind: "available",
    label: "Open to",
    value: "Backend, software engineering and full-stack opportunities",
  },
  { kind: "location", label: "Based in", value: profile.location },
]

export const buildPrinciples: BuildPrinciple[] = [
  {
    title: "Secure by Default",
    description:
      "Authentication, authorization, validation, rate limiting, secure headers, centralized error handling, and safe API design should be considered from the beginning.",
    tone: "cyan",
  },
  {
    title: "Architecture Before Features",
    description:
      "Define modules, data flow, API boundaries, and reusable middleware before adding complex functionality.",
    tone: "blue",
  },
  {
    title: "Build Reusable Systems",
    description:
      "Avoid duplicating authentication, validation, logging, and response patterns across projects. Convert repeatable patterns into reusable abstractions.",
    tone: "indigo",
  },
  {
    title: "Ship, Test and Improve",
    description:
      "Build a working version, test real flows, identify failures, and improve the implementation based on measurable results.",
    tone: "emerald",
  },
]

export const metrics: Metric[] = [
  {
    value: "200+",
    label: "NPM Downloads",
    description: "BackendKit package adoption",
  },
  {
    value: "197",
    label: "Automated Tests",
    description: "BackendKit reliability coverage",
  },
  {
    value: "1,500–2,000 → 100–200",
    label: "Lines of Setup Code",
    description: "Backend boilerplate reduced using BackendKit",
    compact: true,
  },
  {
    value: "4+",
    label: "Core Projects",
    description: "Backend, full-stack and developer tooling",
  },
]

export const capabilities: Capability[] = [
  {
    title: "Secure Backend APIs",
    icon: "shield",
    description:
      "REST APIs with validation, JWT authentication, role-based authorization, security middleware, centralized error handling, and standardized responses.",
  },
  {
    title: "Real-Time Applications",
    icon: "realtime",
    description:
      "Socket.IO-based chat, notifications, live status updates, and event-driven user experiences.",
  },
  {
    title: "Developer Tooling",
    icon: "package",
    description:
      "Reusable packages and architecture utilities that reduce repeated setup and improve consistency across Node.js and Express applications.",
  },
  {
    title: "Full-Stack Platforms",
    icon: "layers",
    description:
      "React interfaces connected with maintainable backend services, databases, authentication flows, and deployment-ready configuration.",
  },
]

export const timelineItems: TimelineItem[] = [
  {
    title: "Open-Source Package Maintainer",
    organization: "BackendKit",
    date: "February 2026 – June 2026",
    kind: "opensource",
    description: [
      "Published and maintained the BackendKit npm package for reusable Express.js backend architecture.",
      "Implemented JWT access and refresh token flows, authentication middleware and role-based authorization.",
      "Added security middleware, Zod validation, standardized API responses, structured logging and centralized error handling.",
      "Created 197 automated tests and reduced common backend setup from approximately 1,500–2,000 lines to 100–200 lines.",
      "Reached more than 200 npm downloads.",
    ],
  },
  {
    title: "Full-Stack Project Developer",
    organization: "Alumni Bridge Platform",
    date: "March 2026 – May 2026",
    kind: "project",
    description: [
      "Built an alumni mentorship and networking platform using React, Node.js, Express.js and MongoDB.",
      "Implemented JWT authentication and role-based access for students, alumni and administrators.",
      "Added real-time chat and notifications using Socket.IO.",
      "Developed mentorship, discussion, job, event and administration workflows.",
      "Worked with frontend deployment on Vercel and backend deployment on Render.",
    ],
  },
  {
    title: "B.Tech in Computer Science",
    organization: "GLA University, Mathura",
    date: "Expected June 2027",
    kind: "education",
    description: [
      "Final-year Computer Science student.",
      "Building practical experience in backend engineering, full-stack development, databases, computer networks, operating systems and software development.",
      "Preparing for backend, software engineering and graduate technology roles.",
    ],
  },
  {
    title: "Leadership and Campus Activities",
    organization: "GLA University",
    date: "During B.Tech",
    kind: "leadership",
    description: [
      "Contributed to the organization and execution of a college fest and hackathon.",
      "Supported team coordination, logistics, communication and event execution.",
      "Developed practical leadership and collaboration experience.",
    ],
  },
]

export const certifications: Certification[] = [
  {
    title: "HackerRank SQL Intermediate Certificate",
    status: "Certificate",
    href: "https://www.hackerrank.com/certificates/1fc009e02636",
  },
  {
    title: "Salesforce Trailhead — Salesforce Administration and CRM fundamentals",
    status: "Currently Learning",
  },
  {
    title: "Docker and backend system design — ongoing practical learning",
    status: "In Progress",
  },
]

export const projects: Project[] = [
  {
    id: "backendkit",
    title: "BackendKit — Secure Express Backend Toolkit",
    impact: "Flagship · Open-Source Developer Tooling",
    description:
      "An open-source npm package that provides reusable authentication, authorization, validation, security, logging, error handling and response architecture for Express.js applications.",
    tech: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "JWT",
      "Zod",
      "Helmet",
      "Rate Limiting",
      "npm",
      "Automated Testing",
    ],
    highlights: [
      {
        label: "Built",
        text: "Reusable Express.js architecture with authentication, authorization, security middleware, validation and centralized error handling.",
      },
      {
        label: "Outcome",
        text: "Reduced common backend setup from approximately 1,500–2,000 lines to 100–200 lines.",
      },
      {
        label: "Reliability",
        text: "197 automated tests and more than 200 npm downloads.",
      },
    ],
    links: [
      {
        kind: "npm",
        label: "View on NPM",
        href: "https://www.npmjs.com/package/@nitinkumar16/backendkit",
      },
    ],
    deepDive: {
      problem:
        "Express.js projects repeatedly require the same authentication, validation, response, security and error-handling setup. Rewriting these patterns increases development time and creates inconsistent implementations.",
      approach:
        "Created reusable modules for JWT access and refresh tokens, authentication middleware, role-based authorization, Zod validation, security middleware, standardized responses, structured logging and centralized error handling.",
      flow: [
        "Install and configure BackendKit",
        "Initialize authentication and security middleware",
        "Add validation schemas",
        "Protect routes with authentication and role middleware",
        "Use standardized responses and error handling",
        "Extend the package using its modular architecture",
      ],
      results: [
        "More than 200 npm downloads",
        "197 automated tests",
        "Major reduction in repeated backend setup code",
        "Reusable architecture for multiple Express applications",
      ],
      tradeoffs: [
        "Focused on common Express.js patterns rather than supporting every possible framework.",
        "Preferred modular configuration over hidden framework magic.",
      ],
      challenges: [
        "Maintaining predictable middleware behavior",
        "Designing reusable APIs without reducing flexibility",
        "Testing security and authentication flows consistently",
      ],
      next: [
        "Expand TypeScript documentation",
        "Add more framework integrations",
        "Improve examples and starter templates",
      ],
    },
    featured: true,
  },
  {
    id: "alumni-bridge",
    title: "Alumni Bridge Platform",
    impact: "Full Stack · Real-Time Networking Platform",
    description:
      "An alumni mentorship and networking platform connecting students, approved alumni and administrators through mentorship, real-time chat, discussions, opportunities and events.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "RBAC",
      "Socket.IO",
      "Redux Toolkit",
      "Vercel",
      "Render",
    ],
    highlights: [
      {
        label: "Built",
        text: "Authentication, college approval, mentorship, discussions, jobs, events, notifications and administration workflows.",
      },
      { label: "Real Time", text: "Implemented chat and notification experiences using Socket.IO." },
      {
        label: "Architecture",
        text: "Used role-based authorization for students, alumni and administrators.",
      },
    ],
    links: [
      {
        kind: "demo",
        label: "Live Demo",
        href: "https://alumni-bridge-frontend.vercel.app/",
      },
    ],
    deepDive: {
      problem:
        "Students need a trusted way to connect with verified alumni for mentorship, career guidance, opportunities and campus-community discussions.",
      approach:
        "Built separate role-based workflows for students, approved alumni and administrators with college-level access controls and real-time communication.",
      flow: [
        "User registration and authentication",
        "College and alumni approval",
        "Mentor profile creation",
        "Student mentor discovery",
        "Mentorship request workflow",
        "Real-time chat and notifications",
        "Jobs, events and discussions",
        "Administrative moderation",
      ],
      results: [
        "Multi-role platform architecture",
        "Real-time chat and notifications",
        "Mentorship and opportunity workflows",
        "Separate student, alumni and administrator experiences",
      ],
      tradeoffs: [
        "Prioritized role security and approval workflows over public access.",
        "Used a modular full-stack architecture to keep features maintainable.",
      ],
      challenges: [
        "Managing role-based access across multiple modules",
        "Synchronizing real-time updates with stored data",
        "Maintaining consistent frontend and backend permissions",
      ],
      next: [
        "Improve recommendation and matching logic",
        "Add analytics for mentorship outcomes",
        "Improve moderation and notification controls",
      ],
    },
  },
  {
    id: "careerguid-ai",
    title: "CareerGuid AI",
    impact: "In Progress · AI-Assisted Career Platform",
    description:
      "An AI-powered career platform designed around resume-first onboarding, ATS-focused resume improvement, personalized learning roadmaps and job-readiness tracking.",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Supabase PostgreSQL",
      "Supabase Auth",
      "Python",
      "FastAPI",
      "Docker",
      "Redis",
      "RAG",
    ],
    highlights: [
      {
        label: "Architecture",
        text: "Designed as a monorepo containing frontend, backend, AI service and worker components.",
      },
      {
        label: "Onboarding",
        text: "Resume upload is used to extract and prefill profile, education, skills, experience and project information.",
      },
      {
        label: "Roadmap",
        text: "Personalized RAG-based learning roadmap with progress tracking and weekly reminders.",
      },
    ],
    links: [{ kind: "in-progress", label: "Currently Building" }],
    deepDive: {
      problem:
        "Career preparation is often fragmented across resume review, ATS improvement, skill-gap analysis, learning plans and progress tracking.",
      approach:
        "Designed a resume-first platform using Supabase for authentication and data storage, a Node.js application backend, a separate Python AI service for RAG roadmap generation, and a worker for reminders.",
      flow: [
        "Upload a resume during onboarding",
        "Extract and prefill profile, education, skills, experience and projects",
        "Authenticate users and store structured data with Supabase",
        "Generate a personalized RAG-based learning roadmap",
        "Track roadmap and job-readiness progress",
        "Run weekly reminders through a worker component",
        "Use Docker for the local multi-service environment",
      ],
      results: [
        "Resume-first onboarding architecture",
        "Separate Node.js backend and Python AI service boundaries",
        "Personalized roadmap and progress-tracking workflow",
        "Worker-based weekly reminder design",
      ],
      tradeoffs: [
        "Separated application and AI responsibilities into different services instead of combining them in one backend.",
        "Accepted a more involved local setup to keep the services isolated with Docker.",
      ],
      challenges: [
        "Keeping resume-derived data consistent across frontend, backend and AI service boundaries",
        "Coordinating roadmap generation with progress tracking and reminder workflows",
      ],
      next: [
        "Continue the ATS-focused resume improvement workflow",
        "Complete roadmap progress tracking and weekly reminders",
        "Strengthen the Docker-based local development environment",
      ],
    },
  },
  {
    id: "library-management",
    title: "Library Management System",
    impact: "Python · OOP and Data Management",
    description:
      "A command-line library management system built using Python object-oriented programming and Excel-based persistence.",
    tech: ["Python", "OOP", "Pandas", "Excel", "Unit Testing"],
    highlights: [
      {
        label: "Built",
        text: "Student, book, issue and return management using structured Python classes.",
      },
      { label: "Persistence", text: "Stored and updated records through Excel files." },
      {
        label: "Quality",
        text: "Added validation, duplicate checks, search functionality and unit tests.",
      },
    ],
    links: [{ kind: "private", label: "Details available on request" }],
    deepDive: {
      problem:
        "A library workflow needs consistent student and book records, reliable issue and return handling, and persistent data between command-line sessions.",
      approach:
        "Structured the application with Python classes for students, books and transactions, using Pandas and Excel files for persistence plus validation and unit tests for core workflows.",
      flow: [
        "Create and validate student records",
        "Create and validate book records",
        "Search students and books",
        "Issue available books to students",
        "Process returns and update records",
        "Persist changes to Excel files",
      ],
      results: [
        "Student and book management workflows",
        "Issue and return handling",
        "Excel-based record persistence",
        "Search, duplicate validation and unit testing",
      ],
      tradeoffs: [
        "Used Excel persistence for a portable command-line project instead of introducing a database server.",
        "Kept the interface command-line based to focus on object-oriented design and data workflows.",
      ],
      challenges: [
        "Keeping issue and return records synchronized across Excel files",
        "Preventing duplicate students and books while supporting search",
      ],
      next: [
        "Move persistence behind a database abstraction",
        "Add a web interface while retaining the tested domain logic",
      ],
    },
  },
]

export const skillCategories: SkillCategory[] = [
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "JWT Authentication",
      "Role-Based Authorization",
      "Socket.IO",
      "Zod",
      "Security Middleware",
      "Centralized Error Handling",
    ],
  },
  {
    title: "Frontend Development",
    icon: "🖥️",
    skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS", "React Router", "Redux Toolkit"],
  },
  {
    title: "Databases and Caching",
    icon: "🗄️",
    skills: ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "Supabase", "Redis"],
  },
  {
    title: "Programming",
    icon: "⌨️",
    skills: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    title: "Tools and DevOps",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Docker", "Postman", "npm", "Vercel", "Render", "VS Code"],
  },
  {
    title: "Computer Science Fundamentals",
    icon: "🧩",
    skills: [
      "Data Structures and Algorithms",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
      "Object-Oriented Programming",
      "System Design Fundamentals",
    ],
  },
]

export const currentlyLearning = [
  "Salesforce Administration",
  "Salesforce Trailhead",
  "Docker Compose",
  "Redis",
  "Backend System Design",
  "FastAPI",
  "Cloud Deployment",
]

export const openSourceItems: OpenSourceItem[] = [
  {
    title: "BackendKit",
    description:
      "Maintaining an open-source Express.js package focused on reusable backend architecture, security and developer productivity.",
    label: "View on NPM",
    href: "https://www.npmjs.com/package/@nitinkumar16/backendkit",
    kind: "opensource",
  },
  {
    title: "SQL and Database Practice",
    description:
      "Strengthening relational database skills through joins, subqueries, aggregations, database design and practical query solving.",
    label: "HackerRank SQL Intermediate",
    kind: "database",
  },
  {
    title: "Salesforce Learning",
    description:
      "Learning Salesforce Administration, CRM fundamentals, objects, fields, reports, dashboards, validation rules, flows and data management through Trailhead.",
    label: "Currently Learning",
    kind: "learning",
  },
]

export const seo = {
  title: "Nitin Kumar | Backend Developer | Full Stack Developer",
  description:
    "Backend-focused full-stack developer and Computer Science student building secure REST APIs, real-time applications, reusable Express.js tooling and scalable MERN platforms.",
  keywords: [
    "Nitin Kumar",
    "Backend Developer",
    "Full Stack Developer",
    "MERN Stack",
    "Node.js",
    "Express.js",
    "React",
    "MongoDB",
    "REST API",
    "JWT Authentication",
    "Socket.IO",
    "Java",
    "SQL",
    "BackendKit",
    "Software Engineer",
    "GLA University",
  ],
}
