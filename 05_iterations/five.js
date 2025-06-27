//for each loop

const coding=["js","ruby","java","python","cpp"]

//we pass a callback function over here and as we know its a callback function so its not gonna have any name
// coding.forEach( function (item) {
//     console.log(item);
// } )

//using arrow functions
// coding.forEach( (val) => {
//     console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe) //just pass the reference

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
        {
        languageName:"java",
        languageFile:"java"
    },
        {
        languageName:"python",
        languageFile:"py"
    },
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})