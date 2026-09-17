# Google Business Profile — setup pack

Everything needed to create the listing, in the order Google asks for it.

**This has to be done by the business owner.** Creating the profile needs a Google
account, and verification needs someone who can answer the phone on the business
number or film the premises and tools on camera. Neither can be delegated to a
developer account without risking a suspension later.

> **Why this matters more than the website.** For a local trade, the Business
> Profile usually drives more enquiries than the site does. Someone searching
> "deck builder Kingston" sees the map pack before they see any website. Treat
> this as the higher-priority job of the two.

---

## Before you start

Google's creation flow is **11 fields across 4 screens, and it only holds your
input for 30 minutes**. Have these settled first:

| Needed | Status |
| --- | --- |
| Google account (use `ausbuildingandconstruction@gmail.com`) | ✅ exists |
| Business name, phone, address | ✅ below |
| Confirmed trading hours | ⚠️ **currently assumed — confirm with Akramul** |
| A few photos | ✅ 22 in `site/src/assets/projects/` |
| Website URL | ⚠️ currently the GitHub Pages URL; use the real domain if it's ready |

Start at [business.google.com](https://business.google.com) → "Manage now".

---

## Screen 1 — Business name and category

**Business name** — must match the website and signage exactly. Do not add
keywords like "Builders Logan"; that is a guideline violation and a common cause
of suspension.

```
AUS Building and Maintenance Service Pty Ltd
```

**Primary category** — this single field does more for ranking than anything
else on the profile. It should match the main thing you want to be found for.

```
General contractor
```

*This matches the `GeneralContractor` schema already emitted on every page of the
website, which keeps the two consistent.*

**Additional categories** — add as many as genuinely apply. Each one makes the
profile eligible for a different set of searches:

```
Carpenter
Bathroom remodeler
Kitchen remodeler
Flooring contractor
Tile contractor
Painter
Fence contractor
Deck builder
Landscaper
Retaining wall supplier
Construction company
```

---

## Screen 2 — Location

**Answer "No" to "Do you want to add a location customers can visit?"**

This is the important decision on the whole form. 36 Aquarius Dr is a residential
address with no signage and no staffed shopfront. Listing it as a visitable
location does not meet Google's storefront requirements — a location needs
permanent signage and staffing during stated hours to qualify — and the profile
can be suspended for it.

Choosing "No" makes this a **service-area business**: the address is used for
verification but hidden from the public listing, and customers see the suburbs
served instead.

**Address (entered for verification, then hidden):**

```
36 Aquarius Dr
Kingston QLD 4114
Australia
```

---

## Screen 3 — Service areas

Google allows up to 20. These are the 14 suburbs already used on the website, so
the two stay consistent:

```
Kingston QLD
Logan Central QLD
Woodridge QLD
Springwood QLD
Slacks Creek QLD
Underwood QLD
Loganholme QLD
Shailer Park QLD
Marsden QLD
Browns Plains QLD
Beenleigh QLD
Rochedale QLD
Sunnybank QLD
Mount Gravatt QLD
```

Six slots spare. Add real suburbs you actually travel to — **not** "Brisbane
southside", which the website uses as prose but is not a region Google accepts.
Keep everything within roughly a two-hour drive; padding the list with places you
would not actually go is a guideline violation.

---

## Screen 4 — Contact details

**Phone** — must match the website exactly:

```
0466 079 819
```

**Website:**

```
https://mdabashar.github.io/aus-building-maintenance/
```

Replace with the real domain once it is registered, and update `site` in
`site/astro.config.mjs` to match.

---

## Verification

Service-area businesses are now usually asked for **video verification**, which
takes 3–5 business days. You record a single unbroken walkthrough showing:

- the tools and equipment, ideally in the vehicle
- any branding — the ute signage and the logo on the business card both help
- the licence or business documents
- yourself, to show you are authorised to manage the business

Phone or SMS verification takes about 5 minutes if offered; postcard takes 5–14
days. Take whichever Google offers — you do not get to choose.

**Do not change the business name, address or category while verification is
pending.** That resets the process.

---

## After verification

### 1. Fill in the rest of the profile
Google weights completeness heavily.

**Description** (750 char limit — this is the website's meta description, which
is already written to the right length):

```
Licensed building, renovation and property maintenance services in Kingston,
Logan and the Brisbane southside. Carpentry, decking, patios, fencing, retaining
walls, kitchens, bathrooms and more. Free quotes.
```

**Opening date** — the month and year the business started trading.

**Hours** — ⚠️ the website currently assumes Mon–Fri 7–5, Sat 8–2, Sun closed.
**Confirm the real hours**, then make sure both match. If they differ, update
`hours` and `hoursSchema` in `site/src/data/site.ts`.

**Services** — add all 12 as individual service items. The names and one-line
descriptions are already written in `site/src/data/services.ts` (`name` and
`summary` on each entry) and can be pasted straight in.

**Attributes** — tick the ones that apply: "Online estimates", "Onsite services",
and any identity attributes the owner wants to display.

### 2. Photos
Upload 10–15 from `site/src/assets/projects/`. Google favours profiles with
recent, regularly-added photos. Add a few whenever a job finishes.

The logo (`site/public/images/logo.jpg`) goes in the logo slot; pick a strong
finished job for the cover photo — `kitchen-renovation-stone-benchtop.jpg` is the
one carrying the website hero.

### 3. Reviews
The single biggest ranking and conversion factor. Google generates a short review
link from the profile — send it to past customers by SMS or WhatsApp right after
a job finishes, while they are still pleased with the work.

These reviews also solve an open item on the website: the three testimonials in
`site/src/data/site.ts` are still placeholders. Real Google reviews can be quoted
there (first name + suburb + service).

### 4. Keep NAP identical everywhere
Google cross-checks the business name, address and phone across the web. They
must be byte-identical on the profile, the website, the business card and any
directory listing. The website's values all come from `site/src/data/site.ts`, so
that file is the reference.

---

## Two things to be careful about

**Do not create a second profile.** If a listing for this business already exists
— Google sometimes auto-generates them from other data — claim it rather than
creating a new one. Duplicates get both listings suspended. Search the business
name and phone number in Google Maps before starting.

**Do not use the QBCC licence number as the ABN.** They are different identifiers.
Licence 15383711 goes in the profile description or a service description if
anywhere; the ABN is still outstanding and is separately needed for a `.com.au`
domain.

---

## Related

- Business details: [`site/src/data/site.ts`](../site/src/data/site.ts)
- Service names and summaries: [`site/src/data/services.ts`](../site/src/data/services.ts)
- Launch checklist: [`site/README.md`](../site/README.md)
