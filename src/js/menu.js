import antipastoIMG from "../img/antipasto.webp";
import brocoleeIMG from "../img/broco-lee.webp";
import burritoIMG from "../img/burrito.webp";
import foodyFoodIMG from "../img/foodyFood.webp";
import hamburguerIMG from "../img/hamburguer.webp";
import pikesIMG from "../img/pikes.webp";
import pizzaIMG from "../img/pizza.webp";
import salmonIMG from "../img/salmon.webp";
import spaghettiIMG from "../img/spaghetti.webp";
import veganIMG from "../img/veganBurguer.webp";

const goMenu = () => {
  const mainDOM = document.querySelector("#main");
  const menuContainer = document.createElement("div");
  menuContainer.classList.add(
    "bg-slate-300",
    "w-full",
    "h-full",
    "rounded-2xl",
    "flex"
  );
  const leftSide = document.createElement("div");
  leftSide.classList.add(
    "w-1/2",
    "h-full",
    "overflow-scroll",
    "border-r-8",
    "rounded-2xl",
    "border-slate-400",
    "p-2"
  );
  const rightSide = document.createElement("div");
  rightSide.classList.add(
    "w-1/2",
    "h-full",
    "overflow-scroll",
    "border-r-8",
    "rounded-2xl",
    "border-slate-400",
    "p-2"
  );

  const foodTab = (name, pri, imag) => {
    const tab = document.createElement("div");
    tab.classList.add(
      "w-full",
      "h-36",
      "flex",
      "mt-2",
      "mb-2",
      "border-2",
      "rounded-md",
      "border-slate-700"
    );
    const price = document.createElement("div");
    price.classList.add("h-full", "w-1/6", "flex", "items-center");
    const priceText = document.createElement("p");
    priceText.classList.add("w-fit", "ml-auto", "mr-auto", "select-none");
    priceText.textContent = pri.concat(" $");
    price.appendChild(priceText);
    const content = document.createElement("div");
    content.classList.add("h-full", "w-3/6", "flex", "flex-wrap");
    const contentTitle = document.createElement("div");
    contentTitle.classList.add("h-1/2", "w-full", "text-xl", "text-end");
    contentTitle.textContent = name;
    content.appendChild(contentTitle);
    const contentDescription = document.createElement("div");
    contentDescription.classList.add("h-1/2", "w-full", "text-sm");
    contentDescription.textContent =
      "Voluptas ea dolores autem velit et veritatis. Quasi rerum minima ipsa quia fuga voluptates. Occaecati eveniet voluptatum alias. ";
    content.appendChild(contentDescription);
    const imageSide = document.createElement("div");
    imageSide.classList.add("h-full", "w-2/6", "flex", "items-center");
    const imageHolder = document.createElement("div");
    imageHolder.classList.add(
      "w-32",
      "h-28",
      "border-8",
      "rounded-md",
      "ml-auto",
      "mr-auto"
    );
    const image = document.createElement("img");
    image.src = imag;
    image.classList.add("w-full", "h-full");
    imageHolder.appendChild(image);
    imageSide.appendChild(imageHolder);
    tab.appendChild(price);
    tab.appendChild(content);
    tab.appendChild(imageSide);
    return { tab };
  };

  leftSide.appendChild(foodTab("Hamburguer", "1000", hamburguerIMG).tab);
  leftSide.appendChild(foodTab("Pikes", "650", pikesIMG).tab);
  leftSide.appendChild(foodTab("Antipasto", "820", antipastoIMG).tab);
  leftSide.appendChild(foodTab("Vegan hamburguer", "1100", veganIMG).tab);
  leftSide.appendChild(foodTab("Salmon", "1500", salmonIMG).tab);

  rightSide.appendChild(
    foodTab("Spaghetti with bolognese", "850", spaghettiIMG).tab
  );
  rightSide.appendChild(foodTab("Burritos", "1200", burritoIMG).tab);
  rightSide.appendChild(foodTab("This thing!", "1200", foodyFoodIMG).tab);
  rightSide.appendChild(foodTab("Pizza", "900", pizzaIMG).tab);
  rightSide.appendChild(foodTab("Broco-lee", "1000", brocoleeIMG).tab);

  menuContainer.appendChild(leftSide);
  menuContainer.appendChild(rightSide);
  mainDOM.appendChild(menuContainer);
};

export { goMenu };
