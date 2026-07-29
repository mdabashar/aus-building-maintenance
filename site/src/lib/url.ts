/**
 * Prefixes internal paths with the configured Astro `base`.
 *
 * GitHub Pages project sites are served from a subpath
 * (https://user.github.io/repo-name/), and Astro's `base` option does NOT
 * rewrite hardcoded href/src attributes — it only affects generated output
 * paths. Without this helper every internal link 404s on a project URL.
 *
 * Wrapping links here means the same build works unchanged at a subpath, at a
 * custom domain, and in local dev. To move to a custom domain later, set
 * `base: '/'` in astro.config.mjs and nothing else has to change.
 */

const BASE = import.meta.env.BASE_URL;

export function href(path: string): string {
  // External and non-navigational schemes pass through untouched.
  if (/^([a-z][a-z0-9+.-]*:|\/\/|#)/i.test(path)) return path;

  const base = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const rest = path.startsWith('/') ? path : `/${path}`;
  return `${base}${rest}`;
}

/**
 * Absolute URL for canonical tags, Open Graph images and JSON-LD.
 * `Astro.site` is the origin; `base` lives in between.
 */
export function absoluteUrl(path: string, site: URL | undefined): string {
  return new URL(href(path), site).href;
}
