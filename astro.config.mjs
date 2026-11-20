// Astro configuration. SITE_URL is the only environment variable (see .env.example): the deploy workflow sets it
// from the Pages settings, so a fork builds for its own address without editing this file.
import { defineConfig } from "astro/config";

const siteUrl = process.env.SITE_URL ? new URL(process.env.SITE_URL) : undefined;

export default defineConfig({
  // Origin for canonical and Open Graph URLs; the path (a project page on github.io) becomes the base.
  site: siteUrl?.origin,
  base: siteUrl ? siteUrl.pathname.replace(/\/$/, "") || "/" : "/",
  trailingSlash: "always",
  build: { assets: "assets" },
  devToolbar: { enabled: false },
});
