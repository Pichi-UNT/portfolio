const d = document;

export function RectangularButton(
  buttonText,
  isAnimated = true,
  className = "",
  action
) {
  const $button = d.createElement("button");
  $button.classList.add("rectangular-button");

  if (isAnimated) {
    $button.classList.add("rectangular-button-animation");
  }
  if (className) {
    $button.classList.add(className);
  }

  $button.textContent = buttonText;

  if (action) {
    $button.addEventListener("click", action);
  }
  return $button;
}
