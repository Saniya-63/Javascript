const mynum = [1,2,3]
// const myTotal = mynum.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval:${currval}`);
    
//     return acc + currval
// },0)
// console.log(myTotal);


myTotal = mynum.reduce( (acc,curr)=>acc+curr,0)
console.log(myTotal);

const cart = [
    {
        itemName:"jS Coure",
        price:2999
    },
    {
        itemName:"python Coure",
        price:1999
    },
    {
        itemName:"DEVOPs Coure",
        price:12999
    },
    {
        itemName:"jS= Coure",
        price:2999
    },
    {
        itemName:"App development Coure",
        price:4999
    },
]

const pricetoPay = cart.reduce( (acc,item) => acc + item.price,0)
console.log(`final price = ${pricetoPay}`);
