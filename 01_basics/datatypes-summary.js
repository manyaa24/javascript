//Primitive (call by value)
//7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score=100
const scoreVal=100.3

const isLoggedin=false
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherID=Symbol('123')
console.log(id===anotherID)

const bigNumber=2345678909876543n

//Note: JS is a dynamically typed language

//Reference Type / Non-primitive
//Arrays, Objects, Functions

const heros=["shaktiman","nagraj","doga"];

let myObject={
    name:"hitesh",
    age:22,
}

const myFunc=function(){
console.log("hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFunc);//returns function as datatype but its known as object function

//++++++++++++++++++++++++++++++++++++++++++
//Stack (primitive), Heap(Non-Primitive)
//stack gives copy
//heap gives reference

let myYTname="manyaaiscool" //this is primitive so it will go in stack memory
let anotherYTname=myYTname
anotherYTname="chai aur code"
console.log(myYTname);
console.log(anotherYTname);

let user1={ //non-primitive=>heap
    email:"user@google.com",
    upi:"user@hdfc"
}
let user2=user1

user2.email="user@gmail.com"

console.log(user1.email);
console.log(user2.email);