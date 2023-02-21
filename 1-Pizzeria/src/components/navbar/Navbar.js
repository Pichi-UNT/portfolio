import { IconBar } from "./IconBar.js";
import { Menu } from "./Menu.js";
import { SocialContainer } from "../SocialContainer/SocialContainer.js";
import { MenuButton } from "./MenuButton.js";
import { ArrowButton } from "../buttons/ArrowButton.js";
import { SidePanel } from "./SidePanel.js";

const d = document;

export function Navbar() {
  const $body = d.querySelector("body");
  let screenSize = $body.offsetWidth;
  const $header = d.createElement("header");

  // add div for title or icon if exists

  $header.appendChild(IconBar("src/assets/img/logo.png"));
  const menuItems = [
    { href: "#services", text: "servicios" },
    { href: "#team", text: "equipo" },
    { href: "#contact", text: "contacto" },
  ];

  $header.appendChild(MenuButton(openSidePanel)); //openSidePanel
  const arrowBtn = ArrowButton(closeSidePanel); //closeSidePanel
  arrowBtn.classList.add("btn-close");
  const menu = Menu({ menuItems: menuItems, action: closeSidePanel });

  const sidePanel = SidePanel();
  sidePanel.appendChild(arrowBtn);
  sidePanel.appendChild(menu);
  sidePanel.appendChild(SocialContainer());

  $header.appendChild(sidePanel);

  return $header;
}

function openSidePanel() {
  const sidePanel = d.querySelector(".sidepanel");
  sidePanel.classList.add("sidepanel-active");
}

function closeSidePanel(e) {
  console.log(e.target);
  const sidePanel = d.querySelector(".sidepanel");
  sidePanel.classList.remove("sidepanel-active");
}
