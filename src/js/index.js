import { clearMain } from "./clearScreen";
import { goHome } from "./home";

goHome();

const home = document.querySelector("#Home");
home.addEventListener("click", () => {
  clearMain();
  goHome();
});

const menu = document.querySelector("#Menu");
menu.addEventListener("click", () => {
  clearMain();
});

const contact = document.querySelector("#Contact");
contact.addEventListener("click", () => {
  clearMain();
});
