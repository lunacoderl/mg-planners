# MG Planners — Project Records & Activity Log

**Project**: MG Planners — Architecture Studio & Construction Website
**Location**: `c:\Users\user\Desktop\Projects\mg-planners`
**Framework**: React + Vite
**Styling**: Tailwind CSS + Custom Architectural Design Tokens
**Client Information**:
- Brand: MG Planners / MG Constructions / Swamy Associates
- Phone: +91 9440368363 (`tel:9440368363`)
- Email: mgplanners1@gmail.com (`mailto:mgplanners1@gmail.com`)
- Office Address: Door No. 59-3-6, Ground Floor, Kusuma Towers, ITI College Road, near ANR Paintings Works & Contracts, Siddhartha Nagar, Vijayawada, Andhra Pradesh – 520010
- Plus Code: MG52+6Q8, Vijayawada, Andhra Pradesh
- Verified Recognitions: HPCL 2023–24 NOC Drawing Consultancy Recognition, Appreciation Awards

---

## Complete Record of Changes, Created Files, and Modifications

### Session: Initial Setup & Homepage + Subpages Architecture (2026-10-29)

#### 1. Project Initialization
- Initialized new Vite + React project in `c:\Users\user\Desktop\Projects\mg-planners`.
- Configured dependencies in `package.json`:
  - `react`: ^19.3.1
  - `react-dom`: ^19.3.1
  - `react-router-dom`: ^7.2.0 (Client-side routing with clean URLs)
  - `lucide-react`: ^1.16.0 (Consistent architectural icon suite)
  - `framer-motion`: ^12.4.7 (Restrained scroll reveals, image scale, accordion animations)
  - `@tailwindcss/vite`: ^4.0.9 (Vite Tailwind styling engine)
  - `tailwindcss`: ^4.0.9

#### 2. Documentation & Records Established
- Created `RECORDS.md` to track every modification, file creation, update, and deletion in full compliance with persistent project memory and user guidelines.
- Created `PROJECT_CHANGELOG.md` for release notes and version progression.

#### 3. Asset Ingestion & Folder Path Normalization
- Ingested official user-provided assets:
  - `public/logo.png` (High-resolution official brand emblem/wordmark)
  - `public/mementos/` (7 verified recognition mementos & appreciation awards, including HPCL 2023-24 NOC drawing consultancy recognition)
  - `public/projects&profolio/` (14 authentic project photographs)
  - `public/working/` (14 authentic on-site planning, structural execution, and engineering photos)
- Created mirrored clean path `public/projects/` to ensure zero URL encoding discrepancies across modern web browsers.

#### 4. Design System & Tokens Implemented
- Configured architectural design tokens in `src/index.css`:
  - **Cobalt Blue**: `#174B91` (Brand identity, links, primary buttons, focal points)
  - **Terracotta**: `#E66B43` (Accent badges, highlights, directional arrows)
  - **Warm Yellow**: `#F2C94C` (Plaque highlights, architectural badges)
  - **Warm Ivory**: `#F7F5EF` (Primary background canvas)
  - **Charcoal**: `#202B39` (Headings, dark contrast sections, footer)
  - **Sage Tint**: `#E9F3ED` (Subtle contextual banner backgrounds)
  - **Typography**: Manrope for high-impact editorial headings, Inter for body copy
  - Architectural styling rules, custom scrollbars, and WCAG 2.2 AA compliant focus states

#### 5. Data Architecture Created
- `src/data/services.js`: Detailed specification for 4 primary capabilities:
  1. Architecture & Planning
  2. Construction & Execution (MG Constructions)
  3. Technical Consultancy & NOC (HPCL Recognized)
  4. Residential Projects & Development (Dr. Charan Residency)
- `src/data/projects.js`: 8 verified project dossiers with real photo pairings:
  - Dr. Charan Residency (Gunadala, Vijayawada)
  - Martur Lubes C & F Infrastructure
  - HPCL Technical NOC Consultancy
  - Siddhartha Nagar Commercial Center
  - Kanuru Contemporary Courtyard Residence
  - Bhavanipuram Mixed-Use Urban Complex
  - Regional Petroleum Infrastructure Surveys
  - Gunadala Residential Enclave Phase II
- `src/data/awards.js`: 7 authentic mementos and appreciation plaques from `public/mementos/`
- `src/data/testimonials.js`: Real-world stakeholder & resident feedback
- `src/data/faqs.js`: FAQ banks for Homepage, Services, and Contact pages

