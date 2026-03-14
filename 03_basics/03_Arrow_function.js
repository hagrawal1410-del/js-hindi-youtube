// this - currrent context
const user = {
    Username: "Himanshi",
    price: 999,

    Welcomemsg: function() {
        console.log(`${this.Username} , welcome to website`);
        console.log(this);  // current context 
    }
}

// user.Welcomemsg()
// user.Username = "sam"
// user.Welcomemsg()
console.log(this)  //{}  no context in global through node
// in browser show window   // earlier engine found inside browser but now engine taken out of it and named node, bun...

// function chai() {
//     let username = "hiimanshii"
//    // console.log(this);
//     console.log(this.username);  // undefined // only works in objects
// }
// // chai()


const chai =  function () {
    let username = "hiimanshii"
    console.log(this.username);  // undefined // only works in objects
}
//chai()

// ***declare function through arrow function
 
const chai = () => {
    let username = "hiimanshii"
    console.log(this) //{}
    console.log(this.username);  // undefined // only works in objects
}

// Basic Syntax of arrow function 
// () => {}
// const addTwo () => {}   //can hold inside variable

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return
const addTwo = (num1, num2) => num1 + num2  //still run
const addTwo = (num1, num2) => (num1 + num2)  //still run
const addTwo = (num1, num2) => (num1 + num2)  //sreturn object

// when use {} we have to write return but () not ness to write return

