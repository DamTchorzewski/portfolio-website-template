// Checks the content file, so a typo in `src/config/site.ts` fails here and not on the live page.
import { describe, expect, it } from "vitest";
import { site } from "../src/config/site";
import { asset, initials, seeded } from "../src/lib/url";

const isUrl = (value: string) => {
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:";
  } catch {
    return false;
  }
};

describe("site config", () => {
  it("has a valid accent hue and language", () => {
    expect(site.accentHue).toBeGreaterThanOrEqual(0);
    expect(site.accentHue).toBeLessThanOrEqual(360);
    expect(site.lang).toMatch(/^[a-z]{2}(-[A-Z]{2})?$/);
  });

  it("has a title and a description of a sensible length", () => {
    expect(site.title.length).toBeGreaterThan(0);
    expect(site.description.length).toBeGreaterThan(50);
    expect(site.description.length).toBeLessThanOrEqual(200);
  });

  it("has an e-mail address in the contact section", () => {
    expect(site.contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it("uses absolute links for the profiles", () => {
    for (const link of site.contact.links) {
      expect(link.label).not.toBe("");
      expect(isUrl(link.href), link.href).toBe(true);
    }
  });

  it("marks at most one project as featured", () => {
    expect(site.projects.filter((project) => project.featured).length).toBeLessThanOrEqual(1);
  });
});

describe("projects", () => {
  it("have unique, URL-safe slugs", () => {
    const slugs = site.projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("have the text the case-study page needs", () => {
    for (const project of site.projects) {
      expect(project.title, project.slug).not.toBe("");
      expect(project.overview, project.slug).not.toBe("");
      expect(project.stack.length, project.slug).toBeGreaterThan(0);
      expect(project.hue, project.slug).toBeGreaterThanOrEqual(0);
      expect(project.hue, project.slug).toBeLessThanOrEqual(360);
    }
  });

  it("describe an image whenever they use one", () => {
    for (const project of site.projects) {
      if (project.image) expect(project.imageAlt, project.slug).toBeTruthy();
    }
  });

  it("use absolute links for the buttons", () => {
    for (const project of site.projects) {
      for (const href of Object.values(project.links ?? {})) expect(isUrl(href), href).toBe(true);
    }
  });
});

describe("helpers", () => {
  it("builds initials from a name", () => {
    expect(initials("Your Name")).toBe("YN");
    expect(initials("  ada  ")).toBe("A");
    expect(initials("Ada King Lovelace")).toBe("AK");
  });

  it("keeps full addresses and adds the base path to files in public/", () => {
    expect(asset("https://example.com/a.png")).toBe("https://example.com/a.png");
    expect(asset("//cdn.example.com/a.png")).toBe("//cdn.example.com/a.png");
    expect(asset("/images/a.png")).toMatch(/\/images\/a\.png$/);
  });

  it("generates the same numbers for the same seed", () => {
    const a = seeded("northwind");
    const b = seeded("northwind");
    expect([a(), a(), a()]).toEqual([b(), b(), b()]);
    expect(seeded("one")()).not.toBe(seeded("two")());
  });
});
