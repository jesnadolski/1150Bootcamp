/*
ARRAYS
*/

//an array has [] square brackets
//can hold multiple data types
//arrays can list data types in an ordered, numbered way

let students = ['Tony', 'Marshall','Ray', 23, true, ['Ryan','Iesha']];
console.log(typeof students);
console.log(students instanceof Array);

//type of does not tell me the variable in the array
//instance of tells me that the array is an array

console.log(students[2]);
console.log(students[1]);
console.log(students[5]);

let name = students[5][1];
console.log(name);

console.log(`Hellog ${name}, you look nice today`);

//recall for-of loop

let food = ['pecan pie', 'shrimp', 'quesedilla', 'cheese cake', 'hotdog'];
for (f of food){
    console.log(f);
    console.log(f + 'is amazing!');
}


//array methods
//methods are built in functions in JS - that works for that data type

//push adds items to an array that already exists
food.push('Pizza');
console.log(food);

//splice lets you remove and replace - needs three arguments
// use the position number 0,1,2...
// then how many things to remove - 1,2,3...
//what you are replacing it with

food.splice(1,1,'bananas');
console.log(food);

food.splice(2,0,'sweet potato pie');
console.log(food);


//pop removes the last element of an array
food.pop();
console.log(food);

//splice takes a beginning and an end number - the first is the item to slice, and the second number is the stop position, which is not to be included
food = food.slice(2,4);
console.log(food);

//forEach - it allows us to iterate with loops specifically and we can directly grab both the elements and their index numbers

let food = ['pecan pie', 'shrimp', 'quesedilla', 'cheese cake', 'hotdog'];

//a callback function is something that runs once something has been processed
//f represents every element one by one in the array
food.forEach((f) => console.log(f));

food.forEach((food, index) => {
    console.log(food);
    console.log(index);
})

food.forEach((food, index) => {
    console.log(`The ${food} food in our array is at position ${index}`);
})

let movies = ['300', 'snow white', 'the phantom menace', 'the watchmen', 'the sound of music'];

movies.push('The Force Awakens');
console.log(movies);

movies.splice(3,1,'The League of Extraordinary Gentlement');

movies.forEach(movie => console.log(movie));

console.log(movies.length);
//shows the length of an array
//the dot notation

//let's do the following with an array
//we will check if we are working with an array
//then flip the values within the array - what was in index 4 will not be in 0,3,2,1,etc
//using a method only - let's print the values of the newly arranged array

let arr = new Array(1,2,3,4,5);
//a different way to initialize a new array

if(arr instanceof Array){
    let revArr = arr.reverse();
    revArr.forEach(numbers => console.log(numbers));
}