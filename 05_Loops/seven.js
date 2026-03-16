//
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//want to add 10 in each 
// const Newnums = myNums.map( (num) => num + 10)
console.log(Newnums);

// chaining 
const Newnums = myNums
.map( (num) => num * 10)
.map((num) => num + 1)     // map returns explicit or by operation
.filter( (num) => num>=40)

onsole.log(Newnums);
// 1st map value will pass in 2nd map