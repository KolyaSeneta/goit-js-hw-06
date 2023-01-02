const bgColor = document.querySelector(`body`)
const button = document.querySelector(`.change-color`)
const changeColor = document.querySelector(".color");
button.addEventListener(`click`, () => {
  const currentColor = getRandomHexColor();
  bgColor.style.backgroundColor = currentColor;
  changeColor.textContent = currentColor;
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
console.log(bgColor);