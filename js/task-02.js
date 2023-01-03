const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector(`#ingredients`)
// console.log(list);
const items = [];
for (const ingredient of ingredients ) {
  const liItem = document.createElement(`li`);
  liItem.classList.add("new-class");
  liItem.textContent = ingredient;
  items.push(liItem)
  // console.log(items);
}

list.append(...items)
//   console.log(list);
// title.textContent = 'Welcome to Bahamas!';