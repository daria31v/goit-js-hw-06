
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


