// MDN JavaScript Arrays Active Learning Exercise 1
const list = document.querySelector('.output ul');
const totalBox = document.querySelector('.output p');
let total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
let products = [
  'Underpants:6.99',
  'Socks:5.99',
  'T-shirt:14.99',
  'Trousers:31.99',
  'Shoes:23.99'
];

for (let i = 0; i < products.length; i++) {
  // number 2
  // number 3
  let current = products[i].split(':');
  let currentPrice = Number(current[1]);

  // number 4
  total += currentPrice;

  // number 5
  let itemText = current[0] + '--' + current[1];

  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);

//MDN JavaScript Arrays Active Learning Exercise 2
const list2 = document.querySelector('.output2 ul');
const searchInput = document.querySelector('.output2 input');
const searchBtn = document.querySelector('.output2 button');

list2.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem2 = document.createElement('li');
      listItem2.textContent = itemText;
      list.appendChild(listItem2);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
};
