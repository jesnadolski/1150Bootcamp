/*
ARRAYS

Arrays are used to store multiple values in a single variable

-There are array methods that allow us to traverse, as well as mutate the data being held by an array

-Arrays are zero indexed - meaning the first item in an array will have an index of 0 and the last item will have an index of the array's length minus one

*/

let arr = ['This is the first element', 'This is the second element', 'This is the third element', 'This is the fourth element'];

console.log(arr[0]);

console.log(arr[arr.length -1]);

//example

//create a variable that creates an array and invoke it with the ()
let test= new Array();
//this is the array class constructor - will create an array object
console.log(test);
//this will create an empty array stored inside of test

//can tell it how many items to create
let test= new Array(3);
console.log(test);
//if it is a singular number - it knows to start with that many empty items
//if you give it multiple values/numbers/strings, etc - it will create it with it

let test = new Array();
test[0] = 'did it work?';
console.log(test);

//FOR EACH Method - executes the supplied function for each element in the array - whatever is inside the ()
//The for each method CANNOT return anything 

let boardGames = ['Monopoly','Clue','Risk','Candy Land','Catan'];

for(let i=0; i<boardGames.length; i++){
    console.log(boardGames[i]);
}

//using the for each method - dot method

let boardGames = ['Monopoly','Clue','Risk','Candy Land','Catan'];

//using a block body
boardGames.forEach(game => {
    console.log(game);
})

//OR A CONSISE BODY

boardGames.forEach(game => console.log(game));

//with a function - has to be block body

boardGames.forEach(function (game){
    console.log(game);
})

//The above shows three different ways to do this - FOR EACH element in the array


//another example

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];

//To access a specific element in an array, use bracket notation along with its index value

console.log(shoppingList[0]);
console.log(shoppingList.length);  //.length gives you the length of the array / number of items
console.log(shoppingList.length - 1);  //gives you the last index

//Array.push
//This adds element(s) to the end of the array

shoppingList.push('jalapenos');
console.log(shoppingList);

//Array unshift - adds an element at the beginning of an array

shoppingList.unshift('salt');
console.log(shoppingList);

//Array pop - removes the last element and returns that element
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];

shoppingList.pop();
console.log(shoppingList);

//can store it in a variable and have it sent back to you
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let removedElement = shoppingList.pop();
console.log(shoppingList);
console.log(removedElement);

//Array.shift() - SHIFT method - removes the first element in an array
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
shoppingList.shift();
console.log(shoppingList);

//OR....

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let removedElement = shoppingList.shift();
console.log(removedElement);

//ARRAY.map() - transforms the elements in the original array by calling the given function once for each element in the array
//the .map method CAN return something - unlike the forEach method that CANNOT

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.map(item => item.toUpperCase()));
//this will run for each and return something - the function makes each item uppercase
let newShoppingList = shoppingList.map(item => item.toUpperCase());
console.log(newShoppingList);  

//ARRAY.filter() - creates a new array with only the elements that pass the test in a given function
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let newShoppingList = shoppingList.filter(item => item.startsWith("l"));
console.log(newShoppingList);

//Array.find() - returns the first element in the array that passes a test given as a function

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let shoppingItem = shoppingList.find(item => item.startsWith("l"));
console.log(shoppingItem);

//Array.includes() - determines whether an array has a specific element
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.includes('celery'));
//this returns a boolean - true/false
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let isIncluded = shoppingList.includes('celery');
console.log(isIncluded);

//ARRAY.indexOf() - search the array for a specific element and returns its first index
//returns -1 when element is not found

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.indexOf("lemons"));
//returns the index of that element
console.log(shoppingList.indexOf("salt"));
//this will be -1 since the element is not found


//Array.findIndex - returns the index of the first element in the array that passes the test in a given function
//returns -1 when the element is not found

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let foundIndex = shoppingList.findIndex(item => item.startsWith('g'));
console.log(foundIndex);

//ARRAY.every() - check if all elements in an array pass a test in a given function
//if there is one element that returns a false value - the function returns false and does not check the rest of the element

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.every(item => item.length >10));
//will show true if they all pass - false if any are false and will not check the rest

//Array.concat() - merge two or more arrays and returns a new array

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
let anotherShoppingList = ['salt','mint','olives'];
let combinedArrays = shoppingList.concat(anotherShoppingList);
console.log(combinedArrays);


//Array.slice - selects a part of the array and returns a new array.  It selects the elements starting at the provided start argument and ends at, but does not include, the provided end argument.

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];

let newArray = shoppingList.slice(3,4);
console.log(newArray);


//Array.splice()  - adds or removes elements in the array and returns the removed elements.
//the first argument takes an integer that specifies at what index to add/remove elements
//the second argument takes in the number of items to be removed
//optional thrid argument takes in the new elements to be added to the array in place of the removed elements

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];

shoppingList.splice(2,1);
console.log(shoppingList);

shoppingList.splice(1,1,'wacky', 'wacky2', 'wacky 3');
console.log(shoppingList);


//Array.sort - sorts the items in an array.  The sort order can either be alphabetic or numeric, and either ascending or descending.  
//By default - sort() orders the values as strings in alphabetical or ascending order.  Can take in a compare function which indicates if you want to sort by ascending or descending.


let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.sort());

let costs = [3,2,13,4];
console.log(costs.sort((a,b) => b-a));   //look at what VS code pops up as you do this - descending order
console.log(costs.sort((a, b) => a-b));  //ascending order


///Array.reverse() - reverses the order of the elements in the array
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.reverse());


//Array.toString() - converts the array into a string

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.toString());


//Array.join()  - converts the elements in the array into a string.  Can accept an optional parameter - the "separator", which indicates how the elements will be separated
//default - separator is a comma
let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(shoppingList.join('! and '));
console.log(shoppingList.join());

//Lastly - an ES6 feature - the spread operator
//The spread operator, indicated by these three dots ... before an array name- expands the contents of the array and takes it out of the array structure

let shoppingList = ['celery','limes','lemons','grenadine','oranges'];
console.log(...shoppingList);

//example

let numArray = [20,40,60];
function sum(numOne, numTwo, numThree){
    return numOne + numTwo + numThree;
}
console.log(sum(numArray));
//this will not work - it will not add them because they are in the array structure

console.log(sum(...numArray));
//using the spread operator - it takes it out of the structure and then you can use it