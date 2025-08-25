function setUsername(username) {
    this.username = username
    console.log("called");
    
}
function data(username,age,password) {
    setUsername.call(this, username)
    this.age = age
    this.password = password
}
const result = new data("Ali",22,333)
console.log(result);
