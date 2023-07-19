/**
 * @param {string} background
 * @param {string} slider
 */
export function ActiveToggle({ background, slider }) {
  return `
    <span class="lane__activate" style="background: var(${background});">
        <input type="checkbox">
        <span class="slider"style="background-color: var(${slider});"></span>
    </span>
    `;
}