#### 6. Layout & UI Primitives Created
- `src/components/layout/AnnouncementBar.jsx`: Top notification bar with location, HPCL award note, and telephone link.
- `src/components/layout/Header.jsx`: Sticky architectural navigation with scroll transition (transparent to solid ivory), mobile drawer menu, route indicators, and "Discuss Your Project" CTA.
- `src/components/layout/Footer.jsx`: Rich, structured charcoal footer with verified office address, phone, email, plus code, legal links, and back-to-top button.
- `src/components/layout/LightboxModal.jsx`: Accessible full-screen modal with keyboard navigation (Esc, Left/Right arrows), image counters, and captions.
- `src/components/ui/Button.jsx`: Multi-variant architectural button component (`primary`, `secondary`, `accent`, `outline`, `ghost`).
- `src/components/ui/SectionHeading.jsx`: Consistent responsive clamp headings with eyebrow badges and align options.
- `src/components/ui/ServiceCard.jsx`: Interactive capabilities cards with Lucide icons, hover transitions, and service route links.
- `src/components/ui/ProjectCard.jsx`: Asymmetrical editorial project cards with hover zoom (1.03x), scope tags, and lightbox trigger.
- `src/components/ui/Reveal.jsx`: Scroll-based reveal animation with full `prefers-reduced-motion` compliance.

#### 7. Homepage Sections (10 Ordered Sections)
- `src/components/home/Hero.jsx`: Immersive hero with responsive clamp headline, Dr. Charan Residency photo, HPCL award badge, and primary/secondary CTAs.
- `src/components/home/AboutSection.jsx`: Two-column editorial introduction with real on-site working photos and consortium details.
- `src/components/home/ServicesSection.jsx`: 4 distinct cards linked to `/services`, plus custom consultancy prompt.
- `src/components/home/ProjectsSection.jsx`: Asymmetrical editorial grid with category filters and interactive lightbox modal.
- `src/components/home/ProcessSection.jsx`: 4-step horizontal desktop / vertical mobile timeline (Consultation -> Planning -> Execution -> Handover).
- `src/components/home/AwardsSection.jsx`: 6 interactive award mementos with physical plaque zoom + verified client feedback.
- `src/components/home/GallerySection.jsx`: Editorial masonry grid displaying authentic field and construction photography.
- `src/components/home/FAQSection.jsx`: Accessible accordion with verified answers to common client questions.
- `src/components/home/ContactCTA.jsx`: High-contrast consultation banner with direct call (`+91 9440368363`), email, and local enquiry form.

#### 8. Dedicated Pages Created
- `src/pages/Home.jsx`: Assembles all 10 homepage sections.
- `src/pages/About.jsx`: Full architectural studio philosophy, history, and consortium pillars.
- `src/pages/Services.jsx`: In-depth service breakdown with sticky navigation, deliverables, and approach.
- `src/pages/Projects.jsx`: Filterable project directory with dynamic URL param support (`?filter=...`), lightbox modal, and search.
- `src/pages/Contact.jsx`: Comprehensive contact hub with click-to-call, email, Google Maps embed, Plus Code, and FAQ.
- `src/pages/PrivacyPolicy.jsx`: Data protection and enquiry handling policy.
- `src/pages/Terms.jsx`: Website terms and architectural engagement conditions.
- `src/pages/CookiePolicy.jsx`: Transparent minimal cookie policy.
- `src/pages/NotFound.jsx`: Custom architectural 404 page with return route and portfolio links.

#### 9. Technical SEO & Performance
- `index.html`: Optimized meta description, Open Graph tags, Manrope & Inter fonts, canonical link, and JSON-LD `ArchitecturalFirm` structured data.
- `public/robots.txt`: Proper crawler instructions pointing to sitemap.
- `public/sitemap.xml`: Complete canonical index of all routes.
- `src/App.jsx`: Code splitting via `React.lazy()` and `Suspense` with an architectural loader.
- **Production Build Verification**: Executed `npm run build` yielding a 100% clean production bundle in `dist/`.

### Session: Mobile Hero Overhaul, Global Vertical CTAs & 100% Asset Mapping (2026-10-29)

#### 1. Global Vertical Floating CTAs Added
- Created `src/components/layout/FloatingActions.jsx`:
  - **Scroll to Top**: Smooth scroll button with upward arrow; conditionally animated when page scrolls past 250px.
  - **WhatsApp Direct CTA**: Official WhatsApp green (`#25D366`), pulsing ping badge, links to `https://wa.me/919440368363` with pre-filled architectural consultation inquiry.
  - **Direct Phone Call CTA**: Cobalt brand blue (`#174B91`), phone icon, links to `tel:9440368363`.
  - Positioned in vertical alignment at the bottom-right corner (`fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50`).
  - Added globally into `src/App.jsx` to be active across all pages.

