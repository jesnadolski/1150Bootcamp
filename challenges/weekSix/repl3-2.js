// var input = prompt("Enter a number between 1 and 10");

// if (input != null) {
//   document.getElementById("msg").innerHTML =
//   "Hello " + person + "! How are you today?";
// }


// let random = Math.floor(Math.random() * 10 + 1);
// console.log(random);



// function userInput(event){
//     event.preventDefault();

//     let input = document.getElementById("userInput");
    
//     let user = input.value;

//     console.log(input.value);

//     console.log(`Your number is ${input.value}`);

//     let display = document.createElement("p");
//     display.innerText = `Your number is ${input.value}`;
//     document.body.appendChild(display);
    
// };

// function correctNumber(){
// let displayRandom = document.createElement("p");
// displayRandom.innerText = `The correct number is ${random}`;
// document.body.appendChild(displayRandom);
// };


// function checkGuess(){
//     // event.preventDefault();

//     let input = document.getElementById("userInput");
    
//     let user = input.value;

//     let random = Math.floor(Math.random() * 10 + 1);
//     console.log(random);

//     if(user == random){
//         console.log(`You guessed correctly!  The number was ${random}`);
//         alert(`You guessed correctly!  The number was ${random}`);
//     } else {
//         console.log(`Sorry.  Please guess again!`);
//         alert(`Too bad so sad.  The correct number was ${random}.  Guess again!`);
//     }
// };



function checkGuess(){
    // event.preventDefault();

    // let input = document.getElementById("userInput");
    
    // let user = input.value;

    // let random = Math.floor(Math.random() * 10 + 1);
    // console.log(random);

for(attempts=0; attempts < 3; attempts++){
    let input = document.getElementById("userInput");
    
    let user = input.value;

    let random = Math.floor(Math.random() * 10 + 1);
    console.log(random);

    switch(attempts){
        
        case 0:
           
            if(user ==! random){
                if(user < random){
                        alert("Maybe try a higher number")
                    } else {
                        if(user > random)
                            alert("Maybe try a lower number")
                        } 
                    }
                if( user == random)
                    alert("Congrats!  You Won!");
        case 1:
           
            if(user ==! random){
                if(user < random){
                        alert("Maybe try a higher number")
                    } else {
                        if(user > random)
                            alert("Maybe try a lower number")
                        } 
                    }
                if( user == random)
                    alert("Congrats!  You Won!");
        case 2:
            
            if(user ==! random){
                if(user < random){
                        alert("Maybe try a higher number")
                    } else {
                        if(user > random)
                            alert("Maybe try a lower number")
                        } 
                    }
                if( user == random)
                    alert("Congrats!  You Won!");
                break;
                }};
            };

    // if(user == random){
    //     console.log(`You guessed correctly!  The number was ${random}`);
    //     alert(`You guessed correctly!  The number was ${random}`);
    // } else {
    //     console.log(`Sorry.  Please guess again!`);
    //     alert(`Too bad so sad.  The correct number was ${random}.  Guess again!`);
    // }
