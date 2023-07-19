/**
 * @param {string} label
 * @param {string} variant "primary", "secondary"
 */
export function button({ label, variant = "primary" }) {
  const type = `button ${variant}`;
  return `
      <button class="${type}">
        ${label}
      </button>
    `;
}
