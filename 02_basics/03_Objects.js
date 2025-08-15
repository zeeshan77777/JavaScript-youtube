//Literal Method Of Declaring Object

//if we declare a symbol adnd use it as a key in our Object
const mySym = Symbol()

const myObj = {
    name: "Zeeshan",
    age: 22,
    [mySym]: "symbols", //this is the proper syntax of using symbol as a key
    location: "Haripur",
    email: "zeeshan@gmail.com",
    isLoggedIn: false,
    LoginDays: ["Monday", "Wednesday"]
}
//there are two methods to print object
//1st Method
// console.log(myObj.location);

//2nd Method
// console.log(myObj["location"]);

// console.log(typeof myObj[mySym]);

//if we want to change the value of our object
myObj.name = "Ali"

//if we want to freeze ou Object so no one else can change the value of the object
// Object.freeze(myObj)

// console.log(myObj);

//if we want to add a function with our object
myObj.greeting = function(){
    console.log("Hiii User");
}
console.log(myObj.greeting());

//if we also want to use the values of our object in the function
myObj.greetingTwo = function(){
    console.log(`Hii ${this.name}`);
}
console.log(myObj.greetingTwo());

/*we mostly use the first method to print our objects but there are some special cases
when we have to use the 2nd method*/