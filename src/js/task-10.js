// Напиши скрипт створення і очищення колекції елементів.

// Користувач вводить кількість 
// елементів в input і натискає кнопку Створити, після чого рендериться колекція.
// Натисненням на кнопку Очистити, колекція елементів очищається.

// Створи функцію createBoxes(amount), яка приймає один параметр - число. 
// Функція створює стільки < div >, скільки вказано в amount і додає їх у div#boxes.
// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію 
// getRandomHexColor для отримання кольору.

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

// 
const buttonDestroyRef = document.querySelector('[data-destroy]');
const buttonCreateRef = document.querySelector('[data-create]');
const inputNumber = document.querySelector('input[type = "number"]');
const divBoxes = document.querySelector('#boxes');


// console.log(buttonDestroy, buttonCreate, inputNumber, divBoxes);

function createBoxes (amount) {
  amount = inputNumber.value;
  const newDivBoxes = [];
 
  for (let i = 0; i < amount; i += 1) {
    const elementDivBoxes = document.createElement('div');
    console.log(elementDivBoxes);
    elementDivBoxes.style.backgroundColor = getRandomHexColor(),
      elementDivBoxes.style.width = `${30 + 10 * i}px`,
      elementDivBoxes.style.height = `${30 + 10 * i}px`,
      newDivBoxes.push(elementDivBoxes);
  }
      
  divBoxes.append(...newDivBoxes);
}

  buttonCreateRef.addEventListener('click', createBoxes)

  function destroyBoxes() {
    inputNumber.value = '',
    divBoxes.innerHTML = '';
  }

  buttonDestroyRef.addEventListener('click', destroyBoxes)


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}