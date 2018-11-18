var favoriteFood = 'pizza';
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

// let : variable can be reassigned a different value
let changeMe = true;
changeMe = false;
console.log(changeMe);

// const : cannot be reassigned
const entree = 'Enchiladas';
console.log(entree);
// entree = 'Tacos'; -> TypeError

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// increment & decrement operator
let gainedDollar = 3;
let lostDollar = 50;

gainedDollar++;
lostDollar--;

// string concatenation with variable
let favoriteAnimal = 'dog';
console.log('My favorite animal: ' + favoriteAnimal);

// String Interpolation : can be used in the ES6 version of JavaScript.
// can insert, interpolate variables into strings using template literals
// benefit: readability of the code

var myName = 'jiyeon';
var myCity = 'Pohang';
console.log(`My name is ${myName}. My favorite city is ${myCity}.`);

// typeof operator : to check the data type of a variable's value

let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable);

newVariable = 1;
console.log(typeof newVariable);