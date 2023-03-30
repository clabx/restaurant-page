import cupsIMG from "../img/cups.webp";
import cupGrainsIMG from "../img/cup-grains.webp";
import cupGrains2IMG from "../img/cup-grains2.webp";
import tableIMG from "../img/table.webp";
import manyGrainsIMG from "../img/many-grains.webp";
const goHome = () => {
  const mainDOM = document.querySelector("#main");
  mainDOM.classList.add("flex", "flex-col", "flex-wrap");
  const imagesDOM = document.createElement("div");
  imagesDOM.classList.add(
    "h-full",
    "w-4/6",
    "h-full",
    "bg-slate-300",
    "rounded-xl",
    "flex",
    "flex-col",
    "gap-4",
    "p-4",
    "overflow-clip"
  );

  const firstRow = document.createElement("div");
  firstRow.classList.add(
    "h-1/3",
    "overflow-clip",
    "w-full",
    "flex",
    "gap-6",
    "pl-6",
    "pr-6"
  );
  const cupsDOM = new Image();
  cupsDOM.src = cupsIMG;
  cupsDOM.classList.add(
    "w-1/3",
    "rounded-2xl",
    "hover:scale-105",
    "hover:transition"
  );
  const tableDOM = new Image();
  tableDOM.src = tableIMG;
  tableDOM.classList.add(
    "w-2/3",
    "rounded-2xl",
    "hover:scale-105",
    "hover:transition"
  );
  firstRow.appendChild(cupsDOM);
  firstRow.appendChild(tableDOM);

  const secondRow = document.createElement("div");
  secondRow.classList.add(
    "h-1/3",
    "overflow-clip",
    "w-full",
    "flex",
    "gap-6",
    "pl-6",
    "pr-6",
    "justify-evenly"
  );
  const cupGrainsDOM = new Image();
  cupGrainsDOM.src = cupGrainsIMG;
  cupGrainsDOM.classList.add(
    "w-[40%]",
    "rounded-2xl",
    "flex",
    "hover:scale-105",
    "hover:transition"
  );
  secondRow.appendChild(cupGrainsDOM);
  const cupGrains2DOM = new Image();
  cupGrains2DOM.src = cupGrains2IMG;
  cupGrains2DOM.classList.add(
    "w-[40%]",
    "rounded-2xl",
    "hover:scale-105",
    "hover:transition"
  );
  secondRow.appendChild(cupGrains2DOM);

  const thirdRow = document.createElement("div");
  thirdRow.classList.add("h-1/4", "w-full", "flex", "gap-6", "pl-6", "pr-6");
  const manyGrainsContainer = document.createElement("div");
  manyGrainsContainer.classList.add(
    "h-full",
    "w-full",
    "rounded-2xl",
    "overflow-hidden",
    "grow-0",
    "flex-none"
  );
  const manyGrainsDOM = new Image();
  manyGrainsDOM.src = manyGrainsIMG;
  manyGrainsDOM.classList.add(
    "h-32",
    "w-full",
    "flex",
    "flex-none",
    "hover:scale-105",
    "hover:transition"
  );
  manyGrainsContainer.appendChild(manyGrainsDOM);
  thirdRow.appendChild(manyGrainsContainer);

  imagesDOM.appendChild(firstRow);
  imagesDOM.appendChild(secondRow);
  imagesDOM.appendChild(thirdRow);
  mainDOM.appendChild(imagesDOM);

  const rightSectionDOM = document.createElement("div");
  rightSectionDOM.classList.add(
    "flex",
    "flex-col",
    "w-2/6",
    "border-2",
    "ml-3",
    "mt-auto",
    "mb-auto",
    "p-4",
    "rounded-md",
    "bg-slate-300",
    "border-slate-300"
  );
  const titleRightSectionDOM = document.createElement("div");
  const textRightSectionDOM = document.createElement("div");
  titleRightSectionDOM.textContent = "Welcome to La Cafelería!";
  titleRightSectionDOM.classList.add("p-4", "text-4xl", "text-center");
  textRightSectionDOM.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin leo ante, eleifend in eros eget, scelerisque placerat dui. Ut et nisl ultrices, molestie arcu non, elementum eros.";
  rightSectionDOM.appendChild(titleRightSectionDOM);
  rightSectionDOM.appendChild(textRightSectionDOM);
  mainDOM.appendChild(rightSectionDOM);
};

export { goHome };
