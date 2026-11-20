// The only script of the site: theme toggle, mobile menu, scroll reveal and the current-section highlight.

const root = document.documentElement;

// Theme: the button flips between light and dark and remembers the choice.
const themeButton = document.querySelector<HTMLButtonElement>("[data-theme-toggle]");

function isDark(): boolean {
  const forced = root.dataset.theme;
  return forced ? forced === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
}

function syncThemeButton(): void {
  themeButton?.setAttribute("aria-pressed", String(isDark()));
}

themeButton?.addEventListener("click", () => {
  const next = isDark() ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* storage blocked: the choice lasts for this visit only */
  }
  syncThemeButton();
});

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", syncThemeButton);
syncThemeButton();

// Mobile menu: a button that shows and hides the links; Escape closes it and returns focus.
const menuButton = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const nav = document.querySelector<HTMLElement>("[data-nav]");

function setMenu(open: boolean): void {
  menuButton?.setAttribute("aria-expanded", String(open));
  nav?.toggleAttribute("data-open", open);
}

menuButton?.addEventListener("click", () => {
  setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) setMenu(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menuButton.focus();
  }
});

// Reveal blocks as they scroll into view (skipped for reduced motion, the CSS shows everything then).
const reveals = document.querySelectorAll<HTMLElement>(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  reveals.forEach((el) => observer.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-visible"));
}

// Mark the link of the section in view with aria-current.
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>("[data-nav] a[href*='#']"));
const sections = links
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter((el): el is HTMLElement => el !== null);

if (sections.length > 0 && "IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        for (const link of links) {
          if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "true");
          else link.removeAttribute("aria-current");
        }
      }
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );
  sections.forEach((section) => spy.observe(section));
}
