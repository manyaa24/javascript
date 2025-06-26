//Numbers:

const score=400
// console.log(score);

const balance=new Number(100) //explicitly defined
// console.log(balance);

// console.log(balance.toString()); //type changed to string
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //to get precision value

const otherNumber=23.876

// console.log(otherNumber.toPrecision(3)); //round off

const hundreds=100000
// console.log(hundreds.toLocaleString('en-IN'));

//Maths:

// console.log(Math);
// console.log(Math.abs(-4)); //gives 4 as output
// console.log(Math.round(4.3)); //round off
// console.log(Math.ceil(4.2)); //gives upper value
// console.log(Math.floor(4.9)); //gives the floor value
// console.log(Math.min(2,3,6,8));
// console.log(Math.max(2,3,6,8));

console.log(Math.random()); //gives random values in range 0 to 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1))+min);