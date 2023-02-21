import { ImageContainer } from "../imageContainer/ImageContainer.js";
import { SocialContainer } from "../SocialContainer/SocialContainer.js";

const d = document;

export function EmployeeCard({ src, name, rol, socialNetworks = [] }) {
  const imageContainer = ImageContainer(src, "employee-card");
  const $h2 = d.createElement("h2");
  $h2.textContent = name;
  const $h3 = d.createElement("h3");
  $h3.textContent = rol;
  const $div = d.createElement("div");
  $div.classList.add("employee-info");
  const socialContainer = SocialContainer();

  $div.appendChild($h2);
  $div.appendChild($h3);
  $div.appendChild(socialContainer);
  imageContainer.appendChild($div);

  return imageContainer;
}
