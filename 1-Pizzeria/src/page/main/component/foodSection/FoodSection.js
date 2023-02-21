import { Carousel } from "../../../../components/carousel/Carousel.js";
import { FoodCard } from "../../../../components/foodCard/foodCard.js";

const d = document;

const foodsCards = [
  FoodCard({
    title: "americana",
    type: "premium",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
    src: "src/assets/img/menu/peperoni.png",
  }),
  FoodCard({
    title: "especial",
    type: "premium",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
    src: "src/assets/img/menu/especial.png",
  }),
  FoodCard({
    title: "margarita",
    type: "básico",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
    src: "src/assets/img/menu/margarita.png",
  }),
  FoodCard({
    title: "peperoni",
    type: "premium",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
    src: "src/assets/img/menu/peperoni.png",
  }),
  FoodCard({
    title: "suprema",
    type: "especial",
    paragraph:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
    src: "src/assets/img/menu/suprema.png",
  }),
];

export function FoodSection() {
  const $section = d.createElement("section");
  $section.id = "food";

  const $div = d.createElement("div");
  $div.classList.add("food-container");

  $div.appendChild(Carousel(foodsCards));
  $section.appendChild($div);

  return $section;
}
/*    FoodCard({
      title: "peperoni",
      type: "premium",
      paragraph:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident debitis nihil incidunt quisquam ab reiciendis consequuntur iure.",
      src: "src/assets/img/menu/peperoni.png",
    })*/
