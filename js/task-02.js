const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const insertedIngredientsList = document.getElementById('ingredients');
console.log(insertedIngredientsList);
const listItem = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el
  return item;
})

insertedIngredientsList.append(...listItem);