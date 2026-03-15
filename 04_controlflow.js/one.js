//complete code should not run everytime
// 1. if statement
const temperature = 41

if (temperature < 50){
  console.log("less than 50");
} else{
    console.log("temperature is greater than 50");
}
//comparison opperator
// < , > , <= , == , != , === , !== , 

const score = 200
if (score >100){
    const power = "fly"
   // console.log(`user Power: ${power}`);
}
 // console.log(`user Power: ${power}`);  //power not defined bcz const is scope defined inside {}

 //const balance = 1000
 //implicit scope //execute in one line //but can write in multiple line ( unreadable code)
 if(balance > 500) console.log("test"),
  console.log("test2");

  if (balance < 500){
    console.log("less than 500");
  } else if (balance<750){
    console.log("less than 750");
  } else if (balance<900){
    console.log("less than 900");
  } else{
     console.log("less than 1200");
  }

const userLoggedIn = true
const debitcard = true
const loggedInfromgoogle = false
const loggedinfromemail = true

if (userLoggedIn && debitcard) {
    console.log("Allow to buy");
}

if (loggedInfromgoogle || loggedinfromemail) {
    console.log("Allow to login");
}

// Nullish coalescing Operator (??): null undefined
// sometimes we get 2 response or can possible null response ya response aaye hi navigator, code structure can disturb
let val1;
// val1 = 5 ?? 10   //5
// val1 = null ?? 10 //10
//val1 - undefined ?? 15  //15
val1 = null ?? 10 ?? 20  // 10
console.log(val1); 


// terniary operator

// condition ? true : false
const iceprice = 100
iceprice >= 80 ? console.log("less than 80") : console.log("more than 80")