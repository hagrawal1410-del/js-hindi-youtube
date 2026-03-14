// Immediately Invoked Function Expression (IIFE)
 // immediately execute // global scope ke variable ke pollution ko hatane ke liye use iife
(function chai(){
    // named iife
    console.log(`DB connected`)
})();
//(function definition)(execution call) // iife don't know where to stop context so end with ;


((name) =>{
    console.log(`DB connected two $(name)`)
})('himanshi');

