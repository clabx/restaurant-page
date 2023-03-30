import { clearMain } from "./clearScreen";
import { goHome } from "./home";
import { goMenu } from "./menu";

goHome();

const home = document.querySelector("#Home");
home.addEventListener("click", () => {
  clearMain();
  goHome();
});

const menu = document.querySelector("#Menu");
menu.addEventListener("click", () => {
  clearMain();
  goMenu();
});

const contact = document.querySelector("#Contact");
contact.addEventListener("click", () => {
  clearMain();
});
