// the IF statements
let sale = true;
// sale = false;

if (sale) {
  console.log('Time to buy!'); // if sale = true, print 'Time to buy!', else print nothing
}

// the IF-ELSE statements
let sale = true;

sale = false;

if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// comparison operators
let hungerLevel = 7;

if (hungerLevel === 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// logical operators
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

// truthy and falsy
// used in a boolean or conditonal context -> evaluates to true
// 0, '', "", null, undefined, NaN -> false
let wordCount = 1; // true becasue it isn't zero

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = ''; // false because it's empty string

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
//let tool = '';
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

/*
let defaultName;
if (username) {
  defaultName = username;
} else {
  defaultName = 'Stranger';
}
can be shortened by 
let defaultName = username || 'Stranger';
(because || statement check the left-hand condition first, the variable defaultName will be assigned the actual value of username if is truthy, and it will be assigned the value of 'Stranger' if username is falsy. This concept is also referred to as short-circuit evaluation.)
*/

// else-if statements
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if (season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if (season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// the switch keyword
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place' :
    console.log('You get the gold medal!');
    break;
  case 'second place' :
    console.log('You get the silver medal!');
    break;
  case 'third place' :
    console.log('You get the bronze medal!');
    break;
  default : 
    console.log('No medal awarded.');
    break;
}