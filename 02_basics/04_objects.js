//this will be mostly about how to make objects singleton with constructors

// const tinderUser=new Object()
const tinderUser={}
// console.log(tinderUser);
//both output will be empty object but the diff only is the first one is a singleton object

tinderUser.id="123abc"
tinderUser.name="tommy"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"manya",
            lastname:"raj"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"a",
    4:"b"
}
const obj4={
    5:"a",
    6:"b"
}
// const obj3={obj1,obj2}; // gives objs of objs
// const obj3=Object.assign({},obj1,obj2,obj4) 
const obj3={...obj1,...obj2} //spread
// console.log(obj3); 

const users=[
    {
        id:1,
        email:"m@gmail.com"
    },
        {
        id:2,
        email:"a@gmail.com"
    },
        {
        id:3,
        email:"n@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); //give all keys in an array so we can loop through and it comes in use heavily
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}

// course.courseInstructor

const {courseInstructor:Instructor} = course //Destructuring Objects
// console.log(courseInstructor);
console.log(Instructor);

//JSON
// {
//     "name":"manya",
//     "coursename":"js in hindi",
//     "price":"free"
// }

//APIS IN ARRAY FORMAT
[
    {},
    {},
    {}
]