let myString = 'this is a string';
//can use single quotes or double quotes

let myNumber = 12;

let myBoolean = true;
//can use true or false - no quotes, will denote a string

let myArray = [10, "string", [array]];
//can be multiple data types

let myObject = {firstkey: "a string"}
//need to make a key separated with : for key:value - in curly braces  -  separate values in an object with commas

let myUndefined;
//don't initialize it - or can write let myUndefined = undefined;

let myNull = null;

//console.log variable types by using console.log(typeof myBoolean);


//BRONZE

let Object1 = {key1: "I love javascript", key2: 1, key3: false, key4:{keyA: 1, keyB:2}};
console.log(typeof Object1.key4.keyB);


//SILVER

if(typeof Object1.key1 === "string" || typeof Object1.key1 ==="number" || typeof Object.key1==="boolean" || typeof Object1.key1==="object"){
console.log(typeof Object1);}
else {
    console.log("What Are You?");}


    //Instructor way to do

let value = typeof Object1.key4;
//allows you to set the value to change it to different variables to check - without going back to the detail code and changing each one

if (value==="string") {
    console.log(`The value is a ${value}`);
    } else if (value==="number") {
        console.log(`The value is a ${value}`);
    } else if (value==="boolean") {
        console.log(`The value is a ${value}`);
    } else if (value==="object") {
        console.log(`The value is an ${value}`);
    } else {
        console.log("what are you?");
    }
 

    //if you do it in an OR statement - you need to check for each condition separately

  //  if(value==="string" || value==="number")  -----  as opposed to if(value==="string" || "number") - this won't work