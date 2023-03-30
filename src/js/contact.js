const goContact = () => {
  const mainDOM = document.querySelector("#main");
  const contactContainer = document.createElement("div");
  contactContainer.classList.add(
    "w-2/6",
    "h-5/6",
    "bg-slate-200",
    "rounded-xl",
    "ml-auto",
    "mr-auto",
    "mt-auto",
    "mb-auto",
    "p-6",
    "pt-10"
  );
  const contactTitle = document.createElement("div");
  contactTitle.classList.add("h-1/3", "text-2xl", "text-center");
  contactTitle.textContent = "CONTACT US!";
  contactContainer.appendChild(contactTitle);
  const contactButton = document.createElement("div");
  contactButton.classList.add(
    "bg-slate-400",
    "w-2/3",
    "h-1/3",
    "ml-auto",
    "mr-auto",
    "rounded-3xl",
    "border-2",
    "border-slate-700",
    "shadow-2xl",
    "shadow-slate-600",
    "cursor-pointer",
    "hover:scale-105",
    "hover:shadow-slate-900",
    "flex"
  );
  const contactButtonText = document.createElement("a");
  contactButtonText.textContent = "PRESS HERE TO CONTACT US!";
  contactButtonText.classList.add(
    "self-center",
    "w-fit",
    "ml-auto",
    "mr-auto",
    "font-bold",
    "select-none"
  );
  contactButton.appendChild(contactButtonText);
  contactContainer.appendChild(contactButton);
  mainDOM.appendChild(contactContainer);
};

export { goContact };
