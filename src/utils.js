/**
 * @param {array} components Receive an array of stringfied html elements
 * @returns The result of all the components into a single string
 */
export function generateHTMLString(components) {
  return components.reduce((acc, component) => (acc += component()), "");
}
