// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на
// button.change - color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const colorValue = document.querySelector('.color');
const buttonColorChange = document.querySelector('.change-color');
const bodyRef = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


let changeBackgroundColor = () => {
  
  bodyRef.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = bodyRef.style.backgroundColor;
  
}

buttonColorChange.addEventListener('click', changeBackgroundColor)