//string is object here.
const name = "himanshi"
const repocount = 50

//console.log(name + repocount + "Value"); // nowdays noone use this 
//console.log(`Hello my name is ${name} and my repo count is ${repocount}`);

// string declare 
const gameName  = new String("himanshi-ag") // 0th index are present so key value pair.
// console.log(gameName[0]);
// console.log(gameName.__proto__);       //access prototype



// console.log(gameName.length);    //access length
// console.log(gameName.toUpperCase());    
// console.log(gameName.charAt(5));    //to check at which index which character is.
// console.log(gameName.indexOf('a'));    //to check the position of character 

//breaks string into parts // methods of string?

const newString = gameName.substring(0, 4)     //substring//not start with -ve value.
console.log(newString);

const anotherString = gameName.slice(-8, 5)
console.log(anotherString);

const newString1 = "   himanshi   "              //trim   // remove extra spaces 
console.log(newString1);     // trim start and trim end bhi hote hain
console.log(newString1.trim());   //work on white space and line terminators.

const url = "https://himanshi.com/himanshi%20agrawal"    //replace
console.log(url.replace('%20', '-'));                  //want to replace %20 by dash

console.log(url.includes('himanshi'));   // includes himanshi or not. //true or false

console.log(gameName.split('-'));//string convert into array  //split length 2  // split based on -.
//go on mdn and read string.