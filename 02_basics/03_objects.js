//singleton (only created with constructors not with literals)
// Object.create

//object literals

const mySym=Symbol("key1")

const JsUser={
    name:"Manya",
    "full-name":"Manya Raj", //can never be accessed through . operator
    // mySym:"mykey1",
    [mySym]:"mykey1",
    age:21,
    location:"Kolkata",
    email:"manyaraj2402@gmail.com",
    isLOggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full-name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySym); //gives string this means that it is no longer used as a symbol
console.log(JsUser[mySym]);

JsUser.email="manyaraj@google.com"
// Object.freeze(JsUser) //after this value will not be changed
JsUser.email="manyaraj@chatgpt.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("congratss!!");   
}
JsUser.greeting2=function(){
    console.log(`congratss!! ${this.name}`)   
}
// console.log(JsUser.greeting);//gives function reference as callback, doesnt execute

console.log(JsUser.greeting());
console.log(JsUser.greeting2());