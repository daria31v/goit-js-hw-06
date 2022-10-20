// // 1 
const categoriesRef = document.querySelector('#categories');
const listCategories = categoriesRef.querySelectorAll('.item');
console.log('Number of categories:', listCategories.length);

// 2
for (let i = 0; i < listCategories.length; i++) {
    console.log("");
    console.log("Category: ", listCategories[i].querySelector('h2').textContent);
    console.log("Elements: ", listCategories[i].querySelectorAll('li').length);   
}
