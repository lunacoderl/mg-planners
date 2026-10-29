# mg-planners

**MG Planners — Architecture Studio & Construction Website**
*Senior website implementation · React + Vite · Tailwind CSS · SEO-First · Immersive Architecture Experience*

---

## 🏛️ About MG Planners
MG Planners is an architecture and planning firm based in Siddhartha Nagar, Vijayawada, Andhra Pradesh. We operate an integrated delivery model uniting:
- **MG Planners**: Architectural design, 3D spatial planning, CAD drafting, municipal layouts, and specialized NOC drawing consultancy.
- **MG Constructions**: On-site turnkey building construction, RCC structural framing, masonry, and high-finish handover.
- **Swamy Associates**: Strategic professional consortium partner for structural engineering and joint project delivery.

**Official Recognitions**:
- **HPCL 2023–24 NOC Drawing Consultancy Recognition Plaque**
- **Martur Lubes C & F Construction Appreciation Memento**

---

## 🎨 Architectural Design System
- **Warm Ivory (`#F7F5EF`)**: Primary canvas background
- **Cobalt Blue (`#174B91`)**: Brand recognition, key navigation links, and primary action CTAs
- **Terracotta (`#E66B43`)**: Accents, highlights, and status tags
- **Warm Yellow (`#F2C94C`)**: Award highlights, memento badges, and decorative accents
- **Charcoal (`#202B39`)**: Headings, contrast sections, and structured footer
- **Sage Tint (`#E9F3ED`)**: Contextual callout banners
- **Typography**: **Manrope** for bold editorial headlines and **Inter** for technical specifications and body text

---

## 📂 Project Asset Catalog
- `public/logo.png`: Official brand emblem
- `public/projects/`: 14 verified completed architectural works (residential buildings, commercial storefronts, luxury interiors, masterplans)
- `public/working/`: 14 on-site under-construction field records (excavation, theodolite surveying, formwork, rebar grids, column concrete casting, and brickwork)
- `public/mementos/`: 7 authentic award mementos and corporate appreciation plaques

---

## 🚀 Pages & Routes
- `/`: 10-section homepage (Hero, About, Services, Featured Projects, Process, Testimonials & Awards, Dual Gallery, FAQ, Contact CTA, Footer)
- `/about`: Deep-dive architectural philosophy, history, and consortium structure
- `/services`: In-depth service breakdown with sticky navigation, deliverables, and approach
- `/projects`: Interactive portfolio with completed works and on-site construction view modes
- `/contact`: Direct phone, email, Siddhartha Nagar office address, Plus Code (`MG52+6Q8`), and Google Maps embed
- `/privacy-policy`, `/terms`, `/cookie-policy`: Legal compliance pages
- `/404`: Architectural custom fallback route

---

## 📱 Global CTAs
- **Direct Phone Call**: [`+91 9440368363`](tel:9440368363)
- **WhatsApp Direct**: [`+91 9440368363`](https://wa.me/919440368363)
- **Animated Scroll to Top**

---

## 🛠️ Local Development & Build

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 🌐 Deployment (Vercel)
Configured with `vercel.json` SPA rewrites for single-page routing on Vercel:
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
