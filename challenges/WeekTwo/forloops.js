/* Convert the conditional into a ternary

Loops save us time by writing code
We traditionally use i as the expression - meaning index
(i++ is the way to say i+1)

for(initialExpression; CSSConditionRule; increment){
}

*/

for(i=0; i < 10; i=i++){
    console.log('Hello',i);
}

// BRONZE

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

for(let i=0; i< alphabet.length; i++){
    console.log(alphabet[i], i);
}


//SILVER

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for(let i=0; i< alphabet.length; i++){
    if ([i] % 2==0){
        console.log(alphabet[i]);}  //if you want to console just the letter b - you would use [2] instead of [i]
        else {
            console.log(`The index ${i} is an odd number`);}
        }


//GOLD
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arr = [];

for(let i=0; i< alphabet.length; i++){
    if ([i] % 2==0){
        arr.push(alphabet[i]);}                        //using push will add it to the very end of the array
        else {
            console.log(`The index ${i} is an odd number`);}
        }
        console.log(arr);