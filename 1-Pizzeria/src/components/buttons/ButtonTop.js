import { RectangularButton } from "./rectangularButton.js";

const d = document;

export function ButtonTop() {
  const $span = d.createElement("span");
  $span.classList.add("fas");
  $span.classList.add("fa-angle-up");
  const btnTop = RectangularButton("", false, "btn-top", clickBtnTop);
  btnTop.appendChild($span);
  window.addEventListener("scroll", showButtonTop);
  return btnTop;
}

function showButtonTop() {
  let scroll = d.documentElement.scrollTop;
  const btnTop = d.querySelector(".btn-top");
  if (scroll > 100) {
    btnTop.classList.add("btn-active");
  } else {
    btnTop.classList.remove("btn-active");
  }
}

function clickBtnTop() {
  window.scrollTo(0, 0);
}
