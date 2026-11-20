# Editing the content

Everything visitors read comes from one file, [`src/config/site.ts`](../src/config/site.ts). Its shape, with a description
of each field, is in [`src/lib/types.ts`](../src/lib/types.ts); your editor shows those descriptions while you type, and
`pnpm typecheck` or `pnpm dev` stops on a field that is missing or misspelt. Design and colours are in
[frontend.md](frontend.md); publishing is in [deployment.md](deployment.md).

All values shipped in the template are placeholders: a made-up person (`Your Name`), `example.com` addresses and
invented projects. Replace them all before you publish.

## Fields

| Field                          | What it controls                                                                                             |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `lang`, `title`, `description` | the page language, the tab title and the meta description (aim for about 150 characters)                     |
| `accentHue`                    | the colour of the whole site, 0 to 360 (250 blue, 160 green, 30 orange, 330 pink); see frontend.md           |
| `person`                       | name, role, headline, intro, location, availability pill; optional `photo` and `cv`                          |
| `person.headline`              | the big title; put the words to colour in brackets: `I build [fast] websites`                                |
| `stats`                        | the numbers under the hero; an empty array hides the row                                                     |
| `about`                        | title, paragraphs and short facts                                                                            |
| `skills`                       | groups of skills shown as chips in the About section                                                         |
| `services`                     | cards with a title, a description and an icon (`code`, `layout`, `zap`, `pen`, `search`, `mail`, `download`) |
| `projects`                     | the project cards and one case-study page each (below)                                                       |
| `experience`                   | the timeline                                                                                                 |
| `testimonials`                 | client quotes                                                                                                |
| `contact`                      | heading, text, e-mail, profile links and an optional form                                                    |
| `footer.note`                  | the small print; the year is added for you                                                                   |

**A list that is empty hides its section** and its link in the menu: set `testimonials: []` to remove the quotes,
`services: []` to remove the services, and so on. `about.paragraphs` hides the About section (and the skills with it).

## Projects

Each project has a `slug` (the address of its page, `/projects/<slug>/`, lower case with hyphens) and the text of its
case study: `overview`, `challenge`, `solution` and a list of `results`. Add an object to `projects` to add a project;
remove one to remove it. The order in the array is the order on the page.

- **Cover.** Without `image` the cover is drawn in SVG from `art` (`browser`, `dashboard`, `mobile` or `orbs`) and
  `hue`. To use a screenshot, put it in `public/images/` (WebP, about 1280 px wide) and set `image: "/images/<file>.webp"`
  and an `imageAlt` that says what it shows. The tests fail when an image has no alt text.
- **Buttons.** `links.live` and `links.source` add the buttons on the case-study page. Leave them out for a project
  that is not public. Links must be absolute (`https://...`).
- **Featured.** `featured: true` gives one project a full-width card at the top. Use it on one project at most.

## Photo, CV and icon

- **Photo:** put the file in `public/images/` and set `person.photo` and `person.photoAlt`. Without it the hero shows a
  monogram of your initials.
- **CV:** put the PDF in `public/` and set `person.cv: "/cv.pdf"`; a "Download CV" button appears. Leave the field out to hide it.
- **Icon:** replace `public/favicon.svg`.
- **Paths:** write a file from `public/` the way it is served, with a leading slash (`/images/me.webp`, `/cv.pdf`); the
  site adds the base path of a project page (`<owner>.github.io/<repo>/`) for you. A full `https://` address also works.

## Contact form

The site is static, so it has no back end. By default the contact section shows an e-mail button and your profile
links. To add a form, create one with a form service (Formspree, Web3Forms and similar) and set `contact.formAction` to
the address it gives you; the form posts straight to that service. The form needs no key in the repository when the
service identifies the form by its address.

## Checks

`pnpm test` validates the file: a valid hue and language, a description of sensible length, an e-mail address,
absolute links, unique URL-safe slugs, the text every case study needs, and alt text for images. Run `pnpm check`
before you push; the deploy workflow runs it too and stops on a failure.
