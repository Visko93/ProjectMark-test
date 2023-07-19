import { mockOptions } from "../../constants/mocks";
import { item } from "./Item";

export function options() {
  return `
      <nav class="options__container">
        ${mockOptions.map(({ label }, i) => item({ label, index: i })).join("")}
      </nav>
    `;
}

export { handleOptionSelection } from "./events";
