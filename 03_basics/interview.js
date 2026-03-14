// how code execute (execution context) / EC
// run in 2 phase  
// 1. Memory creation phase (place allocate)     2. Execution phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2 
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

//hoow this execute 
// 1. Global execution , allocated to this
// 2. Creation phase , collect all variable , put undefined in all variables , addnum - definition, result1 & result2 : undefined
// 3. execution phase , val1: 10, Val2: 5, addnum: new variable environment + execution thread  // new executional contex create for each function so both phases again create  and also delete
    // memory phase, val1 $ val2 :undefined , total: undefined 
    // execution phase ,  num1 :10, val2:5 , total: 15
   // total return to globbal execution context 
   // new execution phase delete and return  result1:15 in 3. execution    

   // same for result 2 , new execution phase create
      //memory phase
      // execution context
      //total return



// always made {} - global EC and put/ refer in/to this (browser) variable
// execute in thread

// function EC
// eval EC (property of Global EC)

// calls  stack: 

          
one() -> |  one()          |  -> one()
         | global execution|
         |_________________|

          //nested function call
         |   three()       |
         |   Two()         |
         |  one()          |  
         | global execution|
         |_________________|
last in first out   // sbse phle three() out hoga
//