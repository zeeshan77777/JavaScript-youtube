
if(true){
    let a = 24
    const b = 33
    var c = 69
}

// console.log(a);
// console.log(b);
// console.log(c);


//Anythin that is written inside {} is a block scope element and everything outside is global scope element.

/* Note:  anything that is written in a global can be used in a block scope but anything that is written in 
a block scope can not be used in a global scope 
*/


function addOne(){
    const username = "Zee";
    function addTwo(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    addTwo()
}
addOne()

//+++++++++++++++Another Example++++++++++++++
One(1)
function One(num){
    return num + 1
}
//this is a function
//In this function when we intialize the value before the function nothing happens and function executed normally


Two(3)
const Two = function(value){
    return value + 2
}
//this is also a function but sometimes it id called an expression
//In this type of function when we intialize the value before the function then function will not execute.