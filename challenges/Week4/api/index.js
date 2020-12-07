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
    .then((json) => console.log(json));
}

//can use alert, confirm, or prompt - like this:
// function fetchJokes(){
//     alert ("It worked!");
// }
