const myArr = [5,6,7,8,9]
// console.log(myArr); 

const NewArr = ["Naruto","Light","Eren","subaru"]

// console.log(NewArr[3]); //it just displays the value which is present on the address 3
// NewArr.push("Madara") //it adds the new value at the end of the array
//  console.log(NewArr);
//  NewArr.pop() //it removes the last value of the array
//  console.log(NewArr);

// NewArr.unshift("Sasuke") //it adds the value at the start of the array and changes the location of all other values
// NewArr.shift() //it undo the unshift process
// console.log(NewArr);

// console.log( NewArr.includes("Naruto")); //it asks the array whether naruto is present in the array or not
// console.log(NewArr.indexOf("sasuke")); //it asks the array to tell the index of the value sasuke

// console.log(myArr.join()); //it converts the datatype of the array into string
// console.log(typeof myArr.join());

console.log("A ",NewArr);
const Arr1 = NewArr.slice(1, 3) //it displays the values between the index 1 and 3 excluding 3

console.log(Arr1);
console.log("B ", NewArr);

const Arr2 = NewArr.splice(1, 3) //it displays the values between the index 1 and 3 including 3
console.log(Arr2);

console.log("c ", NewArr);

/*The main difference between slice and splice is that when we use slice then it displays us the values according to
our input and did not harm our original array but when we use splice it also displays us the values according to our input but
also removes these vaues from our original array*/
 
 
