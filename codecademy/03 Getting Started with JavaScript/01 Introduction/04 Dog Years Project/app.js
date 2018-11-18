// my age as a number
let myAge = 22;

// the first two years of a dog's life count as 10.5 to 'dog years'
let earlyYears = 2;
earlyYears *= 10.5;

// each year following equates to 4 dog years
myAge -= 2;
let laterYears = 20;
laterYears *= 4;

console.log(earlyYears + ' ' + laterYears);
let myAgeInDogYears = earlyYears + laterYears;

// set my name ase lowercase
var myName = 'jiyeon Kim'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)

/*
extra practice : without using *= operator
let myAgeInDogYears = earlyYears * 10.5 + (myAge - earlyYears) * 4;
*/