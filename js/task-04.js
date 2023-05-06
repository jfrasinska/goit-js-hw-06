const value = document.getElementById("value");
let counterValue = 0;

const decreceBtn = document.querySelector('[data-action="decrement"]');
const increceBtn = document.querySelector('[data-action="increment"]');

decreceBtn.addEventListener("click", () => {
  counterValue--;
  value.textContent = counterValue;
});

increceBtn.addEventListener("click", () => {
  counterValue++;
  value.textContent = counterValue;
});
