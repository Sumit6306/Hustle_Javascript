// The reduce method in JavaScript iterates over an array, applying a function to accumulate its elements into a single value such as a sum, product, or object). It takes a callback function with an accumulator, current value, and an optional initial value.


// for adding through reducer 
const arrA= [ 2 , 3,4,5,6];
const newA= arrA.reduce(function (accumulator,current){
    console.log(`accumulator : ${accumulator} currentvalue : ${current}`);
    return accumulator + current;
    
})

const shoppingCart= [
{
itemName : "Kurta Pajama",
price:1299
},
{
itemName:"Shirt Pants",
price:1399
},
{
itemName:"Trouser Tshirt ",
price:1500
},

]

 const priceToPay = shoppingCart.reduce((acc,item) => acc + item.price,0)
 console.log(" Price To Pay :"+ " " + priceToPay);
 