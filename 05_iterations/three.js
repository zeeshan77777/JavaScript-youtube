let Name = "Zee"
for (const Intro of Name) {
    // console.log(Intro);
}

const array = [1,2,3,4,5,6,7,8,9,10]
for (const num of array) {
    // console.log(`My Array is ${num}`);
}

const map = new Map()
map.set('name', "Zee")
map.set('age', 22)
map.set('email', "zee@gmail.com")

for (const key of map) {
    // console.log(key);
}
for (const [key, value] of map) {
    // console.log(key, value);
}


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
//Hence it is stated that for of loop does not work with object
//so we use another loop which is called for in loop

for (const key in myObject) {
  console.log(`${key} :- ${myObject[key]}`);
  
}