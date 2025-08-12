const name = 'Zee'
const age = 22

console.log(`Hello my name is ${name} and my age is ${age}`); //another way of writing a string

const gameName = new String('Call Of Duty') //we declare a string to a variable but in this case the string becomes an object

// console.log(gameName.length); //it tells the lenght of the string

console.log(gameName.__proto__); //it tells the 

// console.log(gameName[5]); 
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('D'));

const newString = gameName.substring(0 , 5)
console.log(newString);


