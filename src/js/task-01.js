// Напиши скрипт, який:
// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
// елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

// 1 
const categoriesRef = document.querySelector('#categories');
const listCategories = categoriesRef.querySelectorAll('.item');
console.log('Number of categories:', listCategories.length);

// 2
for (let i = 0; i < listCategories.length; i++) {
    console.log("");
    console.log("Category: ", listCategories[i].querySelector('h2').textContent);
    console.log("Elements: ", listCategories[i].querySelectorAll('li').length);   
}
