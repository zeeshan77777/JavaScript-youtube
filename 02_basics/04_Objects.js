//this is another way of creating an object
const myApp = {}
    myApp.name= 'Facebook'
    myApp.type= 'Android'
    myApp.isCompleted = false

//now when we merge two objects like we did in the array
const Obj1 = {1: 'a', 2: 'b', 3: 'c'}
const Obj2 = {3: 'a', 4: 'b', 5: 'c'}

/* first method to merge two objects..in this method we have two things target and source..
after Object.assign the first thing we write is the target and the other are source..so if we dont write this {} then 
the Object we write first all the objects will merge in that object so we write {} as a target object.*/
const Obj3 = Object.assign({}, Obj1, Obj2)
// console.log(Obj3);

//this is another method to merge two objects it is called spread operator it is same as array
const Obj4 = {...Obj1, ...Obj2}
// console.log(Obj4);

//when we have multiple informations it will always be wrapped in an array
const users = [
    {
        id: 1,
        username: "Zee"
    },
    {
        id: 1,
        username: "Zee"
    },
    {
        id: 1,
        username: "Zee"
    }
]
//this is how we display when our object is wrapped in our array
// console.log(users[0].username);

// console.log(myApp);
// console.log(Object.keys(myApp)); //this will display all the keys in our object and display it as an array
// console.log(Object.values(myApp)); // this will display all the values in our object and display it as an array
// console.log(Object.entries(myApp)); //this will wrap each key and value in seperate arrays
// console.log(myApp.hasOwnProperty('type')); //this will ask the object whether it has the key name type or not


//Destructure Of Object
const course = {
    courseName : "JavaScript",
    price : 1000,
    teacher : "Hitesh"
}
const {courseName: internship} = course
console.log(internship);

//API Keys In JSON format
/*API is like a menu in restaurant..you have a data of all the dishes and ingredients 
and you order something from it..you don't how the chef makes the dish...This is API you have a series
of information and you want to get something from that information you sent a request and the you get a response 
without knowing the backend details */

//this is JSON format of an API Key
{
    "name": "Zee",
    "id": 49,
    "IsLogedIn": false
}



