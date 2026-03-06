// declare object in two ways literal nad constructor
// singleton (when made from constructor)
//{} - object(key value pair)


//object literal

const mySym =
const JsUser = {
    name: "Himanshi",  //name is string //key is string
    "fullname": "himanshi Agrawal",    //cannot be accessed by dot 
    age: 20,
    location: "Mathura",
    email: "hgoogle.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//how to access
console.log(JsUser.email)  // not a good method
console.log(JsUser["email"])   //gives as string
