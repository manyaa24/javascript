//reduce

const myNums=[1,2,3]

// const total=myNums.reduce(function(acc,currVal){
//     console.log(`acc: ${acc} and currval: ${currVal}`);
    
//     return acc + currVal
// },0)

//arrow functions
const total=myNums.reduce((acc,currVal)=>acc+currVal,0)
console.log(total);

const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5999
    },
    {
        itemname:"data scientist course",
        price:12999
    },
]
const pricetopay=shoppingCart.reduce((acc,item)=> acc + item.price, 0 )
console.log(pricetopay);