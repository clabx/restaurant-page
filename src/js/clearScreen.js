const main = document.querySelector("#main");
const clearMain = () => {
  const children = main.childElementCount;
  for (let i = 0; i < children; i++) {
    main.removeChild(main.childNodes[0]);
  }
};

export { clearMain };
