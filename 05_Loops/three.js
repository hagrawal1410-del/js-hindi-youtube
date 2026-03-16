//object => for in loop
// array => for of loop


// Array specific loop
// for of

["", "", ""]
[{}, {},{}]

const arr = [1,2,3,4,5]  // object is thing 
for (const num of arr) {
    console.log(num);
}

const gree = "hello! world"
for (const greet of gree) {
     console.log(`each char is ${greet}`);   // if not want to print space use continue
}

// *****Maps****   (object)
// hold key value pair // remember original insertion of order of key
// may be used as either key or value
//no duplicate value always unique value

const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);

//loop on map
// if want separate key and value// destructure of array use []
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// for of loop on object  //how to iterate object 
// muObject not iterable
//new loop use :- for in

// const myObject ={
//     'game1': 'NFS',
//     'game2': 'spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(key);  // for printing keys
    console.log(myObject.[key]);   //for values of key
    console.log(`${key} shortcut is for ${myObject.[key]}`);    
}


// forin loop for array???
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    console.log(programming.[key]); 
    
}

// for in loop for map
const map = new Map()
map.set('IN', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in  map) {
    console.log(key);   // nothing happen bcz map is not iteratable 
}