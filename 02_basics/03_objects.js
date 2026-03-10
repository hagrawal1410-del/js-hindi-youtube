// declare object in two ways literal nad constructor
// singleton (when made from constructor)
//{} - object(key value pair)


//object literal
//add symbol in object key and then print it
// to use as a symbol put it in [].
const mySym = Symbol("Key1")

const JsUser = {
    name: "Himanshi",  //name is string //key is string
    "fullname": "himanshi Agrawal",    //cannot be accessed by dot 
    [mySym]: "myKey1"
    age: 20,
    location: "Mathura",
    email: "hgoogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//how to access
console.log(JsUser.email)  // not a good method
console.log(JsUser["email"])   //gives as string
console.log(JsUser["fullname"])  
// console.log(JsUser.mySym)  //still not use as a symbol // string datatype
console.log(JsUser[mySym])   // object datatype //if remove[] from JsUser still print

JsUser.email = "h@chatgpt.com"  //value change
// Object.freeze(JsUser)  //fix the value not further change
JsUser.email  = "himanshi@ms.com"  // not propogate further value

//Add function in object
//function - no discrimination //treat as variable

JsUser.greeting = function(){
    console.log("Hello! JsUser");
}
// reference name
//string interpolation - convert "" to `` // write variable by ${} // reference same object {this.}  get all value inside the object


JsUser.greetingTwo = function(){
    console.log(`Hello! JsUser, ${this.name} `);
}

console.log(JsUser.greeting()) // if remove() gives function reference not the function // [Function (anonymous)]
// unfreeze JsUser to define greeting as a function

console.log(JsUser.greetingTwo()); // hello! JsUser , himanshi

