# Repository: description and topics

What is set in GitHub by hand, because it cannot live in the repository files. Project overview: [README](../README.md).

## Name

Standard for repository names: `reops/standards/repo-names.md`. The repository was called `WebCraftStudio` (a personal
portfolio of the owner) until 2026-11-20. It was then turned into a template with no personal data and renamed
`portfolio-website-template`, the phrase a developer would search for. GitHub redirects the old clone address, but **the
GitHub Pages address changed** to `https://damtchorzewski.github.io/portfolio-website-template/`; the old one no longer
works. The Git history before 2026-11-20 still holds the original personal content.

## Description and topics (About)

GitHub: the repository page → ⚙ next to "About". The description has a limit of 350 characters; topics are lower case with
hyphens, at most 20.

**Description:**

```text
A modern, accessible and fast portfolio website template built with Astro. One content file, light and dark theme, case-study pages, deploys to GitHub Pages.
```

**Website:**

```text
https://damtchorzewski.github.io/portfolio-website-template/
```

**Topics:**

```text
portfolio-website portfolio-template website-template astro typescript css accessibility wcag dark-mode responsive-design github-pages static-site front-end
```

The same with the GitHub CLI:

```bash
gh repo edit DamTchorzewski/portfolio-website-template --homepage "https://damtchorzewski.github.io/portfolio-website-template/" --description "A modern, accessible and fast portfolio website template built with Astro. One content file, light and dark theme, case-study pages, deploys to GitHub Pages." --add-topic portfolio-website --add-topic portfolio-template --add-topic website-template --add-topic astro --add-topic typescript --add-topic css --add-topic accessibility --add-topic wcag --add-topic dark-mode --add-topic responsive-design --add-topic github-pages --add-topic static-site --add-topic front-end
```

To let others start from it with one click, also tick **Template repository** (Settings → General), or run
`gh repo edit DamTchorzewski/portfolio-website-template --template`.

## Settings (state on 2026-11-20)

Standard: `reops/standards/github-settings.md`.

| Where (GitHub)                           | Setting                                                                               |
| ---------------------------------------- | ------------------------------------------------------------------------------------- |
| Settings → General → Pull Requests       | merge commits and rebase merging on, **squash merging off**, delete head branches off |
| Pull request creation                    | all users (public repository)                                                         |
| Settings → Pages                         | Source: **GitHub Actions** (published by `deploy.yml`)                                |
| Settings → Environments → `github-pages` | deployment branches: `main` only                                                      |
| Settings → Actions → General             | workflow permissions: read repository contents; fork pull requests need approval      |
| Settings → Code security                 | Dependabot alerts and security updates, secret scanning and push protection           |
| Default branch                           | `main`                                                                                |
| Settings → General                       | **Template repository** on (the "Use this template" button)                           |

No branch ruleset (decision of 2026-11-19, see the standard).
