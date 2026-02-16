# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Volja Frontend is a Next.js 15 ecommerce storefront for Atelje Volja, built on the Medusa Commerce Platform. It uses React 19 RC, TypeScript, Tailwind CSS, and deploys to Cloudflare Workers via OpenNextJS.

**Backend**: Medusa Commerce at `api.ateljevolja.si`
**Image CDN**: Cloudflare R2 at `r2.ateljevolja.si`

## Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server with Turbopack on port 8000 |
| `npm run build` | Production build |
| `npm run start` | Production server on port 8000 |
| `npm run lint` | ESLint (next/core-web-vitals) |
| `npm run deploy` | Build + deploy to Cloudflare Workers |
| `npm run preview` | Build + preview Cloudflare build locally |

No test framework is configured.

## Environment Variables

Required:
- `MEDUSA_BACKEND_URL` — Medusa server URL (build fails without it)
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` — Medusa publishable API key (build fails without it)

Optional:
- `NEXT_PUBLIC_STRIPE_KEY` — Stripe public key for payment
- `NEXT_PUBLIC_BASE_URL` — Base URL for metadata (defaults to `https://localhost:8000`)
- `NEXT_PUBLIC_DEFAULT_REGION` — Default region fallback (defaults to `us` in middleware)

## Architecture

### Routing & Regions

All storefront routes are nested under `src/app/[countryCode]/`, making region/country a top-level route parameter. The middleware (`src/middleware.ts`) handles automatic region detection by checking the URL, `x-vercel-ip-country` header, or falling back to `NEXT_PUBLIC_DEFAULT_REGION`.

Two route groups exist under `[countryCode]`:
- `(main)/` — storefront pages (store, products, cart, account, etc.)
- `(checkout)/` — isolated checkout flow with its own layout

The account section uses Next.js parallel routes (`@dashboard` and `@login`).

### Server-First Data Layer

All API communication lives in `src/lib/data/` as Next.js Server Actions (marked `"use server"`). Key files:
- `cart.ts` — cart CRUD, line items, shipping, payment
- `customer.ts` — auth (login/register/logout), profile management
- `products.ts` — product listing with filtering and pagination
- `regions.ts` — region/country mapping
- `payment.ts` — payment provider listing
- `cookies.ts` — JWT (`_medusa_jwt`), cart ID (`_medusa_cart_id`), cache ID management

The Medusa SDK client is configured in `src/lib/config.ts`.

### Caching Strategy

- `force-cache` for stable data (regions cached 1 hour with `revalidate: 3600`)
- `no-store` for frequently changing data (products, cart)
- Tag-based revalidation via `revalidateTag()` after mutations
- Cache keys include a per-user cache ID for user-specific caching

### Component Organization

Feature modules live in `src/modules/` (account, cart, checkout, products, store, layout, etc.). Each module typically has `components/` and `templates/` subdirectories. Shared UI primitives are in `src/modules/common/`.

### Payment Integration

Stripe is the primary payment provider, integrated via `@stripe/react-stripe-js` with Payment Element. Multiple payment methods are supported (card, iDeal, Bancontact, PayPal, manual). Provider ID mappings and UI labels are defined in `src/lib/constants.tsx`.

### Deployment

Deploys to Cloudflare Workers via `@opennextjs/cloudflare`. Config in `wrangler.jsonc` (worker name: `volja-front`). Uses R2 bucket (`volja-front`) for incremental cache via `open-next.config.ts`. The `.open-next/` directory contains build output — do not edit directly.

Note: `next.config.js` sets `ignoreDuringBuilds: true` for both ESLint and TypeScript errors.

### Path Aliases

Configured in `tsconfig.json` (baseUrl: `./src`):
- `@lib/*` → `src/lib/*`
- `@modules/*` → `src/modules/*`

### Styling

Tailwind CSS with Medusa UI preset (`@medusajs/ui-preset`). Custom breakpoints range from `2xsmall` (320px) to `2xlarge` (1920px). Dark mode uses class strategy. Brand color: `atelje-blue` (#91CAFF). Custom grey scale (grey-0 through grey-90) and border radius tokens in `tailwind.config.js`.

Font families: `font-display` (Neue Haas Display — light/roman/bold, loaded as local fonts in `src/app/layout.tsx`) and `font-text` (sans-serif fallback). CSS variable: `--font-neue-haas-display`.

Global CSS (`src/styles/globals.css`) defines utility classes: `.content-container` (max-width 1440px centered), `.contrast-btn`, and typography helpers (`.text-xsmall-regular` through `.text-3xl-semi`).

### Code Style

- Double quotes, no semicolons, trailing commas (es5), tab width 2 (see `.prettierrc`)
- Arrow parens: always
