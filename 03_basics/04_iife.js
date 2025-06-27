//Immediately Invoked Function Expressions (IIFE)
//we use this to avoid : global scope pollution
// and if we want to execute immediately the function

//named iife
(function chai(){
    console.log(`DB CONNECTED`);
}) (); //semicolon is impt

//simple iife
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('manya') //parameter passed  