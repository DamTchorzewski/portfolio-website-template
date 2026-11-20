# Front end

How the site is styled and why. The content is in [content.md](content.md); the code is in `src/styles/global.css` (tokens
and shared styles) and in the `<style>` block of each component in `src/components/`.

## One hue, two themes

All colours are derived from a single number, `accentHue` in `src/config/site.ts`, which the layout writes to the page as the
CSS variable `--hue`. Tokens in `:root` use `oklch()` and `light-dark()`, so each token holds its light and its dark value
in one line, and the theme toggle only switches `color-scheme`:

| Token                                      | Use                                               |
| ------------------------------------------ | ------------------------------------------------- |
| `--bg`, `--surface`, `--surface-2`         | page, cards, alternate sections                   |
| `--text`, `--muted`                        | body text and secondary text                      |
| `--accent`, `--on-accent`, `--accent-soft` | links, buttons and their text, tinted backgrounds |
| `--line`, `--shadow`                       | borders and shadows                               |

Without a saved choice the site follows `prefers-color-scheme`. The small script in `Base.astro` runs before the first
paint and applies a saved choice (`localStorage` key `theme`), so there is no flash. Changing `accentHue` re-colours both
themes, the generated art and the gradients.

## Contrast

Text and background pairs (text, muted, accent on each surface, and the text on an accent button) were measured in a
browser for every hue from 0 to 360 in steps of 5, in both themes. The lowest ratio is 4.84:1, above the 4.5:1 that WCAG AA
asks for normal text. If you change a lightness value in `global.css`, measure again.

## Accessibility decisions (WCAG 2.2 AA)

- Landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page, headings in order, `aria-labelledby` on every section.
- A skip link, and a visible 3 px focus ring on every control (2.4.7, 2.4.11).
- Targets are at least 44 px high (2.5.8 asks for 24 px).
- The menu button has `aria-expanded` and `aria-controls`, closes with Escape and returns focus to the button. Without
  JavaScript the links stay visible in a row.
- The theme toggle is a button with `aria-pressed`; its name does not change with the state.
- Decorative art and icons are `aria-hidden`; images get an alt text from the content file.
- `prefers-reduced-motion: reduce` switches off the scroll reveal, the floating chips and the smooth scrolling.
- The current section is marked with `aria-current` in the menu.
- ESLint runs `eslint-plugin-jsx-a11y` rules on the `.astro` templates (`pnpm lint`).

## Performance decisions

- Static HTML from Astro, no client framework; the one script (`src/scripts/main.ts`) is a few kilobytes.
- Fonts are self-hosted variable fonts from `@fontsource-variable` with `font-display: swap`; the browser downloads only the
  subsets the text needs.
- Project covers are SVG drawn at build time, so they cost no extra requests; the cover box has its own aspect ratio, so
  nothing moves while it loads.
- Lighthouse (local preview, 2026-11-20): 100 for performance, accessibility, best practices and SEO on the home page and a
  case-study page, mobile and desktop.

## Where to change the look

- Radius, spacing, container width and fonts: the `:root` block of `global.css`.
- A section's layout: the `<style>` block in its component. Styles are scoped to the component.
- The generated covers: `src/components/Art.astro`.
