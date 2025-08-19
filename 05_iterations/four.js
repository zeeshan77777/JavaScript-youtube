//we can also use for in loop for arrays

const myArr = [
    "name : Zee",
    "age: 22",
    "email: zee@gmail.com"
]
for (const key in myArr) {
    // console.log(key);
}
//for in loop only print the keys of the array thats why its not good to use for in loop with arrays

//can we use for in loop with maps??????
const map = new Map()
map.set('name', "Zee")
map.set('age', 22)
map.set('email', "zee@gmail.com")

for (const key in map) {
    console.log(key);
    
}
//its not working with the map because map is not iterable