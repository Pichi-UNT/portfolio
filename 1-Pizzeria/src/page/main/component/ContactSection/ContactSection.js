import { RectangularButton } from "../../../../components/buttons/rectangularButton.js";
import { Field } from "../../../../components/form/Field.js";
import { FieldTextArea } from "../../../../components/form/FieldTextArea.js";
import { TitleAndHeader } from "../../../../components/title/Title.js";

const d = document;
export function ContactSection() {
  const $section = d.createElement("section");
  const $form = d.createElement("form");
  $form.addEventListener("submit", contactValidate);
  $form.name = "contact-form";
  $form.id = "contact-form";
  $form.action = "";
  $section.id = "contact";
  const $div = d.createElement("div");
  $div.classList.add("two-fields");
  const btnSend = RectangularButton("Enviar");
  btnSend.type = "submit";
  $div.appendChild(
    Field({
      classField: "contact-input",
      id: "name",
      name: "name",
      type: "text",
      placeholder: "Nombre",
      icon: true,
      classIcon: "fas fa-user",
    })
  );

  $div.appendChild(
    Field({
      classField: "contact-input",
      id: "email",
      name: "email",
      type: "email",
      placeholder: "Email",
      icon: true,
      classIcon: "fas fa-envelope",
    })
  );

  $form.appendChild($div);
  $form.appendChild(
    FieldTextArea({
      classField: "contact-textarea",
      id: "textarea",
      name: "textarea",
      placeholder: "Ingrese su mensaje",
      icon: true,
      classIcon: "fas fa-comments",
    })
  );

  $form.appendChild(btnSend);
  $section.appendChild(
    TitleAndHeader("Contáctanos", "queremos conocer tu opinión")
  );
  $section.appendChild($form);
  return $section;
}

const alertDuration = 2000;
function contactValidate(e) {
  e.preventDefault();
  const alertSucces = d.getElementById("alertSuccess");
  const alertError = d.getElementById("alertError");
  const inputName = d.getElementById("name");
  const inputEmail = d.getElementById("email");
  const textArea = d.getElementById("textarea");
  if (
    inputName.value.length === 0 ||
    inputEmail.value.length === 0 ||
    textArea.value.length === 0
  ) {
    alertError.classList.add("show-alert");
    setTimeout(function () {
      alertError.classList.remove("show-alert");
    }, alertDuration);
  } else {
    alertSucces.classList.add("show-alert");
    setTimeout(function () {
      alertSucces.classList.remove("show-alert");
    }, alertDuration);
    inputName.value = "";
    inputEmail.value = "";
    textArea.value = "";
  }
  e.preventDefault();
}
