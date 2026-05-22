# SCIBEX Biosciences Group — Corporate Website

A production-ready, multi-page corporate website for **SCIBEX Biosciences Group**, built with
Next.js 14 (App Router), React, Tailwind CSS, Framer Motion and Lucide icons.

> *"Where Modern Science Meets Timeless Wellness"*

---

## Tech stack

- **Next.js 14** — App Router, server components, file-based routing
- **React 18**
- **Tailwind CSS** — custom SCIBEX brand tokens (navy / medical blue / emerald / gold)
- **Framer Motion** — page-load and scroll-reveal animations
- **Lucide React** — icon set
- SEO metadata per page, dynamic `sitemap.xml` and `robots.txt`, JSON-LD organisation schema

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. (Optional) configure environment
cp .env.example .env.local

# 3. Run the development server
npm run dev
```

Open <http://localhost:3000>.

```bash
# Production build
npm run build
npm run start
```

---

## Project structure

```
scibex-next/
├── app/
│   ├── layout.js              # Root layout, fonts, metadata, header/footer
│   ├── page.js                # Homepage
│   ├── globals.css            # Tailwind + brand utilities
│   ├── not-found.js           # 404 page
│   ├── sitemap.js             # Dynamic sitemap
│   ├── robots.js              # robots.txt
│   ├── api/contact/route.js   # Contact form API endpoint
│   ├── about/                 # About SCIBEX
│   ├── leadership/            # Leadership
│   ├── group-companies/       # Group companies overview
│   ├── scibex-pharma/         # Division pages (5) — share DivisionPage template
│   ├── truvedika/
│   ├── functional-beverages/
│   ├── scibex-imex/
│   ├── quantum-intelligence/
│   ├── products/
│   ├── research-innovation/
│   ├── quality-compliance/
│   ├── sustainability/
│   ├── investor-partners/
│   ├── news-media/
│   ├── careers/
│   └── contact/
├── components/                # Header, Footer, ContactForm, shared sections, UI primitives
├── lib/site-data.js           # Single source of truth for all company content
└── public/                    # Add logo files and images here
```

All company content — divisions, leadership, addresses, navigation, metrics, news — lives in
**`lib/site-data.js`**. Edit that one file to update content site-wide.

---

## Contact form

The form posts to the server-side API route at `app/api/contact/route.js`.

- **By default** the route validates the submission, logs it to the server console, and returns
  `{ delivered: false }`. The client then falls back to opening the visitor's email client
  (`mailto:` to `business@scibexbiosciences.com`).
- **To deliver email automatically:** install a mail library and wire it into the marked
  *"EMAIL DELIVERY INTEGRATION POINT"* block in the route, then set the `SMTP_*` variables in
  `.env.local`. Return `{ delivered: true }` once a send succeeds.

```bash
npm install nodemailer   # example transactional option
```

---

## Brand assets

The supplied company logos are **already integrated** and live in `public/`:

- `logo-scibex.png` / `logo-scibex-white.png` — master group logo (navy + white versions)
- `logo-truvedika.png` — TruVedika division
- `logo-imex.png` — SCIBEX IMEX division
- `logo-quantum.png` — SCIBEX Quantum Intelligence division

The header uses the navy master logo; the footer uses the white version. TruVedika, IMEX
and Quantum Intelligence display their own logos on their division pages. SCIBEX Pharma and
Functional Beverages have no separate logo and use brand icon glyphs for visual consistency.

Logos were converted from the original JPGs to transparent-background PNGs. If you have
higher-resolution or vector (SVG) versions — especially of the IMEX logo, which was supplied
at low resolution — replacing the files in `public/` with the same names will upgrade them
automatically.

---

## Deployment

Deploys cleanly to **Vercel** (recommended for Next.js) or any Node host:

```bash
npm run build && npm run start
```

On Vercel, add the same environment variables from `.env.example` in the project settings.

---

## Important notes on content & claims

The copy has been written to be confident but **honest and legally careful**:

- No FDA or regulatory-approval claims. Quality language describes *principles and intent*.
- Functional beverage positioning is category-focused and aspirational — no health claims and no
  claims of superiority over named brands.
- "SCIBEX Quantum Intelligence" is presented as a *forward-looking roadmap*, not a finished
  product.
- The investor page explicitly states that **no public stock or securities** are offered.
- A legal disclaimer appears in the footer site-wide.

Please keep this framing — it protects the company and reads as more credible to serious
partners and investors. Before public launch, replace placeholder leadership initials with real
photographs and have the corporate copy reviewed by counsel.
