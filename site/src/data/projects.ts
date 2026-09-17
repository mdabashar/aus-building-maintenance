import type { ImageMetadata } from 'astro';

/**
 * Real project photographs supplied by the client.
 *
 * Images live in src/assets (not public/) so Astro's build pipeline resizes
 * them, emits modern formats and adds width/height to prevent layout shift.
 * The originals are full-resolution phone photos; nothing is served at that
 * size.
 *
 * NOTE ON SUBURBS: the client supplied these photos without job locations, so
 * no suburb is claimed for any of them and captions describe the work only.
 * Add a `suburb` to an entry once the real location is confirmed and it will
 * render automatically. Do not guess — these are real jobs.
 */

const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/projects/*.jpg',
  { eager: true },
);

function image(name: string): ImageMetadata {
  const match = files[`../assets/projects/${name}`];
  if (!match) {
    throw new Error(
      `Project image "${name}" not found in src/assets/projects. ` +
        `Available: ${Object.keys(files).join(', ')}`,
    );
  }
  return match.default;
}

export type Project = {
  /** Short caption shown under the photo. */
  title: string;
  /** Service slugs this photo illustrates; a photo can serve more than one. */
  services: string[];
  /** Work-in-progress shots sit alongside finished ones as informal before/afters. */
  stage: 'progress' | 'finished';
  /** Meaningful alt text — these carry real information, so describe the work. */
  alt: string;
  src: ImageMetadata;
  /** TODO: add once the client confirms job locations. */
  suburb?: string;
  /** Promoted to the home page gallery. */
  featured?: boolean;
  /**
   * CSS object-position. Every photo is a portrait phone shot, so narrow
   * viewports crop hard; set this where the subject is not centred.
   */
  focus?: string;
};

