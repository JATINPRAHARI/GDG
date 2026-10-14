/**
 * Single source of truth for event copy and links.
 * Edit this file to update the landing page — no component changes required.
 */

export const ORGANIZER = 'GDG on Campus MIET'
export const EVENT_NAME = 'HackHeist 2026'
export const EVENT_BRAND = 'HACKHEIST'
export const EVENT_TAGLINE = 'Build. Break. Solve.'
export const EVENT_VENUE = 'MIET'
export const EVENT_TIME = '9:00 AM onwards'

/**
 * PLACEHOLDER — replace the value below with the real registration form URL
 * (Google Form, Luma, Eventbrite, …) before publishing the page.
 * Both "Register Now" buttons read this same constant.
 */
export const REGISTRATION_URL = 'https://example.com/hackheist-2026/register'

/** True while REGISTRATION_URL still points at the placeholder above. */
export const REGISTRATION_IS_PLACEHOLDER = REGISTRATION_URL.includes('example.com')

/** Navigation targets, one per page section. */
export const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'details', label: 'Details' },
  { id: 'register', label: 'Register' },
] as const