// THE CONTENT FILE: edit this file to make the site yours. Every text, link and number on the page comes from here.
// All values below are placeholders: a made-up person, example.com addresses and invented projects.
// Details: docs/content.md. The shape of the data (with a description of each field): src/lib/types.ts.
import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  lang: "en",
  title: "Your Name | Web developer and designer",
  description:
    "Portfolio of Your Name, a freelance web developer and designer who builds fast, accessible and good-looking websites.",
  accentHue: 262,

  person: {
    name: "Your Name",
    role: "Web developer & designer",
    headline: "I build [fast, accessible] websites people enjoy using",
    intro:
      "Replace this text with two or three sentences about what you do and who you do it for. Keep it plain and specific: a visitor should know within ten seconds whether you can help.",
    location: "Your City, Country",
    availability: "Available for new projects",
    // photo: "/images/me.webp",
    // photoAlt: "Portrait of Your Name",
    // cv: "/cv.pdf",
  },

  stats: [
    { value: "8+", label: "Years of experience" },
    { value: "40+", label: "Projects delivered" },
    { value: "30+", label: "Happy clients" },
  ],

  about: {
    title: "A developer who cares about the details",
    paragraphs: [
      "Use this space to tell your story in a few short paragraphs: how you got started, what you enjoy building and how you like to work with clients and teams.",
      "Mention the things that set you apart, such as a focus on performance, accessibility, clear communication or a design background. Real examples are better than adjectives.",
    ],
    facts: [
      { label: "Based in", value: "Your City, Country" },
      { label: "Focus", value: "Front end, design systems" },
      { label: "Languages", value: "English, your language" },
      { label: "Working hours", value: "09:00 to 17:00, your time zone" },
    ],
  },

  skills: [
    { group: "Front end", items: ["HTML & CSS", "TypeScript", "React", "Astro", "Accessibility"] },
    { group: "Back end", items: ["Node.js", "REST APIs", "PostgreSQL", "Authentication"] },
    { group: "Design", items: ["Figma", "Design systems", "Prototyping", "Motion"] },
    { group: "Workflow", items: ["Git", "CI/CD", "Testing", "Performance budgets"] },
  ],

  services: [
    {
      title: "Websites & landing pages",
      description:
        "Fast, responsive sites with clean code and a layout that fits your brand and your content.",
      icon: "layout",
    },
    {
      title: "Web applications",
      description:
        "Dashboards, tools and customer portals built with maintainable, well-tested components.",
      icon: "code",
    },
    {
      title: "UI & UX design",
      description:
        "Wireframes, prototypes and design systems that make the product easy to use and easy to grow.",
      icon: "pen",
    },
    {
      title: "Performance & accessibility audits",
      description:
        "A written review of speed, SEO and WCAG issues, with a prioritised list of fixes.",
      icon: "search",
    },
  ],

  projects: [
    {
      slug: "northwind-analytics",
      title: "Northwind Analytics",
      tagline: "A reporting dashboard that turns raw events into readable charts.",
      category: "Web app",
      year: "2026",
      role: "Design and front end",
      stack: ["TypeScript", "React", "Charts", "REST API"],
      hue: 262,
      art: "dashboard",
      featured: true,
      links: { live: "https://example.com/", source: "https://example.com/source" },
      overview:
        "A fictional analytics product for small teams. This is sample text: describe the project in two or three sentences, who it was for and what it does.",
      challenge:
        "Describe the problem in plain words. For example: the old reports took minutes to load and nobody could find the numbers they needed.",
      solution:
        "Describe what you did. For example: a new data layer, a simple filter bar and charts that stay readable on a phone.",
      results: [
        "Reports load in under a second instead of nine",
        "Support questions about missing numbers dropped by a third",
        "Accessible charts with a data table for every graph",
      ],
    },
    {
      slug: "lumen-studio",
      title: "Lumen Studio",
      tagline: "Brand website for a small photography studio.",
      category: "Website",
      year: "2025",
      role: "Design and development",
      stack: ["Astro", "CSS", "Content collections"],
      hue: 28,
      art: "browser",
      links: { live: "https://example.com/" },
      overview:
        "A fictional marketing site with a portfolio gallery and a booking page. Replace this with your own project.",
      challenge:
        "The studio needed a site that shows large photos but still loads fast on mobile data.",
      solution: "Responsive images, a calm layout and a static build that is served from a CDN.",
      results: ["Lighthouse performance 100", "Bookings through the site doubled in three months"],
    },
    {
      slug: "orbit-notes",
      title: "Orbit Notes",
      tagline: "A note-taking app for phones with offline sync.",
      category: "Mobile app",
      year: "2025",
      role: "UI design and prototype",
      stack: ["Figma", "React Native", "SQLite"],
      hue: 190,
      art: "mobile",
      overview:
        "A fictional mobile app concept. Use this slot for a design study, a prototype or an app you shipped.",
      challenge: "Notes had to open instantly and never be lost when the connection drops.",
      solution:
        "A local-first data model, optimistic updates and a quiet interface with large touch targets.",
      results: [
        "Cold start under 400 ms",
        "Usability test: 9 of 10 users finished the task unaided",
      ],
    },
    {
      slug: "greenleaf-market",
      title: "Greenleaf Market",
      tagline: "Online shop for a local organic grocer.",
      category: "E-commerce",
      year: "2024",
      role: "Front end",
      stack: ["Astro", "TypeScript", "Stripe"],
      hue: 150,
      art: "browser",
      overview:
        "A fictional shop with a product catalogue, a cart and a simple checkout. Swap in your own story.",
      challenge: "Customers abandoned the cart because checkout had too many steps.",
      solution: "A one-page checkout, clear delivery information and saved baskets.",
      results: ["Checkout completion up by 18 percent", "Average page weight under 150 kB"],
    },
    {
      slug: "pulse-fitness",
      title: "Pulse Fitness",
      tagline: "Class booking and membership portal for a gym.",
      category: "Web app",
      year: "2024",
      role: "Design system and front end",
      stack: ["React", "Design tokens", "Testing"],
      hue: 340,
      art: "dashboard",
      overview:
        "A fictional portal for members to book classes. Describe your own role and the team you worked with.",
      challenge: "Three teams were building screens with three different looks.",
      solution: "A shared design system with tokens, documented components and visual tests.",
      results: [
        "New screens ship in days, not weeks",
        "Contrast and keyboard checks run on every change",
      ],
    },
    {
      slug: "meridian-docs",
      title: "Meridian Docs",
      tagline: "A searchable documentation site for an open-source library.",
      category: "Website",
      year: "2024",
      role: "Design and front end",
      stack: ["Astro", "Search", "MDX"],
      hue: 95,
      art: "browser",
      overview:
        "A fictional documentation site. Replace this with a project that shows how you handle content-heavy pages.",
      challenge: "Readers could not find answers in a wall of text.",
      solution: "Clear navigation, instant search and examples that can be copied with one click.",
      results: [
        "Search finds the right page in the first three results",
        "Docs build in under ten seconds",
      ],
    },
    {
      slug: "atlas-travel",
      title: "Atlas Travel",
      tagline: "Trip planner with a map and a shareable itinerary.",
      category: "Side project",
      year: "2023",
      role: "Everything",
      stack: ["TypeScript", "Maps", "Open data"],
      hue: 215,
      art: "orbs",
      overview:
        "A fictional side project. Personal projects are a good place to show what you do when nobody is paying.",
      challenge: "Planning a trip meant juggling five tabs and a spreadsheet.",
      solution: "One page with a map, a day-by-day list and a link you can send to friends.",
      results: ["Used by a few hundred travellers", "Open source under the MIT licence"],
    },
  ],

  experience: [
    {
      role: "Senior front-end developer",
      company: "Northwind Labs",
      period: "2023 to now",
      summary: "Leads the front end of a product used by thousands of teams.",
      highlights: [
        "Introduced a design system and a performance budget",
        "Mentors three junior developers",
      ],
    },
    {
      role: "Web developer",
      company: "Brightside Agency",
      period: "2020 to 2023",
      summary: "Built marketing sites and web shops for small and medium clients.",
      highlights: [
        "Delivered more than 25 sites",
        "Moved the team from hand-written CSS to design tokens",
      ],
    },
    {
      role: "Freelance designer and developer",
      company: "Self-employed",
      period: "2017 to 2020",
      summary: "Worked directly with founders on brand sites, prototypes and small apps.",
      highlights: ["Built long-term relationships with repeat clients"],
    },
  ],

  testimonials: [
    {
      quote:
        "A sample testimonial. Ask a happy client for two honest sentences and paste them here.",
      name: "Jordan Lee",
      role: "Founder, Example Co",
    },
    {
      quote:
        "Another placeholder quote. Keep them short, specific and signed with a real name and role.",
      name: "Sam Rivera",
      role: "Product manager, Sample Ltd",
    },
    {
      quote:
        "Delete the testimonials array to hide this section completely, or add as many as you like.",
      name: "Casey Kim",
      role: "Head of design, Demo Inc",
    },
  ],

  contact: {
    title: "Let's work together",
    text: "Tell me about your project, your timeline and your budget. I usually answer within two working days.",
    email: "hello@example.com",
    // formAction: "https://formspree.io/f/your-form-id",
    links: [
      { label: "GitHub", href: "https://example.com/github" },
      { label: "LinkedIn", href: "https://example.com/linkedin" },
      { label: "Dribbble", href: "https://example.com/dribbble" },
    ],
  },

  footer: {
    note: "Your Name. Built with the portfolio website template.",
  },
};
