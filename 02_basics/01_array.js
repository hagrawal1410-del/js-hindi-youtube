//Array is an object, resizable, not accessed using arbitrary strings as index.
//array-copy operations create shallow copies(same reference point)
const myArr = [0,1,2,3,4,5]
const myHeroes = ["Shaktiman", "naagraj"]

const myArr2 = new Array(1,2,3,4)  //automatically add square bracket
console.log(myArr[2]);
 console.log(myArr2);

//Array Methods

myArr.push(6)  //adds value
myArr.pop()   //removes last value
myArr.pop()   //removes last value
myArr.unshift(9)   //adds at first //become 0th index
myArr.shift()   //removes 0th index

console.log(myArr.includes[9]);  // 9 hai ya nhi?
console.log(myArr.indexOf[9]);  // -1 pta nhi , exist nhi krta

const newArr = myArr.join()   //adds all the elements of array into string //0,1,2,3,4,5
console.log(typeof newArr);

//Slice, Splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)  //returns copy of a section of an array
console.log("Slice", myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3) 
console.log("Splice", myn2);    //3 also include
