import { RectangularButton } from "../buttons/rectangularButton.js";

const d = document;

export function FoodCard({ title, type, paragraph, src }) {
  const $div = d.createElement("div");
  $div.classList.add("food-card");
  $div.appendChild(FoodCardContent({ title, type, paragraph }));
  $div.appendChild(FoodCardImage({ src }));
  return $div;
}

function FoodCardContent({ title, type, paragraph }) {
  const $div = d.createElement("div");
  $div.classList.add("food-card-content");

  const $h2 = d.createElement("h2");
  const $b = d.createElement("b");
  $b.textContent = type;
  $h2.textContent = "producto ";
  $h2.appendChild($b);

  const $h1 = d.createElement("h1");
  $h1.textContent = title;

  const $p = d.createElement("p");
  $p.textContent = paragraph;

  $div.appendChild($h2);
  $div.appendChild($h1);
  $div.appendChild($p);
  const btnSolicita = RectangularButton("¡Solicitala aquí!");
  btnSolicita.innerHTML += '<span class="fas fa-angle-right"></span>';
  $div.appendChild(btnSolicita);
  return $div;
}

function FoodCardImage({ src }) {
  const $div = d.createElement("div");
  $div.classList.add("food-card-photo");
  const $img = d.createElement("img");
  $img.src = src;

  $div.appendChild($img);

  return $div;
}

