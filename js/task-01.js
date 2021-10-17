const itemsEl = document.querySelectorAll('.item');
console.log(`В списке ${itemsEl.length} категорий`)


itemsEl.forEach(el => {
    
const h2 = el.querySelector('h2');
const elItems = el.querySelectorAll('li');
    
console.log(
`Категория: ${h2.textContent}
Количество элементов: ${elItems.length}`);
});


