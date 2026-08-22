# ORIKS Energy Care Pvt Ltd — Renewable EPC Website

A responsive corporate website for **ORIKS ENERGY CARE PVT LTD**, focused on renewable-energy EPC, power evacuation, grid connectivity, pooling substations, transmission infrastructure, testing / commissioning and O&M.

## Frontend stack

- React 19
- TypeScript
- Vite 8
- React Router
- Responsive CSS design system
- Browser-native IntersectionObserver animations

This replaces the earlier static multi-page HTML prototype with a reusable component-based frontend application.

## Pages

- Home
- About
- Services
- Capabilities
- Projects
- Safety & Quality
- Contact / Project Brief

## Design direction

Pure-white corporate theme with restrained renewable green, charcoal typography, strong editorial spacing and high-impact renewable / electrical infrastructure imagery. The information architecture is inspired by common patterns used by established Indian renewable EPC and power-evacuation companies: clear service families, end-to-end capability mapping, measurable project proof, safety / quality, and a technical project-enquiry flow.

No competitor text, branding or proprietary assets are copied.

## Content integrity

The site intentionally does **not** invent ORIKS project counts, MW executed, transmission kilometres, substation ratings, client logos, certifications or utility empanelments. The Projects page provides a professional case-study format for those figures to be added after ORIKS management verifies them.

## Registered office

58/1, Ramanujanagar, Sengunthapuram, Karur, Karur, Tamil Nadu, India — 639002.

## Contact form

Because an approved ORIKS email address / CRM endpoint has not been supplied, the Contact page currently creates a structured project brief in the browser and lets the user copy it. Connect the form to the approved email, CRM or hosting form endpoint before production launch.

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

The `public/.htaccess` file supports SPA routing on Apache / Hostinger. `public/_redirects` supports compatible static hosts such as Netlify / Render-style redirect setups.
