function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const amountInput = document.querySelector("input");
const amount = parseInt(amountInput.value);

const boxesContainer = document.getElementById("boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    const size = 30 + i * 10;

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();

    boxesContainer.appendChild(box);
  }
}
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

createButton.addEventListener("click", () => {
  createBoxes(amount);
});

destroyButton.addEventListener("click", () => {
  boxesContainer.innerHTML = "";
});
