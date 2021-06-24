// MDN JavaScript Arrays Assessment 3
let myArray = [
  'Ryu',
  'Ken',
  'Chun-Li',
  'Cammy',
  'Guile',
  'Sakura',
  'Sagat',
  'Juri'
];

myArray.pop();
myArray.push('M. Bison', 'Sagat');

for(let i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i] + ' (' + i + ')';
}

const section = document.querySelector('.assessment3');

let myString = myArray.join(' - ');

// Don't edit the code below here!

section.innerHTML = ' ';

let para1 = document.createElement('p');
para1.textContent = myString;

section.appendChild(para1);
