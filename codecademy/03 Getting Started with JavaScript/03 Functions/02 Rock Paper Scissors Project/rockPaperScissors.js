const getUserChoice = userInput => {
    // to get different capitalization, use toLowerCase() to make userInput all lowercase
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' 
        || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log("Error!");
    }
  }
  
  function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0) {
      return 'rock';
    } else if (randomNum === 1) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
      return 'User win no matter what!';
    }
    if (userChoice === computerChoice) {
      console.log("This game is a tie!");
    }
    
    if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'The computer win!';
      } else {
        return 'User win!';
      }
    }
    
    if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'The computer win!';
      } else {
        return 'User win!';
      }
    }
    
    if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'The computer win!'
      } else {
        return 'User win!';
      }
    }
  }
  
  const playGame = () => {
     const userChoice = getUserChoice('bomb');
     const computerChoice = getComputerChoice();
     console.log('User threw: ' + userChoice);
     console.log('The computer threw: ' + computerChoice);
     console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();