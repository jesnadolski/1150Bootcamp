/*

ARROW FUNCTIONS

*/

//normal function declaration - for NAMED functions
function coffee(){
    return 'coffee is good';
}

//normal function expression - an un-named function - to call it you use the name of the variable - for UN-NAMED functions
let tea = function(){
   return 'tea is healthy';
}

console.log(coffee());
console.log(tea());

//arrow functions are always anonymous (un-named)
//arrow function expression:

let hotChocolate = () => {
    return 'hot chocolate is king';
}

//uses an arrow between the () and {}

console.log(hotChocolate());

//another example

let animals = (kittens, puppies) => {
    return `I have ${kittens} kittens and ${puppies} puppies`};
console.log(animals(3,2));

//ARROW FUNCTIONS DO NOT GET HOISTED - MEANING THE VARIABLE MUST BE DEFINED FIRST

//Consise vs a block body

//a concise body - you do not need the {} or the return 
let apples = x => `There are ${x} apples`;
console.log(apples(10));


//a block body - return must be explicitly written in a block body arrow function
let bananas = x => {
    return `There are ${x} bananas`;
}
    console.log(bananas(5));


    //ex - the arrow MUST be directly after () - in one line

    let func = () => 'hi';
    console.log(func());