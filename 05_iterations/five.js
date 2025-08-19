const myArray = ["PC","Laptop","Ipad","Mac"]
myArray.forEach(function(value,index,array) {
    // console.log(value,index,array);
    
})

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )


const names = [
    {
        name:  "zee",
        location: "haripur"
    },
    {
        name:  "ali",
        location: "haripur"
    },
    {
        name:  "bilal",
        location: "haripur"
    }
]
names.forEach((value,index,array)=>{
    console.log(value,index,array);
})