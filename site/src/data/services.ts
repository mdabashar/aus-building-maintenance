/**
 * The 12 services listed on the company's services card, each expanded into a
 * page. These pages are the main SEO surface — people search "deck builder
 * Kingston", not "building company", so every service gets its own URL,
 * heading and FAQ block.
 *
 * Copy here is written to be accurate for a licensed builder without inventing
 * claims that can't be verified (years in business, job counts, awards). Anything
 * needing the client's input is marked TODO.
 */

export type Service = {
  slug: string;
  name: string;
  /** Short label for cards and nav. */
  short: string;
  /** One-line summary used on the services grid and meta description. */
  summary: string;
  metaTitle: string;
  metaDescription: string;
  /** Lead paragraphs for the service page. */
  intro: string[];
  /** Bullet list of what the service covers. */
  includes: string[];
  /** How a job runs, start to finish. */
  process: { title: string; detail: string }[];
  faqs: { q: string; a: string }[];
  /** Heroicons-style outline path data, 24x24 viewBox. */
  icon: string;
};

const commonProcess = [
  {
    title: 'Free on-site quote',
    detail:
      'We visit, measure up, talk through what you want and check anything that affects the price — access, ground conditions, existing structures. No charge and no obligation.',
  },
  {
    title: 'Written fixed quote',
    detail:
      'You get an itemised quote in writing covering materials, labour and timeframe, so there are no surprises later.',
  },
  {
    title: 'Approvals and scheduling',
    detail:
      'Where building approval or a certifier is needed we tell you up front and handle the paperwork, then lock in a start date that suits you.',
  },
  {
    title: 'Build and clean up',
    detail:
      'We work to the agreed schedule, keep the site tidy each day, and remove all waste when the job is finished.',
  },
];

