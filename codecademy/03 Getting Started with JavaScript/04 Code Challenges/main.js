// CanIVote()
function canIVote(age) {
    if (age >= 18) {
      return true;
    } 
    else {
      return false;
    }
  }
  
  console.log(canIVote(19)); // Should print true
  console.log(canIVote(18)); 
  console.log(canIVote(17));

// agreeOrDisagree()
function agreeOrDisagree(first, second) {
    if (first === second) {
      return 'You agree!';
    }
    else {
      return 'You disagree!';
    }
  }
  
  console.log(agreeOrDisagree("yep", "yep"));
  // Should print 'You agree!'
  console.log(agreeOrDisagree("nop", "yep")) ;

// lifePhase()
function lifePhase(age) {
    if (age >= 0 && age <= 3) {
      return 'baby';
    } else if (age >= 4 && age <= 12) {
      return 'child';
    } else if (age >= 13 && age <= 19) {
      return 'teen';
    } else if (age >= 20 && age <= 64) {
      return 'adult';
    } else if (age >= 65 && age <= 140) {
      return 'senior citizen';
    } else {
      return 'This is not a valid age';
    }
  }
  
  console.log(lifePhase(5)) //should print 'child'
  console.log(lifePhase(23772));
  console.log(lifePhase(-27));
  console.log(lifePhase(76));

// finalGrade() 
const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// reportingForDuty()
function reportingForDuty(rank, lastName) {
    return rank + ' ' + lastName + ' reporting for duty!';
  } 
  
  console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'

// Fix The Broken Code
const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
      let die1 = Math.floor(Math.random() * 6 + 1);
      let die2 = Math.floor(Math.random() * 6 + 1);
      // console.log(die1);
          // console.log(die2);
      return die1 + die2;
  }
  
  console.log(rollTheDice());

// calculateWeight()
function calculateWeight(earthWeight, planet) {
    if (planet === 'Mercury') {
      return earthWeight * 0.378;
    }
    else if (planet === 'Venus') {
      return earthWeight * 0.907;
    }
    else if (planet === 'Mars') {
      return earthWeight * 0.377;
    }
    else if (planet === 'Jupiter') {
      return earthWeight * 2.36;
    }
    else if (planet === 'Saturn') {
      return earthWeight * 0.916;
    } 
    else {
      return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
  }
  
  console.log(calculateWeight(100, 'Jupiter')) // Should print 236

// truthyOrFalsy()
const truthyOrFalsy = value => {
    if (value) {
        return true
    }
    return false
}

/*
// As a function declaration:
function truthyOrFalsy(value) {
    if (value) {
        return true
    } else {
        return false
    }
}

// Using a ternary: 
const truthyOrFalsy = value => value ? true : false 
*/

// numImaginaryFriends()
function numImaginaryFriends(number) {
    return Math.round(number * 0.33);
  }
  
  console.log(numImaginaryFriends(18)) // Should print 6

// sillySentence()
function sillySentence(adjective, verb, noun) {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
  }
  
  console.log(sillySentence('excited', 'love', 'functions')) 

// howOld()
const howOld = (age, year) => {
    // The following two lines make it so that our function always knows the current year.
        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
    // It is totally ok if your function used the current year directly!
      
        const yearDifference = year - thisYear
        const newAge = age + yearDifference
        if (newAge < 0) {
            return `The year ${year} was ${-newAge} years before you were born`
        } else if (newAge > age) {
            return `You will be ${newAge} in the year ${year}`
        } else {
            return `You were ${newAge} in the year ${year}`
        }
    }

// tipCalculator()
function tipCalculator(quality, total) {
    switch (quality) {
      case 'bad':
        total *= 0.05;
        break;
      case 'ok':
        total *= 0.15;
        break;
      case 'good':
        total *= 0.20;
        break;
      case 'excellent':
        total *= 0.30;
        break;
      default:
        total *= 0.18;
        break;
    }
    return total;
  }
  
  console.log(tipCalculator('good', 100)) //should return 20

