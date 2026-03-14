// three variable  let var(can comme out from scope) const
//{} - scope

// if(true) {
//    let a = 10    // block scope
//    const b = 20
//    var c = 30
// }
// console.log(a);  // not defined
// console.log(b);   //not defined
// console.log(c);   // print // if simply write c = 30 tb bhu print ho jaata

let a = 300   //global scope
 if(true) {
   let a = 10    // block scope
   const b = 20
  console.log("INNER: ", a);
}
console.log(a);

// for (let i= 0; i< array.length; i++) {
//     const element = array [i];
    
//}
// in browser scope inside console  and in code environment through node  scope are different in both


//nested Scope
function one(){
    const Username = "Himanshi"

    function two(){
        const website = "youtube"
        console.log(Username);
    }
    //console.log(website);   //scope already finished // adult cann't take icecream from kid

    two()
    console.log("User:", Username);
}
// one()

if (true) {
    const username = "himanshi"
    if (username === "himanshi"){
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);  //error
}
// console.log(username); //error

// *********** interesting *************
function addone(num){
    return num + 1
}
addone(5)  /// can write before declaration

// in js variable can hold anything 

const addtwo = function(num){
    return num + 2
}
addtwo(5)   // cannot  write before declaration // because declare in variable
