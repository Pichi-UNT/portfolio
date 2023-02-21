const d = document;

export function Menu({ menuItems, action }) {
  const $nav = d.createElement("nav");
  $nav.classList.add("main-menu");

  menuItems.forEach((element) => {
    const $a = d.createElement("a");
    $a.textContent = element.text;
    $a.href = element.href;
    $nav.appendChild($a);
  });
  if (action != undefined) $nav.addEventListener("click", action);
  return $nav;
}
