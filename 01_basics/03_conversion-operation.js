let score = "345c"

console.log(typeof score);

/*let valueInNumber = Number(score)*/
let valueInBoolean = Boolean(score)
//  console.log(typeof valueInNumber);
 
console.log(valueInBoolean);

// "345" => this is a string but can easily convert into numbers 33
// "345c" => this is also a string but can not convert into number and display Nan
// true => it convert into 1 false => it convert into 0

let isLogedIn = "1456"

let InBoolean = Boolean(isLogedIn)
console.log(InBoolean);

// 1 => true
// 0 => false
// "Zee" => true
// "" => false     

let a = 456

let numberIntoString = String(a)

console.log(typeof numberIntoString);

