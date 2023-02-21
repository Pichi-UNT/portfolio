export function Alerts(ErrorText) {
  const $div = document.createElement("div");
  $div.classList.add("alerts");
  $div.innerHTML =
    '<div id="alertError" class="alert"><span class="icono-alert fas fa-exclamation-circle"></span><span class="msg">Error: campos de entrada vacios<span></div>' +
    '<div id = "alertSuccess" class="alert" ><span class="icono-alert fas fa-check-circle"></span><span class="msg">¡Datos enviados! Gracias por contactarnos.</span></div>';
  return $div;
}
