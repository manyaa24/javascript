const user={
    username:"manya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`); //this refers to a current context
    // console.log(this);
    }

}
// user.welcomeMessage() //gives manya
// user.username="sam" //sam bangya ab context
// user.welcomeMessage() //gives sam

// console.log(this); //gives empty object and in browser it gives Window object

// function chai(){
//     let username="manya"
//     console.log(this); //gives lots of values when we print this in a function
//     console.log(this.username); //gives undefined as we cant use this like this in functions
// }
// chai();

// const chai = function () {
//     let username="manya"
//     console.log(this.username);
// }
// chai()
//gives undefined

const chai =  () => { //arrow functions
    let username="manya"
    console.log(this.username);
}
// chai()
//gives also undefined

//Basic Arrow Function
// const addTwo = (num1, num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));

//Implicit Return
// const addTwo = (num1, num2) => num1+num2
// const addTwo = (num1, num2) => (num1+num2) //curly braces use hua toh return keyword likhna pdega warna nhi pdega
// console.log(addTwo(2,3));

const addTwo = (num1, num2) => ({username:"manya"})
console.log(addTwo(10,10));