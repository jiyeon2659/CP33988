const getSleepHours = day => {
    if (day === 'monday') {
      return 6;
    } else if (day === 'saturday' || day === 'sunday') {
      return 12;
    } else {
      return 5;
    }
  }
  
  const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDept = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log("Perfect amount of sleep!");
    } else if (actualSleepHours > idealSleepHours) {
      console.log("You got " + (actualSleepHours - idealSleepHours) + " hours than you needed.");
    } else {
      console.log("You need some more rest about " + (idealSleepHours - actualSleepHours) + " hours.");
    }
  }
  
  calculateSleepDept();