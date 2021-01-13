/* FOR OF LOOPS

For Of Loops - parse through an iterable list of numbers - so thatmakes them great for working with arrays

-Arrays contain what are known as iterable properties.  Each property - or value - in an array - each contains its own index (starting at 0)

.............value......value....value
let arr = ["chicken", "turkey", "duck"]
..............0..........1.........2
.............index......index.....index


*/


//BRONZE

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd']
for(let i=0; i<pies.length; i++){
    console.log(pies[i]);
}


//SILVER

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];
let fruitpies = ['apple', 'blueberry', 'cherry', 'peach'];

for (let i=0; i<pies.length; i++){

}

//GOLD

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];
let fruitpies = ['apple', 'blueberry', 'cherry', 'peach'];

for(let i=0; i<pies.length; i++){
    console.log(pies[i]);
for(let j=0; j<pies.length; j++){
    if (pies[i] ===fruitpies[j]){
        console.log(`${pies[i]} is a fruit pie`);
   }
    
    }
}


//INSTRUCTOR EXAMPLE - BRONZE

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];

for(pie of pies){
    console.log(`${pie} pie`);
}


//INSTRUCTOR EXAMPLE - SILVER

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];


for (pie of pies) {
    if(pie.includes("apple")){
        console.log(`${pie} pie is a fruit pie`);
    } else{
        console.log(`${pie} pie is not a fruit pie`);
    }
}


//INSTRUCTOR EXAMPLE - GOLD - use the OR function

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];

let pies = ['apple','blueberry','peach','chocolate peanut butter','cherry','oreo', 'chicken pot','shepherd'];


for (pie of pies) {
    if(pie.includes("apple") || pie.includes("blueberry") || pie.includes("cherry") || pie.includes("peach")){
        console.log(`${pie} pie is a fruit pie`);
    } else {
        console.log(`${pie} pie is not a fruit pie`);
    }
}






