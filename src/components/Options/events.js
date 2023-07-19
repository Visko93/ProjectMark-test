function toggle(item, input) {
  const element = item.dataset;
  const inputElement = input.dataset;
  console.log(inputElement, element);
  const isSelected = element?.selected ?? "false";
  const isSelectedInput = inputElement?.selected ?? "false";
  item.setAttribute("data-selected", isSelected === "false" ? "true" : "false");
  input.setAttribute(
    "data-selected",
    isSelectedInput === "false" ? "true" : "false"
  );
}
export function handleOptionSelection() {
  const options = document.querySelectorAll(".options__item");
  const optionsInputs = document.querySelectorAll(".options__input");

  // For container clicks
  options.forEach((item, i) =>
    item.addEventListener("click", () => toggle(item, optionsInputs[i]))
  );
  // For input clicks
  optionsInputs.forEach((item, i) => {
    item.addEventListener("click", () => toggle(options[i], item));
  });
  options.forEach((item, i) =>
    item.removeEventListener("click", () => toggle(item, optionsInputs[i]))
  );
  optionsInputs.forEach((item, i) =>
    item.removeEventListener("click", () => toggle(options[i], item))
  );
}
