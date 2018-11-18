// function declarations
function getReminder() {
    console.log('Water the plants.');
}
  
  function greetInSpanish() {
    console.log('Buenas Tardes.');
}

// Calling a Function
function sayThanks() {
    console.log('Thank you for your purchase! We appreciate your business.');
}
  
function sayThanksThreeTimes() {
    for (var i = 0; i < 3; i++) {
      sayThanks();
    }
}
  
sayThanks();
sayThanksThreeTimes();

// Default Parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

// Return 
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  const numOfMonitors = monitorCount(5, 4);
  console.log(numOfMonitors);

// Helper Function
function monitorCount(rows, columns) {
    return rows * columns;
  }
  
  function costOfMonitors(rows, columns) {
    return monitorCount(rows, columns) * 200;
  }
  
  const totalCost = costOfMonitors(5, 4);
  console.log(totalCost);

// Function Express
const plantNeedsWater = function(day) {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }  
  }
  
  plantNeedsWater('Tuesday');
  console.log(plantNeedsWater('Tuesday'));
  console.log(plantNeedsWater('Wednesday'));

// Arrow Function : introduced in ES6
// Arrow functions remove the need to type out the keyword function every time 
// you need to create a function. 
// Instead, you first include the parameters inside the ( ) 
// and then add an arrow => that points to the function body surrounded in { }
const plantNeedsWater = (day) => {
    if (day === 'Wednesday') {
      return true;
    } else {
      return false;
    }
  };
  
// Concise Body Arrow Function
const plantNeedsWater = day => day === 'Wednesday' ? true : false;