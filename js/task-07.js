const fontSizeControler = document.getElementById("font-size-control");
const textEl = document.getElementById("text");

fontSizeControler.addEventListener("input", () => {
  const fontSizeValue = parseInt(fontSizeControler.value);
  textEl.style.fontSize = `${fontSizeValue}px`;
});
