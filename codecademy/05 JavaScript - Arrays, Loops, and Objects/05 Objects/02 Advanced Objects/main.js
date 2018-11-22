// 02. The this Keyword
// The this keyword references the calling object which provides access 
// to the calling object's properties.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo() {
      return 'I am ' + this.model + ' and my current energy level is ' + this.energyLevel + '.';
    }
  };
  
  console.log(robot.provideInfo());

// 03. Arrow Functions and this
// Arrow functions inherently bind, or tie, 
// an already defined this value to the function itself that is NOT the calling object.
const robot = {
    energyLevel: 100,
    checkEnergy: () => {
      console.log(`Energy is currently at ${robot.energyLevel}`);
      // this.energyLevel: undefined
      // energyLevel: referenceError
    }
  }
  
  robot.checkEnergy();

// 04. Privacy
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high';
  robot.recharge();

// 05. Getters
// can perform an action on the data when getting a property
// can return different values using conditional
// can access the properties of the calling object using this
const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };
  
  robot._energyLevel = 'high';
  robot.recharge();

// 06. Setter
// can reassign values of existing properties within an object
const robot = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
      if(typeof this._numOfSensors === 'number'){
        return this._numOfSensors;
      } else {
        return 'Sensors are currently down.'
      }
    },
    set numOfSensors(num) {
      if (typeof num === 'number' && num >= 0) {
        this._numOfSensors = num;
      } else {
        console.log('Pass in a number that is greater than or equal to 0');
      }
    }
  };
  
  robot.numOfSensors = 100;
  console.log(robot.numOfSensors);

// 07. Factory Functions
const robotFactory = (model, mobile) => {
    return {
      model : model,
          mobile: mobile,
          beep () { 
        console.log('Beep Boop'); 
      }
      };
  };
  
  const tinCan = robotFactory('P-500', true);
  tinCan.beep();

// 08. Property Value Shorthand
function robotFactory(model, mobile){
    return {
      model, // model: model,
      mobile, // mobile: mobile,
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)

// 09. Destructed Assignment
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot;
  functionality.beep();

// 10. Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);
// Syntax: Object.keys(obj)
// returns an array of a given object's own property names, in the same order as we get with a normal loop.

console.log(robotKeys);

const robotEntries = Object.entries(robot);
// Syntax: Object.entries(obj)
// returns an array of a given object's own enumerable property [key, value] pairs

console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
// Syntax: Object.assign(target, ...sources)
// used to copy the values of all enumerable own properties from one or more source objects to a target object

console.log(newRobot);


