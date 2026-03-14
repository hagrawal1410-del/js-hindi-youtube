function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
    console.log("I");
}
//sayMyNAme - reference (rhta hai) (): execution

//sayMyName()

// function addtwonumbers(number1, number2){    //parameter
//     //check datatype
//     console.log(number1 + number2);
// }

function addtwonumbers(number1, number2){   
    //check datatype
    let result = number1 + number2
    return result  // return number1 + number2
}

addtwonumbers(3, 7)    //arguments (3, 7)
const result = addtwonumbers(3, 5)  //undefined in first code
// console.log(result);  //what we are returning

// function loginmessage(username){
//     return`${username} just logged in`
// }
// console.log(loginmessage("Hitesh")); //if no value pass then gives undefined

//"" (empty string)  and undefined are considered as false value
function loginmessage(username){
    if(username === undefined){   //if(!username)
        console.log("please enter username");
        return
    }
    return`${username} just logged in`
}
console.log(loginmessage("himanshi"));

// ****MultipleArguments
//...  rest and spread operator
function calculateCartPrice( ...num1){    //gives an array //rest operator
    return num1
}
//console.log(calculateCartPrice(200,54200,845));

//how to pass object in function
const User = {
    username = "himanshi"
    price: 199
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleobject(user)
// handleobject({
     // username:"sam"
})

//how to pass array in function
const myNewArray = [200, 400, 100, 600]

function returnsecondValue(getArray){
    return getArray[1]
}
console.log(returnsecondValue(myNewArray));
console.log(returnsecondValue([200, 400,100,600]));   //other way of 1st one
