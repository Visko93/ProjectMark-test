/**
 * @param {string} border
 * @param {string} background
 */
export function Card({ border, background }) {
  return `
    <div class="lane__card" style="
        border: 1px solid var(${border});
        background: var(${background});
    ">
    </div>`;
}
