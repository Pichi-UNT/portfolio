const d = document;

export function FieldTextArea({
  classField,
  id,
  name,
  placeholder,
  label = false,
  labelText,
  icon = false,
  classIcon,
}) {
  if (!id || !name) {
    console.log("Error params in Field component");
    return;
  }

  const $div = d.createElement("div");
  if (classField != undefined) {
    $div.classList.add(classField);
  }
  const $textArea = d.createElement("textarea");

  $textArea.id = id;
  $textArea.name = name;
  if (placeholder != undefined) $textArea.placeholder = placeholder;

  if (label) {
    const $label = d.createElement("label");
    $label.htmlFor = id;
    $label.textContent = labelText;
    $div.appendChild($label);
  }
  $div.appendChild($textArea);
  if (icon) {
    const $i = d.createElement("i");
    $i.className += classIcon;
    $div.appendChild($i);
  }

  return $div;
}
