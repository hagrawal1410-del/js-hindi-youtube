 //Array is an object, resizable, not accessed using arbitrary strings as index.
//array-copy operations create shallow copies(same reference point)
const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)  //automatically add square bracket
// console.log(myArr[2]);
//  console.log(myArr2);

//Array Methods

myArr.push(6)  //adds value
myArr.pop()   //removes last value
myArr.pop()   //removes last value
myArr.unshift(9)   //adds at first //become 0th index
myArr.shift()   //removes 0th index

// console.log(myArr.includes[9]);  // 9 hai ya nhi?
// console.log(myArr.indexOf[9]);  // -1 pta nhi , exist nhi krta

const newArr = myArr.join()   //adds all the elements of array into string //0,1,2,3,4,5
// console.log(typeof newArr);

//Slice, Splice
// console.log("A", myArr);
const myn1 = myArr.slice(1,3)  //returns copy of a section of an array
// console.log("Slice", myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1,3)   //splice manuplate the origini=al array.
// console.log("C", myArr);
// console.log("Splice", myn2);    //3 also include



// ****************************************
const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]
// marvel_heroes.push(dc)
// console.log(marvel_heroes);   //array in array // ["thor", "Ironman", "spiderman", ["superman", "flash", "batman"]]

const allHeroes = marvel_heroes.concat(dc)   //merge and returns new array //so define new variable //limit of 2
// console.log(allHeroes); 

const all_new_Heroes = [...marvel_heroes,...dc]     //spread method// same as concat
// console.log(all_new_Heroes); 

const anotherarray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_array =  anotherarray.flat()   //how much depth is 1,2,?  //infinity apne aap dekh lega //automatically upto 2 depth
//console.log(real_array); 

//data scrapping
//when dataselect sometimes it's of different form (string,object, list)
// console.log(Array.isArray("Himanshi"));   //false
// console.log(Array.from("Himanshi"))   //convert into array
// console.log(Array.from({name: "Himanshi"}))   //give [] //cannot directly cnonvert into array //first we have to tell ki keys ka array , values ka array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));     //instead of from we can use of //convert into array
