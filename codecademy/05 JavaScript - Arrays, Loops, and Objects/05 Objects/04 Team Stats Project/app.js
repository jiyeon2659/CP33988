// Team Stats Project
const team = {
  _players: [
    { firstName: "Pablo", lastName: "Sanchez", age: 11 }, 
    { firstName: "Pete", lastName: "Wheeler", age: 54 }, 
    { firstName: "Yuna", lastName: "Kim", age: 29 }
  ], 
  _games: [
    { opponent: "Broncos", teamPoints: 42, opponentPoints: 2},  
    { opponent: "AAA", teamPoints: 30, opponentPoints: 40 }, 
    { opponent: "BBB", teamPoints: 7, opponentPoints: 29 }
  ],
  get players() {
    return this._players;
  }, 
  get games() {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    let player = {
      firstName: firstName, 
      lastName: lastName, 
      age: age
    }
    
    this.players.push(player);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent: opponent, 
      teamPoints: teamPoints, 
      opponentPoints: opponentPoints
    };
    this.games.push(newGame);
  }
};

team.addPlayer("Steph", "Curry", 28);
team.addPlayer("Lisa", "Leslie", 44);
team.addPlayer("Bugs", "Bunny", 76);

team.addGame("Titans", 100, 98);
console.log(team._players);
console.log(team._games);