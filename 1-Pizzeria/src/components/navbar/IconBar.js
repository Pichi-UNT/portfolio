import { ImageContainer } from "../imageContainer/ImageContainer.js";

const d = document;

export function IconBar(src) {
  const imageContainer = ImageContainer(src, "logo");
  imageContainer.addEventListener("click", clickIcon);
  return imageContainer;
}

function clickIcon() {
  window.scrollTo(0, 0);
}
