/*LOOPS
*/

/*Loops offer a quick and easy way to do something repeatedly.

There are many different kinds of loops but they all do roughly the same thing:

For statement
do while
while
labeled
break
continue
for in
for of
.forEach
.map
*/

//loop structure:  creation of an indexing variable, a run condition, and a change to the indexing variable

//count to 10 from 0 and log the numbers:

for (let i=0; i<=10; i++){
    console.log(i);
}

//loops can run infinitely - these exist - they are bugs  - they will break your code

/*
for(let i=0; ; i++){
    console.log(i);
}
*/

//counts to -25 by -3. starting from 2, logs the numbers:

for(i=2; i>=-25; i=i-3){
    console.log(i);
}

//display letters in a name individually
let name = "Katherine";

for (let i=0; i< name.length; i++){
    console.log(name[i]);
}
//the run condition is saying if i is less than the length of the name


//for loops can use lots of variables

let start=2;
let stop= Math.floor(Math.random()*30);
let increment=3;

for(let i=start; i<=stop; i = i+ increment){
    console.log(i);
}


