// two types 1. primitive (call by value)
// 7 types : string, Number, Boolean, null , undefined, symbol(to make unique value) , BigInt(scientic value, very big value)

// js is statically type or dynamic type. in js we never define variable type.
const score: number = 100 // typescript
//no special type of decimal define here decimal comes under number.

const isLoggedIn = false //bool type
const outsideTemp = null
let userEmail;   //undefined

const id = symbol('123')  //return type is also a datatype called symbol
const anotherid = symbol('123')
// here id != another id 

// const bigNumber = 34564578912346791152358n    // writing n makess it's big number




 
// 2. Non-primitive (call by reference)   return type is object. datatype is function.
// Array, objects , Functions 
// master browser event and objects to master js.
const heroes = ['shaktiman', "naagraj" ,"doga"]   // array
let myObj = {
    name: "Ramesh",
    age: 22,
}    // objects inside {}

// declare function as variable
const myFunction = function(){
    console.log("Hello ! World");
}
// https://262.ecma-international.org/5.1/#sec-11.4.3

console.log(typeof bigNumber );  // of null => object
// undefined => undefined
// boolean => boolean
// Number => Number
// string => string
//function => object function
// object  native does not implement=> object
// object  native or host and does implement=> function

//find datatype  use typeof




// ***********Memory*********
//2 types - stack(Primitive type), gets copy for variable declare 
//  heap(Non primitive), get reference of original value


let myYoutubename = "himanshiagrawal.com"   //primitive example
let anotherName =  myYoutubename // gives copy.
let anotherName =  myYoutubename // myyoutubename value remains same.
anothername = "chaiaurcode"
console.log(myYoutubename);
console.log(anotherName);

let userone= {                             // non-primitive
    email:  "user@google.com",
    upi:  "user@ybl"
}

let usertwo = userone
usertwo.email = "hitesh@giigle.com"

console.log(userone.email);
console.log(usertwo.email);