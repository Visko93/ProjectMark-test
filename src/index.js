import { header, main } from "./components";
import { handleOptionSelection } from "./components/Options";
import "./styles.css";
import { generateHTMLString } from "./utils";

const content = generateHTMLString([header, main]);
document.getElementById("app").innerHTML = content;

handleOptionSelection();
