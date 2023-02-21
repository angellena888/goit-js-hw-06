const listOfCategories = document.querySelectorAll('#categories');
const itemOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}`);

itemOfCategories.forEach((item) => {
    console.log(`Category: $
    {item.firstElementChild.textContent}`);
    console.log(`Elements: $
    {item.lastElementChild.children.length}`)
});

