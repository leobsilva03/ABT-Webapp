/**
 * Production images configuration.
 *
 * Uses base-aware static asset paths that automatically adapt to:
 * - AI Studio dev & preview environment (`/`)
 * - GitHub Pages repository subpath (`/ABT-Webapp/`)
 * - Custom domain root (`/`)
 */

export const GITHUB_REPO = 'leobsilva03/ABT-Webapp';
export const GITHUB_RAW_BASE = 'https://raw.githubusercontent.com/leobsilva03/ABT-Webapp/main/src/assets/images';
export const GITHUB_CDN_BASE = 'https://cdn.jsdelivr.net/gh/leobsilva03/ABT-Webapp@main/src/assets/images';

const baseUrl = import.meta.env.BASE_URL.endsWith('/') 
  ? import.meta.env.BASE_URL 
  : `${import.meta.env.BASE_URL}/`;

export const IMAGES = {
  logo: `${baseUrl}images/abt-logo.svg`,
  hero: `${baseUrl}images/hero-abatement-team.jpg`,
  about: `${baseUrl}images/about-technician-ppe.jpg`,
  asbestos: `${baseUrl}images/service-asbestos-removal.jpg`,
  lead: `${baseUrl}images/service-lead-abatement.jpg`,
  mould: `${baseUrl}images/service-mould-remediation.jpg`,
  skyline: `${baseUrl}images/ontario-toronto-skyline.jpg`,
};
