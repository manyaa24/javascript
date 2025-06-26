// var c=300
let a=300

if(true){
let a=10
const b=20
// var c=30
// console.log("inner:",a);

}


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(a);

//inspect krke global scope alag hai and when we use node then alag h
//var is global scoped
//let and const are block-scoped

function one(){
    const username="manya"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website); //website is not defined

    two()
}
// one()

if(true){
    const username="manya"
    if(username==="manya"){
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);
}
// console.log(username);

//++++++++++++++++++++++ interesting ++++++++++++++

console.log(addone(5)); //this will not give error
function addone(value){
    return value + 1
}
// addone(5)

// console.log(addTwo(5)); //this will give error
const addTwo=function(num){ //called as expression
    return num+2
}
addTwo(5)

//hoisting!!