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

## Releases

### Version bump
Follow semver when updating `version` in `package.json`:
- **Patch** (x.x.**1**) → bug fixes only
- **Minor** (x.**1**.0) → new features, backward compatible
- **Major** (**1**.x.x) → breaking changes

### How it works
The release workflow (`.github/workflows/release.yml`) triggers automatically when:
1. Push to `main` branch
2. `package.json` file has changed

The workflow:
- Reads the new version from `package.json`
- Creates a git tag `v{x.y.z}`
- Creates a GitHub Release with **auto-generated changelog** from PRs since last release

### PR Labels
For meaningful changelogs, add labels to PRs before merging:
- `feat` → New features
- `fix` → Bug fixes
- `chore` → Maintenance
- `refactor` → Code refactoring

### Release Example
```
1. PR: "feat: add language toggle to mobile" → label: feat
2. Merge PR to main
3. Update version in package.json: 2.0.1 → 2.1.0
4. Commit: "release: v2.1.0"
5. Push to main
6. Workflow runs → creates tag v2.1.0 + Release with changelog
```
