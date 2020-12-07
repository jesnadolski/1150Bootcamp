const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceships = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e){
    e.preventDefault();

    fetch(baseURL)
    .then(result => result.json())
    .then(json => {
        console.log(json);
        displayRockets(json);
    })
}

function displayRockets(rockets){
    displayRockets.forEach(r => {
        let rocket = document.createElement('li');
        rocket.innerText = r.name;
        spaceships.appendChild(rocket);
    })
}
//fetch returns a promise
//the json method allows you to bring back information in JS format - rather than the default string of information - returns a promise also
// a .then can be built off of a promise