// some loops add directly in array(for each)
// for each is higher order function  // [{}, {}, {}] 
// in call back name nhi hota ,  (parameter :- kya name dena hai)


const coding = ["js", "rb", "py", "java", "cpp"]

coding.forEach(  function (item) {
    console.log(item);  // js,ruby,pythonn, cpp
})

// arrow function

coding.forEach( (item) => {
      console.log(item);
})
//////////////////////
function printme(item){
    console.log(item);
}
coding.forEach(printme)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )

const myCoding =[
    {language: "java", languageFile: "java"} ,
    {language: "python", languageFile: "py"} ,
    {language: "javaScript", languageFile: "js"}
]
myCoding.forEach(  (item) =>{
    console.log(item.language);
})