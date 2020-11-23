/* SCOPE & HOISTING

*/

goodbye();
console.log(hello);
var hello = 'hello';

function goodbye(){
    console.log('goodbye');
}

//functions get hoisted
//variables will get hoisted with a var

console.log(name);
let name = "Jes";

//above will result in an error

console.log(name);
var name = "jes";

//a var will get hoisted - so you get undefined


//example

var coffeeType = "dark roast";

function exampleFunction(){
    var coffeeType = "vanilla roast";
    console.log(coffeeType);
}

exampleFunction();
console.log(coffeeType);