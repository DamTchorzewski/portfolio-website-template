# Deployment

The site is static (`pnpm build` writes `dist/`) and is published to GitHub Pages by `.github/workflows/deploy.yml`.
This is level 1 of the workflow standard: one workflow, no schedule. Editing the content is in [content.md](content.md).

## What runs when

| Event             | What happens                                                                                    |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| push to `develop` | `pnpm check`, `pnpm build`; the build is kept as a downloadable artifact for 14 days; no deploy |
| push to `main`    | the same, then the build is published to GitHub Pages and `pnpm health` checks the live site    |
| run by hand       | Actions → Build & Deploy → Run workflow, from any branch (only `main` publishes)                |

A change to the documentation only (`*.md`, `docs/`, `LICENSE`, `.env.example`) starts nothing.

## First deploy (a fork or a new copy)

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Settings → Environments → `github-pages` → Deployment branches: **Selected branches**, `main` only.
3. Push to `main`. The workflow builds, publishes and prints the address, `https://<owner>.github.io/<repo>/`.

The workflow reads the address from the Pages settings and passes it to the build as `SITE_URL`, so the base path, the
canonical link and the Open Graph URL are right without editing a file.

## Custom domain

Add the domain in Settings → Pages, set the DNS records GitHub asks for, then set a repository **variable** `SITE_URL` to
the full address (`https://www.example.com`). The variable wins over the Pages address. Nothing about the domain is stored
in the repository.

## Health check

`pnpm health` (`scripts/health.mjs`) requests the home page (expects 200 and a `<main` element) and a page that does not
exist (expects 404). It is read-only and has no dependencies. Run it by hand with `SITE_URL=<address> pnpm health`.

## Local build

```bash
pnpm build && pnpm preview
```

Without `SITE_URL` the build is made for the root of a host. To test the project-page path, run
`SITE_URL=https://example.github.io/my-repo/ pnpm build`.

## Pausing and rollback

Pause: Actions → Build & Deploy → ⋯ → Disable workflow. Rollback: revert the commit on `main` (a new work PR and release
PR), or re-run an earlier successful run of the workflow.