export const services: Service[] = [
  {
    slug: 'carpentry',
    name: 'Carpentry',
    short: 'Carpentry',
    summary:
      'Licensed carpenters for framing, structural repairs, doors, stairs and custom timber work.',
    metaTitle: 'Carpenter in Kingston & Logan | Licensed Carpentry Services',
    metaDescription:
      'Licensed carpenter servicing Kingston, Logan and the Brisbane southside. Framing, door hanging, stairs, structural timber repairs and custom joinery. Free quotes.',
    intro: [
      'Carpentry is the backbone of almost everything we build. Whether you need a wall framed, a rotten bearer replaced, a door that finally closes properly or a set of built-in shelves, the work is done by licensed carpenters who do it every day.',
      'We work on both new work and repairs, on houses, townhouses and small commercial spaces across Logan and the Brisbane southside.',
    ],
    includes: [
      'Wall and roof framing',
      'Structural timber repairs — bearers, joists, studs',
      'Door supply, hanging and adjustment',
      'Skirting, architraves and trim',
      'Staircases and handrails',
      'Built-in shelving, wardrobes and storage',
      'Timber rot and termite damage repair',
      'Pergolas and timber structures',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Do you take on small carpentry jobs?',
        a: 'Yes. A single sticking door or a few metres of skirting is fine — we do maintenance work as well as full builds. Give us a call and we will tell you honestly whether it is worth a site visit or whether we can quote from photos.',
      },
      {
        q: 'Can you match existing timber and profiles?',
        a: 'In most cases yes. Older homes often use profiles that are no longer stocked, so we either source the closest match or have it milled. We will show you the options before ordering.',
      },
      {
        q: 'Do I need council approval for carpentry work?',
        a: 'Non-structural work like doors, trim and shelving does not need approval. Structural changes — removing or altering load-bearing walls, for instance — usually do. We will tell you which category your job falls into at the quote.',
      },
    ],
    icon: 'M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z',
  },
  {
    slug: 'decking',
    name: 'Decking',
    short: 'Decking',
    summary:
      'Timber and composite decks built to last in the Queensland climate, from small landings to multi-level entertaining areas.',
    metaTitle: 'Deck Builder Kingston & Logan | Timber & Composite Decking',
    metaDescription:
      'Deck builders in Kingston, Logan and Brisbane southside. Hardwood, treated pine and composite decking, built to Australian standards. Free on-site quotes.',
    intro: [
      'A deck is the cheapest square metre of living space you will ever add to a Queensland home. We build them properly — correctly sized bearers and joists, galvanised or stainless fixings, and drainage that keeps water away from your house rather than into it.',
      'We work in hardwood, treated pine and composite, and will talk you through the real difference in cost, maintenance and lifespan before you commit.',
    ],
    includes: [
      'Ground-level and elevated decks',
      'Multi-level and wrap-around decks',
      'Hardwood, treated pine and composite boards',
      'Handrails and balustrades to code',
      'Stairs and landings',
      'Privacy screens and skirting',
      'Deck repairs, re-boarding and restoration',
      'Sanding, oiling and staining',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Do I need council approval for a deck?',
        a: 'It depends on height and size. Low decks under a certain height are often exempt, but anything elevated or attached to the house generally needs building approval and a certifier. We assess this at the quote and arrange the approval if it is needed.',
      },
      {
        q: 'Timber or composite — which should I choose?',
        a: 'Composite costs more up front but needs almost no maintenance and will not splinter or check. Hardwood is cheaper initially, looks better to most eyes, and needs re-oiling every year or two. If you hate maintenance, go composite.',
      },
      {
        q: 'How long does a deck take to build?',
        a: 'A straightforward ground-level deck is usually 3 to 5 days. Elevated decks with stairs and balustrades take longer, typically 1 to 2 weeks. Approvals, if required, add time before we start.',
      },
      {
        q: 'Can you repair my existing deck instead of replacing it?',
        a: 'Often, yes. If the frame is sound we can replace boards and fixings for a fraction of a rebuild. If the bearers or joists have gone, a rebuild is usually the better value. We will tell you which it is.',
      },
    ],
    icon: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
  },
  {
    slug: 'patios',
    name: 'Patios',
    short: 'Patios',
    summary:
      'Insulated and flat-roof patios, carports and pergolas that make outdoor space usable year round.',
    metaTitle: 'Patio Builder Kingston & Logan | Insulated Patios & Carports',
    metaDescription:
      'Patio builders servicing Kingston, Logan and Brisbane southside. Insulated roofing, flyover and attached patios, carports and pergolas. Free quotes.',
    intro: [
      'A patio turns an unusable concrete slab into the part of the house everyone actually sits in. We build attached and freestanding patios with insulated or single-skin roofing, engineered and certified for Queensland wind ratings.',
      'We handle the full job — footings, posts, roofing, guttering and downpipes tied into your existing stormwater.',
    ],
    includes: [
      'Attached and flyover patios',
      'Freestanding patios and pergolas',
      'Insulated roof panels',
      'Carports',
      'Gutter, fascia and downpipe connection',
      'Concrete slabs and footings',
      'Ceiling fans, lighting and power rough-in (licensed electrician)',
      'Blinds and privacy screens',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Does a patio need building approval?',
        a: 'Nearly always, yes — patios are structural and need engineering and a building certifier. We include this in the quote and manage the process so you are not chasing paperwork.',
      },
      {
        q: 'What is the difference between insulated and single-skin roofing?',
        a: 'Insulated panels have a foam core that cuts heat and noise dramatically — the difference under a Queensland summer sun is significant. Single skin is cheaper and fine for a carport or a shaded aspect.',
      },
      {
        q: 'Can you match the patio roof to my house?',
        a: 'Yes. Colorbond comes in the standard range so we can generally match or complement your existing roof and fascia colours. We bring samples to the quote.',
      },
    ],
    icon: 'M2.25 12 11.204 3.045c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75',
  },
  {
    slug: 'landscaping',
    name: 'Landscaping',
    short: 'Landscaping',
    summary:
      'Turf, garden beds, paving, drainage and outdoor structures that tie the whole yard together.',
    metaTitle: 'Landscaping Kingston & Logan | Turf, Paving & Garden Design',
    metaDescription:
      'Landscaping services in Kingston, Logan and Brisbane southside. Turf laying, paving, garden beds, drainage, retaining and outdoor structures. Free quotes.',
    intro: [
      'Landscaping is where the structural trades and the soft finishes meet, and doing it in the right order saves money. We handle drainage and levels first, then hard surfaces, then planting and turf — so you are not lifting pavers in two years to fix a wet patch.',
      'We can take on a full yard transformation or a single element like turfing or a paved path.',
    ],
    includes: [
      'Turf supply and laying',
      'Garden bed construction and soil preparation',
      'Paving — paths, patios and driveways',
      'Surface and subsurface drainage',
      'Rock and mulch work',
      'Irrigation',
      'Garden edging',
      'Site clearing and levelling',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Which turf is best for a Logan backyard?',
        a: 'It depends mostly on shade and traffic. Sir Walter buffalo handles part shade and kids well and is the safe default. Couch looks superb in full sun but needs more water and mowing. We will look at your aspect and recommend accordingly.',
      },
      {
        q: 'Can you fix a yard that holds water after rain?',
        a: 'Yes — this is one of the most common jobs we get. It is usually a combination of levels and drainage. We will find where the water is going and give you a fix, rather than just turfing over the problem.',
      },
      {
        q: 'Do you do garden maintenance as well?',
        a: 'Our focus is construction and installation rather than ongoing mowing and pruning. We are happy to recommend a local maintenance gardener once the yard is finished.',
      },
    ],
    icon: 'M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418',
  },
  {
    slug: 'fencing',
    name: 'Fencing',
    short: 'Fencing',
    summary:
      'Timber, Colorbond and pool fencing installed straight, plumb and to the correct boundary.',
    metaTitle: 'Fencing Contractor Kingston & Logan | Timber & Colorbond Fences',
    metaDescription:
      'Fencing contractors in Kingston, Logan and Brisbane southside. Timber paling, Colorbond, pool fencing and gates. Boundary fences and repairs. Free quotes.',
    intro: [
      'A fence looks simple until it is built badly — then every sagging gate and leaning post is visible from your back door for the next fifteen years. We concrete every post, string-line every run and hang gates so they still close in five years.',
      'We install timber paling, Colorbond, pool-compliant and privacy fencing, and can handle boundary fence discussions with neighbours if that helps.',
    ],
    includes: [
      'Timber paling fences',
      'Colorbond fencing',
      'Pool fencing to Queensland compliance requirements',
      'Privacy screens and slat fencing',
      'Gates — pedestrian, double and sliding',
      'Retaining and fencing combinations',
      'Fence repairs and replacement panels',
      'Post replacement and re-straightening',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Who pays for a boundary fence?',
        a: 'In Queensland, adjoining owners generally share the cost of a sufficient dividing fence. The practical step is a written Notice to Fence to your neighbour with a copy of the quote. We can supply the quote in a form suitable for that; the agreement itself is between you and your neighbour.',
      },
      {
        q: 'Is my pool fence compliant?',
        a: 'Queensland pool fencing rules are strict on height, gaps, gate latches and climbable objects near the fence. We build to the current standard, but the final compliance certificate comes from a licensed pool safety inspector.',
      },
      {
        q: 'How long does a fence take?',
        a: 'A standard suburban back fence is usually one to two days, plus curing time for the post concrete before palings go on. Larger or sloping blocks take longer.',
      },
    ],
    icon: 'M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z',
  },
  {
    slug: 'retaining-walls',
    name: 'Retaining Walls',
    short: 'Retaining walls',
    summary:
      'Engineered timber, concrete sleeper and block retaining walls with proper drainage behind them.',
    metaTitle: 'Retaining Walls Kingston & Logan | Concrete Sleeper & Timber',
    metaDescription:
      'Retaining wall builders in Kingston, Logan and Brisbane southside. Concrete sleeper, timber and block walls, engineered and drained correctly. Free quotes.',
    intro: [
      'Retaining walls fail for one reason more than any other: water with nowhere to go. We build with aggregate backfill and agricultural drain behind every wall, because the hydrostatic pressure of a saturated batter is what pushes walls over.',
      'We build in treated timber, concrete sleeper and masonry block, and arrange engineering and certification where the height requires it.',
    ],
    includes: [
      'Concrete sleeper walls with galvanised steel posts',
      'Treated timber sleeper walls',
      'Besser and masonry block walls',
      'Aggregate backfill and agricultural drainage',
      'Excavation and batter cutting',
      'Engineering and certification for walls over 1m',
      'Tiered and stepped walls',
      'Repair and replacement of failed walls',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'When does a retaining wall need engineering and approval?',
        a: 'As a general rule in Queensland, walls over one metre high, or walls carrying a surcharge load such as a driveway or another wall above them, need engineering and building approval. We assess this at the quote.',
      },
      {
        q: 'Concrete sleeper or timber?',
        a: 'Concrete sleeper costs more but will outlast timber by decades and is immune to termites and rot. Treated timber is cheaper and looks warmer. For anything structural or over about 600mm we recommend concrete sleeper.',
      },
      {
        q: 'Why did my old wall lean?',
        a: 'Almost always drainage, sometimes undersized posts or insufficient embedment. When we replace a failed wall we look at why it failed first, so the new one does not do the same thing.',
      },
    ],
    icon: 'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
  },
  {
    slug: 'bathroom-renovation',
    name: 'Bathroom Renovation',
    short: 'Bathroom renovation',
    summary:
      'Full bathroom renovations managed end to end — waterproofing, tiling, plumbing and fit-off.',
    metaTitle: 'Bathroom Renovations Kingston & Logan | Licensed Builders',
    metaDescription:
      'Bathroom renovations in Kingston, Logan and Brisbane southside. Full strip-out, certified waterproofing, tiling and fit-off, managed by a licensed builder. Free quotes.',
    intro: [
      'Bathrooms are the least forgiving room in the house. Get the waterproofing or the falls wrong and you find out two years later through the ceiling below. We do the wet-area work to standard, with licensed trades on the plumbing and electrical, and a waterproofing certificate at the end.',
      'We manage the whole renovation so you deal with one person, not six subcontractors.',
    ],
    includes: [
      'Full strip-out and removal',
      'Certified wet-area waterproofing',
      'Floor and wall tiling, including niches and hobs',
      'Plumbing rough-in and fit-off (licensed plumber)',
      'Electrical, lighting and exhaust fans (licensed electrician)',
      'Vanities, shower screens and mirrors',
      'Wall and ceiling repairs, cornices and painting',
      'Accessible and step-free shower conversions',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'How long will my bathroom be out of action?',
        a: 'A standard full renovation typically runs 2 to 3 weeks. Waterproofing and tile adhesive both need curing time that cannot be rushed. If it is your only bathroom we will sequence the work to keep the disruption as short as possible.',
      },
      {
        q: 'Do you provide a waterproofing certificate?',
        a: 'Yes. Wet-area waterproofing must be done to the Australian standard and certified — you will receive the certificate, and you will want it if you ever sell.',
      },
      {
        q: 'Can I supply my own tiles and tapware?',
        a: 'Yes, plenty of clients do. Just order early and have everything on site before we start, because a missing mixer can hold up an entire trade sequence.',
      },
      {
        q: 'Can you move the toilet or shower?',
        a: 'Usually yes, though relocating waste points means concrete cutting or floor work and adds cost. We will price both options so you can see whether the new layout is worth it.',
      },
    ],
    icon: 'M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5',
  },
  {
    slug: 'kitchen-renovation',
    name: 'Kitchen Renovation',
    short: 'Kitchen renovation',
    summary:
      'Kitchen renovations from a cabinet reface through to a full re-plan, wall removal and new services.',
    metaTitle: 'Kitchen Renovations Kingston & Logan | Licensed Builders',
    metaDescription:
      'Kitchen renovations in Kingston, Logan and Brisbane southside. Cabinetry, benchtops, splashbacks, plumbing and electrical, managed by a licensed builder. Free quotes.',
    intro: [
      'A kitchen renovation is as much about the layout as the finishes. Before we talk about stone colours we look at where you actually stand when you cook, where the fridge door swings, and whether that wall can come out.',
      'We coordinate cabinetmakers, stonemasons, plumbers and electricians, so the benchtop template happens at the right moment and the whole job does not stall.',
    ],
    includes: [
      'Design and layout planning',
      'Strip-out and disposal of the old kitchen',
      'Custom and flat-pack cabinetry installation',
      'Stone, laminate and timber benchtops',
      'Splashback tiling and glass',
      'Plumbing for sinks and dishwashers (licensed plumber)',
      'Electrical, appliance circuits and lighting (licensed electrician)',
      'Wall removal and structural changes where required',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'How long does a kitchen renovation take?',
        a: 'Typically 3 to 5 weeks on site. The long pole is usually cabinetry manufacture and the stone benchtop, which is templated only after cabinets are installed and then takes about a week to fabricate.',
      },
      {
        q: 'Can I keep using the kitchen during the work?',
        a: 'Not the kitchen itself, but we can usually set up a temporary bench with the fridge and microwave somewhere else in the house. Plan on eating out or cooking simply for a few weeks.',
      },
      {
        q: 'Can that wall come out?',
        a: 'Sometimes. If it is load-bearing it can still go, but it needs an engineer and a beam, which changes the budget. We check the roof and floor framing at the quote and tell you what is involved.',
      },
      {
        q: 'Stone or laminate benchtops?',
        a: 'Engineered stone and natural stone are more durable and lift the whole room; laminate is a fraction of the cost and has improved a lot. We will price both. Note that engineered stone containing crystalline silica is subject to national restrictions — we will talk you through the current compliant options.',
      },
    ],
    icon: 'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
  },
  {
    slug: 'flooring',
    name: 'Flooring',
    short: 'Flooring',
    summary:
      'Timber, hybrid, laminate and vinyl flooring laid over a properly prepared, level subfloor.',
    metaTitle: 'Flooring Installation Kingston & Logan | Timber, Hybrid & Vinyl',
    metaDescription:
      'Flooring installers in Kingston, Logan and Brisbane southside. Timber, hybrid, laminate and vinyl plank, with subfloor preparation and levelling. Free quotes.',
    intro: [
      'Most flooring complaints — creaking, peaking, gaps opening up — trace back to the subfloor or to boards that were not acclimatised before laying. We prepare and level the substrate first and let the material sit in the room before it goes down.',
      'We install timber, hybrid, laminate and vinyl plank, and can remove and dispose of old floor coverings as part of the job.',
    ],
    includes: [
      'Engineered and solid timber flooring',
      'Hybrid and laminate planks',
      'Luxury vinyl plank',
      'Subfloor levelling and preparation',
      'Removal and disposal of old flooring',
      'Underlay and moisture barriers',
      'Scotia, skirting and trims',
      'Timber floor sanding and re-coating',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Hybrid or laminate?',
        a: 'Hybrid is waterproof and handles wet areas, spills and Queensland humidity far better — it is what we recommend for most homes here. Laminate is cheaper and fine in dry rooms.',
      },
      {
        q: 'Can you lay new flooring over tiles?',
        a: 'Often yes, provided the tiles are sound, well adhered and reasonably flat. It saves the cost and mess of removal. We check the levels and grout lines first, since deep grout joints can telegraph through.',
      },
      {
        q: 'Do I need to move the furniture?',
        a: 'It helps if you can clear the rooms, but we can move furniture as part of the job if that is easier — just mention it at the quote so we allow the time.',
      },
    ],
    icon: 'M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5',
  },
  {
    slug: 'tiling',
    name: 'Tiling',
    short: 'Tiling',
    summary:
      'Wall and floor tiling with waterproofing, correct falls and grout lines that actually line up.',
    metaTitle: 'Tiler Kingston & Logan | Wall & Floor Tiling, Waterproofing',
    metaDescription:
      'Tiling services in Kingston, Logan and Brisbane southside. Bathroom, kitchen, outdoor and large-format tiling, plus wet-area waterproofing. Free quotes.',
    intro: [
      'Good tiling is mostly invisible — even grout joints, no lippage, falls that drain to the waste, and cuts that land where they should. Bad tiling is something you notice every single day.',
      'We tile bathrooms, kitchens, laundries, living areas and outdoor entertaining spaces, including large-format and feature tiles that need care to lay flat.',
    ],
    includes: [
      'Bathroom and wet-area tiling',
      'Kitchen splashbacks',
      'Floor tiling throughout the home',
      'Large-format and rectified tiles',
      'Outdoor and non-slip tiling',
      'Wet-area waterproofing to Australian standards',
      'Shower falls, hobs and niches',
      'Re-grouting, re-silicone and tile repairs',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'Can you tile over existing tiles?',
        a: 'On walls it is sometimes possible if they are sound and flat. On wet-area floors we generally recommend removal, because you need the waterproof membrane and the correct falls underneath, and tiling over compromises both.',
      },
      {
        q: 'How much tile should I order?',
        a: 'Order about 10% more than the measured area — more like 15% for diagonal, herringbone or large-format layouts. Off-cuts and future repairs both need it, and dye lots vary between batches.',
      },
      {
        q: 'Why does my shower grout keep going mouldy?',
        a: 'Usually poor ventilation or water pooling because the falls are wrong. Re-grouting treats the symptom. We will look at whether the underlying fall and exhaust are the actual problem before you spend money twice.',
      },
    ],
    icon: 'M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z',
  },
  {
    slug: 'painting',
    name: 'Painting',
    short: 'Painting',
    summary:
      'Interior and exterior painting with the preparation work that makes the finish last.',
    metaTitle: 'Painter Kingston & Logan | Interior & Exterior House Painting',
    metaDescription:
      'Painters servicing Kingston, Logan and Brisbane southside. Interior and exterior house painting, roof painting, preparation and repairs. Free quotes.',
    intro: [
      'Nine tenths of a paint job is preparation. Filling, sanding, cleaning down, priming bare and patched areas — that is what determines whether the finish still looks good in five years or starts flaking in eighteen months.',
      'We paint interiors and exteriors, and can repair the cracked cornice or rotten fascia before painting rather than covering it up.',
    ],
    includes: [
      'Interior walls, ceilings and trim',
      'Exterior weatherboard, render and fibre cement',
      'Surface preparation, filling and sanding',
      'Pressure washing and mould treatment',
      'Priming and sealing',
      'Doors, windows and fascia',
      'Feature walls and colour consultation',
      'Minor repairs before painting',
    ],
    process: commonProcess,
    faqs: [
      {
        q: 'How long does painting a house take?',
        a: 'A typical three-bedroom interior is around 4 to 6 days depending on how much trim and how many colour changes. Exteriors depend heavily on the weather and on how much preparation the surfaces need.',
      },
      {
        q: 'What if my house was built before 1970?',
        a: 'Homes painted before the late 1970s may contain lead paint. Sanding it back releases lead dust, which is a genuine health hazard. If we suspect lead we stop and advise on testing and safe removal rather than sanding through it.',
      },
      {
        q: 'Do you help with colour choice?',
        a: 'Yes. We will talk through options and recommend sampling on the actual wall — colours read completely differently under Queensland light than they do on a chip in a store.',
      },
    ],
    icon: 'M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z',
  },
  {
    slug: 'renovations-extensions',
    name: 'Building Renovation & Extension',
    short: 'Renovations & extensions',
    summary:
      'Whole-home renovations, extensions and under-house builds, managed from approval to handover.',
    metaTitle: 'Home Renovations & Extensions Kingston & Logan | Licensed Builder',
    metaDescription:
      'Home renovations and extensions in Kingston, Logan and Brisbane southside. Extensions, build-unders, whole-home renovations. Licensed builder, free quotes.',
    intro: [
      'When you need more house rather than a better-looking one, this is the service. Extensions, building in underneath, opening up the back of the house, or a whole-home renovation that touches every room.',
      'These are the jobs where project management matters most. We handle the approvals, engineering, certifier inspections and trade sequencing, and you deal with one point of contact from start to handover.',
    ],
    includes: [
      'Ground-floor and upper-floor extensions',
      'Build-under and lower-level conversions',
      'Whole-home renovations',
      'Structural alterations and wall removal',
      'Open-plan living conversions',
      'New bedrooms, bathrooms and living areas',
      'Building approvals, engineering and certification',
      'Full trade coordination and project management',
    ],
    process: [
      {
        title: 'Initial consultation',
        detail:
          'We walk the property with you, talk through what you want to achieve and what your budget realistically buys, and flag anything that will complicate it — slope, services, easements, existing structure.',
      },
      {
        title: 'Design, engineering and approvals',
        detail:
          'Plans are drawn, an engineer signs off the structure, and we lodge for building approval with a private certifier. This stage takes weeks rather than days and is worth doing properly.',
      },
      {
        title: 'Fixed-price contract',
        detail:
          'You get a written contract with an itemised scope, a schedule and a progress payment structure, so you always know what has been paid for and what is next.',
      },
      {
        title: 'Construction',
        detail:
          'We sequence and supervise every trade, arrange certifier inspections at each stage, and keep you updated on progress and any variations before they happen.',
      },
      {
        title: 'Handover',
        detail:
          'Final certifier inspection, a defects walk-through with you, and all certificates and documentation handed over.',
      },
    ],
    faqs: [
      {
        q: 'How much does an extension cost?',
        a: 'Too many variables to quote a figure honestly without seeing the site — slope, existing structure, roof line, whether services need relocating, and your finish level all move it substantially. We will give you a realistic range at the first visit before you spend anything on plans.',
      },
      {
        q: 'How long does the whole process take?',
        a: 'Design and approvals typically take 2 to 4 months before anything is built. Construction then depends on scale, from about 8 weeks for a modest extension to 6 months or more for a major renovation.',
      },
      {
        q: 'Can we live in the house during the work?',
        a: 'Often yes, particularly for extensions where the new work is separated from the existing house until late in the build. Whole-home renovations are harder. We will be straight with you about it at the quote.',
      },
      {
        q: 'Do you handle the council approvals?',
        a: 'Yes. We coordinate the drafting, engineering and private certifier, and manage the inspection schedule through the build.',
      },
    ],
    icon: 'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z',
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
