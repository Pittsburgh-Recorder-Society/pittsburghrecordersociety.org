# Pittsburgh Recorder Society Website

[![CI](https://github.com/Pittsburgh-Recorder-Society/pittsburghrecordersociety.org/actions/workflows/ci.yml/badge.svg)](https://github.com/Pittsburgh-Recorder-Society/pittsburghrecordersociety.org/actions/workflows/ci.yml)

The new website for the [Pittsburgh Recorder Society](https://pittsburghrecordersociety.org), replacing the abandoned [WordPress site](https://pittsburghrecordersociety.wordpress.com/). Built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/), deployed to [GitHub Pages](https://pages.github.com/).

## Background

The old WordPress site has been abandoned since ~2020. The group is active — meeting monthly and maintaining an active [Facebook page](https://www.facebook.com/PittsburghRecorderSociety/) — but Facebook is no substitute for an independent website. The [Washington Recorder Society site](https://www.washingtonrecordersociety.org/) serves as a reference for features and content coverage.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [Git](https://git-scm.com/)
- A GitHub account (for pushing changes)

### Initial Setup

```sh
git clone https://github.com/Pittsburgh-Recorder-Society/pittsburghrecordersociety.org.git
cd pittsburghrecordersociety.org
npm install
```

### Local Development

```sh
npm run dev
```

Visit `http://localhost:4321/` to see the site. Changes to source files reload automatically.

### Building for Production

```sh
npm run build      # Type-check and build to dist/
npm run preview    # Preview the production build locally
```

## Deployment

The site auto-deploys to GitHub Pages on every push to `main` via GitHub Actions.

### First-time setup

1. Go to the repo's **Settings** > **Pages**
2. Under **Source**, select **GitHub Actions**

That's it. The CI workflow builds the site and deploys it. Before a custom domain is configured, the site will be at:
`https://pittsburgh-recorder-society.github.io/pittsburghrecordersociety.org/`

### Custom domain

When ready to use `pittsburghrecordersociety.org`:

1. Buy the domain and configure DNS to point to GitHub Pages ([docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site))
2. In the repo's **Settings** > **Pages**, enter `pittsburghrecordersociety.org` as the custom domain
3. Add `CUSTOM_DOMAIN=true` as a repository variable (**Settings** > **Secrets and variables** > **Actions** > **Variables**) so the build uses the correct base URL

## Adding Content

Content can be added either through the CMS editor at `/admin/` or by creating Markdown files directly in the repository.

### Using the CMS Editor

The site includes [Decap CMS](https://decapcms.org/), a web-based editor that lets you create and edit blog posts and events without touching code.

**Locally**: run both commands in separate terminals, then visit `http://localhost:4321/admin/`:

```sh
npm run dev        # Astro dev server
npm run dev:cms    # Decap CMS local proxy
```

**In production**: visit `pittsburghrecordersociety.org/admin/` and log in (requires CMS authentication setup — see below).

### Creating Markdown Files Directly

**New blog post** — create `src/content/blog/<slug>.md`:

```markdown
---
title: "Post Title"
date: 2026-03-15
description: "A short summary for listing pages."
---

Post body in Markdown.
```

**New event** — create `src/content/events/<slug>.md`:

```markdown
---
title: "Event Title"
date: 2026-04-25
location: "First United Methodist Church, 5401 Centre Avenue, Pittsburgh, PA 15232"
description: "A short summary for listing pages."
---

Event details in Markdown.
```

### Updating Leadership

Edit `src/data/leadership.json` to update the board member names, roles, and bios shown on the About page.

## CMS Authentication (Production)

For non-technical members to use the CMS editor in production, you need to set up [DecapBridge](https://decapbridge.com) (free for small teams):

1. Create an account at [decapbridge.com](https://decapbridge.com)
2. Add your site and generate a GitHub Personal Access Token with `contents: read/write` and `pull_requests: read/write` permissions
3. In `public/admin/config.yml`, uncomment and fill in the `identity_url` and `gateway_url` lines with your DecapBridge URLs
4. Invite members through DecapBridge — they log in with email, no GitHub account needed

Each save in the CMS creates a Git commit, which triggers a rebuild (typically 1–2 minutes).

## Future Plans

- Official logo from a member artist (current header mark is a placeholder)
- Custom domain setup (pittsburghrecordersociety.org)
