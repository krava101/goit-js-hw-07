function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const number = document.querySelector("#controls input[type='number']");
const createBtn = document.querySelector("#controls [data-create]");
const destroyBtn = document.querySelector("#controls [data-destroy]");
const boxes = document.querySelector("#boxes");

const createBoxes = amount => {
  for (let i = 0; i < amount; i++){
    const box = document.createElement("div");
    box.style.width = `${30+ i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.append(box)
    boxes.classList.add("has-boxes")
  }
}

const addBoxes = () => { number.value > 0 && number.value <= 100 ? createBoxes(number.value) : null }
const destroyBoxes = () => {
  boxes.innerHTML = "";
  boxes.classList.remove("has-boxes");
  number.value = "";
}

createBtn.addEventListener("click", addBoxes)
destroyBtn.addEventListener("click", destroyBoxes)


