// const value kelvin
const kelvin = 293;
// celsius is 273 degress less than kelvin
const celsius = kelvin - 273;

let farenheit = celsius * (9/5) + 32;
// round dowm
farenheit = Math.floor(farenheit);

console.log(`the temperature is ${farenheit} degrees Farenhiet.`);

// convert to newton
let newton = celsius * (33/100);
// round down
newton = Math.floor(newton);
console.log(`the temperature is ${newton} degrees Newton.`)