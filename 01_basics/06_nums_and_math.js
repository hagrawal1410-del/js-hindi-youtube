const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString().length);   //convert balance to string and tell his length
// console.log(balance.toFixed(2));  // 100.00

const otherNumber = 23.8966
// console.log(otherNumber.toPrecision(3)); //range between 0-1//return string  //round-off //124

const hundreds = 1000000
// console.log(hundreds.toLocalString());  //us strandard // 1,000,000
// console.log(hundreds.toLocalString('en-IN'));  //indian value   //10,00,000

//Number.MAX_VALUE/MIN_VALUE/MAX_SAFE_INTEGER

// **********MATHS***********
object 
// console.log(Math.abs(-4));   //gives absolute value
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));    //choose upper value when round off //5
// console.log(Math.floor(4.6));  //choose lower value when round off //4
// console.log(Math.sqrt(4));
// console.log(Math.min(4, 6,5, 2, 1));  
// console.log(Math.max(4,8,9,1,2));  //use when math.random
// console.log(Math.random());   //between0-1  //
// console.log((Math.random()*10) + 1);  //shift decimal // +1 because in case 0.041 avoid 0
// console.log(Math.floor(Math.random()*10) + 1);  // maths.flooor because want min value
  
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  //avoid 0 and greater than min value  //max - min to give range 
