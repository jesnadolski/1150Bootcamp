/*
TYPES
*/

//Boolean
var on=true;
console.log(on);

let off=false;
console.log(off);

//Boolean can represent (like a light switch) - true/false, on/off, yes/no, 0/1

//undefined
/*
Undefined usually means a variable has been declared but has not been assigned a value
*/

let grass;
console.log(grass);

var undef=undefined;
console.log(undef);

//Undefined is a hint of something you forgot about - has been declared but not assigned

//NUll
/*
Null means a variable has been declared and assigned a variable of null
*/

var empty=null;
console.log(empty);

/*
Null and Undefined both represent variables with no value inside - 

Null values are for gag gifts that are boxes intentionally given with nothing inside

Undefined values are gifts given when the person has forgotten to put the gift inside
*/
//Numbers

let myLiteralAge=90;
console.log(myLiteralAge);

let precise=999999999999;
console.log(precise);

let rounded=999999999999999999;
console.log(rounded);

let notQuite=0.2+0.1
console.log(notQuite);

let numbersAreHard=(0.2*10 + 0.1*10)/10;
console.log(numbersAreHard);

//STRINGS
//String is any value within quotes;  JS spits out the value within the quotes

let stringOne="double quotes";
let stringTwo='single quotes';
console.log(stringOne, stringTwo);

//string concantenation vs addition
let first=1050+100;
let second='1050'+'100';
console.log(first);
console.log(second);

let third=1050+'100'
console.log(third);
console.log(typeof third);

//Interpolation
//Lets you use strings with dynamic content - require backticks

//example 1

let age=32;
let string=`my age is: ${age}`
console.log(string);

//Objects
/*
What is an object?

An object is a container that stores property names and their values - can hold multiple data types
Denoted by {}
They have keys and values
--color 9key); 'blue'(value)
Separated with a colon - between the key and the value
Each key/value pair separated by a comma
*/

let hulk={
    color:'green',
    age: 42,
    isStrong: true,
}
console.log(hulk);
console.log(hulk.age);
console.log(typeof hulk);


//Arrays
/*
Arrays store multiple values in an ordered way
---key difference b/w objects and arrays
Also hold multiple data types
Denoted by square brackets []
Have values of ('blue','green','orange') separated by commas
Array indexing - the first value is at the 0 position - then 1,2,3...
*/

var stepsToBrushTeeth=['uncap toothpaste', 'use toothpase', 'brush', 'finish'];
console.log(stepsToBrushTeeth);
console.log(stepsToBrushTeeth[3]);
console.log(typeof stepsToBrushTeeth);

//arrays show as objects when using typeof







