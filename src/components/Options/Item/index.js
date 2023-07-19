/**
 * @param {boolean} index Is this options index
 * @param {string} label Name of the selection
 */
export function item({ index, label }) {
  return `
      <div class="options__item" data-index="${index}" data-selected="false">
        <label class="options__label">
          <input class="options__input" type="checkbox" />
          ${label}
        </label>
      </div>
    `;
}
