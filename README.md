# AutoDrive Systems Website

Premium, modern website for AutoDrive Systems - A boutique automation and AI systems consultancy.

## Overview

This is a React/TypeScript website with a minimalist, typography-forward design featuring:

- **Five Pages**: Homepage, What We Do, How We Work, Proof, Contact
- **Enterprise-Grade Aesthetic**: Calm, authoritative design avoiding startup template looks
- **Clean Navigation**: Simple hash-based routing with no external dependencies
- **Responsive Design**: Mobile-friendly layout throughout

## Design Principles

- Minimalist and typography-forward
- Light base (stone-50) with charcoal text (stone-900)
- Muted accent color (teal-700) used sparingly
- Clean sans-serif typography
- No stock photos, AI clichés, or flashy elements
- Visual restraint as a feature

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS v4
- Lucide React (icons)
- Hash-based routing (no React Router dependency)

## Project Structure

```
├── App.tsx                    # Main app component with routing
├── components/
│   ├── Header.tsx            # Site header with navigation
│   ├── Footer.tsx            # Site footer
│   └── pages/
│       ├── HomePage.tsx      # Homepage
│       ├── WhatWeDo.tsx      # Capabilities page
│       ├── HowWeWork.tsx     # Methodology page
│       ├── Proof.tsx         # Case study page
│       └── Contact.tsx       # Contact form page
└── styles/
    └── globals.css           # Global styles and Tailwind config
```

## Key Features

### Hash-Based Routing

The site uses a simple hash-based routing system that works without any external routing libraries:

```typescript
const [currentPath, setCurrentPath] = useState(window.location.hash.slice(1) || '/');
```

### Navigation

- Sticky header with scroll-based border appearance
- Clean navigation links using hash anchors (`#/page-name`)
- Active state indication for current page

### Content Structure

**Homepage**: Hero, credibility strip, capability blocks, work model preview, proof section, CTA

**What We Do**: Three core capabilities with detailed examples and outcomes

**How We Work**: Four-phase methodology with deliverables and timelines

**Proof**: Internal case study with context, problem, approach, controls, and outcomes

**Contact**: Qualification-focused form with improvement areas and readiness levels

## Development

This site is built for Figma Make and runs entirely in the browser. No build step or server required.

## Brand Guidelines

- Brand name "AutoDrive Systems" appears only in header and footer
- Headline: "Reliable Systems for Demanding Operations"
- Tone: Professional, authoritative, calm
- Avoid: Buzzwords, hype, stock photos, AI clichés

## License

All rights reserved © 2026 AutoDrive Systems
