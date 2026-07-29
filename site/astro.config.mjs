// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * `site` and `base` come from the environment so one codebase serves three
 * targets without edits:
 *
 *   local dev            → defaults below (site root, no base path)
 *   GitHub Pages project → SITE_URL=https://user.github.io SITE_BASE=/repo-name
 *   custom domain        → SITE_URL=https://www.example.com.au SITE_BASE=/
 *
 * The deploy workflow sets these. To move to a custom domain, set the SITE_URL
 * and SITE_BASE repository variables in GitHub — no code change needed.
 */
const site = process.env.SITE_URL ?? 'https://www.ausbuildingmaintenance.com.au';
const base = process.env.SITE_BASE ?? '/';

export default defineConfig({
  site,
  base,
  integrations: [
    sitemap({
      // Utility pages carry noindex — keep them out of the sitemap too.
      filter: (page) => !page.includes('/thank-you'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
