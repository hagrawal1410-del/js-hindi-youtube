// reduce method executes a user-supplied "reducer"
// accumulator is empty variable whose first value is initial value

// const initialValue = 0;
// const sumWithInitial = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);


const myNums = [1, 2, 3]

const myTotal = myNums.reduce (function(acc, currval){
    console.log(`acc: ${acc} and crrval: ${currval}`);
    return acc + currval
}, 0)

// arrow function
const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

const shopping = [
    {itemname: "js course", price: 299},
    {itemname: "mobile dev course", price: 5999},
    {itemname: "py course", price: 999},
    {itemname: "dat science course", price: 12999}
]

const Total = shopping.reduce((acc, item) => acc + item.price, 0)
console.log(Total);