// console.log(2>10);
// console.log(2>=10);
// console.log(2<10);
// console.log(2==10);
// console.log(2!=10);

console.log("2" > 1); //true bcz js automatically convert 2 to a number.
console.log("02" > 1); //true
//problem otput not always predictable so make sure compare between same datatype by typescript

console.log(null > 0);  //false
console.log(null == 0);  //false   
console.log(null >= 0); //true result  // null converted into 0.
// comparison and equality operator work different synatax work differently in js.
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false
// ===  check value strictly (check also datatype).  in == automatically convert.