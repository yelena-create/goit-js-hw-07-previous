const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl)
// создать отдельный ли и вписать в него массив
const ingredientsItem = ingredients.map(el => {
  const item = document.createElement('li');
  item.textContent = el;
  return item
})
// вставить все ли за один раз
ingredientsEl.append(...ingredientsItem)