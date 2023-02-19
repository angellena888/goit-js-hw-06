const itemOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemCategories.length}`);

const arrayOfCategories = [...itemOfCategories]
    .map(
        categories => `Category: ${categories.firstElementChild.textContent}
    Elements: ${categories.children[1].children.length}`
    )
    .join('\n');
console.log(arrayOfCategories);


