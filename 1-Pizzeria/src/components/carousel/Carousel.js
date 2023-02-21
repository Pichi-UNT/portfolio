import { ArrowButton } from "../buttons/ArrowButton.js";

const d = document;

function CarouselButton(right = true) {
  const btn = d.createElement("button");
  if (right == true) {
    btn.classList.add("btn-carousel-right");
    btn.innerHTML += '<span class="fas fa-angle-right"></span>';
    btn.addEventListener("click", () => {
      next(1);
    });
  } else {
    btn.classList.add("btn-carousel-left");
    btn.innerHTML += '<span class="fas fa-angle-left"></span>';
    btn.addEventListener("click", () => {
      next(-1);
    });
  }
  return btn;
}

function CarouselItemContainer() {
  const $div = d.createElement("div");
  $div.classList.add("carousel-item-container");

  return $div;
}

function CarouselItem(content) {
  const $div = d.createElement("div");
  $div.classList.add("carousel-item");
  $div.appendChild(content);
  return $div;
}

export function Carousel(elements) {
  const $div = d.createElement("div");
  $div.classList.add("carousel");

  const carouselItemContainer = CarouselItemContainer();

  elements.map((item) => {
    carouselItemContainer.appendChild(CarouselItem(item));
  });

  const btnRight = CarouselButton(true);
  const btnLeft = CarouselButton(false);

  $div.appendChild(btnLeft);
  $div.appendChild(carouselItemContainer);
  $div.appendChild(btnRight);

  return $div;
}

let index = 0;

function next(delta) {
  const carouselItemContainer = d.querySelector(".carousel-item-container");
  const finalIndex = carouselItemContainer.childElementCount - 1;
  console.log(index);
  if (index + delta > finalIndex) {
    index = 0;
  } else if (index + delta < 0) {
    index = finalIndex;
  } else {
    index += delta;
  }

  carouselItemContainer.style.transform = "translateX(" + index * -100 + "%)";
}
