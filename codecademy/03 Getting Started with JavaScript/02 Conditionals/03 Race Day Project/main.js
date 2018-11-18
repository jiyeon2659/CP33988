let raceNumber = Math.floor(Math.random() * 1000);

// variable that indicates whether a runner registered early or not
let registeredEarly = false;
let runnerAge = 22;

if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly === true) {
  console.log(raceNumber + "'s race will start at 9:30 am.")
} else if (runnerAge > 18 && registeredEarly === false) { 
  console.log(raceNumber + "'s (lace adult) race will start at 11:00 am.")
} else if (runnerAge <= 18) {
  console.log(raceNumber + "'s (youth registrant) race will start at 12:30 pm.")
}