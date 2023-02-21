export function Title(text) {
  const $h2 = document.createElement("h2");
  $h2.textContent = text;
  return $h2;
}

export function TitleAndHeader(text, header) {
  const $div = document.createElement("div");
  $div.classList.add("title");
  const $h3 = document.createElement("h3");
  const $h2 = document.createElement("h2");
  $h2.textContent = text;
  $h3.textContent = header;
  $div.appendChild($h3);
  $div.appendChild($h2);
  return $div;
}
