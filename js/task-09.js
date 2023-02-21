const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
  const oneColor = getRandomHexColor();
  body.style.backgroundColor = oneColor;
  colorSpan.textContent = oneColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


