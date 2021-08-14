
const allItemRef = document.querySelectorAll('.item');
console.log(`В списке "categories" 
${allItemRef.length} элемента(ов)`);

allItemRef.forEach(elem => {
    const titleCategoryRef = elem.querySelector('h2');
    console.log(`Категория: ${titleCategoryRef.textContent}`)
    
    const amountOfItem = elem.querySelectorAll('li')
console.log(`Количество элементов: ${amountOfItem.length}`)
})
 
