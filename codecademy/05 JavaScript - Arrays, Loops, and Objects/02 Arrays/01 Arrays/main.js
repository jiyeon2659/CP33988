// 01. Arrays
const hobbies = ['playing games', 'reading books', 'go outdoor'];
console.log(hobbies);

// 03. Accessing Elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]); // result: undefined

// 04. Update Elements
let groceryList = ['bread', 'tomatoes', 'milk'];

groceryList[1] = 'avocados'; 


// 05. Arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils); 
// if a const variable contains an array, 
// you can mutate elements in the array but not re-assign an new value!

// 06. The .length property
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// 07. The .push() Method
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('push one', 'push two');
console.log(chores);

// 08. the .pop() method
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

chores.pop();
console.log(chores);

// 09. More Arry Methods
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();
console.log(groceryList); // result: [ 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

groceryList.unshift('popcorn');
console.log(groceryList); // result: [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

groceryList.slice(1, 4);
console.log(groceryList.slice(1, 4)); // result: [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList); // .slice(): non-mutating

// indexOf(): returns the first index at which a given element can be 
// found in the array, or -1 if it is not present.
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// 10. Arrays and Functions
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept); // result: [ 'arrays', 'can', 'be', 'MUTATED' ]

function removeElement (array) {
  newArr = array.pop();
}

removeElement(concept);
console.log(concept); // result: [ 'arrays', 'can', 'be' ]

// 11. Nested Arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][1];
console.log(target); // result: 6