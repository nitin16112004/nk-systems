# Nitin Kumar — Backend Developer Portfolio

A production-ready portfolio for Nitin Kumar, a backend-focused full-stack developer and final-year Computer Science student. The site highlights secure API development, real-time applications, reusable developer tooling, full-stack projects, and continuous learning.

## Highlights

- Premium dark interface with a cyan, deep-blue, and indigo accent system
- Animated hero, galaxy background, glassmorphism navigation, and ship-based section tracking
- Data-driven profile, timeline, projects, skills, metrics, contact details, and social links
- Four project cards with accessible deep-dive modals
- Responsive layouts for mobile, tablet, laptop, and desktop viewports
- Reduced-motion support, keyboard-accessible actions, and visible focus states
- Vercel Analytics integration
- Next.js Image optimization for the profile asset

## Portfolio Content

- BackendKit open-source Express.js tooling
- Alumni Bridge real-time full-stack platform
- CareerGuid AI career platform in progress
- Python Library Management System
- B.Tech Computer Science education at GLA University
- Backend, frontend, database, DevOps, and computer science skills

Personal content is centralized in [`data/portfolio.ts`](./data/portfolio.ts) so profile updates do not require editing multiple components.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel Analytics

## Project Structure

```text
app/
  globals.css          Global theme and motion utilities
  layout.tsx           Metadata, navigation, background, analytics, and footer
  page.tsx             Homepage section composition
components/
  navigation/          Animated ship navigation
  sections/            Portfolio homepage sections
  Footer.tsx
  GalaxyBackground.tsx
  Hero.tsx
  Navbar.tsx
  SectionWrapper.tsx
data/
  portfolio.ts         Typed, centralized portfolio content
hooks/
  useActiveSection.ts
  useScrollDirection.ts
public/
  nitin-profile.png
  nitin-kumar-resume.pdf
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install and run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Quality checks

```bash
npm run lint
npm run build
```

### Production preview

```bash
npm run build
npm start
```

## Updating Portfolio Content

Edit [`data/portfolio.ts`](./data/portfolio.ts) to update profile information, social links, status items, metrics, build principles, capabilities, timeline entries, certifications, projects, skills, or continuous-learning cards. Animation and presentation logic remain inside the components.

Project links should be added only after the destination has been verified. Projects without a verified public URL intentionally use a non-clickable status label.

## Assets

- Profile image: `public/nitin-profile.png`
- Resume: `public/nitin-kumar-resume.pdf`

Keep these filenames stable unless the paths in `data/portfolio.ts` are updated at the same time.

## Deployment

The project is ready for deployment on a Next.js-compatible platform such as Vercel. No production domain or canonical URL is configured in metadata; add those only after a real deployment URL is available.

## Credits

Original portfolio architecture and design inspiration:

https://github.com/adityayadav161003/ay-systems

Customized and extended for Nitin Kumar.

## License and Reuse

Review the source project’s reuse expectations before redistributing the design. Preserve the Credits section when reusing this customized version.