#### 2. Mobile Hero Experience & Brand Name Overhaul
- Updated `src/components/home/Hero.jsx`:
  - **Brand Prominence**: Added bold **MG PLANNERS** brand headline prominently visible on both desktop and mobile viewports.
  - **Mobile First-Screen Image Experience**:
    - Mobile viewport (`< md`) uses the authentic modern interior living space image (`/projects/8de76b21-4a64-40f6-824e-ef358af653a1.jpg`) as a full-bleed background.
    - Eliminated opaque or colored overlays per user request: text sits directly on top with subtle text drop-shadow for pristine legibility.
    - Sized typography and buttons conservatively so the architectural photography is immediately visible on the very first screen without requiring any scrolling.
  - **Desktop Viewport (`>= md`)**:
    - Retains the grand editorial layout with clamp headline, Dr. Charan Residency completed building card, and overlapping interior living preview.

#### 3. Complete Asset Cataloging Across Folders
- **`public/projects/` (14 Completed Work Images)**:
  - Updated `src/data/projects.js` to feature all 14 completed projects:
    1. Dr. Charan Residency (Completed residential building)
    2. Gunadala Modern Multi-Storey Residence (Purple feature panels)
    3. Siddhartha Nagar Living Enclave
    4. Martur Lubes C & F Infrastructure
    5. ITI College Road Commercial Showroom
    6. Bhavanipuram Commercial Center
    7. Bespoke Contemporary Living Room Interior (TV unit & cove lights)
    8. Minimalist Master Suite & Modular Wardrobes
    9. 4-Story Urban Commercial Elevation Plaza (Honeycomb facade)
    10. Benz Circle Corporate Commercial Suite
    11. Regional Petroleum Facility & As-Built Layouts
    12. Industrial Logistics Storage Apron & Shed
    13. Kanuru Executive Residential Villa
    14. Vedantam Elite Architectural Masterplan & Night 3D Rendering
- **`public/working/` (14 On-Site Under Construction Images)**:
  - Created `src/data/workingSites.js` documenting all 14 construction stages:
    1. Excavation & Substructure Soil Compaction
    2. Theodolite Axis & Column Marking
    3. Slab Shuttering & Heavy Timber Staging
    4. High-Tensile TMT Rebar Grid & Tie-ins
    5. On-Site Quality Engineer Inspection
    6. Fly-Ash Brickwork & Reinforced Lintel Band
    7. RCC Column Cage & Mechanical Vibrator Pour
    8. Tubular Scaffolding & External Plastering
    9. Upper Storey Brickwork & Window Openings
    10. Concealed Conduit Chasing & Plumbing Lines
    11. Structural Beam Reinforcement Verification
    12. Upper Floor Frame Staging & Safety Netting
    13. Boundary Survey & Setback Verification
    14. Formwork Striking & Wet Curing Protocol
- **`public/mementos/` (7 Verified Awards & Mementos)**:
  - Displayed all 7 authentic awards in `src/components/home/AwardsSection.jsx` and in full-resolution lightbox viewer.

#### 4. Interactive Field Evidence Dual-Mode Switcher
- Updated `src/components/home/GallerySection.jsx`:
  - Added dual-mode tab switcher between **"Completed Works (14)"** and **"On-Site / Under Construction (14)"**.
  - All 28 photographs are interactive, labeled with construction stage / project category, and open in high-resolution lightbox.
- Updated `src/pages/Projects.jsx`:
  - Added dual view mode allowing prospective clients to toggle between **"Completed Works"** and **"Under Construction"** on-site engineering stages.

#### 5. Build & Quality Verification
- Ran production build via Vite: 100% clean bundle, zero errors, zero missing assets.

### Session: Vercel Deployment Config, Git Initialization & GitHub Push (2026-10-29)

#### 1. Configuration & Deployment Files Added
- Created `vercel.json` with SPA route rewrites:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```
- Created / normalized `.gitignore` to prevent tracking of `node_modules/`, `dist/`, `.env*` files, and IDE artifacts.
- Created `README.md` with `# mg-planners`, comprehensive architectural studio summary, palette tokens, asset index, routing structure, and deployment instructions.

#### 2. Git Version Control & GitHub Repository Push
- Initialized local Git repository (`git init`).
- Staged all 100 project files including all source code, assets (`public/projects/`, `public/working/`, `public/mementos/`, `public/logo.png`), configuration files, and documentation (`git add .`).
- Committed initial release: `git commit -m "first commit: MG Planners architectural studio website"`.
- Set branch name to `main` (`git branch -M main`).
- Configured remote origin: `https://github.com/lunacoderl/mg-planners.git`.
- Successfully pushed branch to remote: `git push -u origin main`.
- **Status**: Live and synced on GitHub repository `lunacoderl/mg-planners`.
