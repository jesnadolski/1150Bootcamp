
//REPL 1.1

for (let i=0; i<=10; i++){
    console.log(i);
}


//REPL 1.2 - STEP 1

let i=5;

function sequence(number, firstNumber){
    return `${number} comes after ${firstNumber}`;
}
sequence();
console.log(sequence(i,i-1));


//REPL 1.2 - STEP TWO


function sequence(number, firstNumber){
    return `${number} comes after ${firstNumber}`;
}

for(let number=0; number<=10; number++){
    sequence();
    console.log(number,number-1);
}

///try again - submit this one


function sequence(number, firstNumber){
    return `${number} comes after ${firstNumber}`;
}

for(let number=0; number<=10; number++){
    sequence();
    console.log(sequence(number,number-1));
}

//REPL 1.3 - STEP ONE

for (let number=0; number<=10; number++){
    if(number % 2 ==0){
    console.log(`${number} is an even number`);
} 
else{
    console.log(`${number} is an odd number`);
}
}


//REPL 2.1

let myMovies = [
        {
            movie: 'This Is The End',
            characters: [
                {
                name: 'James Franco',
                age: 42,
                items: {characteristics: ['tall','funny'], firstMovie: 'Never Been Kissed'}
             },
                {
                name: 'Jonah Hill',
                age: 37,
                items: {characteristics: ['good actor', 'witty'], firstMovie: 'I Heart Huckabees'}
                }],
            runTime: 107,
            genre: 'Comedy'
    },
    {
        movie: 'Death Becomes Her',
        characters: [
            {
            name: 'Meryl Streep',
            age: 71,
            items: {characteristics: ['talented', 'amazing'], firstMovie: 'Julia'}
         },
            {
            name: 'Goldie Hawn',
            age: 75,
            items: {characteristics: ['hilarious', 'unique'], firstMovie: 'The One and Only'}
            }],
        runTime: 104,
        genre: 'Comedy'
},
{
    movie: 'Steel Magnolias',
    characters: [
        {
        name: 'Dolly Parton',
        age: 74,
        items: {characteristics: ['successful', 'altruistic'], firstMovie: '9 to 5'}
     },
        {
        name: 'Sally Field',
        age: 74,
        items: {characteristics: ['hilarious', 'unique'], firstMovie: 'The Way West'}
        }],
    runTime: 117,
    genre: 'Drama'
}
];

console.log(myMovies[1].movie);

console.log(myMovies[1].characters[2].name);

console.log(myMovies[1].characters[2].age);

console.log(myMovies[1].characters[2].items);


