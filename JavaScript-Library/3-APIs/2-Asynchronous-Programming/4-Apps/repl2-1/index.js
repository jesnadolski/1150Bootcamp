// let url = 'https://rickandmortyapi.com/api/character/';

// let characterNames = document.querySelector('p');

// fetch(url)
// .then(function(response){
//   return response.json();
// })
// .then(function(json){
//     console.log(json);
//   let characters = json.results;
//   console.log(json.results[0].image);
//   console.log(json.results[1].image);

// for(i=0; i<=1; i++){
//     let list = document.createElement('p')
//     list.innerHTML = '<img src="' + json.results[i].image + '"/>';
//     document.body.appendChild(list);
// }
// });

//REPL 2.2

// let url = 'https://swapi.dev/api/people/<number here>/';

// let results;
// promise1 = new Promise(function(resolve, reject){
//     if (results = true){
//         resolve(console.log(results));}
//         else {
//             reject(console.log("test reject"));
//         }
//     });
 


const url = 'https://swapi.dev/api/people/<number here>/';

fetch(url)
.then(response => response.json())
.then(json => {
    console.log(json)
});




