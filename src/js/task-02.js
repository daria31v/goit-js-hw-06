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


