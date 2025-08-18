//IIFE (Imediately Invoked Function Expression)
//this is a type of function which automatically and immediately called it self when its written

(function user (){
    console.log("Hiii Zeee");
})();
//this is an example of IIFE..IIFE function should must wrap in a parenthesis() and parenthesis after that 
// will acutally execute this function


((name) => {
    console.log(`Hii, ${name}`);
})("Zee")
//In this example we figure out how to declare parameters and arguments in IIFE

//Note: after writing 1 IIFE function we must write a semi colon otherwise it will give an errorx