// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.



const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsRef = document.querySelector('ul');

for (let i = 0; i < ingredients.length; i += 1) {
  
  const elementsItem = document.createElement("li");
  elementsItem.textContent = ingredients[i];
  elementsItem.classList.add('item');
  
  ingredientsRef.append(elementsItem);

}
console.log(ingredientsRef);


