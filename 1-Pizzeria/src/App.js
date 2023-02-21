import { mainPage } from "./page/main/mainPage.js";

const d = document;

export function App(params) {
  const $fragment = document.createDocumentFragment();
  $fragment.appendChild(mainPage());
  d.getElementById("root").appendChild($fragment);
}
