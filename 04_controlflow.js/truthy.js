const useremail = "h@mail.com"
if (useremail) {   //string so true
    console.log("got user email");
} else {
    console.log("don't have user email");
}

//falsy values
// false, 0, -0,  bigint 0n, "", null, undefined, NaN

// truthy value 
// "0",'false', " ", [], {}, function(){}

//how to check array
if (useremail.length === 0) {
    console.log("Array is empty");
}

//how to check obbject
const obj = {}
if (Object.keys(obj).length === 0) {
     console.log("object is empty");
}