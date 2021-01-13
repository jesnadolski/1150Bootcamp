/*
FUNCTIONS

-javascript functions are defined with the function keyword, and can be written as a function declaration or a function expression

-function declarations are hoisted in our code, and run ONLY when we call them (invoke them)

-Any function in our code sits and waits to be run until we call it by name

-think of it as a student with his or hand up, waiting to ask a question, that student does not ask the question until the teacher calls upon them

-function expressions ARE NOT hoisted and are generally stored in variables

-functions without names are known as anonymous functions

*/

function sayHello(){
    console.log("hi");
}

sayHello();

//function expressions are just functions stored in variables

let greetings = function(){
    console.log("Hello");
}
greetings();

//you call the variable - which is storing the function

/* 
PARAMETERS

-Think of parameters as a newly declared variable that we have not given a value to yet - like a placeholder

-The value that we pass into our function when we call the function to run (which is known as an argument) is the value that gets assigned to the parameter

-General naming convention for function parameters:
     -the parameter should be named somthing related to the information we're passing into the function
     -If we are passing an integer, we may name our parameter num or number

*/


function myDog(husky){
    console.log(`My dog's name is ${husky}`);
}

myDog("Champ");

//to give a value to the function - you enter it as a value/parameter when you call the function
//husky takes whatever value we give it inside the ()

myDog("Lulu");  //"lulu" is the argument

myDog("Champ", "Lulu");
//you need to have a second parameter to call more than one

//example with multiple parameters

function allMyDogs(smallHusky, bigHusky, borderCollie){
    console.log(`My dogs' names are ${bigHusky} and, ${smallHusky}, and ${borderCollie}`);
}
allMyDogs("champ", "lulu","princess");

/* RETURN

-functions can also manipulate the data sent to them, and return a new value
*/

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    return average;  //anything after the return does not get executed
}


function calculator(one, two, three){
    let total = one + two + three;
    let average = (total / 3);
    return average;
    console.log(average);
}

function(1,2,3);
/*

function calculator(one, two, three){
    let totalWeight = one + two + three;
    let average = Math.round(totalWeight / 3);
    let returnString = `"The average is ${average}`;"
    return returnString;  

let averageWeight = calculator(15,60,55);
console.log(averageWeight);  //lists as undefined if you do not have a return

/* ARROW FUNCTIONS

-Arrow functions (or fat arrow function) were introduces in Es6.  They are basically just a more concise way to write function expression - NOT declarations

-This means that arrow functions do not get hoisted

-There are two types of arrow functions
    -consise body - the return happens automatically
    -block body  - the return DOES NOT HAPPEN automatically

*/

//CONCISE BODY

let speak = (name) => console.log(`${name} goes woof`);
speak('luna');//envoke the function - and pass the argument to the name parameter

let nameJoiner = (first, last) => `${first}, ${last}`;
let fullName = nameJoiner("Jes", "Nadolski");
console.log(fullName);
//the return happens automatically - no console log inside the function 


let dog = (name) => console.log(`${name} is a dog`);
dog('Wrigley');

let dog = (name) =>{
    console.log(`${name} is a dog`);
}

dog('Wrigley');

//BLOCK BODY

let speak = () => {
    console.log(`${name} goes woof`)
}
let nameJoiner = (first, last) => {
    return `${first} ${last}`;
    }


let fullName = nameJoiner("jes", "nadolski");
console.log(fullName);

//NED A RETURN for the above to return something

//PRACTICE 1



function areaCalculator = (length,width) {
    let area = length let width;
    return area;
}
let area1 = areaCalculator(5,2);
let area2 = areaCalculator(10,2);

console.log(area1);
console.log(area2);


//PRACTICE TWO

//My code
function ageConvert(dogAge) {
    let humanAge = (dogAge - 2) * 4 + 21;
    con;
}

ageConvert(8);
console.log(ageConvert(8));

///REPL


for(i=0; i<=10; i=i++){
    console.log(i);
}


for(i=2; i>=-25; i=i-3){
    console.log(i);
}

for(i=0; i<=10; i=i++){
    console.log(i);
}