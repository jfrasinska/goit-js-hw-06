const inputEl = document.getElementById("validation-input");
const dataLength = parseInt(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", () => {
  const inputValue = inputEl.value;
  if (inputValue.length === dataLength) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
