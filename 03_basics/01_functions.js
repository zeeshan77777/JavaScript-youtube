//this is a normal syntax of writing a function
// function SayMyName(this is parameters){
//     console.log("Z");
//     console.log("E");
//     console.log("E");
// }
// SayMyName(this is arguments);


//when we give any parameters so when we call that function we have to give value in its arguments
function Addition(num1, num2){
    // console.log(num1 + num2);
}
Addition(6, 6);


//this is another way..we use the word return so function returns the value and after that we displays that value
function Sum(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = Sum(3, 5)
// console.log(result);


//we give parameter username and we return username as a variable..in this case if we give no value to
//arguments then it prints undefined so we create a condition which says if there is no username then 
//print enter a username and if the username is defined then it will print the return function
function UserLoginMessage(username){
    if(!username){
        console.log("Please ENter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(UserLoginMessage("Zeeshan"));
// console.log(UserLoginMessage());


/*if we give arguments more then value and we have only one parameter so in this case we use rest operator
(...)this is a rest operator and is also known as spread operator...by using this all the values in the 
arguments will stored in one parameter*/
function calculateShoppingPrice(...num1){
    return num1
}
// console.log(calculateShoppingPrice(4, 56, 46, 90));


//if we create an object with some values in it we can also use it in a function
const user = {
    username: "Zee",
    price: 4500
}
function handleObject(data){
    return `username is this ${data.username} and price is this ${data.price} `
}

//there are these two ways to display the items of the object through a function
// console.log(handleObject(user));
console.log(handleObject({
    username: 'Shani',
    price: 600
}));


//Same as object we can also use array inside a function and displays it
const myArray = [100, 200, 300, 400]
function getValue(anyName){
    return anyName[2]
}
console.log(getValue(myArray));


