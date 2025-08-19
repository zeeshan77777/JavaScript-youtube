const shoppingCart = [
    {
        item : "Shoes",
        price: 2999
    },
    {
        item : "Shirt",
        price: 1499
    },
    {
        item : "Trousers",
        price: 2499
    },
]
const Total = shoppingCart.reduce((result, value)=>(result + value.price),0)
console.log(Total);

const arr = [1,3,5,7,9]
const newArr = arr.reduce((acc,currVal)=>(acc > currVal ? acc : currVal),0)
console.log(newArr);

