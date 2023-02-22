const d = document;

export function ImageContainer(src, className = "") {
  const $div = d.createElement("div");
  const $img = d.createElement("img");
  $img.src = src;
  if (className) $div.classList.add(className);
  $div.appendChild($img);
  return $div;
}
