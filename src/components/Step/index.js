/**
 * @param {string} label
 * @param {string} description
 * @param {number} index
 * @param {number} active
 */
export function step({ label, description = "", index, active }) {
  return `
  <div class="step" data-index="${index}">
    <button class="step__button" data-active="${index === active}">
      ${label}
    </button>
    <small class="step__description">
      ${description}
    </small>
  </div>
  `;
}
