import { ImageContainer } from "../../../../components/imageContainer/ImageContainer.js";

const d = document;
export function IngredientsSection() {
  const $section = d.createElement("section");
  $section.id = "ingredients";
  $section.appendChild(
    ingredientItem("src/assets/img/ingredientes1.jpg", "fa-cheese", "queso")
  );
  $section.appendChild(
    ingredientItem("src/assets/img/ingredientes2.jpg", "fa-leaf", "vegetales")
  );
  $section.appendChild(
    ingredientItem("src/assets/img/ingredientes3.jpg", "fa-fill-drip", "salsa")
  );
  $section.appendChild(
    ingredientItem(
      "src/assets/img/ingredientes4.jpg",
      "fa-drumstick-bite",
      "carne"
    )
  );
  return $section;
}

function ingredientItem(src, classSpan, text) {
  const imageContainer = ImageContainer(src, "ingredients-item");
  const $div = d.createElement("div");
  $div.classList.add("ingredients-item-info");
  const $span = d.createElement("span");
  $span.classList.add("fas");
  $span.classList.add(classSpan);
  const $p = d.createElement("p");
  $p.textContent = text;

  $div.appendChild($span);
  $div.appendChild($p);
  imageContainer.appendChild($div);
  return imageContainer;
}
