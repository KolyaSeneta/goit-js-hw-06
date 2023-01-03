const items = [...document.querySelectorAll('.item')];
const stringItems = `Number of categories: ${items.length}`;
console.log(stringItems);
const categorysArr = items.map((item) => {
    const titleName = [...item.children]; 
    const stringElem = [...titleName[1].children];
    const stringCategory = `Category: ${titleName[0].textContent} 
Elements: ${stringElem.length}`;
    

 
})

