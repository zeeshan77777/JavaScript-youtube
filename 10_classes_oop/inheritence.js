class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`My username is ${this.username}`);        
    }
}
class AnotherUser extends User{
    constructor(username,age,password){
        super(username)
        this.age = age
        this.password = password
    }
    AddCourse(){
        console.log(`New Course is added for ${this.username}`);
    }
}
const chai = new AnotherUser("Zee",23,555)
chai.AddCourse()

const Tea = new User("ALi")
Tea.logMe()