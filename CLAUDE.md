# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for the Pittsburgh Recorder Society (pittsburghrecordersociety.org), replacing the abandoned WordPress site. The design references the Washington Recorder Society site (washingtonrecordersociety.org) for feature coverage.

## Commands

- `npm run dev` — Start local dev server
- `npm run dev:cms` — Start Decap CMS local proxy (run in a second terminal alongside `npm run dev`)
- `npm run build` — Type-check (`astro check`) and build static site to `dist/`
- `npm run preview` — Preview the built site locally

## Architecture

**Astro static site** (SSG mode) with Tailwind CSS, deployed to GitHub Pages via GitHub Actions.

Two layouts wrap all pages:
- `BaseLayout.astro` — HTML shell with Header/Footer, SEO meta, Google Fonts (Libre Baskerville + Montserrat), skip-to-content link
- `PostLayout.astro` — Wraps BaseLayout with article heading, date, and `prose` (from `@tailwindcss/typography`) for rendered Markdown content. Used by both blog and event detail pages.

**Content collections** (`src/content.config.ts`) define two Zod-validated schemas:
- `blog` — title, date, description, optional author
- `events` — title, date, optional endDate/location, description

Content is in Markdown files under `src/content/blog/` and `src/content/events/`. Dynamic routes (`[...slug].astro`) use `getStaticPaths()` + `getCollection()` to generate pages.

**Data files**: `src/data/leadership.json` drives the About page leadership section. Add structured data files here as needed.

## Design System

Three custom color scales defined in `src/styles/global.css` (Tailwind v4 CSS-based config):
- `primary` — warm charcoal (headers, body text, backgrounds)
- `teal` — links, CTAs, interactive elements
- `gold` — accents, decorative rules, highlights

Font classes: `font-heading` (Libre Baskerville serif) and `font-body` (Montserrat sans-serif). Base font size is 18px for readability.

The header logo SVG (bridge + musical note) is a placeholder — it will be replaced when the official logo is delivered by a member artist.

## CMS

Decap CMS is configured at `public/admin/` (config in `public/admin/config.yml`). It provides a web-based editor at `/admin/` for non-technical members to create/edit blog posts and events.

**Authentication**: The `config.yml` backend is set to `git-gateway` with `local_backend: true` for local dev. For production, DecapBridge URLs need to be configured (see TODO in `config.yml`). Date fields use `z.coerce.date()` in `content.config.ts` to handle both `YYYY-MM-DD` (hand-written) and ISO timestamp (CMS-generated) formats.

## Key Constraint

Non-technical society members should be able to contribute content (blog posts, event announcements). All content lives in Markdown files with simple frontmatter, editable via Decap CMS at `/admin/` or directly in the repository.

## Adding Content

New blog post: create `src/content/blog/<slug>.md` with frontmatter `title`, `date`, `description`.

New event: create `src/content/events/<slug>.md` with frontmatter `title`, `date`, `description`, and optionally `location` and `endDate`.
