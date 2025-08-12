const name = "Zee"
const score = 13
const scooreValue = 123.5
const temperature = null
let userEmail;

const id = Symbol('049')
const anotherId = Symbol('049')

// console.log(id === anotherId);

const bigNumber = 232432432n  //example of bigInt

const heroes = ["Superman", "Batman", "Flash"] //example of array

let Obj = {
     superhero : "Antman",
     power : "Shrink and grow" 
} //example of object

const myFunction = function(){
    console.log("Hello World");
}

//every non-primitive datatypes has a type of object but function has a type of object funtion


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Memory

//there are two types of memory stack and heap

//stack  //All primitive datatypes are stored in stack

let number1 = 24
let number2 = number1

number2 = 45

console.log(number1);
console.log(number2);  

//only the value of the seocond variable is changed the first variable stays the same

//Heap //all the non primitive datatypes are stored in heap

let user1 = {
    email: "zee@gmail.com",
    password: 2222
}

let user2 = user1

user2.password = 3333

console.log(user1.password);
console.log(user2.password);

//value in both the variables is changed 

