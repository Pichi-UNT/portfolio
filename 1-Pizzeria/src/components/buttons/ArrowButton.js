export function ArrowButton(action, right = true) {
  const $i = document.createElement("i");
  $i.classList.add("fas");
  if (right) {
    $i.classList.add("fa-angle-right");
  } else {
    $i.classList.add("fa-angle-left");
  }
  if (action) {
    $i.addEventListener("click", action);
  }
  return $i;
}
