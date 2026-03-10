// object singleton  // object declare with constructor

const tinderUser = new Object()  //empty object //singleton object
//const tinderUser = {}  //same as above  //non singleton object
//console.log(tinderUser);   //{}
//now giving some values to tinderUser
tinderUser.id =  "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

// Nested Object
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Himanshi",
            lastname: "Agrawal"
        }
    }
}

//how to acess value
console.log(regularUser.fullname.userfullname.firstname);

// let fullname does not exist so we put? in front of fullnamename in console.log
//console.log(regularUser.fullname?.userfullname.firstname);

//optional chaning //combining object
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
console.log(obj1);
console.log(obj2);

// const obj3 = { obj1, obj2}    //{obj1: {'1': 'a','2': 'b' }, obj2: { '3': 'c', '4': 'd'}}
//const obj3 = Object.assign( {}, obj1, obj2)   //  {1: "a", 2: "b", 3: "c", 4: "d"}
//{}  adding this possible ki aur bhi value ho   so {} act as target and obj1, obj2  act as source

const obj3 = {...obj1, ...obj2}  //90% time use this
console.log(obj3)
//assign - copy the values of all of the enumerable own properties from one or more source objects to a target object.

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // Expected output: Object { a: 1, b: 4, c: 5 } // It does this by mutating the target object directly (not creating a new one


// console.log(returnedTarget === target);
// // Expected output: true


//values from database  got array of object

const users  = [
    {
        id: 1,
        email: "h@gmail.com"
    },

    {
        id: 1,
        email: "j@gmail.com"
    }
]

users[1].email
//users[1]  //acess first value  which is object
console.log(tinderUser);

console.log(Object.keys(tinderUser));   //output value datatype is array  //now can apply loop on array
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));   //nested array //each key-value put inside array

//object ke andr loop through kr rhe hain and value find kr rhe hain, value find krte smy kai baar esa hota hai value exist nhi krti so crash hone ke chances , we can ask exist krti hai ya nhi
console.log(tinderUser.hasOwnProperty('isLogged'));  //false



// *******Object Destructuring*****
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "ht"
}
//acess value
//course.courseInstructor // write this multiple time
const {courseInstructor: instructor} = course   //more neat way //instead of saying course instructor just using instructor
console.log(instructor); 

//react
// const navbar = () => {        //instead = (props.company)  we write ({company})  //destructure use

// }
// navbar(company = "Google")    


// ***API********
//apna kaam kisi aur ke daal dena
//backened se value aati hai in jason

//jason syntax: {
    //key: value   both are string
}

// Json syntax:  [
//     {},
//     {},
//     {}
// ]

// {
//     name: "himanshi",
//     coursename: "js in hindi",
//     price: "free"
// }

//api.github.com/users/hiteshchoudhary
// JSON formatter  to clearly understand what written in json
