// 03. The For Loop
for (let counter = 5; counter <= 10; counter++) {
    console.log(counter);
} // result: 5 6 7 8 9 10

// 05. Looping through Arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
}

// 06. Nested Loops
// If  If the current element from the outer loop is the same as the current element 
// from the inner loop, push the that element into the mutualFollowers array.
let bobsFollowers = ['1', '2', '3', '4'];
let tinasFollowers = ['1', '2', 'c'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
     mutualFollowers.push(bobsFollowers[i]); 
    }
  }
}

// 07. The While Loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// 08. The do-while Loop
let cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

// 09. The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");
