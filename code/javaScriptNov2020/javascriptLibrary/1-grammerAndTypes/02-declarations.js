/*VARIABLES*/

//What is a variable?
//can be numbers, strings, true/false - a bucket to store things, or get something out of it
var a=1;
var b=2;
console.log(a+b);

//notes on naming variables:
//1)  a variable must begin with a letter, underscore, or dollar sign
//2)  numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive--'hello' and 'Hello' are different variables

/*DECLARATIONS, INITIALIZATIONS, ASSIGNMENT
*/

/*Declarations refer to when we 'declare' a variable

Initializations refer to when a variable is assigned a value

Assignment refers to giving a variable a value.  This can be after initialization.
*/

var x;
console.log('Declaration 1:',x);  //undefined

x=10;
console.log('Initialization 1:',x);  //10

x=33;
console.log('Assignment 1:',x); //33


var y;
console.log(y);
var y='hello'
console.log(y);
var y='You are my friend'
console.log(y);

/*
Var, Let, and Const:

var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = also 'new', declares unchangeable variables
*/

let tonight='Great!';
const elevenFifty='Amazing!';
console.log(tonight,elevenFifty);

tonight='lovely';
console.log(tonight,elevenFifty);





Let tonight = 'great!';
const elevenfifty = 'amazing!';
console.log(tonight,elevenfifty);










