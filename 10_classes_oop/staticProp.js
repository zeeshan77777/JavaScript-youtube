class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`My username is ${this.username}`);
    }
    static createId(){
        console.log(`Id is 123`);
        
    }
}
const chai = new User("Zee")
chai.createId()

// class AnotherUser extends User 
//   {
//     constructor(username,email) {
//         super(username)
//         this.email = email
//     }

// }