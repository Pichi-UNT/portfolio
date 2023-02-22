export function CircleButton(action) {
  const $button = document.createElement("button");
  $button.classList.add("circle-button");
  if (action) $button.addEventListener("click", action);
  return $button;
}
