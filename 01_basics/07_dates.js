//Dates

let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate=new Date(2025,0,23)
// console.log(myCreatedDate.toDateString());
// let myCreatedDate=new Date(2025,0,23,5,3)
// console.log(myCreatedDate.toLocaleString());
// let myCreatedDate2=new Date("2025-01-14")
// console.log(myCreatedDate2.toLocaleString());
let myCreatedDateIndia=new Date("01-14-2025")
// console.log(myCreatedDateIndia.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDateIndia.getTime());
// console.log(Math.floor(Date.now()/1000)); //using math.floor cuz sometimes it gives decimal values.

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);//+1 to avoid confusion as in js months start from 0

// `${newDate.getDay()} and the time is...`

// newDate.toLocaleString('default',{
//     weekday: "long",
// }) // we can modify