/*  FUNCTIONS

At their broadest level - functions do the following:
1)  they take some input, which the function will handle or process
2)  they process the input give to them
3)  they usually but not always - return some value
4)  they can be envoked or used as many times as we want, cutting down on code repetition
*/

//example 1
//use function then the name of the function - inside () is the input to the function
function newFunc(num){
   return num + 1;
}
console.log(newFunc(7));

//creating the function - creates a tool to use 

newFunc(10);
newFunc(11);
newFunc(-2);

//needs to be console logged to see it - it will run, but not visible to you

console.log(newFunc(10));
console.log(newFunc(11));
console.log(newFunc(-2));

//example 2 - can have multiple items:

function sentence(firstName, lastName){
return `My first name is ${firstName} and my last name is ${lastName}`;
}
console.log(sentence('Jes', 'Nadolski'));  //you are console logging what the sentence function gives you - when you give it inputs
console.log(sentence('Nick', 'Corea'));

let superImportantSentence = sentence('Nicy', 'Smith');
console.log(superImportantSentence);

//example 3: build a function that takes a complex type - an array in this case - and console logs each item in the input array

let arr= [1, true, {key: 'string'}, [0, false, null], 'heya'];
let arr2= [5,6,7,8,9,10];

function iteratorFunc(inputArr){
   for (let element of inputArr){
       console.log(element);
   }
}
iteratorFunc(arr);
iteratorFunc(arr2);