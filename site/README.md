# AUS Building and Maintenance Service Pty Ltd — website

Static lead-generation site built with [Astro](https://astro.build) and Tailwind CSS 4.
Every page funnels to one of three actions: **call**, **WhatsApp**, or **quote form**.

---

## Prerequisites

Node.js 24 LTS (24.18.0) and npm 11 are installed and the project has been built
successfully. On a fresh machine:

```bash
winget install OpenJS.NodeJS.LTS
```

Then close and reopen the terminal so `node` and `npm` are on the PATH.

## Running it

```bash
npm install
```

```bash
npm run dev
```

Dev server runs at `http://localhost:4321`.

| Command | Does |
| --- | --- |
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built site locally |

---

## Where things live

```
src/
  data/site.ts          Business details — NAP, licence, hours, service areas,
                        form key, testimonials. Change once, updates everywhere.
  data/services.ts      All 12 services: copy, inclusions, process, FAQs, icons.
  layouts/BaseLayout    <head>, SEO meta, JSON-LD schema, header/footer wiring.
  components/           Header, Footer, MobileCTABar, QuoteForm, ServiceCard,
                        CTABand, FAQ, TrustBar, Testimonials, Placeholder.
  pages/                One file per route. services/[slug].astro generates all
                        12 service pages from services.ts.
public/images/          Site imagery. logo.jpg is the supplied raster logo.
```

**Most content edits happen in `src/data/`.** You rarely need to touch a page file
to change copy.

---

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/services` | Services overview |
| `/services/{slug}` | 12 service pages (carpentry, decking, patios, landscaping, fencing, retaining-walls, bathroom-renovation, kitchen-renovation, flooring, tiling, painting, renovations-extensions) |
| `/projects` | Filterable project gallery |
| `/about` | About, licence and credentials |
| `/contact` | Contact details, hours, map, form |
| `/quote` | Dedicated quote conversion page |
| `/thank-you` | Form success page (noindex) |
| `/privacy` | Privacy policy |
| `/404` | Not found |

---

## Before launch — required

These are the things that will actively break or embarrass if left as-is.

### 1. Set the form access key
Sign up free at [web3forms.com](https://web3forms.com) using the business email.
Paste the key into `formAccessKey` in `src/data/site.ts`. **Until this is done the
quote form does not deliver anything.** A warning banner shows on the form while
the key is missing.

### 2. Fill in the TODOs in `src/data/site.ts`
- `abn` — required for a `.com.au` domain and the footer
- `licenceClass` — the QBCC licence class to display on the About page
- `publicLiability` — cover amount, e.g. "$20 million"
- `hours` — confirm real trading hours
- `address.lat` / `address.lng` — exact pin from Google Business Profile
- `social` — real profile URLs, or delete the empty entries

### 3. Replace every placeholder
Placeholders are deliberately obvious — orange dashed boxes reading "Photo
needed". Search the project for them:

```bash
grep -rn "Placeholder\|PLACEHOLDER\|TODO" src/
```

- **Photos** — ✅ mostly done. 21 real project photos are live, catalogued in
  `src/data/projects.ts`. Four services still have no photography and are still
  showing placeholders: **decking, patios, landscaping and painting**. An
  owner/team photo is also still missing from the About page.
- **Job locations** — the photos were supplied without suburbs, so none is
  claimed. Add `suburb` to an entry in `src/data/projects.ts` once confirmed and
  it renders automatically. Do not guess: these are real jobs.
- **Testimonials** — three real reviews in `src/data/site.ts` (first name +
  suburb + service).
- **About page story** — replace the draft "Who we are" copy with the owner's own
  words.

#### Adding a photo

1. Drop the file in `src/assets/projects/` with a descriptive kebab-case name.
2. Add an entry to the `projects` array in `src/data/projects.ts` — set
   `services` to the slugs it illustrates (a photo can serve more than one),
   `stage`, and real `alt` text describing the work.
3. That's it. It appears in the gallery, on each matching service page, and in
   the filter buttons. Add `featured: true` to promote it to the home page.

Images are resized and converted to WebP at build time, so upload the original
full-resolution file — do not pre-compress it. Every photo is a portrait phone
shot and crops with `object-cover`; if the subject is off-centre, set `focus`
(a CSS `object-position`) on the entry.

### 4. Set the real domain
Update `site` in `astro.config.mjs` and the `Sitemap:` line in
`public/robots.txt`. Both currently point at
`https://www.ausbuildingmaintenance.com.au` as a placeholder.

### 5. Vector logo
`public/images/logo.jpg` is the supplied raster file on a black background. Ask
the designer for the AI/EPS/SVG original — the raster version will look soft at
larger sizes and cannot be recoloured for the dark header.

---

## Before launch — strongly recommended

### Google Business Profile
For a local trade this often drives more enquiries than the website itself.
Claim and verify the listing, add photos, and start collecting reviews. The
name, address and phone number **must match `src/data/site.ts` exactly** — Google
cross-checks them.

### Analytics
Add Google Analytics 4 to `src/layouts/BaseLayout.astro`, and set a conversion
goal on pageviews of `/thank-you` so quote submissions are counted.

### Search Console
Verify the domain and submit `https://yourdomain/sitemap-index.xml`.

---

## Deploying

### GitHub Pages (configured)

`.github/workflows/deploy.yml` in the repo root builds and publishes on every
push to `main`. Enable it once, under **Settings → Pages → Build and deployment
→ Source: GitHub Actions**.

The site then lives at `https://<owner>.github.io/<repo>/`.

**How the subpath is handled.** GitHub Pages project sites are served from
`/repo-name/`, and Astro's `base` option does *not* rewrite hardcoded `href` and
`src` attributes. Every internal link therefore goes through `href()` in
[`src/lib/url.ts`](src/lib/url.ts), and `astro.config.mjs` reads `site` and
`base` from the environment:

| Target | `SITE_URL` | `SITE_BASE` |
| --- | --- | --- |
| Local dev | *(default)* | `/` |
| GitHub Pages project site | `https://<owner>.github.io` | `/<repo>` |
| Custom domain | `https://www.yourdomain.com.au` | `/` |

The workflow derives the first two automatically. **Do not add a raw `/path`
link to a template** — use `href('/path')`, or it will 404 on the project URL.

### Moving to a custom domain

1. Repo **Settings → Pages → Custom domain**, enter the domain, save. This
   commits a `CNAME` file.
2. At your DNS provider, point the apex at GitHub's A records (or a `CNAME` for
   `www` at `<owner>.github.io`).
