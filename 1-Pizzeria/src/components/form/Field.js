const d = document;

export function Field({
  classField,
  id,
  name,
  type = "text",
  placeholder,
  label = false,
  labelText,
  autocomplete = "off",
  icon = false,
  classIcon,
}) {
  if (id == undefined || name == undefined) {
    console.log("Error params in Field component");
    return;
  }

  const $div = d.createElement("div");
  if (classField != undefined) {
    $div.classList.add(classField);
  }
  const $input = d.createElement("input");

  $input.id = id;
  $input.name = name;
  $input.type = type;
  $input.autocomplete = autocomplete;
  if (placeholder != undefined) $input.placeholder = placeholder;

  if (label) {
    const $label = d.createElement("label");
    $label.htmlFor = id;
    $label.textContent = labelText;
    $div.appendChild($label);
  }
  $div.appendChild($input);
  if (icon) {
    const $i = d.createElement("i");
    $i.className += classIcon;
    $div.appendChild($i);
  }

  return $div;
}
