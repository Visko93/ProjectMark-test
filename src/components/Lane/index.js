/**
 * @param {string} background
 * @param {string} title
 */

import { ActiveToggle } from "./ActiveToggle";
import { Card } from "./Card";

export function lane({ background, title }) {
  const lighter = `--s-${background}-lighter`;
  const darker = `--s-${background}-darker`;
  const light = `--s-${background}-light`;
  const primary = `--s-${background}`;
  return `
    <div class="lane" style=" background: linear-gradient(180deg, var(${lighter}), #fff 100%);">
      <h3 class="lane__title"
      style=" color: var(${darker});"
      >
        ${title}
      </h3>
      ${ActiveToggle({ background: light, slider: primary })}
      ${Card({ border: light, background: lighter })}
    </div>
  `;
}
