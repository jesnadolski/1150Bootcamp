// Relational Operators

//Greater Than:  >
//Less Than:  <
//Less Than or Equal To:  <=
//Greater Than or Equal To:  >=


//Logical Operators

//  AND:  && 
//  OR:  ||


//Equality Operators

//Equal:  ==
//NOT Equal:  !=


//Strict Equality

//Equal:  ===
//NOT Equal:  !===


//const str = 'Life, the universe and everything. Answer:';
//console.log(`${str} ${str.length}`);
// expected output: "Life, the universe and everything. Answer: 42"


let age=20;

if(age>=21){
    console.log("Yes can purchase");
} else {
    console.log("Cannot Purchase");
}


//CLASS CHALLENGE




const myName = "Nick";
const friendName = "Jessica";

//test how many characters are in a string

console.log(myName.length);
console.log(friendName.length);

//see who has the longer name

if(myName.length>=friendName.length){
    console.log(myName)}
else console.log(friendName);

//Instructor example1

if(myName.length>=friendName.length){
    sentence = "My name is longer than " + friendName;
    console.log(sentence);}
    else{
        sentence = "Friend name is longer than" + myName;
        console.log(sentence);
}

//Instructor example2

if(myName.length>=friendName.length){
    sentence = "My name is longer than " + friendName;
    console.log(sentence);}
    else{
        sentence = `${friendName}'s name is longer than + ${myName}`;
        console.log(sentence);
}



//Instructor example3

if(myName.length>=friendName.length){
    sentence = "My name is longer than " + friendName;
    console.log(sentence);}
    else{
        const differenceInLetters = myName.length - friendName.length;
        sentence = `${friendName}'s name is longer than + ${myName} by ${differenceInLetters} letters`;
        console.log(sentence);
}



//Instructor example4 - verify in Slack - didn't get in class

if(myName.length>=friendName.length){
    sentence = "My name is longer than " + friendName;
    console.log(sentence);}
    else if {
        myName.length == friendName.length) {
        const differenceInLetters = myName.length - friendName.length;
        sentence = `${friendName}'s name is longer than + ${myName} by ${differenceInLetters} letters`;
        console.log(sentence);
}
