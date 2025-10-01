# Copilot Instructions for HospitalWebsite (Sprint 3)

## Project Overview
- **SPA** built with React + Vite + TypeScript
- **TailwindCSS** for all styling (no CSS files)
- **react-router-dom** for routing (SPA navigation)
- **react-hook-form** for all forms
- **No external UI libs** (e.g., Bootstrap, Axios)
- Three user roles: Paciente, Médico, Administrador
- Data is managed in React state (simulate persistence as needed)

## Key Structure & Patterns
- All UI is in `src/` as React components (see `components/`, `pages/`)
- Pages: Home, Integrantes, Sobre, FAQ, Contato, Login, Register, Dashboard
- Dashboards: `src/components/dashboard/` (one per user type)
- Contexts: `src/contexts/` for global state (e.g., user, notifications)
- Types: `src/types/` for TypeScript types
- Routing: `App.tsx` sets up `<Routes>` and layout
- Use **Props** for component data flow; use **Hooks** (`useState`, `useEffect`, `useNavigate`, `useParams`)
- All forms use `react-hook-form` (see Login/Register)

## Developer Workflows
- **Install:** `npm install`
- **Run dev server:** `npm run dev`
- **Build:** `npm run build`
- **Preview build:** `npm run preview`
- **No CSS files:** All styles via Tailwind utility classes
- **No node_modules in ZIP:** Use `.gitignore` to exclude
- **Git:** At least 5 commits per member, 15+ total, keep `.git` in ZIP

## Conventions
- Use only Tailwind for styling (no `styles.css`)
- Use React functional components and hooks
- Use `react-router-dom` for all navigation
- Use `react-hook-form` for all forms
- No direct DOM manipulation (no `document.getElementById` etc.)
- Use context for global state (auth, notifications)
- Use TypeScript types for all props and state

## Examples
- See `src/pages/Login.tsx` for react-hook-form usage
- See `src/components/dashboard/` for role-based dashboards
- See `src/contexts/UserContext.tsx` for context usage

## References
- [README.md](../README.md) for tech, team, and structure
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [React Router Docs](https://reactrouter.com/en/main)
- [React Hook Form Docs](https://react-hook-form.com/)

---
**For AI agents:**
- Always follow SPA, Tailwind, and TypeScript patterns
- Never add CSS files or forbidden libraries
- Use only the allowed dependencies and patterns above
