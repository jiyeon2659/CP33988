// 02. reverseArray()
function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

const sentence = ['sense.','make', 'all', 'will', 'This'];
console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];

// 03. greetAliens()
function greetAliens(array) {
    for (let i = 0; i < array.length; i++) {
         console.log('Oh powerful ' + array[i] + ', we humans offer our unconditional surrender!');
    }
  }

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];
greetAliens(aliens);

// 04. convertToBaby()
function convertToBaby(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray[i] = 'baby ' + array[i];
    }
    return newArray;
  }

  const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
  console.log(convertToBaby(animals)) 
  // Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];
// Can implement convertToBaby with "map"
/*
var mapArray = animals.map(function(animal) {
    return 'baby ' + animal;
  });
*/

// 05. declineEverything() and acceptEverything()
const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

function declineEverything(arr) {
    arr.forEach(politelyDecline)
}
const acceptEverything = arr => {
    arr.forEach(e => {
      console.log(`Ok, I guess I will eat some ${e}.`)
    })
  }
/* 
function acceptEverything(array) {
    array.forEach(function(element) {
        console.log('OK, I guess I will eat some ' + element);
    })
}
*/

// 07. squareNums()
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

const squareNums = array => {
  return array.map(toSquare);
}

console.log(squareNums(numbers)); // result: [ 4, 49, 81, 29241, 2704, 1089, 196 ]

// 08. shoutGreetings()
function shoutGreetings(arr) {
    let shoutArray = [];
    for(let i = 0; i<arr.length; i++){
        shoutArray.push(arr[i].toUpperCase() + '!');
    }
    return shoutArray;
}
const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
console.log(shoutGreetings(greetings));
// using map
// const shoutGreetings = arr => arr.map(word => word.toUpperCase() + '!');

// 09. sortYears()
const checkYears = (year1, year2) => year1 < year2;
const sortYears = array => array.sort(checkYears); // to sort in descending order

const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]

console.log(sortYears(years))
// Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]

// 10. justCoolStuff()
const justCoolStuff = (firstArray, secondArray) => firstArray.filter(item => secondArray.includes(item))

/*
// As a function declaration AND using named function w/ a loop:
function justCoolStuff(firstArray, secondArray) {
      function isInSecondArray(item){
            for(let i = 0; i<secondArray.length; i++){
                  if (secondArray[i] === item){
                        return true
                  }
            }
            return false 
      }
      return firstArray.filter(isInSecondArray)
}
*/

const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
const myStuff = [ 'rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway']; 
console.log(justCoolStuff(myStuff, coolStuff))

// 11. isTheDinnerVegan()
const isTheDinnerVegan = arr => arr.every(dish => dish.source === 'plant');

/*
// Alternate solution:
// Using a function declaration, loop, and helper function:
function isTheDinnerVegan(arr) {
      const isVegan = (food) => {
            if (food.source === 'plant') {
                  return true;
            }
            return false;
      }
      for(let i = 0; i<arr.length; i++){
            if (!isVegan(arr[i])){
                  return false 
            }
      }
      return true
}
*/

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))

// 12. sortSpeciesByTeeth()
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

const sortSpeciesByTeeth = arr => arr.sort((speciesObj1, speciesObj2) => speciesObj1.numTeeth > speciesObj2.numTeeth)
console.log(sortSpeciesByTeeth(speciesArray))

// 13. findMyKeys()
const findMyKeys = arr => arr.findIndex(item => item === 'keys')

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))

