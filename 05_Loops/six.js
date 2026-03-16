// for each loop does not return values instesf show undefined
const coding = ["js", "rb", "py", "java", "cpp"]
 const values = coding.forEach(  (item) => {
    console.log(item);  
})

console.log(values);

//when want to return single item 
// filter returns the value
const mynums = [1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.filter( (num) => num>4)
// console.log(newnums);

 //**************************** 

// const newnums = mynums.filter( (num) => {
//   return num>4
// })
// console.log(newnums);    //[]  why??  {} :- object need to write return


// for each loop instead using filter
const newNums = []
mynums.forEach( (num)=> {
    if (num >4) {
        newNums.push(num)
    }
})

console.log(newNums);


let userbooks = books.filter( (bk) => bk.genre === 'History' )

userbooks = books.filter( (bk) => {
    return bk.publish >= 1995  &&  bk.genre === 'History'
 } )
console.log(userbooks);