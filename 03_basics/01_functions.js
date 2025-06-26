function sayMyName(){
console.log("J");
console.log("I");
console.log("A");
}

// sayMyName //function's reference
// sayMyName() //execution

//add2 nos
// function addtwoNos(num1,num2){ //num1 and num2 are parameters
//     console.log(num1+num2);
// }
// addtwoNos(3,4) //3,4 are arguments
// addtwoNos(3,"4")
// addtwoNos(3,"a")
// addtwoNos(3,null)

function addtwonos(num1,num2){
    // let result=num1+num2
    // return result
    // console.log("manya"); //this will never print as we have already returned the value    
    return num1+num2
}
const result=addtwonos(3,5)
// console.log("Result: "+result);

function loginUserMessage(username){
    if(username===undefined){ //we can also write if(!username)
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("manya"));
// console.log(loginUserMessage());//gives undefined

function calculateCartPrice(val1,val2,...number1){ //rest operator
    return number1
}
console.log(calculateCartPrice(200,400,500,2000)); //gives an array of these values

const user={
    username:"manya",
    price:199
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const myNewArr=[200,400,100,600]

function returnSecondVal(getArray){
    return getArray[1]
}

// console.log(returnSecondVal(myNewArr));
console.log(returnSecondVal([200,400,100,600]));