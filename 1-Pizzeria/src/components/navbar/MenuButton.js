const d = document;

export function MenuButton(action) {
  const $div = d.createElement("div");
  const $i = d.createElement("i");
  $i.classList.add("fas");
  $i.classList.add("fa-bars");
  $div.classList.add("btn-mobile");
  $div.appendChild($i);
  $i.addEventListener("click", action);
  return $div;
}


