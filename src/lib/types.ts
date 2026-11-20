// Shape of the content file `src/config/site.ts`. The editor shows these descriptions while you type.

export type ArtVariant = "browser" | "mobile" | "dashboard" | "orbs";
export type IconName = "code" | "layout" | "zap" | "pen" | "search" | "mail" | "download";

export interface Link {
  label: string;
  href: string;
}

export interface Project {
  /** URL part of the case-study page: `/projects/<slug>/` (lower-case, hyphens). */
  slug: string;
  title: string;
  /** One line shown on the card. */
  tagline: string;
  /** Short category shown above the title, e.g. "Web app". */
  category: string;
  year: string;
  role: string;
  /** Technologies, shown as chips. */
  stack: string[];
  /** Colour of the generated cover, 0-360 (the accent hue is the default). */
  hue: number;
  /** Which generated cover to draw. Replace it with a real image by setting `image`. */
  art: ArtVariant;
  /** Optional screenshot: a file in `public/`, e.g. `/images/my-project.webp`. */
  image?: string;
  /** Alt text for `image` (describe what it shows). */
  imageAlt?: string;
  /** Optional buttons on the case-study page. Leave out what does not exist. */
  links?: { live?: string; source?: string };
  /** Case-study text. */
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  /** Show the project in the large first slot of the grid. */
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: IconName;
}

export interface Job {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface SiteConfig {
  /** Language of the page, e.g. "en". */
  lang: string;
  /** Text of the browser tab and the default share title. */
  title: string;
  /** Meta description (about 150 characters). */
  description: string;
  /** Hue of the accent colour, 0-360 (250 blue, 160 green, 30 orange, 330 pink). */
  accentHue: number;
  person: {
    name: string;
    /** Short job title shown in the hero. */
    role: string;
    /** Big headline in the hero. Put the part to colour between [brackets]. */
    headline: string;
    /** Two or three sentences under the headline. */
    intro: string;
    /** City and country, or "Remote". */
    location: string;
    /** Small status pill; set to "" to hide it. */
    availability: string;
    /** Optional photo: a file in `public/`. Without it a monogram of the initials is drawn. */
    photo?: string;
    photoAlt?: string;
    /** Optional CV: a file in `public/`, e.g. `/cv.pdf`. Hidden when empty. */
    cv?: string;
  };
  /** Numbers in the hero. Remove the array contents to hide the row. */
  stats: { value: string; label: string }[];
  about: {
    title: string;
    paragraphs: string[];
    /** Short facts shown next to the text. */
    facts: { label: string; value: string }[];
  };
  skills: { group: string; items: string[] }[];
  services: Service[];
  projects: Project[];
  experience: Job[];
  testimonials: Testimonial[];
  contact: {
    title: string;
    text: string;
    email: string;
    /** Optional endpoint of a form service (Formspree, Web3Forms, ...). Without it only the e-mail button shows. */
    formAction?: string;
    /** Profile links shown under the e-mail button. */
    links: Link[];
  };
  footer: {
    /** Small print on the left. The year is added automatically. */
    note: string;
  };
}
