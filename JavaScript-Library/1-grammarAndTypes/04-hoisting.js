/*

HOISTING
*/

//example 1:

console.log(scissors);
var scissors='blue';

//example a breakdown:
var scissors;
console.log(scissors);
scissors='blue';

//example 2:

function hoistTest(){
    console.log(testVar);
    var testVar = 10;
    console.log(testVar);
}
hoistTest();

//example 2 breakdown - the variable gets hoisted to the top and the variable gets defined next

//always declare and initialize variables before you use them