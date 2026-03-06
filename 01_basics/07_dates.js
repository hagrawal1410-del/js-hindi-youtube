//represent single moment //milliseconds since the midnight of jan 1, 1970.
//  in future //TC39 ?API_Temporal //Temporal.Now.instant() // Temporal.Now.timezone()/planedate() //

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof myDate);   // object

//let myCreateDate = new Date(2023 ,0, 23)  //month start from 0
//let myCreateDate = new Date(2023 ,0, 23, 5,3)  //month start from 0 // next is time 
//let myCreateDate = new Date("2023-01-14")   
let myCreateDate = new Date("01-14-2023")   
// console.log(myCreateDate.toString());

let myTimeStamp = Date.now() //timestamps in date //exact now date
// console.log(myTimeStamp);  
// console.log(myCreateDate.getTime());  //to get value from createdate //bnbclone

console.log(Math.floor(Date.now()/1000));  //convert into seconds //we get decimal value also so put math.floor

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); //only want to know month or date
console.log(newDate.getDate()); 

//  `${newDate.getDate()} and the time `    //when continpus writing

newDate.toLocaleString('default', {
    weekday: "long",
    timeZone: ''          //search for timezone bcz we have to write timezone
})                                // customize the local string // ctrl + space to open properties.
console.log(newDate); 
console.log(newDate); 
console.log(newDate); 