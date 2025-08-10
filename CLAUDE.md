# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal website built with SvelteKit, TypeScript, and Tailwind CSS. The site features various interactive sections including Torah study tools (TorahGPT, Daf Yomi reader), translation tools, and personal projects.

## Development Commands

```bash
# Development
pnpm dev              # Start development server (Vite)

# Building
pnpm build            # Build for production
pnpm preview          # Preview production build

# Testing
pnpm test            # Run Playwright E2E tests
pnpm test:unit       # Run Vitest unit tests

# Code Quality
pnpm check           # Run svelte-kit sync and svelte-check
pnpm check:watch     # Run checks in watch mode
pnpm lint            # Run Prettier and ESLint checks
pnpm format          # Auto-format code with Prettier
```

## Architecture

### Stack
- **Framework**: SvelteKit with TypeScript
- **Styling**: Tailwind CSS with custom font configurations
- **Testing**: Playwright (E2E), Vitest (unit tests)
- **Deployment**: Netlify adapter configured
- **Build Tool**: Vite

### Project Structure
- `/src/routes/` - SvelteKit file-based routing
  - API endpoints use `+server.ts` files
  - Page components use `+page.svelte` files
  - Server-side logic in `+page.server.ts` files
- `/src/lib/` - Shared components and utilities
  - `/components/` - Reusable Svelte components
  - `/components/containers/` - Layout components
  - `/components/icons/` - Icon components
- `/static/` - Static assets (fonts, images)

### Key Features
1. **TorahGPT** (`/torahgpt`) - AI-powered Torah Q&A system with depth toggle
2. **Daf Yomi Reader** (`/daf`) - Talmud page viewer with Rashi and Tosafot
3. **Translation Tools** (`/translation`) - Hebrew text translation utilities
4. **Rambam Interface** (`/rambam`) - Maimonides text viewer

### Custom Fonts
The project uses multiple custom fonts defined in Tailwind config:
- Metropolis (various weights)
- Hebrew fonts (Vilna, Rashi)
- Display fonts (threeam, rainy, science, etc.)

### API Integration
- OpenAI integration for TorahGPT
- Sefaria API for Jewish texts
- Redis for caching (ioredis)
- PostHog for analytics

### Development Notes
- The site uses server-side rendering with SvelteKit
- API routes handle POST requests for interactive features
- Custom background and sidebar components provide consistent layout
- Currently under construction with placeholder content on homepage