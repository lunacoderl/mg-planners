# MG Planners — Changelog

All notable changes to the MG Planners website project are documented in this file.

## [1.0.0] - 2026-10-29

### Added
- **Design System & Tokens**:
  - Warm Ivory (`#F7F5EF`), Cobalt Blue (`#174B91`), Terracotta (`#E66B43`), Warm Yellow (`#F2C94C`), and Charcoal (`#202B39`).
  - Typography system pairing **Manrope** for editorial headlines with **Inter** for readable body and metadata.
- **Asset Integration**:
  - Integrated official high-resolution `logo.png`.
  - Ingested 7 verified mementos/awards (`public/mementos/`) including HPCL 2023-24 NOC Drawing Consultancy plaque.
  - Ingested 14 authentic project photographs (`public/projects/`).
  - Ingested 14 on-site engineering and construction working photos (`public/working/`).
- **10 Homepage Ordered Sections**:
  1. Announcement Strip & Sticky Header Navigation
  2. Immersive Hero with responsive clamp headline and Dr. Charan Residency feature
  3. About MG Planners with consortium details (MG Constructions & Swamy Associates)
  4. Services Overview with 4 interactive capabilities cards
  5. Featured Projects with asymmetrical editorial grid and lightbox
  6. Our Process with 4-phase responsive timeline
  7. Testimonials & Awards with real physical memento inspection
  8. Immersive Gallery showcasing on-site construction and finished facades
  9. Frequently Asked Questions accessible accordion
  10. Final Contact CTA & Structured Architectural Footer
- **Dedicated Inner Pages**:
  - `/about`: Deep-dive architectural studio philosophy, history, and craftsmanship values.
  - `/services`: In-depth service breakdown with sticky navigation, deliverables, and approach.
  - `/projects`: Filterable portfolio by sector (`Residential`, `Commercial`, `Planning & Consultancy`) with lightbox.
  - `/contact`: Direct phone (`+91 9440368363`), email, office address, Plus Code (`MG52+6Q8`), and Google Maps embed.
  - Legal & compliance pages: `/privacy-policy`, `/terms`, `/cookie-policy`.
  - `/404`: Architectural "Blueprint Not Found" fallback route.
- **Technical SEO & Core Web Vitals**:
  - Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`).
  - Schema.org JSON-LD `ArchitecturalFirm` markup with geo coordinates and verified address.
  - `robots.txt` and `sitemap.xml`.
  - Lazy-loading route splitting (`React.lazy` + `Suspense`) achieving optimal LCP and minimal bundle sizes.

## [1.1.0] - 2026-10-29

### Added
- **Global Vertical Floating CTAs (`FloatingActions.jsx`)**:
  - Direct Phone Call CTA (`tel:9440368363`).
  - Direct WhatsApp Consultation CTA with custom pre-filled message (`wa.me/919440368363`).
  - Animated Scroll-to-Top button appearing on scroll past 250px.
  - Active globally on all routes.
- **Mobile First-Screen Hero Redesign**:
  - Full-bleed interior background image (`/projects/8de76b21-4a64-40f6-824e-ef358af653a1.jpg`) on mobile viewports.
  - Displayed brand title **MG PLANNERS** prominently.
  - Clean, compact typography placed directly on the image with subtle drop-shadows and no overlaying colored boxes.
- **Complete Asset Mapping (100% of User Images Included)**:
  - 14 completed works from `public/projects/` mapped into `projectsData`.
  - 14 on-site under-construction works from `public/working/` mapped into `workingSitesData`.
  - 7 verified award plaques from `public/mementos/` mapped into `awardsData`.
- **Dual-Mode Interactive Gallery & Portfolio**:
  - Added tab switcher on the homepage gallery and projects page to toggle between Completed Works and On-Site Construction stages.
