// new Promise(function(resolve,reject){
//     setTimeout(function() {
//         console.log("Promise One");
//         resolve()
//     },2000)
// }).then(function() {
//     console.log("Promise One Complete");
    
// })

// const PromiseTwo = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         console.log("Promise Two");
//         resolve()
//     },3000)
// })
// PromiseTwo.then(()=>{
//     console.log("Promise Two COmplete");
    
// })

// new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve(["Zee","Ali","Ahmad"])
//     },2000)
// }).then((array)=>{
//     console.log(array);
// })

// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         let error = false
//         if (!error) {
//             resolve({user: "Zee", password: 123})
//         }else{
//              reject("Error: Something went wrong")
//         }
//     },3000)
// })
// promiseFour.then((object)=>{
//     console.log(object);    
// }).catch((message)=>{
//     console.log(message);   
// }).finally(()=>{
//     console.log("Promise Is Completed");
// })

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let error = true
        if (!error) {
            resolve({user: "Zee", password: 123})
        }else{
             reject("Error: Something went wrong")
        }
    },2000)
})
async function consumedPromiseFive() {
    try {
        const response = await promiseFive
    console.log(response);
    } catch (error) {
        console.log(error);     
    }
    
}
consumedPromiseFive()

