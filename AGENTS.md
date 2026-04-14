# AGENTS.md — Beatriz Saavedra Psicologia

## Project
- **Type**: Astro + Tailwind CSS (SPA)
- **Languages**: Catalan (default), Spanish
- **Stack**: Astro 6, Tailwind v4, TypeScript
- **Package Manager**: pnpm
- **Main branch**: main (currently on `new_design` branch for redesign)

## Conventions

### Code
- All code comments in English
- Use TypeScript types
- Follow existing component patterns in `src/components/`

### Git
- Commit messages: conventional (`feat:`, `fix:`, `chore:`, `update:`, `refactor:`)
- NEVER commit or push automatically
- Wait for explicit user request before commit/push/PR

### Structure
- Sections: `src/components/sections/` (Hero, About, Services, Centers, Contact, Footer, Nav)
- UI components: `src/components/ui/`
- i18n: `src/i18n/` (ca.json, es.json, utils.ts)
- Styles: `src/styles/global.css`

## Workflow

### Adding menu items
1. Add link in `src/components/sections/Nav.astro` (desktop)
2. Add link in `src/components/ui/NavMobile.astro` (mobile)
3. Add translation key in `src/i18n/ca.json` and `src/i18n/es.json`

### Adding new sections
1. Create component in `src/components/sections/`
2. Import and add to `src/pages/index.astro`
3. Add navigation link if needed (see above)

### i18n
- Translation keys go in both `ca.json` and `es.json`
- Use `data-i18n` and `data-i18n-aria` attributes for automatic translation

## User Preferences
- Always explain plan before executing changes
- Wait for explicit "adelante" or approval before making edits
- Never auto-commit or auto-push — user reviews changes first
