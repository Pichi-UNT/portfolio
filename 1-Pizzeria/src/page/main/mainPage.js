import { TeamSection } from "./component/teamSection/TeamSection.js";
import { FoodSection } from "./component/foodSection/foodSection.js";
import { Navbar } from "../../components/navbar/Navbar.js";
import { IngredientsSection } from "./component/ingredientsSection/IngredientsSection.js";
import { ContactSection } from "./component/ContactSection/ContactSection.js";
import { ServicesSection } from "./component/servicesSection/ServicesSection.js";
import { Footer } from "../../components/footer/Footer.js";
import { ButtonTop } from "../../components/buttons/ButtonTop.js";
import { Alerts } from "./component/alerts/Alerts.js";

const d = document;
export function mainPage() {
  const $fragment = d.createDocumentFragment();
  $fragment.appendChild(ButtonTop());
  $fragment.appendChild(Navbar());
  $fragment.appendChild(FoodSection());
  $fragment.appendChild(ServicesSection());
  $fragment.appendChild(TeamSection());
  $fragment.appendChild(IngredientsSection());
  $fragment.appendChild(ContactSection());
  $fragment.appendChild(Footer());
  $fragment.appendChild(Alerts());
  return $fragment;
}
