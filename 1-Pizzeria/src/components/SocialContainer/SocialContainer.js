const d = document;
export function SocialContainer() {
  const $div = d.createElement("div");
  $div.classList.add("social-container");
  $div.innerHTML =
    '<a href="#"><span class="fab fa-facebook"></span></a>' +
    '<a href="#"><span class="fab fa-instagram"></span></a>' +
    '<a href ="#"><span class="fab fa-twitter"></span></a >' +
    '<a href="#"><span class="fab fa-youtube"></span></a>';

  return $div;
}
