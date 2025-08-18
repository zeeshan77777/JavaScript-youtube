const user = {
    username: "Zee",
    email: "zee@gmail.com",
    greetings: function(){
        // console.log(`${this.username}, welcome to the website`);
        // console.log(this);
        
    }
}
// user.greetings();
// user.username = "Ali"
// user.greetings()
// console.log(this);

//+++++++++++++++Arrow Function+++++++++++++++++
const One = (num1, num2) => {
    return num1 + num2    
}
console.log(One(23, 10));


const Two = (val1, val2) => (val1 + val2)
console.log(Two(20, 5));
