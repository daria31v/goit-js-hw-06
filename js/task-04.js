// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.


const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');
const numberValue = document.querySelector('#value');
let counterValue = 0;


buttonDecrement.addEventListener('click', () => {
    numberValue.textContent = counterValue;
    counterValue -= 1;
})

buttonIncrement.addEventListener('click', () => {
    numberValue.textContent = counterValue;
    counterValue += 1;
})


