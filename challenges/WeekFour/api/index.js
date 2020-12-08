//Saturday class

const url = "https://api.chucknorris.io/jokes/random";

let jokeButton = document.getElementById("jokeButton");

//now add event listener
//(event to listen for, action to take)
//in this case - we want the action to be a function called fetchJokes, but we haven't created the function yet

jokeButton.addEventListener("click", fetchJokes);

//now create function of fetchJokes
//fetch is a promise - doesn't happen automatically
//can stage this in .then - you should always see two .then after a fetch- you are fulfilling a few promises in here


function fetchJokes(){
    fetch(url)
    .then((response) => response.json())
    .then((json) => displayJoke(json.value)); //we inser the display joke function here - instead of console.log
}

//can use alert, confirm, or prompt - like this:
// function fetchJokes(){
//     alert ("It worked!");
// }

//now you need to display it - so you need another function

function displayJoke(joke){
    let jokeText = document.getElementById("joke");

    jokeText.innerText = joke;
};

//Before the function can be invoked - we need to look at fetch and determine at what point in the code we get the json/url
//At that point - thats where we need to put the function
