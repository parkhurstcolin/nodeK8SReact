const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [['f150'], ['carolla'], ['comaro']];

// Help with inference when extracting values

//const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomaptible values
//carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10'];
importantDates.push('2030-10-11');
importantDates.push(new Date());
