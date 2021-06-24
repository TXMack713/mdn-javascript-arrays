//MDN JavaScript Arrays Assessment 1
const section = document.querySelector('.assessment1');

let myArray = ['Cheeseburgers', 'Chicken Fried Steaks', 'Chicken Tenders'];

myArray[0] = 'Bacon Cheeseburgers';
myArray[2] = 'Fried Rice';
// Don't edit the code below here!

section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = `Array: ${ myArray }`;

section.appendChild(para1);
    