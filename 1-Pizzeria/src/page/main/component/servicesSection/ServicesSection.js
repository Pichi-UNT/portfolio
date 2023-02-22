import { CircleButton } from "../../../../components/buttons/CircleButton.js";
import { ImageContainer } from "../../../../components/imageContainer/ImageContainer.js";
import { TitleAndHeader } from "../../../../components/title/Title.js";

const d = document;
export function ServicesSection() {
  const $section = d.createElement("section");
  $section.id = "services";

  $section.appendChild(
    TitleAndHeader("Bienvenidos a world pizza", "la mejor pizza del mundo")
  );
  $section.appendChild(info());

  return $section;
}

function info() {
  const $div = d.createElement("div");
  $div.classList.add("services-info");
  const panelLeft = Panel();
  panelLeft.appendChild(
    ServicesItem(
      "fas fa-cheese",
      "Ingredientes",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, epellendus."
    )
  );
  panelLeft.appendChild(
    ServicesItem(
      "fas fa-pizza-slice",
      "Calidad",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, epellendus."
    )
  );
  panelLeft.classList.add("panel-left");
  const panelRight = Panel();
  panelRight.appendChild(
    ServicesItem(
      "fas fa-clock",
      "Rapidez",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, epellendus."
    )
  );
  panelRight.appendChild(
    ServicesItem(
      "fas fa-shipping-fast",
      "Delivery",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit, epellendus."
    )
  );
  panelRight.classList.add("panel-right");

  $div.appendChild(panelLeft);
  $div.appendChild(
    ImageContainer("src/assets/img/mitad-mitad.png", "services-photo")
  );
  $div.appendChild(panelRight);
  return $div;
}

function Panel() {
  const $div = d.createElement("div");
  $div.classList.add("services-panel");
  return $div;
}

function ServicesItem(spanClass, itemTitle, itemText) {
  const $div = d.createElement("div");
  $div.classList.add("services-item");
  const $h4 = d.createElement("h4");
  $h4.textContent = itemTitle;
  const $p = d.createElement("p");
  $p.textContent = itemText;

  const circleButton = CircleButton();
  const $span = d.createElement("span");
  $span.className += spanClass;

  circleButton.appendChild($span);
  $div.appendChild(circleButton);
  $div.appendChild($h4);
  $div.appendChild($p);
  return $div;
}
