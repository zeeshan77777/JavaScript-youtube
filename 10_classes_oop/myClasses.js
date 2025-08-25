// class User{
//     constructor(username,age,password){
//         this.username = username
//         this.age = age
//         this.password = password
//     }
//     encryptPassword(){
//         return `My Password is ${this.password}`
//     }
//     changeUserName(){
//         return `My Name is ${this.username.toUpperCase()}`
//     }
// }
// const User1 = new User("Ali",23,324)
// const User2 = new User("Hassan",25,545)

// console.log(User1.encryptPassword());
// console.log(User2.encryptPassword());
// console.log(User2.changeUserName());


function User(username,age,password) {
        this.username = username
        this.age = age
        this.password = password
}
User.prototype.encryptPassword = function(){
    return `My Password is ${this.password}`
}
User.prototype.changeUserName = function(){
     return `My Name is ${this.username.toUpperCase()}`
}
const User1 = new User("Ali",23,324)
const User2 = new User("Hassan",25,545)

console.log(User1.encryptPassword());
console.log(User2.encryptPassword());
console.log(User2.changeUserName());
