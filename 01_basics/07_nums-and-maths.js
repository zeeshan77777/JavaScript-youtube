const score = 300
// console.log(score)

const balance = new Number(100) //this just confirms its datatype to number
// console.log(balance);

// console.log(score.toString()); //this converts it into string
 
// console.log(score.toFixed(2)); //this fixed the value of this variable to decimal like this 300.00
 
const number = 254.5
// console.log(number.toPrecision(3)); //this gives us the precise value upto 3 digits

const anotherNumber = 100000
// console.log(anotherNumber.toLocaleString('en-PK')); //this converts the number into our local Pakistani standard

//++++++++++++++++Maths++++++++++++++++++++++++++//

// console.log(Math) //it tells that Math is actually an object
// console.log(Math.abs(-20)); //it converts the value into absolute value
// console.log(Math.round(4.6)); //it round off the value
// console.log(Math.ceil(4.1)); //it always round off the number to the upper value
// console.log(Math.floor(4.9)); //it always round off the number to the lower value
// console.log(Math.min(2,3,4,5,9)); //it tells the minimum value in all the values
// console.log(Math.max(2,3,4,5,9)); //it tells the maximum value in all the values
// console.log(Math.random()); //it always gives us the random value between 0 and 1

console.log((Math.random()*10) +1);

const min = 1
const max = 6
console.log(Math.floor(Math.random()*(max-min+1)) + min);









