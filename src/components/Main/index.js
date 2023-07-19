import { lanesMock } from "../../constants/mocks";
import { lane } from "../Lane";
import { options } from "../Options";

export function main() {
  return `
    <main class="main">
      <h1>
        Please select the type of sales pipeline that best fits to you company
      </h1>
        ${options()}
        <div class="lane__container">
          ${lanesMock
            .map(({ background, title }) => lane({ background, title }))
            .join("")}
        </div>
    </main>
  `;
}