export const projects: Project[] = [
  // --- Bathroom renovation / tiling --------------------------------------
  {
    title: 'Wet-area waterproofing',
    services: ['bathroom-renovation', 'tiling'],
    stage: 'progress',
    alt: 'Blue waterproofing membrane applied across a bathroom floor and up the walls before tiling',
    src: image('waterproofing-membrane-floor.jpg'),
    featured: true,
  },
  {
    title: 'Shower waterproofing and falls',
    services: ['bathroom-renovation', 'tiling'],
    stage: 'progress',
    alt: 'Close-up of waterproofing membrane in a shower base, showing the floor waste and the sealed wall junction',
    src: image('waterproofing-shower-waste.jpg'),
  },
  {
    title: 'Frameless shower, large-format tiling',
    services: ['bathroom-renovation', 'tiling'],
    stage: 'finished',
    alt: 'Completed shower tiled floor to ceiling in marble-look large-format tiles with a frameless glass screen',
    src: image('shower-large-format-tiling.jpg'),
    featured: true,
  },
  {
    title: 'Bathroom renovation',
    services: ['bathroom-renovation', 'tiling'],
    stage: 'finished',
    alt: 'Renovated bathroom with marble-look floor and wall tiling, a timber-top vanity and vessel basin',
    src: image('bathroom-renovation-vanity.jpg'),
  },

  // --- Kitchen renovation -------------------------------------------------
  {
    title: 'Kitchen renovation',
    services: ['kitchen-renovation'],
    stage: 'finished',
    alt: 'Completed kitchen with white cabinetry, stone benchtop, undermount sink and a textured white tile splashback',
    src: image('kitchen-renovation-stone-benchtop.jpg'),
    featured: true,
    // Carries the home page hero; bias the crop down to the benchtop and
    // splashback rather than the overhead cabinets.
    focus: 'center 62%',
  },
  {
    title: 'Breakfast bar and cabinetry',
    services: ['kitchen-renovation'],
    stage: 'finished',
    alt: 'Kitchen with a stone breakfast bar, full-height pantry cabinetry and a built-in oven',
    src: image('kitchen-breakfast-bar.jpg'),
  },
  {
    title: 'Cabinetry installation',
    services: ['kitchen-renovation'],
    stage: 'progress',
    alt: 'New kitchen cabinetry and benchtop installed, with the original floor tiles still to be removed',
    src: image('kitchen-cabinetry-install.jpg'),
  },
  {
    title: 'Benchtop and new flooring',
    services: ['kitchen-renovation', 'flooring'],
    stage: 'progress',
    alt: 'Kitchen benchtop and sink in place while new timber-look flooring is laid through the adjoining room',
    src: image('kitchen-benchtop-and-flooring.jpg'),
  },

  // --- Flooring -----------------------------------------------------------
  {
    title: 'Timber flooring',
    services: ['flooring'],
    stage: 'finished',
    alt: 'Finished timber flooring in a bedroom with afternoon light falling across the boards',
    src: image('timber-flooring-bedroom.jpg'),
    featured: true,
  },
  {
    title: 'Timber flooring and feature wall',
    services: ['flooring'],
    stage: 'finished',
    alt: 'Wide-board timber-look flooring through an open living area beside a recycled brick feature wall',
    src: image('timber-flooring-feature-wall.jpg'),
  },
  {
    title: 'Vinyl plank flooring',
    services: ['flooring'],
    stage: 'finished',
    alt: 'Spotted gum look vinyl plank flooring running through a hallway and into the adjoining rooms',
    src: image('vinyl-plank-flooring-hallway.jpg'),
  },
  {
    title: 'Vinyl plank through living areas',
    services: ['flooring'],
    stage: 'finished',
    alt: 'Vinyl plank flooring laid through a living and dining area up to a bay window',
    src: image('vinyl-plank-living-room.jpg'),
  },
  {
    title: 'Hybrid flooring installation',
    services: ['flooring'],
    stage: 'progress',
    alt: 'Hybrid plank flooring part-laid through a kitchen and hallway, with boards and packaging still on site',
    src: image('hybrid-flooring-install.jpg'),
  },

  // --- Retaining walls ----------------------------------------------------
  {
    title: 'Concrete sleeper retaining wall',
    services: ['retaining-walls'],
    stage: 'finished',
    alt: 'Completed concrete sleeper retaining wall running the length of a timber boundary fence',
    src: image('retaining-wall-boundary-fence.jpg'),
    featured: true,
  },
  {
    title: 'Retaining wall, side access',
    services: ['retaining-walls'],
    stage: 'progress',
    alt: 'Concrete sleeper retaining wall built along a narrow side yard with galvanised steel posts',
    src: image('retaining-wall-side-yard.jpg'),
  },
  {
    title: 'Retaining wall to yard perimeter',
    services: ['retaining-walls'],
    stage: 'progress',
    alt: 'Concrete sleeper retaining wall following the perimeter of a backyard, ground prepared for levelling',
    src: image('retaining-wall-yard-perimeter.jpg'),
  },
  {
    title: 'Retaining wall along a path',
    services: ['retaining-walls'],
    stage: 'progress',
    alt: 'Concrete sleeper retaining wall stepping down beside a concrete path, with drainage material behind the wall',
    src: image('retaining-wall-path-edge.jpg'),
  },
  {
    title: 'Retaining wall to boundary',
    services: ['retaining-walls', 'fencing'],
    stage: 'progress',
    alt: 'Concrete sleeper retaining wall built hard against an existing timber boundary fence',
    src: image('retaining-wall-pool-boundary.jpg'),
  },

  // --- Fencing ------------------------------------------------------------
  {
    title: 'Colorbond fence and gate',
    services: ['fencing'],
    stage: 'finished',
    alt: 'New green Colorbond boundary fence with a matching double gate, built straight and plumb along a driveway',
    src: image('colorbond-fence-and-gate.jpg'),
    featured: true,
  },

  // --- Carpentry / renovations & extensions -------------------------------
  {
    title: 'Structural timber framing',
    services: ['carpentry', 'renovations-extensions'],
    stage: 'progress',
    alt: 'New timber wall framing and roof trusses in place, with electrical and ducted services run through',
    src: image('timber-framing-roof-trusses.jpg'),
    featured: true,
  },
  {
    title: 'Wall removal and reframing',
    services: ['carpentry', 'renovations-extensions'],
    stage: 'progress',
    alt: 'Internal walls stripped back to the frame during a renovation, opening a living area up to the rear of the house',
    src: image('wall-framing-structural-alteration.jpg'),
  },

  // Not displayed: kitchen-rangehood-install.jpg. The file is kept in
  // src/assets/projects for reference, but it is heavily motion-blurred with an
  // unposed person mid-frame, so it is not portfolio quality. Add an entry here
  // if a sharper version turns up.
];

/** Photos that illustrate a given service. */
export function projectsForService(slug: string): Project[] {
  return projects.filter((p) => p.services.includes(slug));
}

/** Service slugs that have at least one real photo behind them. */
export const servicesWithPhotos = new Set(projects.flatMap((p) => p.services));

export const featuredProjects = projects.filter((p) => p.featured);