3. Repo **Settings → Secrets and variables → Actions → Variables**, add:
   - `SITE_URL` = `https://www.yourdomain.com.au`
   - `SITE_BASE` = `/`
4. Re-run the workflow. Links drop the `/repo-name` prefix automatically.
5. Tick **Enforce HTTPS** once the certificate provisions.

Then update the `Sitemap:` line in `public/robots.txt` to the real domain.

### Netlify / Cloudflare Pages (alternative)

`netlify.toml` is included with build settings, caching and security headers.
Build command `npm run build`, publish directory `dist`, base directory `site`.
Leave `SITE_BASE` unset so it defaults to `/`.

---

## Note on OneDrive

This project sits inside a OneDrive-synced folder. OneDrive tries to sync
`node_modules`, which causes file-lock errors (`EBUSY`) and can wedge the Astro
dev server mid-session. If that happens, restart the dev server.

To avoid it, either exclude `node_modules` from syncing in OneDrive settings, or
move the project to a non-synced path such as `C:\dev\`. `node_modules` is
gitignored, so nothing is lost.

---

## SEO notes

- Each service page targets a distinct search phrase ("deck builder Kingston",
  not "building company"). Keep them separate — do not merge them into one page.
- `LocalBusiness` (GeneralContractor) schema is emitted on every page from
  `BaseLayout`. Service pages add `Service`, `FAQPage` and `BreadcrumbList`
  graphs.
- Suburb names in `serviceAreas` feed both the visible copy and the schema
  `areaServed`. Keep the list specific rather than just "Brisbane".

## Accessibility notes

- Skip link, visible focus rings, `aria-current` on active nav, labelled form
  fields, `prefers-reduced-motion` respected.
- Body has bottom padding on mobile so the sticky CTA bar never covers content.
- Worth a manual keyboard pass and a Lighthouse run before launch.

---

## Source material

The brand and business details came from three images supplied by the client
(logo, business card, services card), kept in the parent folder. Two spellings
on the printed card were corrected on the site: *Liscence* → **Licence**, and
*Fenceing* → **Fencing**.
