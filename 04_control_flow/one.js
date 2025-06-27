//if

const isUserLoggedIn=true;

// const temp=41
// if(temp<50){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }

// if(2==="2"){
//     console.log("executed");
// }

// const score=200
// if(score>100){
//     // var power="fly" //agar ye hota toh dono baar execute hojata
//     const power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`); //power not defined because of scope

const balance=1000
// if(balance>500) console.log("test");

// if(balance<500){
//     console.log("less than");
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn=true
const debitCard=true
const loggedInfromGoogle=false
const loggedinFromEmail=true

if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
}

if(loggedInfromGoogle || loggedinFromEmail){
    console.log("user logged in");
}