import { EmployeeCard } from "../../../../components/EmployeeCard/EmployeeCard.js";

const d = document;
export function TeamSection() {
  const $section = d.createElement("section");
  $section.id = "team";

  $section.appendChild(
    EmployeeCard({
      src: "src/assets/img/perfil1.png",
      name: "Jesus Alonso",
      rol: "Chef Pizzero",
    })
  );
  $section.appendChild(
    EmployeeCard({
      src: "src/assets/img/perfil2.png",
      name: "Eliza Smith",
      rol: "Chef",
    })
  );
  $section.appendChild(
    EmployeeCard({
      src: "src/assets/img/perfil3.png",
      name: "Henry Griffith",
      rol: "Asistente chef",
    })
  );
  $section.appendChild(
    EmployeeCard({
      src: "src/assets/img/perfil4.png",
      name: "Paulina Vega",
      rol: "Asistente",
    })
  );

  return $section;
}
