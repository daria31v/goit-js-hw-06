// Напиши скрипт, який реагує на зміну значення 
// input#font - size - control(подія input) і змінює інлайн - стиль 
// span#text, оновлюючи властивість font - size.В результаті,
// перетягуючи повзунок, буде змінюватися розмір тексту.


const fontSizeChange = document.querySelector('#font-size-control');
const textFontInput = document.querySelector('#text');



const changeFontSizeInput = () => {

    const newFontSize = `${fontSizeChange.value}px`;
    textFontInput.style.fontSize = newFontSize;
}

fontSizeChange.addEventListener('input', changeFontSizeInput);
