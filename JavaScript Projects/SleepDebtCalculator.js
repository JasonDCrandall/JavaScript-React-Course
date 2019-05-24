// A simple program that determines your sleep debt

const getSleepHours = day => {
    switch(day) {
      case 'monday':
        return 6;
      case 'tuesday':
        return 5;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 4;
      case 'friday':
        return 10;
      case 'saturday':
        return 7;
      case 'sunday':
        return 6;
    }
  }
  
  const getActualSleepHours = () => {
    return getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8;
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!')
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed. You got ' + 
        (actualSleepHours-idealSleepHours) + ' hours more than you needed.')
    } else {
      console.log('You should get some more sleep. You were ' + 
        (idealSleepHours-actualSleepHours) + ' hours under the ideal amount.')
    }
  }
  
  calculateSleepDebt();